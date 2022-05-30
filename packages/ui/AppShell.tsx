import * as React from "react";
import { AppShell as MantineAppShell, MantineProvider } from "@mantine/core";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import NavigationBar, { NavLink } from "./NavigationBar";
import MainHeader from "./MainHeader";

export interface Route {
  path: string;
  element: React.FunctionComponent;
}

export interface AppShellProps {
  title: string;
  colorScheme?: "light" | "dark";
  routes: Route[];
  navLinks: NavLink[];
}

export const AppShell: React.FunctionComponent<AppShellProps> = ({
  title,
  colorScheme,
  routes,
  navLinks,
}) => (
  <BrowserRouter>
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colorScheme,
      }}
    >
      <MantineAppShell
        padding="md"
        navbar={<NavigationBar navLinks={navLinks} />}
        header={<MainHeader title={title} />}
        styles={(theme) => ({
          main: {
            backgroundColor:
              theme.colorScheme === "dark"
                ? theme.colors.dark[8]
                : theme.colors.gray[0],
          },
        })}
      >
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.element />}
            />
          ))}
        </Routes>
        <Outlet />
      </MantineAppShell>
    </MantineProvider>
  </BrowserRouter>
);
