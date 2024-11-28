import PortfolioIcon from "./assets/icons/portfolio.png";
import type { Metadata } from "next";
import "./styles/globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href={PortfolioIcon.src} />
      </head>

      <body className={`antialiased`}>
        {children}
      </body>
    </html>
  );
}
