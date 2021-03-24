import React, { VFC } from "react";

type UnderLineHeading = {
  text: string;
};

const UnderLineHeading: VFC<UnderLineHeading> = (props) => {
  return <h3 className="heading-underline">{props.text}</h3>;
};

export default UnderLineHeading;
