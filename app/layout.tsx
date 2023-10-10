import "./globals.css";
import type { Metadata } from "next";
import { Header } from "./_components/Header";
import { Provider } from "./provider";

export const metadata: Metadata = {
  title: "ytaisei's Home Page",
  description: "Welcome to my portofolio!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-100 dark:bg-slate-900 min-h-[100dvh] p-16">
        <Provider attribute="class">
          <Header />
          {children}
        </Provider>
      </body>
    </html>
  );
}
