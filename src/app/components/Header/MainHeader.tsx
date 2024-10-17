import React from "react";
import Counter from "./Counter";
import Logo from "./Logo";

function MainHeader() {
  return (
    <header className="col-[1/3] row-[1/2] bg-[#edf3fb] border-b border-black/[0.08] flex justify-between items-center">
      <Logo />
      <Counter />
    </header>
  );
}

export default MainHeader;
