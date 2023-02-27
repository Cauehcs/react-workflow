import { useState } from "react";
import * as styled from "./styled";
import { AgendaIcon } from "../../../assets/icons/icon_agenda";
import { KanbanIcon } from "../../../assets/icons/icon_kanban";
import { TodoIcon } from "../../../assets/icons/icon_todo";
import { NotasIcon } from "../../../assets/icons/icon_notas";

type PropsType = {
  index: number;
  expandend: boolean;
  navigate: (path: string) => void;
};

export const RowOfIconPages = ({ index, navigate, expandend }: PropsType) => {
  const [active, SetActive] = useState(index);

  function toPage(index: number, path: string) {
    SetActive(index);
    navigate(path);
  }

  return (
    <styled.RowOfIconPages>
      <styled.IconPage
        expanded={expandend}
        active={active === 0}
        onClick={() => toPage(0, "/kanban")}
      >
        <KanbanIcon />
      </styled.IconPage>
      <styled.IconPage
        expanded={expandend}
        active={active === 1}
        onClick={() => toPage(1, "/todo")}
      >
        <TodoIcon />
      </styled.IconPage>
      <styled.IconPage
        expanded={expandend}
        active={active === 2}
        onClick={() => toPage(2, "/notas")}
      >
        <NotasIcon />
      </styled.IconPage>
      <styled.IconPage
        expanded={expandend}
        active={active === 3}
        onClick={() => toPage(3, "/agenda")}
      >
        <AgendaIcon />
      </styled.IconPage>
    </styled.RowOfIconPages>
  );
};
