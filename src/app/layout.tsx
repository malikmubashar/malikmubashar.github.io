import "./globals.css";
import type { Metadata } from 'next';
import HTML from '@/components/html-wrapper';
import StoreWrapper from '@/components/store-wrapper';
import Header from "@/components/header";
import Footer from "@/components/footer";


export const metadata: Metadata = {
  title: 'Muhammad Mubashar Khalid',
  description: 'portfolio of Muhammad Mubashar Khalid',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <StoreWrapper>
      <HTML>
        <body>
          <Header />
          {children}
          <Footer />
        </body>
      </HTML>
    </StoreWrapper>
  );
}
