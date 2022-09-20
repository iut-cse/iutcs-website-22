import ActivitySection from "../components/About/activitySection"
import MissionSection from "../components/About/missionSection"
import RegularSessions from "../components/About/regularSessions"
import VideoSection from "../components/About/videoSection"
import Navbar from "../components/common/Navbar/Navbar"
import Footer from "../components/common/Footer"


const About = () => {
  return (
    <div className="overflow-hidden bg-navyBlue">
      <Navbar/>
          <VideoSection/>
          <MissionSection />
          <ActivitySection />
          <RegularSessions/>
      <Footer/>
    </div>
  )
}

export default About;
