import { PageHeader } from "../../components/page-header";
import * as styled from "./styled";

export const TodoPage = () => {
  return (
    <styled.Container>
      <PageHeader title="To-do" subtitle="Gerencie suas tarefas para fazer" />
    </styled.Container>
  );
};
