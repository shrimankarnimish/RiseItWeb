import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Merriweather } from "next/font/google";

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-merriweather",
  display: "swap",
});

export const metadata = {
  title: "Rise IT Digital Marketing Agency in Andheri West Mumbai.",
  description: "Rise IT Digital Marketing Agency in Andheri West Mumbai.",
   icons: {
   icon: "/assets/images/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={merriweather.variable}>
      <body className="antialiased font-merriweather">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
