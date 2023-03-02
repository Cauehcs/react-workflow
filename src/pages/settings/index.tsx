import * as styled from "./styled";
import { useState } from "react";

export const SettingsPage = () => {
  const [expandedSidebar, setexpandedSidebar] = useState(false);

  return <styled.Container>Configurações</styled.Container>;
};
