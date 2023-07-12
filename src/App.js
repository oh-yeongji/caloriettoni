import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import "./App.css";
import Intro from "./pages/Intro";
import Main from "./pages/Main";
import Diet from "./pages/Diet";
import Health from "./pages/Health";
import NotFound from "./pages/NotFound";
import Schedule from "./pages/Schedule";
import List from "./pages/List";
import Footer from "./components/Footer";
import { useEffect } from "react";

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const hideFooterOnIntro = location.pathname === "/";

  useEffect(() => {
    if (location.pathname === "/") {
      const timeoutId = setTimeout(() => {
        navigate("/main");
      }, 2000);

      return () => clearTimeout(timeoutId);
    }
  }, [location.pathname, navigate]);

  return (
    <div className="wrap">
      <Routes>
        <Route path="/" element={<Intro />}></Route>
        <Route path="/main" element={<Main />}></Route>
        <Route path="/diet" element={<Diet />}></Route>
        <Route path="/health" element={<Health />}></Route>
        <Route path="/schedule/" element={<Schedule />}></Route>
        <Route path="/list/:date" element={<List />}></Route>
        <Route path="/notfound" element={<NotFound />}></Route>
      </Routes>
      {!hideFooterOnIntro && <Footer />}
    </div>
  );
}

export default App;
