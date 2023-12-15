import React from "react";
import { Link } from "react-router-dom";

function Button({ children, disabled, to, type, onClick }) {
  const base =
    "inline-block text-sm rounded-full bg-yellow-400  font-semibold uppercase tracking-wide text-stone-800 hover:bg-yellow-100 transition-colors duration-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed px-4  ";
  const styles = {
    primary: base + "md:px-6 md:py-4 py-3",
    small: base + "py-2 md:px-5 md:py-2.5 text-xs",
    round: base + " px-2.5 md:px-3.5 md:py-2 text-sm",
    secondary:
      base +
      "inline-block text-sm rounded-full border-2 bg-transparent border-stone-300 font-semibold uppercase tracking-wide text-stone-400 hover:bg-stone-300 transition-colors duration-300 hover:text-stone-800 focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed px-4  md:px-6 md:py-3.5 py-2.5",
  };
  if (to)
    return (
      <Link className={styles[type]} to={to}>
        {children}
      </Link>
    );
  if (onClick)
    return (
      <button onClick={onClick} className={styles[type]} to={to}>
        {children}
      </button>
    );
  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;

/*
 const className =
    "inline-block rounded-full bg-yellow-400 px-4 py-3 font-semibold uppercase tracking-wide text-stone-800 hover:bg-yellow-100 transition-colors duration-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed sm:px-6 sm:py-4";
    */
