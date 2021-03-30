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
      {/* TODO環境変数でプリフェッチ変更 */}
      <Link href={href} prefetch={false}>
        <span className={textColorClass}>{text}</span>
      </Link>
    </>
  );
};

export default LinkText;
