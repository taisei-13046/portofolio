"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export const MyImage = () => {
  return (
    <motion.div
      className="box"
      initial={{ opacity: 0, scale: 1.3 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Image
        src="/me.webp"
        width={600}
        height={600}
        alt="Picture of the author"
        className="rounded-2xl shadow-2xl"
      />
    </motion.div>
  );
};
