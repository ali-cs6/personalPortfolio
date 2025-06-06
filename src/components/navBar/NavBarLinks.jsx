import React from "react";
import { Link } from "react-scroll";

const links = [
  { link: "About Me", section: "about" },
  { link: "Skills", section: "skills" },
  { link: "Experience", section: "experience" },
  { link: "Projects", section: "projects" },
  { link: "Contact", section: "contact" },
];

function NavBarLinks() {
  return (
    <ul className="flex gap-6 md:max-lg:gap-3 text-white font-bold text-center py-4 md:flex-row flex-col md:relative absolute top-[120%] left-[50%] -translate-x-[50%] md:text-md text-xl bg-cyan/30 backdrop-blur-lg md:bg-black w-full">
      {links.map((link, index) => {
        return (
          <li key={index} className="group">
            <Link
              to={link.section}
              smooth={true}
              spy={true}
              offset={-130}
              className="curser-pointer text-white hover:text-cyan transition-all duration-500"
            >
              {link.link}
            </Link>
            <div className="mx-auto bg-cyan w-0 group-hover:w-full h-[2px] transition-all duration-500"></div>
          </li>
        );
      })}
    </ul>
  );
}

export default NavBarLinks;
