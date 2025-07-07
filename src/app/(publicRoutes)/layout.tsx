import { ReactNode } from "react";
import { Header } from "@/components/layout/public/Header";
import { Footer } from "@/components/layout/public/Footer";

interface PublicLayoutProps {
  children: ReactNode;
}

export default function PublicLayout({ children }: PublicLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground max-w-screen mx-auto">
      <Header />
      <main className="flex-grow px-4 sm:px-6 py-8">{children}</main>
      <Footer />
    </div>
  );
}
