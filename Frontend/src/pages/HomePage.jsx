import AchievementsPage from "../components/Pages/AchievementsPage"
import LandingPage from "../components/Pages/LandingPage"
import Notification from "../components/Pages/notification";
function HomePage() {
  return (
    <div>
      <LandingPage />
      <AchievementsPage />
      <Notification/>
    </div>
  )
}

export default HomePage