import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "i18n Blog Example",
  description: "多言語化対応ブログのサンプルページです。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
