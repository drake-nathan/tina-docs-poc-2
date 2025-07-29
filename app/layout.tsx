import "./globals.css";
import { Inter } from "next/font/google";

import { Navigation } from "../components/navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  description:
    "A comprehensive design system documentation site built with TinaCMS",
  title: "Design System Documentation",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
