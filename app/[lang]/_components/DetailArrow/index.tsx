"use client";
import { ArrowIcon } from "@/components/icons/ArrowIcon";
import { motion } from "framer-motion";
import Link from "next/link";

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
      <Link href="/about" className="flex gap-3 items-center cursor-pointer">
        <p className="text-2xl">More Details</p>
        <ArrowIcon />
      </Link>
    </motion.div>
  );
};
