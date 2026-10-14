import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { menu, close } from "../assets";
import { useLockBodyScroll } from "../utils/device";

const Navbar = ({ leading = null }) => {
  const { pathname } = useLocation();
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  /** Router index route — hash-only navigation should scroll, not reload */
  const onIndexRoute = pathname === "/" || pathname === "";

  useLockBodyScroll(toggle);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!toggle) return undefined;
    const onKey = (e) => e.key === "Escape" && setToggle(false);
    const onResize = () => window.innerWidth >= 1024 && setToggle(false);
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [toggle]);

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
    <>
      {/* Mobile menu backdrop — outside <nav>: its backdrop-filter would trap a fixed child */}
      <div
        className={`lg:hidden fixed inset-0 z-[99] bg-black/50 backdrop-blur-[2px] transition-opacity duration-200 ${
          toggle ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setToggle(false)}
        aria-hidden
      />
      <nav
        className={`${styles.paddingX} pt-safe w-full flex flex-col fixed top-0 z-[100] transition-all duration-500 pointer-events-auto ${
          scrolled || toggle
            ? "glass border-b border-white/5 shadow-lg shadow-black/20"
            : "bg-transparent"
        }`}
      >
        <div className="w-full flex justify-between items-center max-w-7xl mx-auto py-2.5 lg:py-4">
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
          <ul className="list-none hidden lg:flex flex-row gap-6 xl:gap-8">
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
          <div className="lg:hidden flex flex-1 justify-end items-center">
            <button
              type="button"
              onClick={() => setToggle(!toggle)}
              className="flex h-11 w-11 items-center justify-center rounded-xl glass active:scale-95 transition-transform"
              aria-label={toggle ? "Close menu" : "Open menu"}
              aria-expanded={toggle}
              aria-controls="mobile-menu"
            >
              <img src={toggle ? close : menu} alt="" className="w-5 h-5 object-contain" />
            </button>
          </div>
        </div>

        {/* Mobile sheet */}
        <div
          id="mobile-menu"
          className={`lg:hidden absolute left-3 right-3 top-full mt-2 rounded-2xl border border-white/10 bg-[#0d0b22]/95 backdrop-blur-xl p-2 shadow-2xl shadow-black/50 transition-all duration-200 origin-top ${
            toggle ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-[0.97] -translate-y-1 pointer-events-none"
          }`}
        >
          <ul className="list-none flex flex-col">
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
                  className={`flex min-h-[48px] w-full items-center justify-between rounded-xl px-4 text-[16px] font-medium transition-colors active:bg-white/10 ${
                    active === nav.title ? "text-white bg-white/[0.06]" : "text-white/65"
                  }`}
                >
                  {nav.title}
                  <span aria-hidden className={active === nav.title ? "text-[#915EFF]" : "text-white/25"}>→</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
