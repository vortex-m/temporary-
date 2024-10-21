import React, { useState } from "react";
import "./App.css";
import { mergeSort } from "../public/merge_sort";

function App() {
  const [files, setFiles] = useState([]); 
  const [sortedFiles, setSortedFiles] = useState([]); 

  const handleFileInput = (e) => {
    const uploadedFiles = Array.from(e.target.files); 
    setFiles(uploadedFiles); 
    setSortedFiles([]);
  };

  const handleSort = () => {
    if (files.length === 0) {
      alert("Please upload files before sorting.");
      return;
    }
    const sorted = mergeSort(files); 
    setSortedFiles(sorted); 
  };

  return (
    <div className="App">
      <h1>File Sorting App</h1>

      <div className="upload-container">
        <label htmlFor="file-upload" className="file-upload-label">
          Upload your files:
        </label>
        <input
          id="file-upload"
          type="file"
          onChange={handleFileInput}
          multiple 
          className="file-upload-input"
        />
      </div>

      <div className="button-container">
        <button onClick={handleSort} className="sort-button">
          Sort Files
        </button>
      </div>

      <div className="file-list-section">
        <h2>Uploaded Files :</h2>
        <ul>
          {files.map((file, index) => (
            <li key={index}>{file.name}</li> 
          ))}
        </ul>

        <h2>Sorted Files :</h2>
        <ul>
          {sortedFiles.map((file, index) => (
            <li key={index}>{file.name}</li> 
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
