import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk">
      <body className="grid min-h-screen grid-rows-[auto_1fr_auto] bg-[#F2F5FF]">
        <Header />
        <main className="min-h-0">{children}</main>
        <Footer />
      </body>
    </html>
  );
}