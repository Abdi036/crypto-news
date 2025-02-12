import "./globals.css";
import { ReactNode } from "react";
import { Josefin_Sans } from "next/font/google";
import Header from "@/components/Header";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    template: "%s | Crypto News",
    default: "Welcome | Crypto News",
  },
  description: "Crypto News project",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} bg-primary-950 text-primary-100 min-h-screen flex flex-col `}
      >
        <Header />
        <div className="flex-1 w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl overflow-hidden h-full">
          <main className="flex flex-col ">{children}</main>
        </div>
      </body>
    </html>
  );
}
