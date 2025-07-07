"use client";

import Link from "next/link";
import React from "react";
import { ModeToggle } from "@/components/ui/theme-toggle";
import { Flame, Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";

export function HeaderMobile() {
  return (
    <header className="w-full border-b bg-background/80 backdrop-blur-lg sticky top-0 z-50 shadow-sm md:hidden">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold tracking-tight text-primary hover:brightness-125 transition-all flex items-center gap-2"
        >
          <Flame className="h-5 w-5 text-primary" />
          Spendr
        </Link>

        <div className="flex items-center gap-3">
          <ModeToggle />

          {/* Dropdown menu for mobile */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                aria-label="Open menu"
                className="p-2 rounded-md hover:bg-muted transition focus:outline-none focus:ring-2 focus:ring-primary"
                type="button"
              >
                <Menu className="w-6 h-6 text-primary" />
              </button>
            </DropdownMenuTrigger>

            <DropdownMenuContent
              side="bottom"
              align="end"
              className="w-56 bg-background border border-border rounded-md p-2 shadow-md"
            >
              <DropdownMenuLabel className="font-extrabold">
                Navigation
              </DropdownMenuLabel>

              <DropdownMenuItem asChild>
                <Link href="/dashboard" className="w-full">
                  Dashboard
                </Link>
              </DropdownMenuItem>

              <DropdownMenuSeparator />

              {/* Features dropdown inside mobile dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger
                  className="w-full flex justify-between items-center px-2 py-1 rounded hover:bg-muted cursor-pointer"
                  asChild
                >
                  <div className="w-full flex justify-between items-center">
                    Features
                    <svg
                      className="w-4 h-4 ml-2"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </DropdownMenuTrigger>

                <DropdownMenuContent
                  side="right"
                  align="start"
                  className="w-56 bg-background border border-border rounded-md p-2 shadow-md"
                >
                  <DropdownMenuItem asChild>
                    <Link href="/features/track" className="w-full">
                      Expense Tracking
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/features/goals" className="w-full">
                      Goal Setting
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/features/reports" className="w-full">
                      Reports & Insights
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenuSeparator />

              <DropdownMenuItem asChild>
                <Link href="/about" className="w-full">
                  About
                </Link>
              </DropdownMenuItem>

              <DropdownMenuItem asChild>
                <Link href="/contact" className="w-full">
                  Contact
                </Link>
              </DropdownMenuItem>

              <DropdownMenuSeparator />

              <DropdownMenuItem asChild>
                <Link
                  href="/sign-in"
                  className="w-full bg-primary text-white px-3 py-1 rounded hover:bg-primary/90 text-center"
                >
                  Sign In
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
