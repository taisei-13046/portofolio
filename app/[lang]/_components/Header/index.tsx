import { ModeToggle } from "@/components/ModeToggle";
import { Menu } from "./Menu";
import Link from "next/link";
import { Dropdown } from "./Dropdown";
import { SNSIcon } from "../SNSIcon";
import { LangToggle } from "../LangToggle";

export const Header = ({ lang }: { lang: string }) => {
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
      <div className="hidden lg:flex gap-12">
        <div className="flex gap-3">
          <SNSIcon src="github" url="https://github.com/taisei-13046" />
          <SNSIcon src="x" url="https://twitter.com/ytaisei_" />
        </div>
        <div className="flex gap-3">
          <LangToggle lang={lang} />
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
};
