"use client";

import { useRef, useState } from "react";

export default function UploadZone({ onFiles, large = false }) {
  const inputRef = useRef(null);
  const [over, setOver] = useState(false);

  function handleDrop(e) {
    e.preventDefault();
    setOver(false);
    onFiles(e.dataTransfer.files);
  }

  return (
    <div
      className={`upload ${large ? "upload-large" : ""} ${over ? "upload-over" : ""}`}
      onDragOver={(e) => {
        e.preventDefault();
        setOver(true);
      }}
      onDragLeave={() => setOver(false)}
      onDrop={handleDrop}
    >
      <span className="upload-dot" aria-hidden="true" />
      <p className="upload-text">Trage fotografiile aici</p>
      <button className="btn btn-red" onClick={() => inputRef.current.click()}>
        Alege fotografii
      </button>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        multiple
        hidden
        onChange={(e) => {
          onFiles(e.target.files);
          e.target.value = "";
        }}
      />
    </div>
  );
}
