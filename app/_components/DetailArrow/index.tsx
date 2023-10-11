"use client";
import { ArrowIcon } from "@/components/icons/ArrowIcon";
import { motion } from "framer-motion";

type Props = {
  onClick?: () => void;
};

export const DetailArrow = ({ onClick }: Props) => {
  return (
    <motion.div
      className="box"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      onClick={onClick}
    >
      <div className="flex gap-3 items-center cursor-pointer">
        <p className="text-2xl">More Details</p>
        <ArrowIcon />
      </div>
    </motion.div>
  );
};
