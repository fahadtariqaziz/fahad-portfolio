// components/Social.js
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      <a href="https://linkedin.com/in/fahad-tariq-aziz-57675719a" target="_blank" rel="noopener noreferrer" className={iconStyles}>
        <FaLinkedin />
      </a>
      <a href="https://github.com/fahadtariqaziz" target="_blank" rel="noopener noreferrer" className={iconStyles}>
        <FaGithub />
      </a>
    </div>
  );
};

export default Social;
