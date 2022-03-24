import "./MyFooter.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const MyFooter = () => {
  return (
    <footer className="myFooter">
      © 2022 Eventframe by James Chen. All rights reserved.
      <span>
        <a href="https://github.com/jameschen56/Eventframe">
          <FaGithub id="github" />
        </a>
        <a href="https://www.linkedin.com/in/james-chen56/">
          <FaLinkedinIn id="linkedin" />
        </a>
      </span>
    </footer>
  );
};

export default MyFooter;
