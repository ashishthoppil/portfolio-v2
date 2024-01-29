import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const scroll = (selector: string, event: any) => {
  event.preventDefault();
  const element = document.getElementById(selector);
  element?.scrollIntoView({ behavior: "smooth" });
}
