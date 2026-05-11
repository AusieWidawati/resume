import { useEffect, useId, useState } from 'react';
import {
  motion,
  useReducedMotion,
} from 'framer-motion';

/**
 * CustomCursor — layered hearts + sparkles (smooth motion).
 * Render once near the app root (e.g. inside BrowserRouter in App.jsx).
 */
const PINK = '#ff6ec7';
const HOT_PINK = '#ff3cac';
const PURPLE = '#c77dff';
const LILAC = '#e9d5ff';

/** Tuned for quick follow with minimal overshoot (smooth, slightly snappy). */
const SPRING_MAIN = {
  type: 'spring',
  stiffness: 540,
  damping: 46,
  mass: 0.48,
  restDelta: 0.0005,
  restSpeed: 0.0005,
};
const SPRING_MID = {
  type: 'spring',
  stiffness: 340,
  damping: 40,
  mass: 0.46,
  restDelta: 0.0005,
  restSpeed: 0.0005,
};
const SPRING_OUTER = {
  type: 'spring',
  stiffness: 210,
  damping: 34,
  mass: 0.44,
  restDelta: 0.0005,
  restSpeed: 0.0005,
};

/** Material-style heart, viewBox 0 0 24 24 */
const HEART_PATH =
  'M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z';

const SPARKLE_OFFSETS = [
  { x: 28, y: -22, s: 1, delay: 0 },
  { x: -26, y: -18, s: 0.85, delay: 0.12 },
  { x: 22, y: 24, s: 0.75, delay: 0.24 },
  { x: -30, y: 20, s: 0.9, delay: 0.08 },
  { x: 4, y: -36, s: 0.7, delay: 0.18 },
  { x: -12, y: 32, s: 0.8, delay: 0.28 },
  { x: 36, y: 8, s: 0.65, delay: 0.04 },
  { x: -34, y: -6, s: 0.72, delay: 0.2 },
];

function isHoverable(el) {
  if (!el || !(el instanceof HTMLElement)) return false;
  if (el.tagName === 'BUTTON' || el.tagName === 'A') return true;
  return !!(
    el.closest('button') ||
    el.closest('a') ||
    el.closest('[data-cursor-hover]')
  );
}

function HeartSvg({
  size,
  fill,
  fillGradientId,
  stroke,
  strokeWidth = 0,
  filter,
  style,
}) {
  const fillRef = fill && fillGradientId ? `url(#${fillGradientId})` : 'none';
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      style={{ overflow: 'visible', ...style }}
      aria-hidden
    >
      {fill && fillGradientId && (
        <defs>
          <linearGradient id={fillGradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={HOT_PINK} />
            <stop offset="45%" stopColor={PINK} />
            <stop offset="100%" stopColor={PURPLE} />
          </linearGradient>
        </defs>
      )}
      <path
        d={HEART_PATH}
        fill={fillRef}
        stroke={stroke || 'none'}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
        filter={filter}
      />
    </svg>
  );
}

function Sparkle({ x, y, scale, delay, reduceMotion }) {
  return (
    <motion.svg
      width={12}
      height={12}
      viewBox="0 0 12 12"
      className="absolute"
      style={{ left: x, top: y, marginLeft: -6, marginTop: -6 }}
      initial={false}
      animate={
        reduceMotion
          ? { opacity: 0.55, scale: scale * 0.9 }
          : {
              opacity: [0.2, 1, 0.15, 0.85, 0.2],
              scale: [scale * 0.6, scale * 1.25, scale * 0.5, scale, scale * 0.6],
              rotate: [0, 180, 360],
            }
      }
      transition={
        reduceMotion
          ? { duration: 0.2 }
          : {
              duration: 1.6,
              repeat: Infinity,
              ease: 'easeInOut',
              delay,
            }
      }
      aria-hidden
    >
      <path
        d="M6 0L7.2 4.2L12 6L7.2 7.8L6 12L4.8 7.8L0 6L4.8 4.2Z"
        fill={LILAC}
        stroke={PINK}
        strokeWidth="0.4"
      />
    </motion.svg>
  );
}

export function CustomCursor() {
  const reduceMotion = useReducedMotion();
  const heartFillId = useId().replace(/:/g, '');
  const [active] = useState(
    () =>
      typeof window !== 'undefined' &&
      window.matchMedia('(pointer: fine)').matches
  );
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    if (!active) return undefined;

    document.body.classList.add('custom-cursor-active');

    const updateFromEvent = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      const under = document.elementFromPoint(e.clientX, e.clientY);
      setIsHovering(isHoverable(under));
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    document.addEventListener('mousemove', updateFromEvent);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.body.classList.remove('custom-cursor-active');
      document.removeEventListener('mousemove', updateFromEvent);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [active]);

  if (!active) return null;

  const baseFixed = {
    position: 'fixed',
    top: 0,
    left: 0,
    pointerEvents: 'none',
  };

  const mainSize = 44;
  const midSize = 62;
  const outerSize = 82;
  const halfMain = mainSize / 2;
  const halfMid = midSize / 2;
  const halfOuter = outerSize / 2;

  const hoverScale = isHovering ? 1.18 : 1;
  const clickScale = isClicking ? 0.82 : 1;

  return (
    <>
      {/* Outer glow heart (soft stroke) */}
      <motion.div
        style={{ ...baseFixed, zIndex: 9994 }}
        animate={{
          x: mousePosition.x - halfOuter,
          y: mousePosition.y - halfOuter,
          scale: hoverScale * clickScale * 1.02,
          opacity: isHovering ? 0.45 : 0.22,
        }}
        transition={SPRING_OUTER}
      >
        <HeartSvg
          size={outerSize}
          fill={false}
          stroke="rgba(255, 110, 199, 0.55)"
          strokeWidth={1.5}
        />
      </motion.div>

      {/* Mid outline heart — extra pink “line” */}
      <motion.div
        style={{ ...baseFixed, zIndex: 9995 }}
        animate={{
          x: mousePosition.x - halfMid,
          y: mousePosition.y - halfMid,
          scale: hoverScale * clickScale,
          opacity: isHovering ? 0.75 : 0.5,
        }}
        transition={SPRING_MID}
      >
        <HeartSvg
          size={midSize}
          fill={false}
          stroke={PINK}
          strokeWidth={2}
        />
      </motion.div>

      {/* Sparkles (follow main heart smoothly) */}
      <motion.div
        style={{ ...baseFixed, zIndex: 9996 }}
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
        }}
        transition={SPRING_MAIN}
      >
        <div
          className="absolute"
          style={{ transform: 'translate(-50%, -50%)', width: 0, height: 0 }}
        >
          {SPARKLE_OFFSETS.map((s, i) => (
            <Sparkle
              key={i}
              x={s.x}
              y={s.y}
              scale={s.s}
              delay={s.delay}
              reduceMotion={reduceMotion}
            />
          ))}
        </div>
      </motion.div>

      {/* Main filled heart */}
      <motion.div
        style={{ ...baseFixed, zIndex: 9999 }}
        animate={{
          x: mousePosition.x - halfMain,
          y: mousePosition.y - halfMain,
          scale: hoverScale * clickScale * (isHovering ? 1.06 : 1),
        }}
        transition={SPRING_MAIN}
      >
        <HeartSvg
          size={mainSize}
          fill
          fillGradientId={heartFillId}
          stroke={LILAC}
          strokeWidth={0.6}
          filter="drop-shadow(0 0 10px rgba(255,110,199,0.9)) drop-shadow(0 0 4px rgba(124,58,237,0.6))"
        />
      </motion.div>
    </>
  );
}
