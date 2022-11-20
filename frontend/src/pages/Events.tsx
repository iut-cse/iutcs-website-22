import AnimatedLetters from "../animation/AnimatedLetters";
import ActivityItem from "../components/Activities/ActivityItem";
import { events } from "../data/activities";

const Events = () => {
  return (
      <div className="lg:px-40 md:px-20 px-10 my-12">
        <h1 className="text-[28px] md:text-4xl text-center mb-12 md:mb-12 font-medium">
          <AnimatedLetters text={"Our Events"} />
        </h1>
        <div>
          {events.map((event, index) => (
            <ActivityItem session={event} key={index} index={index} />
          ))}
        </div>
      </div>
  );
};

export default Events;
