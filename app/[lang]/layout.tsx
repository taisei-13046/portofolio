import "../globals.css";
import type { Metadata } from "next";
import { Header } from "./_components/Header";
import { Provider } from "./provider";

export async function generateStaticParams() {
  return [{ lang: "ja" }, { lang: "en" }];
}

export const metadata: Metadata = {
  title: "ytaisei's Blog",
  description: "Welcome to my portofolio!",
};

export default function RootLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  return (
    <html lang={lang}>
      <body className="bg-slate-100 dark:bg-slate-900 min-h-[100dvh] p-16 lg:pb-0">
        <Provider attribute="class">
          <Header lang={lang} />
          {children}
        </Provider>
      </body>
    </html>
  );
}
