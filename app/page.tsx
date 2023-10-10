import { MyImage } from "./_components/MyImage";
import { MyDescription } from "./_components/MyDescription";

export default function Home() {
  return (
    <main className="p-16 my-auto">
      <div className="flex">
        <div className="flex-1 my-auto">
          <MyDescription />
        </div>
        <MyImage />
      </div>
    </main>
  );
}
