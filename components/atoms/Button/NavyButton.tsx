import React, { VFC } from "react";

type Props = {
  text: string;
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const NavyButton: VFC<Props> = ({ text, ...props }) => {
  return (
    <button {...props} className="theme-navy text-white p-2 border-radius-30">
      {text}
    </button>
  );
};

export default NavyButton;
