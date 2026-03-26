'use client';

import { useState, useCallback } from 'react';
import { Download, Loader2 } from 'lucide-react';

interface PDFSection {
  heading?: string;
  paragraphs?: string[];
  items?: { label: string; value: string }[];
  list?: string[];
}

interface DownloadPDFButtonProps {
  title: string;
  subtitle?: string;
  meta?: { label: string; value: string }[];
  sections: PDFSection[];
  filename?: string;
}

export default function DownloadPDFButton({ title, subtitle, meta, sections, filename }: DownloadPDFButtonProps) {
  const [loading, setLoading] = useState(false);

  const generatePDF = useCallback(async () => {
    setLoading(true);
    try {
      const { jsPDF } = await import('jspdf');
      const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
      const pageWidth = doc.internal.pageSize.getWidth();
      const pageHeight = doc.internal.pageSize.getHeight();
      const margin = 20;
      const contentWidth = pageWidth - margin * 2;
      let y = margin;

      const addWatermark = () => {
        doc.saveGraphicsState();
        doc.setGState(doc.GState({ opacity: 0.06 }));
        doc.setFontSize(60);
        doc.setTextColor(214, 69, 69);
        const text = 'ARKHIVE';
        const textWidth = doc.getTextWidth(text);
        doc.text(text, (pageWidth - textWidth) / 2, pageHeight / 2, { angle: 45 });
        doc.restoreGraphicsState();
      };

      const checkPageBreak = (needed: number) => {
        if (y + needed > pageHeight - margin) {
          doc.addPage();
          addWatermark();
          y = margin;
        }
      };

      const addWrappedText = (text: string, fontSize: number, color: [number, number, number], bold?: boolean) => {
        doc.setFontSize(fontSize);
        doc.setTextColor(...color);
        doc.setFont('helvetica', bold ? 'bold' : 'normal');
        const lines = doc.splitTextToSize(text, contentWidth);
        const lineHeight = fontSize * 0.45;
        for (const line of lines) {
          checkPageBreak(lineHeight + 2);
          doc.text(line, margin, y);
          y += lineHeight;
        }
      };

      // First page watermark
      addWatermark();

      // Header bar
      doc.setFillColor(10, 10, 10);
      doc.rect(0, 0, pageWidth, 12, 'F');
      doc.setFontSize(8);
      doc.setTextColor(214, 69, 69);
      doc.setFont('helvetica', 'bold');
      doc.text('ARKHIVE — INVESTIGATIVE ARCHIVE', margin, 8);
      doc.setTextColor(150, 150, 150);
      doc.setFont('helvetica', 'normal');
      const dateStr = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
      doc.text(dateStr, pageWidth - margin - doc.getTextWidth(dateStr), 8);
      y = 20;

      // Title
      addWrappedText(title, 20, [255, 255, 255], true);
      y += 2;

      // Subtitle
      if (subtitle) {
        addWrappedText(subtitle, 11, [180, 180, 180]);
        y += 2;
      }

      // Meta info
      if (meta && meta.length > 0) {
        y += 2;
        doc.setDrawColor(50, 50, 50);
        doc.line(margin, y, pageWidth - margin, y);
        y += 4;
        for (const item of meta) {
          checkPageBreak(6);
          doc.setFontSize(8);
          doc.setFont('helvetica', 'bold');
          doc.setTextColor(150, 150, 150);
          doc.text(`${item.label}:`, margin, y);
          doc.setFont('helvetica', 'normal');
          doc.setTextColor(220, 220, 220);
          doc.text(item.value, margin + 35, y);
          y += 5;
        }
        y += 2;
        doc.line(margin, y, pageWidth - margin, y);
        y += 6;
      }

      // Sections
      for (const section of sections) {
        if (section.heading) {
          checkPageBreak(12);
          y += 3;
          doc.setFillColor(214, 69, 69);
          doc.rect(margin, y - 3, 2, 8, 'F');
          addWrappedText(section.heading, 13, [255, 255, 255], true);
          y += 3;
        }

        if (section.paragraphs) {
          for (const para of section.paragraphs) {
            checkPageBreak(8);
            addWrappedText(para, 9, [200, 200, 200]);
            y += 3;
          }
        }

        if (section.items) {
          for (const item of section.items) {
            checkPageBreak(8);
            doc.setFontSize(9);
            doc.setFont('helvetica', 'bold');
            doc.setTextColor(180, 180, 180);
            doc.text(`${item.label}:`, margin + 2, y);
            doc.setFont('helvetica', 'normal');
            doc.setTextColor(200, 200, 200);
            const valueLines = doc.splitTextToSize(item.value, contentWidth - 40);
            doc.text(valueLines, margin + 38, y);
            y += valueLines.length * 4 + 2;
          }
        }

        if (section.list) {
          for (const item of section.list) {
            checkPageBreak(6);
            doc.setFontSize(8);
            doc.setTextColor(180, 180, 180);
            doc.text('•', margin + 2, y);
            const listLines = doc.splitTextToSize(item, contentWidth - 8);
            doc.text(listLines, margin + 6, y);
            y += listLines.length * 3.5 + 2;
          }
        }
      }

      // Footer on all pages
      const pageCount = doc.getNumberOfPages();
      for (let i = 1; i <= pageCount; i++) {
        doc.setPage(i);
        doc.setDrawColor(50, 50, 50);
        doc.line(margin, pageHeight - 12, pageWidth - margin, pageHeight - 12);
        doc.setFontSize(7);
        doc.setTextColor(100, 100, 100);
        doc.text(`ARKHIVE — Accountability Through Transparency`, margin, pageHeight - 8);
        doc.text(`Page ${i} of ${pageCount}`, pageWidth - margin - 20, pageHeight - 8);
      }

      const safeName = (filename || title).replace(/[^a-zA-Z0-9-_ ]/g, '').replace(/\s+/g, '-').toLowerCase();
      doc.save(`${safeName}.pdf`);
    } finally {
      setLoading(false);
    }
  }, [title, subtitle, meta, sections, filename]);

  return (
    <button
      onClick={generatePDF}
      disabled={loading}
      className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-wider bg-zinc-900 border border-zinc-700 text-zinc-400 hover:text-white hover:border-blood-600 transition-all disabled:opacity-50"
    >
      {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Download className="w-4 h-4" />}
      {loading ? 'Generating...' : 'Download PDF'}
    </button>
  );
}
