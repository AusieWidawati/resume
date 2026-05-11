"use client"

/**
 * RoleTypeWriterPortable — single-file typewriter that cycles through a list
 * of roles/phrases (the same effect used in HeroSection.tsx).
 *
 * Dependency (install in the target project):
 *   npm install react-type-animation
 *
 * Usage:
 *   <RoleTypeWriterPortable />
 *
 *   // Custom list (strings = text to type, numbers = pause in ms after the
 *   // previous string):
 *   <RoleTypeWriterPortable
 *     sequences={[
 *       "Designer", 1500,
 *       "Builder",  1500,
 *       "Shipper",  2000,
 *     ]}
 *     speed={40}
 *     className="text-3xl font-bold text-pink-500"
 *   />
 */

import { TypeAnimation } from "react-type-animation"

const DEFAULT_ROLES: (string | number)[] = [
  "Full Stack Developer",
  2000,
  "AI Delivery Lead",
  2000,
  "Problem Solver",
  2000,
  "Technical Architect",
  2000,
]

export interface RoleTypeWriterPortableProps {
  /**
   * Alternating list of strings (typed) and numbers (pause in ms).
   * Defaults to the four roles from HeroSection.
   */
  sequences?: (string | number)[]
  /** Typing speed (1–99, higher = faster). Default 30. */
  speed?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 99
  /** Repeat forever? Default true. */
  repeat?: boolean
  /** className applied to the rendered <span>. */
  className?: string
}

export function RoleTypeWriterPortable({
  sequences = DEFAULT_ROLES,
  speed = 30,
  repeat = true,
  className,
}: RoleTypeWriterPortableProps) {
  return (
    <TypeAnimation
      sequence={sequences}
      wrapper="span"
      speed={speed}
      style={{ display: "inline-block" }}
      repeat={repeat ? Infinity : 0}
      className={className}
    />
  )
}

export default RoleTypeWriterPortable
