import { motion } from "framer-motion";

export const ArrowIcon = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.2 }}
      onHoverStart={() => {}}
      onHoverEnd={() => {}}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-10 h-10"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    </motion.div>
  );
};
