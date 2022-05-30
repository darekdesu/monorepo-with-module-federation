import * as React from "react";
import {
  AppShell as MantineAppShell,
  MantineProvider,
  Header,
  Title,
  Navbar,
  UnstyledButton,
} from "@mantine/core";
import { BrowserRouter, Outlet, Route, Routes, Link } from "react-router-dom";

export interface Route {
  path: string;
  element: React.FunctionComponent;
}

export interface NavLink {
  label: string;
  path: string;
}

export interface AppShellProps {
  title: string;
  colorScheme?: "light" | "dark";
  routes: Route[];
  navLinks: NavLink[];
}

const MainLink = ({ label, path }: NavLink) => (
  <Link to={path}>
    <UnstyledButton>{label}</UnstyledButton>
  </Link>
);

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
        navbar={
          <Navbar width={{ base: 300 }} height={500} p="xs">
            {navLinks.map((link) => (
              <MainLink key={link.path} path={link.path} label={link.label} />
            ))}
          </Navbar>
        }
        header={
          <Header
            height={60}
            p="xs"
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Title>{title}</Title>
          </Header>
        }
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
