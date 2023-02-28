import { ExpandIcon } from "../../../assets/icons/icon-expand";
import { colors } from "../../../styles/colors";
import * as styled from "./styled";

type PropsType = {
  expandedSidebar: boolean;
  setExpandedSidebar: (expanded: boolean) => void;
};
export const BtnExpanded = ({
  setExpandedSidebar,
  expandedSidebar,
}: PropsType) => {
  return (
    <styled.Container
      onClick={() => {
        setExpandedSidebar(!expandedSidebar);
      }}
      id="btn-toExpand"
    >
      <ExpandIcon color={colors.theme.colors["blue-500"].value} />
    </styled.Container>
  );
};
