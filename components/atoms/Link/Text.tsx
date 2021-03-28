import React, { VFC } from "react";
import Link from "next/link";

type Props = {
  text: string;
  href: string;
  textColorClass: string;
};

const LinkText: VFC<Props> = ({ text, href, textColorClass }) => {
  return (
    <>
      <Link href={href} prefetch>
        <span className={textColorClass}>{text}</span>
      </Link>
    </>
  );
};

export default LinkText;
