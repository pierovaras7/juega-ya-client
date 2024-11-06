import { Archivo_Black, Poppins, Rakkas, Rubik_Mono_One } from 'next/font/google';
import "./globals.css";
import Footer from "@/components/landing/footer/Footer";
import Navbar from '@/components/landing/navbar/Navbar';
import { LandingProvider } from "@/context/LandingContext"; // Asegúrate de la ruta correcta
import { poppins } from './fonts/googleFonts';


// Componente RootLayout
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
      <html lang="en">
        <body className={poppins.className}>
          <LandingProvider>
            <Navbar />
            {children}
            <Footer />
          </LandingProvider>
        </body>
      </html>
   
  );
};

