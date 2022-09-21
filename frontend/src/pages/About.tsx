import ActivitySection from "../components/About/activitySection";
import ArrangeEvents from '../components/About/events';
import IndustryCollaboration from '../components/About/industrycollaboration';
import MissionSection from "../components/About/missionSection";
import RegularSessions from "../components/About/regularSessions";
import VideoSection from "../components/About/videoSection";
import Workshops from '../components/About/workshop';
import Layout from "../components/common/Layout";

const About = () => {
  return (
    <Layout>
      <VideoSection />
      <MissionSection />
      <ActivitySection />
      <RegularSessions />
      <Workshops/>
      <IndustryCollaboration/>
      <ArrangeEvents/>
    </Layout>
  );
};

export default About;
