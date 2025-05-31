import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata = {
  title: "Apple Website",
  description: "This is my Next.js app.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head></head>
      <body>{children}</body>
    </html>
  );
}
