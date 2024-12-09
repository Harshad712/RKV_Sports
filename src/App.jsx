import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./components/Home";
import Tournments from "./components/Tournments";
import Livescore from "./components/Livescore";
import News from "./components/News";
import Footer from "./components/Footer";
import Dept from "./components/Dept";
import Login from "./components/Login";
import User from "./components/user/User";
import Signup from "./components/Signup";
import KabbaddiRegistration from "./components/KabbaddiRegistration";
import CricRegister from "./components/CricRegister";
import BasketballRegister from "./components/BasketballRegister";
import BadmintonRegister from "./components/BadmintonRegister";
import HockeyRegister from "./components/HockeyRegister";
import SportsState from "./components/context/SportsState";
import AuthState from "./components/context/AuthState";
import AdminPage from "./components/Admin/AdminPage";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    
    <SportsState>
    <Router>
    <AuthState>
      <div className="d-flex flex-column min-vh-100"> {/* Flexbox layout */}
        <Navbar />
        <main className="flex-fill"> {/* Main content area */}
          <Routes>
            <Route exact path="/" element={<Home />} />
            

            {/* registration pages */}
            <Route exact path="/hockey" element={<HockeyRegister />} />
            <Route exact path="/cricket" element={<CricRegister />} />
            <Route exact path="/kabaddi" element={<KabbaddiRegistration />} />
            <Route exact path="/badminton" element={<BadmintonRegister />} />
            <Route exact path="/basketball" element={<BasketballRegister />} />



            <Route exact path="/tournaments" element={<Tournments />} />
            <Route exact path="/livescores" element={<Livescore />} />
            <Route exact path="/news" element={<News />} />
            <Route exact path="/dept" element={<AdminPage />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/profile" element={<User />} />
            <Route exact path="/signup" element={<Signup />} />
          </Routes>
        </main>
        <Footer />
      </div>
      </AuthState>
    </Router>
    </SportsState>
    
  );
}

export default App;
