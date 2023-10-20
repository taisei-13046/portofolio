"use client";

import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

export const LangToggle = ({ lang }: { lang: string }) => {
  const pathName = usePathname();
  const redirectedPathName = (locale: string) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="bg-slate-100 dark:bg-slate-900"
        >
          {lang.toUpperCase()}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <Link href={redirectedPathName("ja")}>
          <DropdownMenuItem>JA</DropdownMenuItem>
        </Link>
        <Link href={redirectedPathName("en")}>
          <DropdownMenuItem>EN</DropdownMenuItem>
        </Link>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
