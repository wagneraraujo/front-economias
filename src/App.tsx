import GlobalStyles from "./styles/GlobalStyles";
import Dashboard from "./pages/Dashboard";
import { ThemeProvider } from "styled-components";
import dark from "./styles/themes/dark";
import light from "./styles/themes/light";
const App: React.FC = () => {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyles />
      <Dashboard />
    </ThemeProvider>
  );
};
export default App;
