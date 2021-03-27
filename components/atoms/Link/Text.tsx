import React, { VFC } from "react";
import Link from "next/link";

type Props = {
  text: string;
  href: string;
};

const LinkText: VFC<Props> = ({ text, href }) => {
  return (
    <>
      <Link href={href}>{text}</Link>
    </>
  );
};

export default LinkText;
