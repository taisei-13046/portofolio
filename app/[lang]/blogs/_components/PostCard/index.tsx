"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import { PostImage } from "./PostImage";

type Props = {
  title: string;
  date: string;
  url: string;
  image_id: number;
};

export const PostCard = ({ title, date, url, image_id }: Props) => {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 1 }}
      className="card h-full"
    >
      <a href={url} className="h-full">
        <Card className="h-full flex flex-col justify-between">
          <CardHeader className="p-12">
            <PostImage image_id={image_id} />
          </CardHeader>
          <CardContent>
            <CardTitle className="pb-4">{title}</CardTitle>
            <CardDescription>{date}</CardDescription>
          </CardContent>
        </Card>
      </a>
    </motion.button>
  );
};
