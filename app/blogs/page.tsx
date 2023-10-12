import { PostCard } from "./_components/PostCard";
import json from "@/json/contents.json";

export default function Blogs() {
  return (
    <main className="p-8 lg:p-16 pb-0 my-auto">
      <div className="grid grid-cols-3 gap-6 items-stretch">
        {json.contents.map(({ title, date, url }, i) => (
          <div key={i} className="h-full">
            <PostCard title={title} date={date} url={url} image_id={i} />
          </div>
        ))}
      </div>
    </main>
  );
}
