import React from "react";
import { jsPDF } from "jspdf";

const DownloadPDF = ({ text }) => {
  const handleDownload = () => {
    const doc = new jsPDF();

    // Add text to the PDF
    doc.text(text, 10, 10); // (text, x, y)

    // Save the PDF with a file name
    doc.save("text.pdf");
  };

  return (
    <div>
      <button onClick={handleDownload}>Download PDF</button>
    </div>
  );
};

export default DownloadPDF;

