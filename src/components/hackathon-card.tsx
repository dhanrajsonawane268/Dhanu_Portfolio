import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import React from "react";

interface Props {
  title: string;
  description: string;
  dates: string;
  location: string;
  image?: string;
  links?: readonly {
    icon: React.ReactNode;
    title: string;
    href: string;
  }[];
}

export function HackathonCard({
  title,
  description,
  dates,
  location,
  image,
  links,
}: Props) {
  return (
    <li className="relative ml-14 py-6 group">
      {/* Avatar */}
      <div className="absolute -left-16 top-3 flex items-center justify-center">
        <Avatar className="size-14 border backdrop-blur-xl bg-white/20 dark:bg-white/10 shadow-lg hover:scale-105 transition-all duration-300">
          <AvatarImage
            src={image || "/placeholder.png"}
            alt={title}
            className="object-cover"
          />
          <AvatarFallback className="bg-indigo-600 text-white font-bold">
            {title[0]}
          </AvatarFallback>
        </Avatar>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-1 pl-2">
        {dates && (
          <time className="text-xs text-muted-foreground">{dates}</time>
        )}

        <h2 className="font-semibold text-lg leading-tight text-foreground group-hover:text-indigo-600 transition">
          {title}
        </h2>

        {location && (
          <p className="text-xs text-muted-foreground">{location}</p>
        )}

        {description && (
          <p className="text-sm text-muted-foreground leading-snug max-w-prose">
            {description}
          </p>
        )}
      </div>

      {/* Links */}
      {links && links.length > 0 && (
        <div className="mt-3 flex flex-row flex-wrap items-start gap-2">
          {links.map((link, idx) => (
            <Link
              href={link.href}
              key={idx}
              target="_blank"
              className="hover:opacity-90"
            >
              <Badge className="flex gap-2 items-center px-2 py-1 text-[11px]">
                {link.icon}
                {link.title}
              </Badge>
            </Link>
          ))}
        </div>
      )}
    </li>
  );
}
