"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

interface ResumeCardProps {
  logoUrl: string;
  altText: string;
  title: string;
  subtitle?: string;
  href?: string;
  badges?: readonly string[];
  period: string;
  description?: string;
}

export const ResumeCard = ({
  logoUrl,
  altText = "",
  title,
  subtitle,
  href,
  badges,
  period,
  description,
}: ResumeCardProps) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (description) {
      e.preventDefault();
      setIsExpanded((prev) => !prev);
    }
  };

  return (
    <Link
      href={href || "#"}
      className="block cursor-pointer"
      onClick={handleClick}
    >
      <Card className="flex px-3 py-3 items-start gap-4 border hover:shadow-lg transition rounded-lg bg-card/80">
        
        {/* LEFT LOGO */}
        <Avatar className="border size-12 bg-muted dark:bg-neutral-900 flex-none">
          <AvatarImage
            src={logoUrl}
            alt={altText || "logo"}
            className="object-contain p-1"
          />
          <AvatarFallback>
            {altText?.slice(0, 1) || "?"}
          </AvatarFallback>
        </Avatar>

        {/* RIGHT CONTENT */}
        <div className="flex flex-col flex-grow group w-full">
          <CardHeader className="p-0">
            <div className="flex items-start justify-between w-full">
              
              {/* Title + Badges */}
              <div>
                <h3 className="font-semibold text-sm sm:text-base flex items-center gap-2">
                  {title}

                  {!!badges?.length && (
                    <span className="inline-flex gap-1">
                      {badges.map((badge, idx) => (
                        <Badge
                          key={idx}
                          variant="secondary"
                          className="text-[10px] px-1"
                        >
                          {badge}
                        </Badge>
                      ))}
                    </span>
                  )}

                  {/* Chevron */}
                  {description && (
                    <ChevronRightIcon
                      className={cn(
                        "size-4 transition-transform duration-300 ml-1 opacity-60 group-hover:opacity-100",
                        isExpanded ? "rotate-90" : "rotate-0"
                      )}
                    />
                  )}
                </h3>

                {subtitle && (
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {subtitle}
                  </p>
                )}
              </div>

              {/* Period */}
              <div className="text-xs sm:text-sm text-muted-foreground text-right min-w-fit">
                {period}
              </div>
            </div>
          </CardHeader>

          {/* DESCRIPTION DROPDOWN */}
          {description && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: isExpanded ? 1 : 0,
                height: isExpanded ? "auto" : 0,
              }}
              transition={{
                duration: 0.4,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mt-2 text-xs sm:text-sm text-muted-foreground overflow-hidden"
            >
              {description}
            </motion.div>
          )}
        </div>
      </Card>
    </Link>
  );
};
