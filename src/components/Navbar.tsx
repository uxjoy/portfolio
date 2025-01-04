import React, { useState } from "react";
import Link from "next/link";
import UseAnimations from "react-useanimations";
import linkedin from "react-useanimations/lib/linkedin";
import dribbble from "react-useanimations/lib/dribbble";

const Navbar = () => {
  const [hovered, setHovered] = useState<string | null>(null);

  const handleMouseEnter = (platform: string) => {
    setHovered(platform);
  };

  const handleMouseLeave = () => {
    setHovered(null);
  };

  return (
    <ul>
      <li className="relative group" onMouseEnter={() => handleMouseEnter("linkedin")} onMouseLeave={handleMouseLeave}>
        <Link
          href={"https://www.linkedin.com/in/uxjoy"}
          target="_blank"
          className="p-2 block rounded-full bg-linkedin group"
          aria-label="Linkedin link for more information"
        >
          <UseAnimations
            animation={linkedin}
            size={20}
            strokeColor="white"
            autoplay={hovered === "linkedin"}
            loop={true}
          />
        </Link>
        {hovered === "linkedin" && <SocialTooltip text="Linkedin" />}
      </li>
      <li className="relative group" onMouseEnter={() => handleMouseEnter("dribbble")} onMouseLeave={handleMouseLeave}>
        <Link
          href={"https://dribbble.com/uxjoy_"}
          target="_blank"
          className="p-2 block rounded-full bg-dribbble group"
          aria-label="Dribbble link for more information"
        >
          <UseAnimations
            animation={dribbble}
            size={20}
            strokeColor="white"
            autoplay={hovered === "dribbble"}
            loop={true}
          />
        </Link>
        {hovered === "dribbble" && <SocialTooltip text="Dribbble" />}
      </li>
    </ul>
  );
};

export default Navbar;
