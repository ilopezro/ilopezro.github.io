import { createTheme, ThemeOptions } from "@mui/material/styles";
import { myPalette } from "./palette";

const themeOptions: ThemeOptions = { palette: myPalette };

const theme = createTheme(themeOptions);

export default theme;
