import { motion } from "framer-motion";

interface Props {
  text: string;
}

const AnimatedTextWord = ({ text }: Props) => {
  const words = text.split(" ");
  //   variants
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.05 * i },
    }),
  };
  const child = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 16,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: -20,
      transition: {
        type: "spring",
        damping: 16,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      style={{ overflow: "hidden", display: "flex" }}
    >
      {words.map((word: any, i: number) => (
        <motion.span variants={child} key={i} className="mr-2">
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedTextWord;
