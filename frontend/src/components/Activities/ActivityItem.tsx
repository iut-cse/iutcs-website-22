import { motion } from "framer-motion";
interface Props {
  session: {
    title: string;
    description: string;
    picture: string;
  };
  index: number;
}

const ActivityItem = ({ session, index }: Props) => {
  return (
    <motion.section
      viewport={{ once: true }}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
          type: "spring",
          damping: 20,
          delay: 0.4,
        },
      }}
      className="cardBg mb-8  md:mb-10"
    >
      <div className="max-w-screen-xl p-6 mx-auto lg:p-8">
        <div className="grid grid-cols-1 gap-8 lg:gap-16 lg:grid-cols-2 row">
          <div
            className={`relative h-64 overflow-hidden rounded-lg sm:h-80 lg:h-full ${
              index % 2 ? "order-first" : "order-last"
            }`}
          >
            <img
              alt="Party"
              src={session.picture}
              className="absolute inset-0 object-cover w-full h-full"
            />
          </div>
          <div className="lg:py-24">
            <h2 className="text-3xl font-bold sm:text-4xl">{session.title}</h2>
            <p className="mt-4 text-white/60 leading-relaxed lineCap">
              {session.description}
            </p>
            <a
              href="#"
              className="inline-flex items-center px-8 py-3 mt-8 text-white border border-lightBlue bg-lightBlue rounded hover:bg-transparent hover:text-lightBlue active:text-lightBlue focus:outline-none focus:ring"
            >
              <span className="text-sm font-medium"> Read More </span>
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ActivityItem;
