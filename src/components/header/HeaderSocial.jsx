import React from "react";
import { CiLinkedin } from "react-icons/ci";
import { BsGithub } from "react-icons/bs";

const HeaderSocial = () => {
  return (
    <div className="header_socials">
      <a href="https://www.linkedin.com/in/mengyewgau/" target="_blank">
        <CiLinkedin />
      </a>
      <a href="https://www.github.com/mengyewgau" target="_blank">
        <BsGithub />
      </a>
    </div>
  );
};

export default HeaderSocial;
