import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export function FooterDesktop() {
  return (
    <footer className="bg-background border-t mt-20 hidden md:block">
      <div className="container mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-3 gap-12">
        {/* Brand */}
        <div>
          <h3 className="text-lg font-semibold text-primary">Spendr</h3>
          <p className="text-sm text-muted-foreground mt-2">
            Helping you track smarter, spend wiser, and reach your goals with
            ease.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold">Explore</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {[
              { href: "/dashboard", label: "Dashboard" },
              { href: "/features/track", label: "Expense Tracking" },
              { href: "/features/goals", label: "Goal Setting" },
              { href: "/features/reports", label: "Reports & Insights" },
              { href: "/about", label: "About" },
              { href: "/contact", label: "Contact" },
            ].map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="hover:text-primary transition-colors"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold">Contact</h3>
          <address className="not-italic text-sm text-muted-foreground space-y-3 mt-4">
            <p className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <a
                href="mailto:support@spendr.app"
                className="hover:text-primary transition-colors"
              >
                support@spendr.app
              </a>
            </p>
            <p className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <a
                href="tel:+1234567890"
                className="hover:text-primary transition-colors"
              >
                +1 (234) 567-890
              </a>
            </p>
            <p className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-1" />
              <span>
                123 Spendr St.
                <br />
                Financeland, FL 12345
              </span>
            </p>
          </address>
        </div>
      </div>

      <div className="text-center text-xs text-muted-foreground py-6 border-t">
        &copy; {new Date().getFullYear()} Spendr. All rights reserved.
      </div>
    </footer>
  );
}
