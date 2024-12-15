
export default function PDFReport() {
  const handleDownloadPDF = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/reports/pdf`);
    const blob = await res.blob();

    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "report.pdf";
    a.click();
  };

  return (
    <div>
      <h1>Download PDF Report</h1>
      <button onClick={handleDownloadPDF}>Download PDF</button>
    </div>
  );
}
