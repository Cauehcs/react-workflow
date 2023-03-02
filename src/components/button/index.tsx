import React, { ButtonHTMLAttributes } from "react";
import * as styled from "./styled";

export const Button = ({
  ...props
}: React.PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>) => {
  return <styled.Container {...props}></styled.Container>;
};
