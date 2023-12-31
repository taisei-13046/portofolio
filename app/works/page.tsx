import json from "@/json/speakeMaterial.json";
import { SpeakeMaterial } from "./_components/SpeakMaterial";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Works | ytaisei's Blog",
  description: "My enginner's works",
};

export default function Works() {
  return (
    <main className="pt-8 lg:p-16 pb-0 my-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {json.contents.map(({ title, url }, i) => (
          <SpeakeMaterial key={i} title={title} url={url} />
        ))}
      </div>
    </main>
  );
}
