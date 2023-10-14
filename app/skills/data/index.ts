type ChartData = {
  skill: string;
  val: number;
  fullMark: number;
};

export const chartData: Record<string, ChartData[]> = {
  Frontend: [
    {
      skill: "TypeScript",
      val: 95,
      fullMark: 100,
    },
    {
      skill: "React",
      val: 100,
      fullMark: 100,
    },
    {
      skill: "Next.js",
      val: 40,
      fullMark: 100,
    },
    {
      skill: "HTML",
      val: 70,
      fullMark: 100,
    },
    {
      skill: "CSS",
      val: 75,
      fullMark: 100,
    },
  ],
  "React State Library": [
    {
      skill: "React Query",
      val: 100,
      fullMark: 100,
    },
    {
      skill: "SWR",
      val: 70,
      fullMark: 100,
    },
    {
      skill: "Redux",
      val: 60,
      fullMark: 100,
    },
  ],
  "React CSS Library": [
    {
      skill: "Tailwind",
      val: 70,
      fullMark: 100,
    },
    {
      skill: "CSS Modules",
      val: 80,
      fullMark: 100,
    },
    {
      skill: "Emotion",
      val: 90,
      fullMark: 100,
    },
  ],
  "React Test Library": [
    {
      skill: "Jest",
      val: 70,
      fullMark: 100,
    },
    {
      skill: "Vitest",
      val: 60,
      fullMark: 100,
    },
    {
      skill: "Testing-Library",
      val: 70,
      fullMark: 100,
    },
    {
      skill: "Cypress",
      val: 60,
      fullMark: 100,
    },
    {
      skill: "Storybook",
      val: 80,
      fullMark: 100,
    },
  ],
  Backend: [
    {
      skill: "Go",
      val: 50,
      fullMark: 100,
    },
    {
      skill: "Docker",
      val: 40,
      fullMark: 100,
    },
    {
      skill: "SQL",
      val: 40,
      fullMark: 100,
    },
    {
      skill: "gRPC",
      val: 30,
      fullMark: 100,
    },
    {
      skill: "HTTP",
      val: 35,
      fullMark: 100,
    },
  ],
  Output: [
    {
      skill: "Zenn",
      val: 95,
      fullMark: 100,
    },
    {
      skill: "Qiita",
      val: 90,
      fullMark: 100,
    },
    {
      skill: "Tech Event",
      val: 70,
      fullMark: 100,
    },
  ],
};
