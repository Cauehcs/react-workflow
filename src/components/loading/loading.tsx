import { KanbanIcon } from "../../assets/icons/icon_kanban";
import { colors } from "../../styles/colors";
import * as styled from "./styled";

export const Loading = () => {
  return (
    <styled.LoadingComponent className="loading-component">
      <KanbanIcon color={colors.theme.colors["blue-400"].value} />
    </styled.LoadingComponent>
  );
};
