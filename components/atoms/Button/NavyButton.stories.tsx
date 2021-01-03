import React, { FC } from "react";
import NavyButton from "./NavyButton";
import WhiteButton from "./WhiteButton";

export default {
  title: "Button",
};

export const Navy: FC = () => <NavyButton text="ネイビー" />;
export const White: FC = () => <WhiteButton text="ホワイト" />;
