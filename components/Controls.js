"use client";

import { useRef } from "react";
import { LAYOUTS } from "@/utils/albumUtils";

export default function Controls({
  layout,
  onLayoutChange,
  onShuffle,
  onClear,
  onPrint,
  onFiles,
}) {
  const inputRef = useRef(null);

  return (
    <div className="controls no-print">
      <div className="segmented" role="tablist" aria-label="Aspect album">
        {LAYOUTS.map((l) => (
          <button
            key={l.id}
            role="tab"
            aria-selected={layout === l.id}
            className={layout === l.id ? "seg seg-on" : "seg"}
            onClick={() => onLayoutChange(l.id)}
          >
            {l.label}
          </button>
        ))}
      </div>

      <div className="actions">
        <button className="btn btn-ghost" onClick={() => inputRef.current.click()}>
          Adaugă
        </button>
        <button className="btn btn-ghost" onClick={onShuffle}>
          Amestecă
        </button>
        <button className="btn btn-ghost" onClick={onClear}>
          Șterge tot
        </button>
        <button className="btn btn-red" onClick={onPrint}>
          Salvează PDF
        </button>
      </div>

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
