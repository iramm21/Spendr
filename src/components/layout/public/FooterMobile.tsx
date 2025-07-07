import Link from "next/link";

export function FooterMobile() {
  return (
    <footer className="bg-background border-t mt-20 p-6 text-center md:hidden">
      <p className="text-sm text-muted-foreground mb-4">
        © {new Date().getFullYear()} Spendr. All rights reserved.
      </p>
      <nav className="flex justify-center gap-6 text-sm font-semibold text-primary">
        <Link href="/about" className="hover:underline">
          About
        </Link>
        <Link href="/contact" className="hover:underline">
          Contact
        </Link>
        <Link href="/sign-in" className="hover:underline">
          Sign In
        </Link>
      </nav>
    </footer>
  );
}
