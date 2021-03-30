import React, { VFC } from "react";
import LinkText from "./Text";

export default {
  title: "Link",
};

export const Text: VFC = () => (
  <LinkText text="リンクテスト" href="/" textColorClass="text-red-900" />
);
