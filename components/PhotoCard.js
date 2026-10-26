export default function PhotoCard({ photo, onRemove, onMove }) {
  return (
    <figure className="card">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={photo.url} alt={photo.name} loading="lazy" />
      <div className="card-tools no-print">
        <button onClick={() => onMove(photo.id, -1)} aria-label="Mută înainte">
          ‹
        </button>
        <button onClick={() => onMove(photo.id, 1)} aria-label="Mută înapoi">
          ›
        </button>
        <button
          className="tool-remove"
          onClick={() => onRemove(photo.id)}
          aria-label="Șterge fotografia"
        >
          ×
        </button>
      </div>
    </figure>
  );
}
