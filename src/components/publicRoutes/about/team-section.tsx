"use client";

import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const team = [
  {
    name: "Isaac Ramm",
    role: "Founder & Vision Lead",
    imageUrl: "/team/isaac.jpg",
  },
  {
    name: "Alex Rivera",
    role: "Product Designer",
    imageUrl: "/team/allen.jpg",
  },
  {
    name: "Mina Ko",
    role: "Engineering",
    imageUrl: "/team/mina.jpg",
  },
];

export function TeamSection() {
  return (
    <section className="max-w-5xl mx-auto mt-32 px-4 sm:px-6 text-center">
      <h2 className="text-3xl font-bold mb-12">Meet the Team</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {team.map(({ name, role, imageUrl }, i) => (
          <Card key={i} className="bg-background/70 backdrop-blur-md">
            <CardHeader className="flex flex-col items-center">
              <Avatar className="w-20 h-20 mb-3">
                <AvatarImage src={imageUrl} alt={name} />
                <AvatarFallback>{name[0]}</AvatarFallback>
              </Avatar>
              <CardTitle>{name}</CardTitle>
              <p className="text-muted-foreground text-sm">{role}</p>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
}
