import "./globals.css";
import "swiper/css";
import "swiper/css/navigation";

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
