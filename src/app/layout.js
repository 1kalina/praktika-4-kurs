import "./globals.css";

export const metadata = {
  title: "LOGlTEX — Технології надчистих середовищ • Автоматизація",
  description:
    "Демо-сайт у стилі індустріальної компанії: надчисті речовини, автоматизація, сервіс.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "LOGITEX — Технології надчистих середовищ • Автоматизація",
    description:
      "Системи для високочистих середовищ і промислової автоматизації. Демо-проєкт.",
    url: "https://example.com",
    siteName: "LOGITEX",
    locale: "uk_UA",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html lang="uk">
      <body>{children}</body>
    </html>
  );
}
