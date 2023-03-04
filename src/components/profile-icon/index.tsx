import { getAuth, signOut } from "firebase/auth";
import * as styled from "./styled";

type PropsType = {
  src: string;
  name: string;
  role: string;
  wName?: boolean;
};

export const ProfileIcon = ({ src, name, role, wName = false }: PropsType) => {
  return (
    <styled.Container>
      <img referrerPolicy="no-referrer" src={src} alt="Foto de Perfil" />
      {wName ?? (
        <div id="profile-info">
          <p>{name}</p>
          <p>{role}</p>
        </div>
      )}
    </styled.Container>
  );
};
