import React from "react";

function Loader() {
  return (
    <div className="absolute bg-slate-200/20 backdrop-blur inset-0 flex items-center justify-center z-[100rem]">
      <div className="loader"></div>
    </div>
  );
}

export default Loader;
