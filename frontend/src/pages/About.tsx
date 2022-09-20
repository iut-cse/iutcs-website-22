import ActivitySection from "../components/About/activitySection";
import MissionSection from "../components/About/missionSection";
import RegularSessions from "../components/About/regularSessions";
import VideoSection from "../components/About/videoSection";
import Layout from "../components/common/Layout";

const About = () => {
  return (
    <Layout>
      <VideoSection />
      <MissionSection />
      <ActivitySection />
      <RegularSessions />
    </Layout>
  );
};

export default About;
