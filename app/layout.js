import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
});
export const inter = Inter({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
  title: "Office Arc",
  description: "Elegant office furniture for modern workspaces",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className} data-theme="light">
      <body className={`antialiased`}>
        <nav>
          <Navbar></Navbar>
        </nav>
        {children}
        <footer>
          <Footer></Footer>
        </footer>
      </body>
    </html>
  );
}
