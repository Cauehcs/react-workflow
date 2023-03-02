import { getAuth, signOut } from "firebase/auth";
import * as styled from "./styled";

type PropsType = {
  src: string;
  name: string;
  role: string;
};

export const ProfileIcon = ({ src, name, role }: PropsType) => {
  return (
    <styled.Container>
      <img src={src} alt="Foto de Perfil" onClick={() => signOut(getAuth())} />
      <div id="profile-info">
        <p>{name}</p>
        <p>{role}</p>
      </div>
    </styled.Container>
  );
};
