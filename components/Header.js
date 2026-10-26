export default function Header({ title, onTitleChange, count }) {
  return (
    <header className="header">
      <input
        className="title"
        value={title}
        onChange={(e) => onTitleChange(e.target.value)}
        aria-label="Titlul albumului"
        maxLength={60}
      />
      <p className="subtitle">
        {count === 0
          ? "Adaugă fotografii pentru a crea albumul."
          : `${count} ${count === 1 ? "fotografie" : "fotografii"}`}
      </p>
    </header>
  );
}
