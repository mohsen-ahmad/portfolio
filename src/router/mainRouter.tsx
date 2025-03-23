import { Route, Routes } from "react-router-dom";
import AppContent from "../components/app-content/app-content";
import Home from "../pages/home";
import About from "../pages/about";
import Skills from "../pages/skills";
import Experience from "../pages/expereience";


const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<AppContent/>}>
      <Route index element={<Home/>}/>
      
      <Route path="/about" element={<About/>}/>
      <Route path="/skills" element={<Skills/>}/>
      <Route path="/experience" element={<Experience/>}/>

      </Route>
      
    </Routes>
  )
}

export default MainRouter;
