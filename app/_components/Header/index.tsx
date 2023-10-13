import { ModeToggle } from "@/components/ModeToggle";
import { Menu } from "./Menu";
import Link from "next/link";
import { Dropdown } from "./Dropdown";

export const Header = () => {
  return (
    <nav className="flex justify-between align-middle">
      <Link href="/">
        <h2 className="text-2xl font-bold">{"ytaisei's Blog"}</h2>
      </Link>
      <div className="hidden lg:flex">
        <Menu />
      </div>
      <div className="flex gap-2 lg:hidden">
        <Dropdown />
        <ModeToggle />
      </div>
      <div className="hidden lg:flex">
        <ModeToggle />
      </div>
    </nav>
  );
};
