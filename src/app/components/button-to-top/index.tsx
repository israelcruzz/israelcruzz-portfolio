"use client";

import { useEffect, useState } from "react";
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";

export const ButtonToTop = () => {
  const [viewButton, setViewButton] = useState<boolean>(true);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.screenY > 100) {
        setViewButton(true);
      } else {
        setViewButton(false);
      }
    });
  }, []);

  const handleClickScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {viewButton && (
        <button
          onClick={() => handleClickScrollToTop}
          className="flex items-center justify-center bg-emerald-500 hover:bg-emerald-800 p-2 rounded-lg"
        >
          <MdOutlineKeyboardDoubleArrowUp size={24} color="#FFFFFF" />
        </button>
      )}
    </>
  );
};
