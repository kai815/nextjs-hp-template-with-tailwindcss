import React, { VFC } from "react";

type Props = {
  text: string;
};

const Heading: VFC<Props> = ({ text }) => {
  return <h3>{text}</h3>;
};

export default Heading;
