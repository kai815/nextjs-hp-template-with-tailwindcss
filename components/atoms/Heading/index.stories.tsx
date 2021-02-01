import React, { FC } from "react";
import Heading from "./index";
import UnderLine from "./UnderlineHeading";

export default {
  title: "Heading",
};

export const Header: FC = () => <Heading text="ヘッダーテスト" />;
export const UnderLineHeader: FC = () => <UnderLine text="ヘッダーテスト" />;
