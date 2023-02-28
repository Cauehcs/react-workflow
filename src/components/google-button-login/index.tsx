import { GoogleIcon } from "../../assets/icons/icon-google";
import { SignOnGoogle } from "../../services/firebase/auth";
import * as styled from "./styled";

export const GoogleButtonLogin = () => {
  return (
    <styled.Container onClick={() => SignOnGoogle()}>
      <GoogleIcon />
    </styled.Container>
  );
};
