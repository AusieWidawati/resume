import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-4 fixed top-0 z-20 transition-all duration-500 ${
        scrolled
          ? "glass border-b border-white/5 shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2 group"
          onClick={() => { setActive(""); window.scrollTo(0, 0); }}
        >
          <span className="text-[18px] font-bold text-white tracking-tight">
            Ausie
          </span>
          <span className="hidden sm:inline text-[18px] font-light text-white/40 tracking-tight">
            / Portfolio
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#915EFF] group-hover:scale-150 transition-transform duration-300" />
        </Link>

        {/* Desktop links */}
        <ul className="list-none hidden sm:flex flex-row gap-8">
          {navLinks.map((nav) => (
            <li key={nav.id}>
              <a
                href={`#${nav.id}`}
                onClick={() => setActive(nav.title)}
                className={`nav-link text-[15px] font-medium transition-colors duration-200 ${
                  active === nav.title ? "text-white active" : "text-white/50 hover:text-white"
                }`}
              >
                {nav.title}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <button
            onClick={() => setToggle(!toggle)}
            className="p-1.5 rounded-lg glass"
            aria-label="Toggle menu"
          >
            <img src={toggle ? close : menu} alt="menu" className="w-6 h-6 object-contain" />
          </button>

          <div
            className={`${
              !toggle ? "opacity-0 pointer-events-none scale-95" : "opacity-100 scale-100"
            } glass absolute top-16 right-4 min-w-[160px] z-10 rounded-2xl p-5 transition-all duration-200 border border-white/10`}
          >
            <ul className="list-none flex flex-col gap-4">
              {navLinks.map((nav) => (
                <li key={nav.id}>
                  <a
                    href={`#${nav.id}`}
                    onClick={() => { setToggle(false); setActive(nav.title); }}
                    className={`text-[15px] font-medium transition-colors ${
                      active === nav.title ? "text-white" : "text-white/50"
                    }`}
                  >
                    {nav.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
