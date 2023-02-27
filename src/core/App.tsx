import { useState } from "react";
import { Sidebar } from "../components/sidebar/sidebar";
import { Agenda } from "../pages/agenda/agenda";
import { Kanban } from "../pages/kanban/kanban";
import { Notas } from "../pages/notas/notas";
import { Todo } from "../pages/todo/todo";
import * as Styled from "./styled";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Loading } from "../components/loading/loading";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Kanban />,
    },
    {
      path: "/kanban",
      element: <Kanban />,
    },
    {
      path: "/todo",
      element: <Todo />,
    },
    {
      path: "/notas",
      element: <Notas />,
    },
    {
      path: "/agenda",
      element: <Agenda />,
    },
  ]);

  function navigateTo(path: string) {
    router.navigate(path);
  }

  function getIndexRoute() {
    switch (window.location.pathname) {
      case "/":
        return 0;
      case "/kanban":
        return 0;
      case "/todo":
        return 1;
      case "/notas":
        return 2;
      case "/agenda":
        return 3;
      default:
        return 0;
    }
  }
  const [inLoadingPage, setInLoadingPage] = useState(true);

  return (
    <Styled.Container>
      <Sidebar index={getIndexRoute()} navigate={(path) => navigateTo(path)} />
      {inLoadingPage ? <Loading /> : <RouterProvider router={router} />}
    </Styled.Container>
  );
};

export default App;
