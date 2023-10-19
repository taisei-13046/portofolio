import { Metadata } from "next";
import { AboutCard } from "./_components/AboutCard";
import { aboutData } from "./data";

export const metadata: Metadata = {
  title: "About | ytaisei's Blog",
  description: "My personal history",
};

export default function About() {
  return (
    <main className="pt-8 lg:p-16 pb-0 my-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-2 gap-y-6 gap-x-12 lg:gap-y-0">
        {aboutData.map(({ title, content, date, image }, i) => (
          <>
            <AboutCard
              title={title}
              content={content}
              date={date}
              image={image}
            />
            <div
              className={`${
                i % 2 === 0 ? "col-start-1" : "col-start-2"
              } hidden lg:flex`}
            />
          </>
        ))}
      </div>
    </main>
  );
}
