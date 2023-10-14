import { MyImage } from "./_components/MyImage";
import { MyDescription } from "./_components/MyDescription";
import { DetailArrow } from "./_components/DetailArrow";

export default function Home() {
  return (
    <main className="p-8 lg:p-16 pb-0">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 justify-items-center">
        <div className="my-auto">
          <MyDescription />
        </div>
        <MyImage />
        <DetailArrow />
      </div>
    </main>
  );
}
