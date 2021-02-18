import React, { FC } from "react";
import WhiteButton from "../atoms/Button/WhiteButton";

const Footer: FC = () => {
  return (
    <nav className="theme-navy-background flex justify-center">
      <div className="flex justify-center flex-col">
        <div>
          <WhiteButton text="お問い合わせ" />
        </div>
        <div className="p-2">
          <h2 className="text-white">車のあいみつ</h2>
        </div>
      </div>
    </nav>
  );
};

export default Footer;
