"use client";

import { useState } from "react";
import Header from "@/components/Header";
import UploadZone from "@/components/UploadZone";
import Controls from "@/components/Controls";
import PhotoGrid from "@/components/PhotoGrid";
import { readImages } from "@/utils/fileUtils";
import { shuffle, movePhoto, LAYOUTS } from "@/utils/albumUtils";

export default function Home() {
  const [title, setTitle] = useState("Albumul meu");
  const [photos, setPhotos] = useState([]);
  const [layout, setLayout] = useState(LAYOUTS[0].id);

  function handleFiles(fileList) {
    const added = readImages(fileList);
    setPhotos((prev) => [...prev, ...added]);
  }

  function handleRemove(id) {
    setPhotos((prev) => prev.filter((p) => p.id !== id));
  }

  function handleClear() {
    photos.forEach((p) => URL.revokeObjectURL(p.url));
    setPhotos([]);
  }

  return (
    <main className="page">
      <Header title={title} onTitleChange={setTitle} count={photos.length} />

      {photos.length === 0 ? (
        <UploadZone onFiles={handleFiles} large />
      ) : (
        <>
          <Controls
            layout={layout}
            onLayoutChange={setLayout}
            onShuffle={() => setPhotos((p) => shuffle(p))}
            onClear={handleClear}
            onPrint={() => window.print()}
            onFiles={handleFiles}
          />
          <PhotoGrid
            photos={photos}
            layout={layout}
            onRemove={handleRemove}
            onMove={(id, dir) => setPhotos((p) => movePhoto(p, id, dir))}
          />
        </>
      )}
    </main>
  );
}
