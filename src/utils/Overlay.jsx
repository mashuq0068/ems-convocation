import { AnimatePresence, motion } from "framer-motion";

const Overlay = ({ step, onComplete }) => {
  // Map steps to their respective names
  const stepNames = {
    1: "Basic Information",
    2: "Education",
    3: "Program",
    4: "Employment",
    5: "Summary",
  };

  return (
    <AnimatePresence>
      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-orange-100 via-white to-orange-200 z-20">
        <motion.div
           key="text-motion"
           className="text-5xl font-extrabold text-orange-600"
           initial={{ x: "100%", opacity: 0 }}
           animate={{ x: 0, opacity: 1 }}
           exit={{ x: "-150vw", opacity: 0 }} // Move more to the left (relative to viewport)
           transition={{
             x: { type: "spring", stiffness: 70, duration: 0.8 },
             opacity: { duration: 0.5 },
           }}
          onAnimationComplete={onComplete}
        >
          {stepNames[step + 1] }
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default Overlay;
