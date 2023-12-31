import { Metadata } from "next";
import { PostCard } from "./_components/PostCard";
import json from "@/json/contents.json";

export const metadata: Metadata = {
  title: "Blogs | ytaisei's Blog",
  description: "My blog list",
};

export default function Blogs() {
  return (
    <main className="pt-8 lg:p-16 pb-0 my-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
        {json.contents.map(({ title, date, url }, i) => (
          <div key={i} className="h-full">
            <PostCard title={title} date={date} url={url} image_id={i} />
          </div>
        ))}
      </div>
    </main>
  );
}
