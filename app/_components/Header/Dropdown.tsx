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
        <DropdownMenuItem>
          <Link href="/blogs" legacyBehavior passHref>
            Blogs
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="/works" legacyBehavior passHref>
            Works
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="/skills" legacyBehavior passHref>
            Skills
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="/about" legacyBehavior passHref>
            About
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
