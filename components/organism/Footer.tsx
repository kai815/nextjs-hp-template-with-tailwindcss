import React, { FC } from "react";
import WhiteButton from "../atoms/Button/WhiteButton";

const Footer: FC = () => {
  return (
    <nav className="theme-navy-background">
      <div className="flex justify-center flex-col">
        <h2 className="text-white">車のあいみつ</h2>
        <WhiteButton text="お問い合わせ" />
      </div>
    </nav>
  );
};

export default Footer;
