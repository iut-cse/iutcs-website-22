import ActivitySection from "../components/About/activitySection"
import MissionSection from "../components/About/missionSection"
import RegularSessions from "../components/About/regularSessions"
import VideoSection from "../components/About/videoSection"
import Footer from "../components/common/Footer"


function About() {
  return (
      <div className="overflow-hidden bg-navyBlue">
          <VideoSection/>
          <MissionSection />
          <ActivitySection />
          <RegularSessions/>
      <Footer/>
    </div>
  )
}

export default About
