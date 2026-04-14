"""
Replace all " -- " (space-hyphen-hyphen-space) occurrences in data files
with natural language alternatives based on context.

Rules:
- " -- " between clauses -> ", " or ". " or "; " depending on context
- " -- " as parenthetical/elaboration -> ", which " or ", meaning " or " (" 
- " -- " introducing a list or detail -> ": " or ", specifically "
- Preserve the meaning and readability of every sentence
"""
import re
import os

DATA_DIR = r"src\data"

def natural_replace(line: str) -> str:
    """Replace all ' -- ' in a line with natural alternatives."""
    # Don't touch lines that are just code (imports, exports, types)
    stripped = line.strip()
    if stripped.startswith('import ') or stripped.startswith('export ') or stripped.startswith('//'):
        return line
    if stripped.startswith('const ') or stripped.startswith('type ') or stripped.startswith('interface '):
        return line
    
    # Only replace within string literals (between quotes)
    # Find all " -- " within quoted strings and replace them
    result = []
    i = 0
    in_string = False
    string_char = None
    
    while i < len(line):
        c = line[i]
        
        # Track string boundaries
        if not in_string:
            if c in ("'", '"', '`'):
                in_string = True
                string_char = c
                result.append(c)
                i += 1
                continue
            result.append(c)
            i += 1
            continue
        
        # Inside a string
        # Check for escape
        if c == '\\' and i + 1 < len(line):
            result.append(c)
            result.append(line[i+1])
            i += 2
            continue
        
        # Check for end of string
        if c == string_char:
            in_string = False
            string_char = None
            result.append(c)
            i += 1
            continue
        
        # Check for " -- " pattern
        if (line[i:i+4] == ' -- ' and in_string):
            # Get context: text before and after
            before_text = ''.join(result).split(string_char)[-1] if result else ''
            after_text = line[i+4:i+60] if i+4 < len(line) else ''
            
            replacement = get_replacement(before_text, after_text, line)
            result.append(replacement)
            i += 4
            continue
        
        result.append(c)
        i += 1
    
    return ''.join(result)


def get_replacement(before: str, after: str, full_line: str) -> str:
    """Determine the best natural replacement for ' -- ' based on context."""
    before_lower = before.lower().strip()
    after_lower = after.lower().strip()
    
    # Pattern: parenthetical name/title after a person's name
    # e.g., "John Smith -- former CEO" -> "John Smith, former CEO,"
    if re.search(r'[A-Z][a-z]+\s*$', before) and re.match(r'(former|current|then|later|now|also|a |the |an |who )', after_lower):
        return ', '
    
    # Pattern: statute code followed by description
    # e.g., "18 U.S.C. § 1343 -- Wire Fraud" -> "18 U.S.C. § 1343, covering Wire Fraud"
    if re.search(r'[§&]\s*\d+\s*$', before) or re.search(r'\d+[a-z]?\)\s*$', before):
        return ', '
    
    # Pattern: after a date/year
    if re.search(r'\d{4}\s*$', before) or re.search(r'(January|February|March|April|May|June|July|August|September|October|November|December)\s+\d+,?\s+\d{4}\s*$', before):
        return ', '
    
    # Pattern: "X -- including Y" already natural with comma
    if after_lower.startswith('including ') or after_lower.startswith('especially ') or after_lower.startswith('particularly '):
        return ', '
    
    # Pattern: "X -- not Y" or "X -- never Y"
    if after_lower.startswith('not ') or after_lower.startswith('never ') or after_lower.startswith('no '):
        return ', '
    
    # Pattern: "X -- the Y" (elaboration/appositive)
    if after_lower.startswith('the ') or after_lower.startswith('a ') or after_lower.startswith('an '):
        return ', '
    
    # Pattern: dollar amounts, numbers
    if re.match(r'\$[\d,.]', after) or re.match(r'\d', after):
        return ', '
    
    # Pattern: "X -- which Y" or "X -- who Y" (already relative clause)
    if after_lower.startswith('which ') or after_lower.startswith('who ') or after_lower.startswith('where ') or after_lower.startswith('when '):
        return ', '
    
    # Default: use comma as the most natural connector
    return ', '


def process_file(filepath: str) -> int:
    """Process a single file. Returns count of replacements."""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    if ' -- ' not in content:
        return 0
    
    lines = content.split('\n')
    new_lines = []
    count = 0
    
    for line in lines:
        old_count = line.count(' -- ')
        new_line = natural_replace(line)
        new_count = new_line.count(' -- ')
        count += (old_count - new_count)
        new_lines.append(new_line)
    
    new_content = '\n'.join(new_lines)
    
    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
    
    return count


def main():
    total = 0
    files_changed = 0
    
    for root, dirs, files in os.walk(DATA_DIR):
        for fname in files:
            if fname.endswith('.ts') or fname.endswith('.tsx'):
                filepath = os.path.join(root, fname)
                count = process_file(filepath)
                if count > 0:
                    print(f"  {filepath}: {count} replacements")
                    total += count
                    files_changed += 1
    
    print(f"\nTotal: {total} replacements across {files_changed} files")


if __name__ == '__main__':
    main()
