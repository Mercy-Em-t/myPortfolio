import "./globals.css";

export const metadata = {
  title: "Tryphen Emurugat | Systems & Macro Architect Engineer",
  description: "Portfolio of Tryphen Emurugat, Systems Engineer, Software Engineer, and Macro Architect Engineer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;800&display=swap" rel="stylesheet" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
