import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomeLayout from "./Layouts/HomeLayout"
import HomePage from "./pages/HomePage"
import DashboardLayout from "./Layouts/DashboardLayout"
import DashboardPage from "./pages/DashboardPage"
import AboutUs from "./pages/AboutUs"
import Services from "./pages/Services"
import Programs from "./pages/Programs"
import StartUp from "./pages/StartUp"
import Testmonial from "./pages/Testmonial"
import Signin from "./Auth/Signin"
import Signup from "./Auth/Signup"
import Event from "./pages/Dashboard/Event"
import User from "./pages/Dashboard/User"
import Settings from "./pages/Dashboard/Settings"
import Help from "./pages/Dashboard/Help"
import IncubeRegister from "./components/Pages/IncubeRegister"
import "./index.css"
import { StartContextProvider } from "./Context/StartContext"

function App() {

  return (
    <div className="App">
      <StartContextProvider>
        <Router>
          <Routes>
            <Route path="dashboard" element={<DashboardLayout />}>
              <Route index element={<DashboardPage />} />
              <Route path="event" element={<Event />} />
              <Route path="user" element={<User />} />
              <Route path="setting" element={<Settings />} />
              <Route path="help" element={<Help />} />
            </Route>
            <Route path="/" element={<HomeLayout />}>
              <Route index element={<HomePage />} />
              <Route path="about" element={<AboutUs />} />
              <Route path="service" element={<Services />} />
              <Route path="/incube" element={<IncubeRegister />} />
              <Route path="program" element={<Programs />} />
              <Route path="startup" element={<StartUp />} />
              <Route path="testimonial" element={<Testmonial />} />
              <Route path="signin" element={<Signin />}/>
              <Route path="signup" element={<Signup />} />
            </Route>
          </Routes>
        </Router>
      </StartContextProvider>
    </div>
  );
}

export default App;

