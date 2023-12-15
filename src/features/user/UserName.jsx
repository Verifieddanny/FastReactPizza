import React from "react";
import { useSelector } from "react-redux";

function UserName() {
  const userName = useSelector((state) => state.user.username);

  if (!userName) return null;
  return <p className="text-sm font-semibold hidden md:block">{userName}</p>;
}

export default UserName;
