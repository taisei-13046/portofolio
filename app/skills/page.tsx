import { Metadata } from "next";
import { SkillCharts } from "./_components/SkillChart";
import { chartData } from "./data";

export const metadata: Metadata = {
  title: "Skills | ytaisei's Blog",
  description: "My specialized capabilities",
};

export default function Skills() {
  return (
    <main className="-mx-16 lg:p-16 pb-0">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
        {Object.entries(chartData).map(([key, data]) => (
          <SkillCharts key={key} name={key} data={data} />
        ))}
      </div>
    </main>
  );
}
