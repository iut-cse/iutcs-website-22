import AnimatedLetters from "../animation/AnimatedLetters";
import Layout from "../components/common/Layout";
import { Achievements, Contact, CTFAbout, CTFMembers } from "../components/CTF";

const CTF = () => {
  return (
    <Layout>
      <div className="py-12">
        <h1 className="text-[28px] md:text-4xl text-center mb-12 md:mb-12 font-medium">
          <AnimatedLetters text={"Capture The Flag"} />
        </h1>
        <CTFAbout />
        <Achievements />
        <CTFMembers />
        <Contact />
      </div>
    </Layout>
  );
};

export default CTF;
