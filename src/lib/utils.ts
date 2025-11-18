import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge Tailwind + Custom classnames safely
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Format date into: "January 10, 2024 (2d ago)"
 */
export function formatDate(date: string): string {
  // Fix: Add time to avoid timezone shift
  const safeDate = date.includes("T") ? date : `${date}T00:00:00`;

  const target = new Date(safeDate);
  if (isNaN(target.getTime())) return date; // invalid date fallback

  const now = Date.now();
  const diff = Math.abs(now - target.getTime());
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  const fullDate = target.toLocaleString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  if (days < 1) {
    return "Today";
  }

  if (days < 7) {
    return `${fullDate} (${days}d ago)`;
  }

  if (days < 30) {
    const weeks = Math.floor(days / 7);
    return `${fullDate} (${weeks}w ago)`;
  }

  if (days < 365) {
    const months = Math.floor(days / 30);
    return `${fullDate} (${months}mo ago)`;
  }

  const years = Math.floor(days / 365);
  return `${fullDate} (${years}y ago)`;
}
