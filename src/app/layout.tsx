import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "geunu's homepage",
  description: "개인 홈페이지입니다.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
