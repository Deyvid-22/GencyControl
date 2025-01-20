import type { Metadata } from "next";

import "./globals.css";
import { Header } from "@/components/header";
import { AuthProvider } from "../providers/auth";
import { ModalProvider } from "@/providers/modal";

export const metadata: Metadata = {
  title: "GencyControl - seu sistema de gereciamento.",
  description:
    "Gerencie seu sistema de gerenciamento de forma facil e eficiente.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <AuthProvider>
          <ModalProvider>
            <Header />
            {children}
          </ModalProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
