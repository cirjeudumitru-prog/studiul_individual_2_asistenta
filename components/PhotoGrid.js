import PhotoCard from "./PhotoCard";

export default function PhotoGrid({ photos, layout, onRemove, onMove }) {
  return (
    <section className={`album album-${layout}`}>
      {photos.map((photo) => (
        <PhotoCard key={photo.id} photo={photo} onRemove={onRemove} onMove={onMove} />
      ))}
    </section>
  );
}
