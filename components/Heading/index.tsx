import React, { FC } from "react";

type Heading = {
  text: string;
};

const Heading: FC<Heading> = (props) => {
  return <h3>{props.text}</h3>;
};

export default Heading;
