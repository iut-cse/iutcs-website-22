import { motion } from "framer-motion";

interface Props {
  text: string;
}

const AnimatedLetters = ({ text }: Props) => {
  const letters = Array.from(text);
  //   variants
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.3 * i },
    }),
  };
  const child = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px -50px 0px" }}
    >
      {letters.map((letter, i) => (
        <motion.span variants={child} key={i} className="mr-0.5 z-10">
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedLetters;
