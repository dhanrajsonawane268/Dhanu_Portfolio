import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  link,
  image,
  video,
  links,
  className,
}: Props) {
  return (
    <Card
      className={cn(
        "flex flex-col overflow-hidden border rounded-lg bg-card shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1",
        className
      )}
    >
      {/* Media (Image or Video) */}
      <Link href={href || "#"} className="block">
        {video ? (
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className="h-44 w-full object-cover"
          />
        ) : image ? (
          <Image
            src={image}
            alt={title}
            width={600}
            height={350}
            className="h-44 w-full object-cover"
          />
        ) : null}
      </Link>

      {/* Content */}
      <CardHeader className="px-3 py-2">
        <div className="space-y-1">
          <CardTitle className="text-lg font-semibold">{title}</CardTitle>

          <time className="text-xs text-muted-foreground">{dates}</time>

          {/* Print-friendly link */}
          {link && (
            <p className="hidden text-xs underline print:block">
              {link.replace("https://", "").replace("www.", "").replace("/", "")}
            </p>
          )}

          <Markdown className="prose prose-sm max-w-full text-muted-foreground dark:prose-invert">
            {description}
          </Markdown>
        </div>
      </CardHeader>

      {/* Tags */}
      {tags.length > 0 && (
        <CardContent className="px-3 pb-0">
          <div className="mt-2 flex flex-wrap gap-1">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-[10px] px-1">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      )}

      {/* Footer Links */}
      {links && links.length > 0 && (
        <CardFooter className="px-3 pb-3">
          <div className="flex flex-wrap gap-2">
            {links.map((item, index) => (
              <Link
                href={item.href}
                target="_blank"
                key={index}
                className="text-xs"
              >
                <Badge className="flex gap-1 px-2 py-1 text-[10px]">
                  {item.icon}
                  {item.type}
                </Badge>
              </Link>
            ))}
          </div>
        </CardFooter>
      )}
    </Card>
  );
}
