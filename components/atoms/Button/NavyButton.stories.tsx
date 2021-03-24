import React, { VFC } from "react";
import NavyButton from "./NavyButton";
import WhiteButton from "./WhiteButton";

export default {
  title: "Button",
};

export const Navy: VFC = () => <NavyButton text="ネイビー" />;
export const White: VFC = () => <WhiteButton text="ホワイト" />;
