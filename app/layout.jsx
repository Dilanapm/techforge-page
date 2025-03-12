import { Urbanist } from "next/font/google";
import "regenerator-runtime/runtime"; // Añade esta línea
import "./globals.css";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Navbar from "@/components/navbar";
import Header from "@/components/header";
import ChatbotWrapper from "@/components/chatbot/ChatbotWrapper";

const urbanist = Urbanist({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={urbanist.className}>
        <Header />
        {children}
        <Navbar />
        <ChatbotWrapper />
      </body>
    </html>
  );
}