import "./globals.css";

export const metadata = {
  title: "Generator de albume foto",
  description: "Creează un album foto simplu, direct în browser.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ro">
      <body>{children}</body>
    </html>
  );
}
