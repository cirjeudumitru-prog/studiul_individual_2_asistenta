// Transformă fișierele alese de utilizator în obiecte pentru album.
export function readImages(fileList) {
  return Array.from(fileList)
    .filter((file) => file.type.startsWith("image/"))
    .map((file) => ({
      id: `${file.name}-${file.size}-${Math.random().toString(36).slice(2, 8)}`,
      name: file.name,
      url: URL.createObjectURL(file),
    }));
}
