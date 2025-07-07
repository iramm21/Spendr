"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ModeToggle } from "@/components/ui/theme-toggle";
import { Flame } from "lucide-react";

export function HeaderDesktop() {
  return (
    <header className="w-full border-b bg-background/80 backdrop-blur-lg sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold tracking-tight text-primary hover:brightness-125 transition-all flex items-center gap-2"
        >
          <Flame className="h-5 w-5 text-primary" />
          Spendr
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex">
          <NavigationMenu>
            <NavigationMenuList className="gap-1 sm:gap-3">
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/dashboard"
                    className={navigationMenuTriggerStyle()}
                  >
                    Dashboard
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Features</NavigationMenuTrigger>
                <NavigationMenuContent className="bg-popover p-4 rounded-md shadow-xl">
                  <ul className="grid gap-3 w-56">
                    {[
                      { href: "/features/track", label: "Expense Tracking" },
                      { href: "/features/goals", label: "Goal Setting" },
                      {
                        href: "/features/reports",
                        label: "Reports & Insights",
                      },
                    ].map(({ href, label }) => (
                      <li key={href}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={href}
                            className="block px-3 py-2 rounded-md hover:bg-muted transition text-sm"
                          >
                            {label}
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/about" className={navigationMenuTriggerStyle()}>
                    About
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/contact"
                    className={navigationMenuTriggerStyle()}
                  >
                    Contact
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        {/* Controls */}
        <div className="hidden md:flex items-center gap-3">
          <ModeToggle />
          <Link
            href="/sign-in"
            className="px-4 py-2 rounded-xl text-sm font-medium bg-primary text-white hover:bg-primary/90 hover:shadow-md transition-all"
          >
            Sign In
          </Link>
        </div>
      </div>
    </header>
  );
}
