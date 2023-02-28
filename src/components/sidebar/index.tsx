import { useState } from "react";
import * as styled from "./styled";
import { colors } from "../../styles/colors";
import { RowOfIconPages } from "./row-of-icon-pages";
import { ProfileIcon } from "../profile-icon";
import { BtnExpanded } from "./btn-expanded/btn-expanded";
import { Divider } from "../divider";

type PropsType = {
  navigate: (path: string) => void;
  index: number;
};

export const Sidebar = ({ navigate, index }: PropsType) => {
  const colorIcon = (isActive: boolean) => {
    return isActive
      ? colors.theme.colors["blue-500"].value
      : colors.theme.colors["white"].value;
  };

  const [expandedSidebar, setExpandedSidebar] = useState(false);

  return (
    <styled.Container expanded={expandedSidebar}>
      <RowOfIconPages
        expandend={expandedSidebar}
        navigate={navigate}
        index={index}
      />
      <Divider />
      <div className="page-content"></div>
      <BtnExpanded
        expandedSidebar={expandedSidebar}
        setExpandedSidebar={setExpandedSidebar}
      />
      <Divider />
      <ProfileIcon
        name="Cauê Henrique"
        team="Time Principal"
        src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80"
      />
    </styled.Container>
  );
};
