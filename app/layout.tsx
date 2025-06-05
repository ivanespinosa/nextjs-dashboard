import "@/app/ui/global.css";
import { inter, caveat_brush } from "@/app/ui/fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {/*<body className={`${caveat_brush.className} antialiased`}>*/}
        {children}
      </body>
    </html>
  );
}
