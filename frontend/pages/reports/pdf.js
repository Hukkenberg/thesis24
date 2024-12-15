import axios from 'axios';

export default function PDFReport() {
  const handleDownloadPDF = async () => {
    const token = localStorage.getItem('token');
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}$1`, {
        headers: { Authorization: `Bearer ${token}` },
        responseType: 'blob', // Important for binary data
      });

      const url = window.URL.createObjectURL(new Blob([res.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'report.pdf'); // Specify the filename
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);
    } catch (err) {
      console.error(err);
      alert('Failed to download PDF');
    }
  };

  return (
    <div>
      <h1>Download PDF Report</h1>
      <button onClick={handleDownloadPDF}>Download PDF</button>
    </div>
  );
}
