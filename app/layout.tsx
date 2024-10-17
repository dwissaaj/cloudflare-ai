import type { Metadata } from "next";
import {  Inter, Outfit, Quantico } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";


const inter = Inter({ subsets: ["latin"] ,
  variable: '--font-inter'
});
const quantico = Quantico({subsets: ['latin'], weight: ['400'],
  variable: '--font-roboto-quantico'
})
const outfit = Outfit({subsets: ['latin'], weight: ['200', '400', '800'], variable: '--font-outfit'})
export const metadata: Metadata = {
  title: "Hakuro <Cloudflare AI>",
  description: "AI with Cloudflare",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${quantico.variable} ${outfit.variable} pastel` }>
      
        <Providers>
        {children}
        </Providers>
       
      </body>
    </html>
  );
}
