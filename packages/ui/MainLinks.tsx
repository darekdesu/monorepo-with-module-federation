import React from "react";
import { UnstyledButton, Group, Text } from "@mantine/core";
import { Link } from "react-router-dom";
import { NavLink } from "./NavigationBar";

function MainLink({ navLink }: { navLink: NavLink }) {
  return (
    <Link style={{ textDecoration: "none" }} to={navLink.path}>
      <UnstyledButton
        sx={(theme) => ({
          display: "block",
          width: "100%",
          padding: theme.spacing.xs,
          borderRadius: theme.radius.sm,
          color:
            theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,

          "&:hover": {
            backgroundColor:
              theme.colorScheme === "dark"
                ? theme.colors.dark[6]
                : theme.colors.gray[0],
          },
        })}
      >
        <Group>
          <Text size="sm">{navLink.label}</Text>
        </Group>
      </UnstyledButton>
    </Link>
  );
}

export function MainLinks({ navLinks }: { navLinks: NavLink[] }) {
  const links = navLinks.map((link) => (
    <MainLink key={link.label} navLink={link} />
  ));
  return <div>{links}</div>;
}
