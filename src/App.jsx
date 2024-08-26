import { HeadBar } from "./assets/HeadBar";
import { Route, Routes } from "react-router-dom";
import Login from "./assets/component/Login";
import Login2 from "./assets/component/Login2";
import FooterPage from "./assets/component/FooterPage";
// import Story from "./assets/component/Story";
import "./App.css"
import Main from "./assets/component/Main";
function App() {
  return (
    <div className="container1">
      <div className="head">
        <Routes>
          <Route path="/login" element={<Login />} />

          <Route path="/login2" element={<Login2 />} />
        </Routes>
        <HeadBar />
      </div>
      {/* <div className="slider">
        <Story />
      </div> */}
      <div className="mainBody">
        < Main />
      </div>
      <div className="footer">
        <FooterPage />
      </div>
    </div>
  );
}
export default App;
