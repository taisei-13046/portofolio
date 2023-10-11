import { ModeToggle } from "@/components/ModeToggle";
import { Menu } from "./Menu";
import Link from "next/link";

export const Header = () => {
  return (
    <nav className="flex justify-between align-middle">
      <Link href="/">
        <h2 className="text-2xl">{"ytaisei's Blog"}</h2>
      </Link>
      <div className="hidden lg:flex">
        <Menu />
      </div>
      <ModeToggle />
    </nav>
  );
};
