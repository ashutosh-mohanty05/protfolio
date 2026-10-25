import { Inter, Oswald } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const oswald = Oswald({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

export const metadata = {
  title: "Ashutosh Mohanty | AWS Cloud Engineer",
  description:
    "Portfolio of Ashutosh Mohanty - AWS Certified Solutions Architect, Azure Administrator (AZ-104), Cloud Engineer and Web Developer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${oswald.variable}`}>{children}</body>
    </html>
  );
}
