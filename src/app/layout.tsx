import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Inter } from "next/font/google";
import { FaWhatsapp } from "react-icons/fa";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: "Infinite Building Technologies",
  description: "Design, Development & Project Management",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className={`min-h-screen flex flex-col ${inter.variable}`}>
      <body className="min-h-screen flex flex-col" suppressHydrationWarning={true}>
        <Navbar />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />

        <a
          href="https://wa.me/+919740323934" 
          target="_blank"
          rel="noopener noreferrer"
          className="group fixed bottom-6 right-6 flex items-center justify-center p-4 rounded-full 
             bg-gradient-to-br from-green-400 to-green-600 text-white 
             shadow-lg shadow-green-500/50 
             hover:scale-110 hover:shadow-green-600/70 
               duration-300"
        >
          <FaWhatsapp size={30} />

          {/* Tooltip */}
          <span className="absolute bottom-16 right-0 bg-black text-white text-sm px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Chat with us
          </span>
        </a>

      </body>
    </html>
  );
}