import { Archivo_Black, Poppins, Rakkas, Rubik_Mono_One } from 'next/font/google';
import "./globals.css";
import Footer from "@/components/landing/footer/Footer";
import Navbar from '@/components/landing/navbar/Navbar';
import { LandingProvider } from "@/context/LandingContext"; // Asegúrate de la ruta correcta

// Define tus fuentes
export const poppins = Poppins({
  subsets: ['latin'],
  weight: '400',
});
export const rakkas = Rakkas({
  subsets: ['latin'],
  weight: '400',
});
export const rubik_mono_one = Rubik_Mono_One({
  subsets: ['latin'],
  weight: '400',
});
export const archivo_block = Archivo_Black({
  subsets: ['latin'],
  weight: '400',
});

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

