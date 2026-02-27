import React, { useState } from "react";

function UploadDocs() {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (!file) {
      alert("Please select a file first!");
      return;
    }

    alert(`File uploaded: ${file.name}`);
    // Add API call here if needed
  };

  return (
    <>
      <style>{`
        .upload-container {
          width: 350px;
          margin: 80px auto;
          padding: 30px;
          text-align: center;
          border-radius: 8px;
          box-shadow: 0 0 10px rgba(0,0,0,0.1);
          background-color: #ffffff;
        }

        .upload-container h2 {
          margin-bottom: 20px;
        }

        .file-input {
          margin-bottom: 15px;
        }

        .file-name {
          font-size: 14px;
          color: green;
          margin-bottom: 15px;
        }

        .upload-btn {
          padding: 8px 20px;
          border: none;
          background-color: #282c34;
          color: white;
          cursor: pointer;
          border-radius: 5px;
        }

        .upload-btn:hover {
          background-color: #444;
        }
      `}</style>

      <div className="upload-container">
        <h2>Document Upload</h2>

        <input
          type="file"
          onChange={handleFileChange}
          className="file-input"
        />

        {file && <p className="file-name">Selected: {file.name}</p>}

        <button onClick={handleUpload} className="upload-btn">
          Upload
        </button>
      </div>
    </>
  );
}

export default UploadDocs;