import * as React from "react";
import {
  AppShell as MantineAppShell,
  MantineProvider,
  Button,
  Header,
  Title,
} from "@mantine/core";

interface AppShellProps {
  title: string;
  colorScheme?: "light" | "dark";
}

export const AppShell: React.FunctionComponent<AppShellProps> = ({
  title,
  colorScheme,
}) => (
  <MantineProvider
    withGlobalStyles
    withNormalizeCSS
    theme={{
      colorScheme,
    }}
  >
    <MantineAppShell
      padding="md"
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
      <Button>Hello</Button>
    </MantineAppShell>
  </MantineProvider>
);
