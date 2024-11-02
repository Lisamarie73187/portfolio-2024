import type { Metadata } from "next";
import "./globals.css";
import Header from "./HomePage/Header";
import Footer from "./HomePage/Footer";
import { Poppins, Young_Serif, Open_Sans, News_Cycle } from 'next/font/google';


const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700'] });
const youngSerif = Young_Serif({ subsets: ['latin'], weight: ['400'] });
const openSans = Open_Sans({ subsets: ['latin'], weight: ['400', '600'] });
const newsCycle = News_Cycle({ subsets: ['latin'], weight: ['400', '700'] });


export const metadata: Metadata = {
  title: "Lisa Herzberg",
  description: "Software Engineer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} ${youngSerif.className} ${openSans.className} ${newsCycle.className} antialiased`}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
