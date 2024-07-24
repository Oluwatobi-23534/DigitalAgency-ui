/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { BsMoonStarsFill, BsSunFill } from "react-icons/bs";

const DarkMode = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const element = document.documentElement; // access to html element

  useEffect(() => {
    localStorage.setItem("theme", theme);
    if (theme === "dark") {
      element.classList.add("dark");
    } else {
      element.classList.remove("light");
      element.classList.remove("dark");
    }
  });

  return (
    <>
      {theme === "dark" ? (
        <BsSunFill onClick={() => setTheme("light")} className="text-2xl" />
      ) : (
        <BsMoonStarsFill
          onClick={() => setTheme("dark")}
          className="text-2xl"
        />
      )}
    </>
  );
};

export default DarkMode;
