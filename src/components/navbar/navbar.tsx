import { useNavigate } from "react-router-dom";
import logo from "../../assets/٢٠٢٤٠١١٤_١١١١٠٦.jpg";
import { useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<string>("home");

  return (
    <div className="navBar">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="list">
        <ul>
          <li
            onClick={() => {
              navigate("/");
              setSelected("home");
            }}
            className={selected === "home" ? "select" : ""}
          >
            <a>Home</a>
          </li>
          <li
            onClick={() => {
              navigate("/about");
              setSelected("about");
            }}
            className={selected === "about" ? "select" : ""}
          >
            <a>About</a>
          </li>
          <li
            onClick={() => {
              navigate("/skills");
              setSelected("skills");
            }}
            className={selected === "skills" ? "select" : ""}
          >
            <a>Skills</a>
          </li>
          <li
            onClick={() => {
              navigate("/experience");
              setSelected("experience");
            }}
            className={selected === "experience" ? "select" : ""}
          >
            <a>Experience</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
