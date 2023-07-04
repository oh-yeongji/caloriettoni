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
import Footer from "./components/Footer";
import React, { useState } from "react";
// import { useEffect } from "react";

// import { getHealthCate } from "./api/writefetch";

function App() {
  const [thisDate, setThisDate] = useState(null);
  // useEffect(() => {
  //   getHealthCate();
  // }, []);

  return (
    <div className="wrap">
      <Routes>
        <Route path="/" element={<Intro />}></Route>
        <Route path="/main" element={<Main />}></Route>
        <Route path="/diet" element={<Diet />}></Route>
        <Route path="/health" element={<Health />}></Route>
        <Route
          path="/schedule"
          element={<Schedule thisDate={thisDate} setThisDate={setThisDate} />}
        ></Route>
        <Route path="/list" element={<List thisDate={thisDate} />}></Route>
        <Route path="/mypage" element={<MyPage />}></Route>
        <Route path="/notfound" element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
