"use client";
import { motion } from "framer-motion";

export const MyDescription = () => {
  return (
    <motion.div
      className="box"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <p className="lg:text-3xl">
        The Web Application Enginner.
        <br />
        <br />
        Especially, I LOVE Frontend.
      </p>
    </motion.div>
  );
};
