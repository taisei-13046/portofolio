"use client";

import { Card, CardContent, CardDescription } from "@/components/ui/card";
import Image from "next/image";
import { motion } from "framer-motion";

type Props = {
  title: string;
  content: string;
  date: string;
  image: string;
};

export const AboutCard = ({ title, content, date, image }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 1.3 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.1 }}
    >
      <Card className="p-3 grid grid-cols-1 lg:grid-cols-3">
        <Image
          src={`/about_image/${image}`}
          width={150}
          height={150}
          alt="Picture of the author"
          className="rounded-2xl shadow-2xl m-auto lg:mr-auto lg:ml-2"
        />
        <div className="col-span-2">
          <CardContent className="pt-6 flex flex-col lg:flex-row items-center gap-6">
            <h3 className="text-xl font-bold">{title}</h3>
            <CardDescription className="text-md">{date}</CardDescription>
          </CardContent>
          <CardContent className="break-words">{content}</CardContent>
        </div>
      </Card>
    </motion.div>
  );
};
