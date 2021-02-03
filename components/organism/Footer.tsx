import React, { FC } from "react";

const Footer: FC = () => {
  return (
    <nav className="theme-navy-background">
      <h2 className="text-white">車のあいみつ</h2>
      <ul>
        <li>
          <p className="text-white">TOP</p>
        </li>
        <li>
          <p className="text-white">サービス</p>
        </li>
        <li>
          <p className="text-white">お問い合わせ</p>
        </li>
      </ul>
    </nav>
  );
};

export default Footer;
