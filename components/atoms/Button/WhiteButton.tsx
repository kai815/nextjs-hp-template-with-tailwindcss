import React, { VFC } from "react";

type Props = {
  text: string;
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const WhiteButton: VFC<Props> = ({ text, ...props }) => {
  return (
    <button
      {...props}
      className="bg-white theme-navy-text theme-navy-border p-2 border-radius-30"
    >
      {text}
    </button>
  );
};

export default WhiteButton;
