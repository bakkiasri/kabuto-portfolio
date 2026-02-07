import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "My Portfolio",
  description: "Personal portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="px-10 py-8">{children}</main>
      </body>
    </html>
  );
}
