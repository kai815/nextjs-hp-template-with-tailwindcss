import React, { FC } from "react";

type NavyButton = {
  text: string;
};

const NavyButton: FC<NavyButton> = (props) => {
  const onClickButton = () => {
    console.log("Click");
  };
  return (
    <button
      className="theme-navy text-white p-2 border-radius-30"
      onClick={onClickButton}
    >
      {props.text}
    </button>
  );
};

export default NavyButton;
