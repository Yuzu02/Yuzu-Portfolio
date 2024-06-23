import { motion } from "framer-motion";

// Variants
const stairAnimation = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
};

// calculate the reversed index fot staggered delay
const reversedIndex = (index: number) => {
  const totalSteps = 6;
  return totalSteps - index - 1;
};

export default function Stairs() {
  return (
    <>
      {/* render 6 motion divs, each representing a step of the stair
  
    Each div will have the same animation defined by the stairAnimation object.
    The delay for each div is calculated dynamically based on it's reversed index
    Creating  a staggered effect with decreasing delay for each subsequent step.
  */}
      {[...Array(6)].map((number, index) => {
        return (
          <motion.div
            key={number}
            variants={stairAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration: 0.35,
              ease: "easeInOut",
              delay: reversedIndex(index) * 0.1,
            }}
            className="h-full w-full bg-white relative"
          />
        );
      })}
    </>
  );
}
