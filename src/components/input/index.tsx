import { InputHTMLAttributes } from "react";
import * as styled from "./styled";

type PropsType = InputHTMLAttributes<HTMLInputElement> & {
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
};

export const Input = ({ iconLeft, iconRight, ...props }: PropsType) => {
  return (
    <styled.Container className="input-div">
      {iconLeft ?? iconLeft}
      <input {...props} />
      {iconRight && props.value?.toString().length != 0 ? iconRight : null}
    </styled.Container>
  );
};
