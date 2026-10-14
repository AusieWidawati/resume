import { useEffect, useState } from "react";

/** Phones/tablets: no hover and a coarse (finger) pointer. */
const TOUCH_QUERY = "(hover: none) and (pointer: coarse)";

const matches = (query) =>
  typeof window !== "undefined" && window.matchMedia(query).matches;

/** Re-renders when the media query result changes (e.g. rotation, devtools emulation). */
export const useMediaQuery = (query) => {
  const [value, setValue] = useState(() => matches(query));

  useEffect(() => {
    const mql = window.matchMedia(query);
    const onChange = (e) => setValue(e.matches);
    setValue(mql.matches);
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, [query]);

  return value;
};

export const useIsTouch = () => useMediaQuery(TOUCH_QUERY);

/** Locks page scroll while `locked` is true (modals, sheets, menus). */
export const useLockBodyScroll = (locked) => {
  useEffect(() => {
    if (!locked) return undefined;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [locked]);
};
