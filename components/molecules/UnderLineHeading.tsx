import React, { FC } from "react";
import Heading from "../atoms/Heading/index";
type UndrLineHeading = {
  text: string;
};

const NavyButton: FC<UndrLineHeading> = (props) => {
  return (
    <div className="heading-underline">
      <Heading text={props.text} />
    </div>
  );
};

export default NavyButton;
