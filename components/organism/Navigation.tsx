import React, { FC } from "react";

const Navigation: FC = () => {
  return (
    <nav className="theme-green-background h-screen px-2">
      <h2 className="text-white">車のあいみつ</h2>
      <div className="absolute top-2.5 right-6">
        <span className="text-white inline-block p-2">×</span>
      </div>
      <div className="flex flex-col items-center">
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
      </div>
    </nav>
  );
};

export default Navigation;
