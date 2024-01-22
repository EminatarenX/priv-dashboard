import { Inter, Josefin_Sans } from "next/font/google";
import "./globals.css";

const josefinSans = Josefin_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Priv",
  description: "A privacy focused search engine",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={josefinSans.className}>{children}</body>
    </html>
  );
}
