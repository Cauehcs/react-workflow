import { useState } from "react";
import { Sidebar } from "../components/sidebar";
import * as Styled from "./styled";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Loading } from "../components/loading";
import { auth } from "../services/firebase/firebase";
import { KanbanPage } from "../pages/kanban";
import { TodoPage } from "../pages/todo";
import { NotasPage } from "../pages/notas";
import { AgendaPage } from "../pages/agenda";
import { AuthPage } from "../pages/auth";
import { LoadingPage } from "../pages/loading";
import { fetchCurrentUser } from "../data/user";
import { SettingsPage } from "../pages/settings";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <KanbanPage />,
    },
    {
      path: "/kanban",
      element: <KanbanPage />,
    },
    {
      path: "/todo",
      element: <TodoPage />,
    },
    {
      path: "/notas",
      element: <NotasPage />,
    },
    {
      path: "/agenda",
      element: <AgendaPage />,
    },
    {
      path: "/configuracoes",
      element: <SettingsPage />,
    },
    {
      path: "/auth",
      element: <AuthPage />,
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
  const [inLoadingPage, setInLoadingPage] = useState(false);
  const [inSigned, setInSigned] = useState(false);
  const [hasLoadedUser, setHasLoadedUser] = useState(false);

  auth.onAuthStateChanged(async (user) => {
    await fetchCurrentUser();

    if (user) {
      setInSigned(true);
    } else {
      setInSigned(false);
    }

    setTimeout(() => {
      setHasLoadedUser(true);
    }, 1500);
  });

  if (!hasLoadedUser) {
    return (
      <Styled.Container paddingLeft="none">
        <LoadingPage />
      </Styled.Container>
    );
  }

  if (!inSigned || window.location.pathname === "/auth") {
    return (
      <Styled.Container paddingLeft="none">
        <AuthPage />
      </Styled.Container>
    );
  }

  return (
    <Styled.Container paddingLeft="left">
      <Sidebar index={getIndexRoute()} navigate={(path) => navigateTo(path)} />
      {inLoadingPage ? <Loading /> : <RouterProvider router={router} />}
    </Styled.Container>
  );
};

export default App;
