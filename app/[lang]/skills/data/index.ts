type ChartData = {
  skill: string;
  val: number;
  fullMark: number;
};

export const chartData: Record<string, ChartData[]> = {
  All: [
    {
      skill: "Git",
      val: 90,
      fullMark: 100,
    },
    {
      skill: "Docker",
      val: 70,
      fullMark: 100,
    },
    {
      skill: "Linux",
      val: 50,
      fullMark: 100,
    },
    {
      skill: "VSCode",
      val: 80,
      fullMark: 100,
    },
    {
      skill: "Vim",
      val: 70,
      fullMark: 100,
    },
  ],
  Frontend: [
    {
      skill: "JavaScript",
      val: 90,
      fullMark: 100,
    },
    {
      skill: "TypeScript",
      val: 70,
      fullMark: 100,
    },
    {
      skill: "React",
      val: 90,
      fullMark: 100,
    },
    {
      skill: "HTML",
      val: 80,
      fullMark: 100,
    },
    {
      skill: "CSS",
      val: 80,
      fullMark: 100,
    },
  ],
  "React Framework": [
    {
      skill: "Next.js",
      val: 70,
      fullMark: 100,
    },
    {
      skill: "Remix",
      val: 80,
      fullMark: 100,
    },
    {
      skill: "Gatsby",
      val: 40,
      fullMark: 100,
    },
  ],
  "React Library": [
    {
      skill: "React Query",
      val: 100,
      fullMark: 100,
    },
    {
      skill: "React Router",
      val: 70,
      fullMark: 100,
    },
    {
      skill: "React Hook Form",
      val: 70,
      fullMark: 100,
    },
    {
      skill: "Recharts",
      val: 60,
      fullMark: 100,
    },
    {
      skill: "Emotion",
      val: 70,
      fullMark: 100,
    },
  ],
  XaaS: [
    {
      skill: "Firebase",
      val: 60,
      fullMark: 100,
    },
    {
      skill: "Shopify",
      val: 80,
      fullMark: 100,
    },
    {
      skill: "Twilio",
      val: 70,
      fullMark: 100,
    },
    {
      skill: "MicroCMS",
      val: 90,
      fullMark: 100,
    },
    {
      skill: "Contentful",
      val: 90,
      fullMark: 100,
    },
  ],
  Backend: [
    {
      skill: "Go",
      val: 45,
      fullMark: 100,
    },
    {
      skill: "SQL",
      val: 50,
      fullMark: 100,
    },
    {
      skill: "DB",
      val: 30,
      fullMark: 100,
    },
    {
      skill: "GCP",
      val: 30,
      fullMark: 100,
    },
    {
      skill: "AWS",
      val: 30,
      fullMark: 100,
    },
  ],
};
