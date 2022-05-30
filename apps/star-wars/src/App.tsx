import React from "react";
import "./App.css";
import { AppShell, Button } from "ui";

function App() {
  return (
    <AppShell
      title="Star Wars"
      colorScheme="dark"
      routes={[
        {
          path: "/",
          element: () => <Button />,
        },
        {
          path: "/playground",
          element: () => <div>Hello in Playground!</div>,
        },
      ]}
      navLinks={[
        {
          path: "/",
          label: "Home",
        },
        {
          path: "/playground",
          label: "Playground",
        },
      ]}
    />
  );
}

export default App;
