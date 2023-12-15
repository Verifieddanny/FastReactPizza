import React from "react";
import { Link } from "react-router-dom";
import pizza from "../assets/pizza.png";
import SearchOrder from "../features/order/SearchOrder";
import UserName from "../features/user/UserName";

function Header() {
  return (
    <header className="flex items-center justify-between border-b border-stone-200 bg-yellow-400 px-4 py-3 uppercase sm:px-6 ">
      <Link
        to="/"
        className="tracking-widest flex items-center hover:scale-125 duration-500 transition-all"
      >
        {" "}
        Fast react
        <img
          src={pizza}
          alt="fast-pizza-logo"
          className="drop-shadow-lg w-[2.2rem] "
        />{" "}
        co
      </Link>
      <SearchOrder />
      <UserName />
    </header>
  );
}

export default Header;
