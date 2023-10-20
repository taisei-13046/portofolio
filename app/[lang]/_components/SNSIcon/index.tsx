import { Button } from "@/components/ui/button";
import Image from "next/image";

type Props = {
  src: string;
  url: string;
};

export const SNSIcon = ({ src, url }: Props) => (
  <a href={url}>
    <Button
      variant="outline"
      size="icon"
      className="bg-slate-100 dark:bg-slate-900"
    >
      <Image
        src={`/${src}-white.webp`}
        width={20}
        height={20}
        alt={`${src} image`}
        className="hidden dark:block"
      />
      <Image
        src={`/${src}.webp`}
        width={20}
        height={20}
        alt={`${src} image`}
        className="dark:hidden"
      />
    </Button>
  </a>
);
