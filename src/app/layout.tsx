import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/app/components/header";
import { Toaster } from "sonner";
import { Footer } from "./components/footer";
import { ButtonToTop } from "./components/button-to-top";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Portfolio",
    default: "Home",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/images/israelcruzz-logo.png"
          type="image/<generated>"
          sizes="<generated>"
        />
      </head>
      <body className={`${inter.className} bg-gray-950 relative`}>
        <div className="absolute w-full z-40">
          <Header />
        </div>

        {children}
        <Footer />

        <div className="fixed bottom-0 right-0 m-6">
          <ButtonToTop />
        </div>

        <Toaster theme="dark" />
      </body>
    </html>
  );
}
