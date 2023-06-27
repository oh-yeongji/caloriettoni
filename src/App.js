import { Routes, Route } from "react-router-dom";
import "./App.css";
import Intro from "./pages/Intro";
import Main from "./pages/Main";
import Diet from "./pages/Diet";
import Health from "./pages/Health";
import MyPage from "./pages/MyPage";
import NotFound from "./pages/NotFound";
import Schedule from "./pages/Schedule";
import List from "./pages/List";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/intro" element={<Intro />}></Route>
        <Route path="/main" element={<Main />}></Route>
        <Route path="/diet" element={<Diet />}></Route>
        <Route path="/health" element={<Health />}></Route>
        <Route path="/schedule" element={<Schedule />}></Route>
        <Route path="/list" element={<List />}></Route>
        <Route path="/mypage" element={<MyPage />}></Route>
        <Route path="/notfound" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
