import "./App.css";
import React from "react";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./screen/Root";
import ErrorPage from "./screen/Error";
import Main from "./screen/Main";
import Start from "./screen/Start";
import Gameroomboard from "./components/GameRoomBoard.js";
import DataContextProvider from "./store/data-context";
import UserContextProvider from "./store/user-context";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Start /> },
      { path: "/gameroomboard", element: <Gameroomboard /> },
      // { path: "/", element: <Gameroomboard /> },
      { path: "/start", element: <Main /> },
      // { path: "/test", element: <Gameroomboard /> },
    ],
  },
]);

function App() {
  return (
    <DataContextProvider>
      <UserContextProvider>
        <RouterProvider router={router} />;
      </UserContextProvider>
    </DataContextProvider>
  );
}

export default App;
