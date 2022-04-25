import { Grommet } from "grommet";
import { BrowserRouter } from "react-router-dom";
import { theme } from "./styles/theme";
import Pages from "./pages/index";
import { AuthProvider } from "./context/authContext";

function App() {
  return (
    <AuthProvider>  
      <Grommet theme={theme}>
        <BrowserRouter>
          <Pages />
        </BrowserRouter>
      </Grommet>
    </AuthProvider>
  );
}

export default App;