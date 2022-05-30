import React from "react";
import { Navbar } from "@mantine/core";
import { MainLinks } from "./MainLinks";

export interface NavLink {
  label: string;
  path: string;
}

const NavigationBar = ({ navLinks }: { navLinks: NavLink[] }) => {
  return (
    <Navbar height={600} p="xs" width={{ base: 300 }}>
      <Navbar.Section grow mt="md">
        <MainLinks navLinks={navLinks} />
      </Navbar.Section>
    </Navbar>
  );
};

export default NavigationBar;
