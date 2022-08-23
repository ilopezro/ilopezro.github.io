import { ThemeProvider } from "@mui/material";
import { FunctionComponent } from "react";
import Routes from "routes/routes";
import { myTheme } from "styles";

const App: FunctionComponent = () => {
  return (
    <ThemeProvider theme={myTheme}>
      <Routes />
    </ThemeProvider>
  );
};

export default App;
