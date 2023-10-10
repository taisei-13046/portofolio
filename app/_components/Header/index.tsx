import { ModeToggle } from "@/components/ModeToggle";
import { Menu } from "./Menu";

export const Header = () => {
  return (
    <nav className="flex justify-between align-middle">
      <h2 className="text-2xl">{"ytaisei's Blog"}</h2>
      <Menu />
      <ModeToggle />
    </nav>
  );
};
