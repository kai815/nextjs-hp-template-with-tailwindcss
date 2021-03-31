import React, { VFC } from "react";

type UnderLineHeading = {
  text: string;
};

const UnderLineHeading: VFC<UnderLineHeading> = ({ text }) => {
  return <h3 className="heading-underline">{text}</h3>;
};

export default UnderLineHeading;
