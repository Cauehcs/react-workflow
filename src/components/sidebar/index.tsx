import * as styled from "./styled";
import { ColumnOfIconPages } from "./column-of-icon-pages";
import { SignOutIcon } from "../../assets/icons/icon-signout";
import { getAuth, signOut } from "firebase/auth";

type PropsType = {
  navigate: (path: string) => void;
  index: number;
};

export const Sidebar = ({ navigate, index }: PropsType) => {
  return (
    <styled.Container>
      <ColumnOfIconPages navigate={navigate} index={index} />
      <div className="signout-button" onClick={() => signOut(getAuth())}>
        <SignOutIcon />
      </div>
    </styled.Container>
  );
};
