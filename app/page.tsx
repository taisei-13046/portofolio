import { MyImage } from "./_components/MyImage";
import { MyDescription } from "./_components/MyDescription";

export default function Home() {
  return (
    <main className="p-8 lg:p-16 pb-0 my-auto">
      <div className="lg:flex gap-8 my-8">
        <div className="flex-1 my-auto">
          <MyDescription />
        </div>
        <div className="py-16 lg:py-0">
          <MyImage />
        </div>
      </div>
    </main>
  );
}
