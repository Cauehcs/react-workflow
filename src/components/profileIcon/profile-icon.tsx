import * as styled from "./styled";

type PropsType = {
  src: string;
  name: string;
  team: string;
};

export const ProfileIcon = ({ src, name, team }: PropsType) => {
  return (
    <styled.ProfileIcon>
      <img src={src} alt="Foto de Perfil" />
      <div id="profile-info">
        <p>{name}</p>
        <p>{team}</p>
      </div>
    </styled.ProfileIcon>
  );
};
