export const LAYOUTS = [
  { id: "grid", label: "Grilă" },
  { id: "mosaic", label: "Mozaic" },
  { id: "story", label: "Poveste" },
];

// Amestecă fotografiile (Fisher–Yates), fără să modifice lista originală.
export function shuffle(list) {
  const copy = [...list];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

// Mută o fotografie cu o poziție la stânga (-1) sau la dreapta (+1).
export function movePhoto(list, id, direction) {
  const from = list.findIndex((p) => p.id === id);
  const to = from + direction;
  if (from < 0 || to < 0 || to >= list.length) return list;
  const copy = [...list];
  [copy[from], copy[to]] = [copy[to], copy[from]];
  return copy;
}
