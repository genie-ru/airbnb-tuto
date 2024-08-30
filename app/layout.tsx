import './globals.css';
import {Inter, Inconsolata, Roboto} from 'next/font/google';
import type {Metadata} from 'next';

const inter = Inter({ subsets: ['latin'] });
const inconsolata = Inconsolata({ subsets: ['latin'] });
const roboto = Roboto({ subsets: ['latin'], weight: ["400"] });

export const metadata:Metadata = {
  title: 'Next.js Project',
  description: 'A Next.js project with  TypeScript and Tailwind CSS',
  keywords: ['Next.js', 'TypeScript', 'Tailwind CSS'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <h1>Hello</h1>
      </body>
  </html>
  );
}