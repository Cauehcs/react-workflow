import { useState } from "react";
import * as styled from "./styled";
import { AgendaIcon } from "../../../assets/icons/icon-agenda";
import { KanbanIcon } from "../../../assets/icons/icon-kanban";
import { TodoIcon } from "../../../assets/icons/icon-todo";
import { NotasIcon } from "../../../assets/icons/icon-notas";
import { SettingsIcon } from "../../../assets/icons/icon-settings";

type PropsType = {
  index: number;
  navigate: (path: string) => void;
};

export const ColumnOfIconPages = ({ index, navigate }: PropsType) => {
  const [active, SetActive] = useState(index);

  function toPage(index: number, path: string) {
    SetActive(index);
    navigate(path);
  }

  return (
    <styled.Container>
      <styled.IconPage
        active={active === 0}
        onClick={() => toPage(0, "/kanban")}
      >
        <KanbanIcon />
        <div className="pointer"></div>
      </styled.IconPage>
      <styled.IconPage active={active === 1} onClick={() => toPage(1, "/todo")}>
        <TodoIcon />
        <div className="pointer"></div>
      </styled.IconPage>
      <styled.IconPage
        active={active === 2}
        onClick={() => toPage(2, "/notas")}
      >
        <NotasIcon />
        <div className="pointer"></div>
      </styled.IconPage>
      <styled.IconPage
        active={active === 3}
        onClick={() => toPage(3, "/agenda")}
      >
        <AgendaIcon />
        <div className="pointer"></div>
      </styled.IconPage>
      <styled.IconPage
        active={active === 4}
        onClick={() => toPage(4, "/configuracoes")}
      >
        <SettingsIcon />
        <div className="pointer"></div>
      </styled.IconPage>
    </styled.Container>
  );
};
