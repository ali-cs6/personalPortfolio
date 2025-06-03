import React, { useState } from "react";
import NavBarLogo from "./NavBarLogo.jsx";
import NavBarLinks from "./NavBarLinks.jsx";
import NavBarBtn from "./NavBarBtn.jsx";
import { GiHamburgerMenu } from "react-icons/gi";

function NavBarMain() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    // console.log("Button clicked");
  };

  return (
    <nav className="max-w-[1300px] mx-auto w-full px-4 fixed left-[50%] -translate-x-[50%] z-20 flex gap-4 mt-2">
      <div className="flex justify-between w-full max-w-[1200] mx-auto bg-black items-center md:p-6 ms:p-5 p-2 rounded-r-full rounded-l-full border-[0.5px] border-orange">
        <NavBarLogo />
        <div className={`${menuOpen ? "sm:block" : "hidden"} md:block`}>
          <NavBarLinks />
        </div>
        <NavBarBtn />
      </div>
      <div className="md:hidden block p-6 bg-black rounded-full border-[0.5px] border-orange">
        <button
          className="text-2xl p-3 border border-orange rounded-full text-white"
          onClick={toggleMenu}
        >
          <GiHamburgerMenu />
        </button>
      </div>
    </nav>
  );
}

export default NavBarMain;
