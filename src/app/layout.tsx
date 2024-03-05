import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavbarMobile } from "@/components";
import { Providers } from "@/store/Providers";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "DashTech",
  description: "Dashboard with utilities",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <NavbarMobile />
          {children}
        </Providers>
      </body>
    </html>
  );
}
