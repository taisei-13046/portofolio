import { MenuIcon } from "@/components/icons/MenuIcon";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

export const Dropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="bg-slate-100 dark:bg-slate-900"
        >
          <MenuIcon />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <Link href="/blogs" legacyBehavior passHref>
          <DropdownMenuItem>Blogs</DropdownMenuItem>
        </Link>
        <Link href="/works" legacyBehavior passHref>
          <DropdownMenuItem>Works</DropdownMenuItem>
        </Link>
        <Link href="/skills" legacyBehavior passHref>
          <DropdownMenuItem>Skills</DropdownMenuItem>
        </Link>
        <Link href="/about" legacyBehavior passHref>
          <DropdownMenuItem>About</DropdownMenuItem>
        </Link>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
