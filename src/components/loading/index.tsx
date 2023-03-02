import { KanbanIcon } from "../../assets/icons/icon-kanban";
import { colors } from "../../styles/colors";
import * as styled from "./styled";

export const Loading = () => {
  return (
    <styled.Container className="loading-component">
      <KanbanIcon color={colors.theme.colors.blue.value} />
    </styled.Container>
  );
};
