import { Header, Title } from "@mantine/core";
import * as React from "react";

interface MainHeaderProps {
  title: string;
}

const MainHeader = ({ title }: MainHeaderProps) => (
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
);

export default MainHeader;
