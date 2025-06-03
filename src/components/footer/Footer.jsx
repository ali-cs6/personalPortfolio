import React from "react";
import { MdCopyright } from "react-icons/md";
import { Link } from "react-scroll";

const links = [
  { link: "About Me", section: "about" },
  { link: "Skills", section: "skills" },
  { link: "Experience", section: "experience" },
  { link: "Projects", section: "projects" },
  { link: "Contact", section: "contact" },
];

function Footer() {
  return (
    <div className="w-full flex items-center justify-end md:justify-between gap-5 text-lightGrey p-5 font-body border-t-2 border-lightgrey mt-15 mb-3">
      <div className="hidden md:block text-6xl font-logo">Brkat Ali</div>
      <div>
        <div className="flex flex-col">
          <ul className="flex gap-3">
            {links.map((item, index) => (
              <li
                key={index}
                className="text-lg msm:text-xl hover:text-cyan transition-all duration-500"
              >
                <Link smooth={true} spy={true} offset={-130} to={item.section}>
                  {item.link}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex gap-3 items-center justify-end mt-3">
            <MdCopyright />
            <p className="text-lg msm:text-xl">
              2025 Ali | All rights reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
