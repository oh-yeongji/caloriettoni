import { Routes, Route } from "react-router-dom";
import "./App.css";
import Intro from "./pages/Intro";
import Main from "./pages/Main";
import Diet from "./pages/Diet";
import Health from "./pages/Health";
import MyPage from "./pages/MyPage";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/intro" element={<Intro />}></Route>
        <Route path="/main" element={<Main />}></Route>
        <Route path="/diet" element={<Diet />}></Route>
        <Route path="/health" element={<Health />}></Route>
        <Route path="/mypage" element={<MyPage />}></Route>
        <Route path="/notfound" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
