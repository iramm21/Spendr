// components/public/home/blog-teaser-section.tsx
"use client";

import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const blogPosts = [
  {
    title: "How to Build a Habit That Sticks",
    desc: "Learn the science of habit building and how to apply it to your finances.",
    href: "/blog/habit-building",
  },
  {
    title: "Top 5 Budgeting Tricks for Gen Z",
    desc: "Creative, easy strategies that actually work for your lifestyle.",
    href: "/blog/budgeting-genz",
  },
];

export function BlogTeaserSection() {
  return (
    <div className="mt-28 max-w-5xl mx-auto space-y-10 px-4 sm:px-0">
      <h2 className="text-3xl font-bold text-center">From the Blog</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {blogPosts.map((post, i) => (
          <Link href={post.href} key={i}>
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle>{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{post.desc}</CardDescription>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
