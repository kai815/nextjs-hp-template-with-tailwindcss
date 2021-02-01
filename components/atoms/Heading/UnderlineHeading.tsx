import React, { FC } from "react";

type UnderLineHeading = {
  text: string;
};

const UnderLineHeading: FC<UnderLineHeading> = (props) => {
  return <h3 className="heading-underline">{props.text}</h3>;
};

export default UnderLineHeading;
