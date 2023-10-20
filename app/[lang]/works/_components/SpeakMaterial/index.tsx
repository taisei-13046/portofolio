"use client";
import { motion } from "framer-motion";

type Props = {
  title: string;
  url: string;
};

export const SpeakeMaterial = ({ title, url }: Props) => {
  return (
    <motion.div
      className="flex flex-col gap-8"
      initial={{ opacity: 0, scale: 1.05 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5 }}
    >
      <iframe
        src={url}
        title={title}
        className="rounded-lg shadow-xl w-full h-auto aspect-[560/315]"
        data-ratio="1.7777777777777777"
      />
      <a className="text-xl font-bold" href={url}>
        {title}
      </a>
    </motion.div>
  );
};
