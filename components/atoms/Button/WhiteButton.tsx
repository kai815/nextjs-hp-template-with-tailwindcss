import React, { FC } from "react";

type WhiteButton = {
  text: string;
};

const WhiteButton: FC<WhiteButton> = (props) => {
  return (
    <button className="bg-white theme-navy-text theme-navy-border p-2 border-radius-30">
      {props.text}
    </button>
  );
};

export default WhiteButton;
