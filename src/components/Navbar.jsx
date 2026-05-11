import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { menu, close } from "../assets";

const Navbar = ({ leading = null }) => {
  const { pathname } = useLocation();
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  /** Router index route — hash-only navigation should scroll, not reload */
  const onIndexRoute = pathname === "/" || pathname === "";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observers = [];
    navLinks.forEach(({ id, title }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(title); },
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-4 fixed top-0 z-[100] transition-all duration-500 pointer-events-auto ${
        scrolled
          ? "glass border-b border-white/5 shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {leading ?? (
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
        )}

        {/* Desktop links */}
        <ul className="list-none hidden sm:flex flex-row gap-8">
          {navLinks.map((nav) => (
            <li key={nav.id}>
              <Link
                to={{ pathname: "/", hash: nav.id }}
                onClick={(e) => {
                  setActive(nav.title);
                  if (onIndexRoute) {
                    e.preventDefault();
                    document.getElementById(nav.id)?.scrollIntoView({ behavior: "smooth", block: "start" });
                    window.history.replaceState(null, "", `#${nav.id}`);
                  }
                }}
                className={`nav-link relative z-[1] cursor-pointer text-[15px] font-medium transition-colors duration-200 pointer-events-auto ${
                  active === nav.title ? "text-white active" : "text-white/50 hover:text-white"
                }`}
              >
                {nav.title}
              </Link>
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
              !toggle ? "opacity-0 pointer-events-none scale-95" : "opacity-100 scale-100 pointer-events-auto"
            } glass absolute top-16 right-4 min-w-[160px] z-[110] rounded-2xl p-5 transition-all duration-200 border border-white/10`}
          >
            <ul className="list-none flex flex-col gap-4">
              {navLinks.map((nav) => (
                <li key={nav.id}>
                  <Link
                    to={{ pathname: "/", hash: nav.id }}
                    onClick={(e) => {
                      setToggle(false);
                      setActive(nav.title);
                      if (onIndexRoute) {
                        e.preventDefault();
                        document.getElementById(nav.id)?.scrollIntoView({ behavior: "smooth", block: "start" });
                        window.history.replaceState(null, "", `#${nav.id}`);
                      }
                    }}
                    className={`block w-full text-left text-[15px] font-medium transition-colors cursor-pointer pointer-events-auto ${
                      active === nav.title ? "text-white" : "text-white/50"
                    }`}
                  >
                    {nav.title}
                  </Link>
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
