"use client";

import { useState, useEffect } from "react";
import { FaFacebookF, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { PiButterflyFill } from "react-icons/pi";
import { FaTelegramPlane } from "react-icons/fa";
import { LuLink2 } from "react-icons/lu";

interface Props {
  sectionRef: React.RefObject<HTMLDivElement>;
}

export default function SocialSidebar({ sectionRef }: Props) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();

      // Show after top passes 100px, hide earlier than halfway point
      const isVisible =
        rect.top <= 100 && rect.bottom >= window.innerHeight / 2 + 150;

      setVisible(isVisible);
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionRef]);

  const icons = [
    { icon: <FaFacebookF />, link: "#" },
    { icon: <FaXTwitter />, link: "#" },
    { icon: <PiButterflyFill />, link: "#" },
    { icon: <FaLinkedinIn />, link: "#" },
    { icon: <FaWhatsapp />, link: "#" },
    { icon: <FaTelegramPlane />, link: "#" },
    { icon: <LuLink2 />, link: "#" },
  ];

  return (
    <div
      className={`fixed top-1/2 left-0 -translate-y-1/2 flex flex-col items-center border-l-2 border-red-600 p-1 z-50 transition-all duration-700 ease-in-out ${
        visible
          ? "translate-x-0 opacity-100"
          : "-translate-x-full opacity-0"
      }`}
      style={{ backgroundColor: "#4f4f48" }}
    >
      {icons.map((item, index) => (
        <a
          key={index}
          href={item.link}
          className="text-white text-lg md:text-lg lg:text-2xl my-2 w-8 h-8 p-2 flex items-center justify-center rounded-full border-2 border-white hover:bg-white hover:text-gray-800 transition-colors duration-300"
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
}
