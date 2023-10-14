import { MyImage } from "./_components/MyImage";
import { MyDescription } from "./_components/MyDescription";
import { DetailArrow } from "./_components/DetailArrow";
import { SNSIcon } from "./_components/SNSIcon";

export default function Home() {
  return (
    <main className="p-8 lg:p-16 pb-0">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 justify-items-center">
        <div className="my-auto">
          <MyDescription />
        </div>
        <MyImage />
        <DetailArrow />
        <div className="flex gap-3 lg:hidden">
          <SNSIcon src="github" url="https://github.com/taisei-13046" />
          <SNSIcon src="x" url="https://twitter.com/ytaisei_" />
        </div>
      </div>
    </main>
  );
}
