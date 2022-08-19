import { ThemeProvider } from "@mui/material";
import React from "react";
import Routes from "routes/routes";
import { myTheme } from "styles";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={myTheme}>
      <Routes />
    </ThemeProvider>
  );
};

export default App;
