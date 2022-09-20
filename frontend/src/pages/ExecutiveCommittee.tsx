import AnimatedLetters from "../animation/AnimatedLetters";
import StudentsBody from "../components/ExecutiveCommittee/StudentsBody";
import TeachersBody from "../components/ExecutiveCommittee/TeachersBody";

const ExecutiveCommittee = () => {
  return (
    <div className="my-12">
      <h1 className="text-[28px] md:text-4xl text-center mb-12 md:mb-20 font-medium">
        <AnimatedLetters text={"Executive Committee"} />
      </h1>
      <TeachersBody />
      <StudentsBody />
    </div>
  );
};

export default ExecutiveCommittee;
