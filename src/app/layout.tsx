// app/layout.tsx (server component, no "use client")
import "@/styles/globals.css";
import { ThemeProvider } from "@/providers";
import { Toaster } from "@/components/ui/sonner";
import { ServiceWorkerRegister } from "@/components/ServiceWorkerRegister";

export const metadata = {
  title: "Spendr",
  description:
    "A personal finance app to help you track your spending and achieve your financial goals.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ServiceWorkerRegister />
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
