import React from "react";

type Props = {
  text: string;
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const WhiteButton = ({ text, ...props }: Props) => {
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
