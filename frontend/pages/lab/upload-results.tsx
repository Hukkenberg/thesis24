import React, { useState } from 'react';

const UploadResults = () => {
  const [file, setFile] = useState(null);

  const handleFileUpload = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (file) {
      const formData = new FormData();
      formData.append('file', file);

      fetch('/api/upload-results', {
        method: 'POST',
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => alert('Results uploaded successfully!'))
        .catch((error) => console.error('Error uploading results:', error));
    } else {
      alert('Please select a file to upload!');
    }
  };

  return (
    <div>
      <h1>Upload Test Results</h1>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileUpload} />
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
          Upload
        </button>
      </form>
    </div>
  );
};

export default UploadResults;