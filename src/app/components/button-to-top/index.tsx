"use client";

import { useEffect, useState } from "react";
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";

export const ButtonToTop = () => {
  const [viewButton, setViewButton] = useState<boolean>();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.screenY > 500) {
        setViewButton(true);
      } else {
        setViewButton(false);
      }
    });
  }, []);

  const handleClickScrollToTop = () => {
    return window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {viewButton && (
        <button
          onClick={() => handleClickScrollToTop}
          className="flex items-center justify-center bg-emerald-500 p-6 rounded-lg"
        >
          <MdOutlineKeyboardDoubleArrowUp size={24} color="#FFFFFF" />
        </button>
      )}
    </>
  );
};
