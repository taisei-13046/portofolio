"use client";

import { Legend, PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";

type Props = {
  name: string;
  data: {
    skill: string;
    val: number;
    fullMark: number;
  }[];
};

export const SkillCharts = ({ data, name }: Props) => {
  return (
    <RadarChart width={375} height={250} data={data}>
      <PolarGrid />
      <PolarAngleAxis dataKey="skill" />
      <Radar
        name={name}
        dataKey="val"
        stroke="#8884d8"
        fill="#8884d8"
        fillOpacity={0.6}
      />
      <Legend />
    </RadarChart>
  );
};
