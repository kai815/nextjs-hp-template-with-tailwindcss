import React, { FC } from "react";

type NavyButton = {
  text: string;
};

const NavyButton: FC<NavyButton> = (props) => {
  return (
    <button className="theme-navy text-white rounded-xl p-2">
      {props.text}
    </button>
  );
};

export default NavyButton;
