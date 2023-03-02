import { AddIcon } from "../../assets/icons/icon-add";
import { User } from "../../classes/user";
import { getCurrentUser } from "../../data/user";
import { Button } from "../button";
import { ProfileIcon } from "../profile-icon";
import * as styled from "./styled";

type PropsType = {
  title: string;
  subtitle: string;
  subtitleIndexFocus?: number;
};

export const PageHeader = ({
  title,
  subtitle,
  subtitleIndexFocus = 99,
}: PropsType) => {
  const user: User = getCurrentUser();

  const subtitleArray = subtitle.split(" ");
  const subtitleFocus = subtitleArray.splice(subtitleIndexFocus, 1);
  const subtitleLeftPart = subtitleArray
    .splice(0, subtitleIndexFocus)
    .join(" ");
  const subtitleRightPart = subtitleArray.join(" ");

  return (
    <styled.Container>
      <div className="title-group">
        <h1>{title}</h1>
        <h3>
          <span>{subtitleLeftPart}</span>
          <span className="focus"> {subtitleFocus} </span>
          <span>{subtitleRightPart}</span>
        </h3>
      </div>
      <div className="action-profile">
        <Button>
          <AddIcon />
          <p>Adicionar</p>
        </Button>
        <div className="pointer"></div>
        <ProfileIcon name={user.name} role={user.role} src={user.photo} />
      </div>
    </styled.Container>
  );
};
