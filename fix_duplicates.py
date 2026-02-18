import re

filepath = 'src/app/investigations/[slug]/page.tsx'

with open(filepath, 'r', encoding='utf-8') as f:
    lines = f.readlines()

print(f'Total lines: {len(lines)}')

seen = {}
blocks_to_remove = []

i = 0
while i < len(lines):
    match = re.match(r"^  '([a-z0-9-]+)': \{", lines[i])
    if match:
        key = match.group(1)
        if key in seen:
            # Found duplicate - find end of block
            start = i
            depth = 1
            j = i + 1
            while j < len(lines) and depth > 0:
                depth += lines[j].count('{') - lines[j].count('}')
                j += 1
            blocks_to_remove.append((start, j, key))
            print(f'Duplicate {key}: lines {start+1}-{j}')
        else:
            seen[key] = i
    i += 1

print(f'Blocks to remove: {len(blocks_to_remove)}')

# Remove blocks from end to start to preserve line numbers
for start, end, key in sorted(blocks_to_remove, reverse=True):
    print(f'Removing {key} lines {start+1}-{end}')
    del lines[start:end]

print(f'New total lines: {len(lines)}')

with open(filepath, 'w', encoding='utf-8') as f:
    f.writelines(lines)

print('Done!')
