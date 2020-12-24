import React, { FC } from "react";

type NavyButton = {
  text: string;
};

const NavyButton: FC<NavyButton> = (props) => {
  return (
    <button className="theme-navy text-white p-2 border-radius-30">
      {props.text}
    </button>
  );
};

export default NavyButton;
