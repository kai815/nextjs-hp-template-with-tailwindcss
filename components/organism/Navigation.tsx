import React, { VFC } from "react";
import LinkText from "../atoms/Link/Text";

const Navigation: VFC = () => {
  return (
    <nav className="theme-green-background h-screen px-2">
      <h2 className="text-white">車のあいみつ</h2>
      <div className="absolute top-2.5 right-6">
        <span className="text-white inline-block p-2">×</span>
      </div>
      <div className="flex flex-col items-center">
        <ul>
          <li>
            <LinkText text="TOP" href="/" textColorClass="text-white" />
          </li>
          <li>
            <LinkText text="サービス" href="/" textColorClass="text-white" />
          </li>
          <li>
            <LinkText
              text="お問い合わせ"
              href="/"
              textColorClass="text-white"
            />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
