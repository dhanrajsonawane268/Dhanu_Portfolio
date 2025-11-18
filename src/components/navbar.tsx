"use client";

import { Dock, DockIcon } from "@/components/magicui/dock";
import { ModeToggle } from "@/components/mode-toggle";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-50 mx-auto mb-4 flex h-full max-h-16">

      {/* Background Blur */}
      <div className="fixed inset-x-0 bottom-0 h-20 w-full bg-background/70 backdrop-blur-lg 
        [-webkit-mask-image:linear-gradient(to_top,black,transparent)] 
        dark:bg-background/60" />

      {/* Dock Bar */}
      <Dock
        className="pointer-events-auto relative mx-auto flex h-full min-h-full items-center gap-1 
        rounded-2xl bg-background/90 px-2 shadow-lg backdrop-blur-md
        border border-border/40 dark:border-white/10"
      >

        {/* Main Navigation (Home, Blog...) */}
        {DATA.navbar.map((item) => (
          <DockIcon key={item.href}>
            <Tooltip delayDuration={200}>
              <TooltipTrigger asChild>
                <Link
                  href={item.href}
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "size-12 rounded-xl"
                  )}
                >
                  <item.icon className="size-5" />
                </Link>
              </TooltipTrigger>

              <TooltipContent>
                <p>{item.label}</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
        ))}

        <Separator orientation="vertical" className="h-10 bg-border/50" />

        {/* Social Icons */}
        {Object.entries(DATA.contact.social)
          .filter(([_, social]) => social.navbar)
          .map(([name, social]) => (
            <DockIcon key={name}>
              <Tooltip delayDuration={200}>
                <TooltipTrigger asChild>
                  <Link
                    href={social.url}
                    target="_blank"
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "size-12 rounded-xl"
                    )}
                  >
                    <social.icon className="size-5" />
                  </Link>
                </TooltipTrigger>

                <TooltipContent>
                  <p>{name}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}

        <Separator orientation="vertical" className="h-10 bg-border/50" />

        {/* Theme Toggle (Dark / Light) */}
        <DockIcon>
          <Tooltip delayDuration={200}>
            <TooltipTrigger asChild>
              <ModeToggle />
            </TooltipTrigger>

            <TooltipContent>
              <p>Theme</p>
            </TooltipContent>
          </Tooltip>
        </DockIcon>

      </Dock>
    </div>
  );
}
