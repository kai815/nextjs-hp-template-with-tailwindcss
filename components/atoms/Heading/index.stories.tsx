import React, { VFC } from "react";
import Heading from "./index";
import UnderLine from "./UnderlineHeading";

export default {
  title: "Heading",
};

export const Header: VFC = () => <Heading text="ヘッダーテスト" />;
export const UnderLineHeader: VFC = () => <UnderLine text="ヘッダーテスト" />;
