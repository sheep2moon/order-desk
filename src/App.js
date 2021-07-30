import styled, { ThemeProvider } from "styled-components";
import "./App.css";
import { theme } from "./commons/Theme";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <AppContainer>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </AppContainer>
      </Router>
    </ThemeProvider>
  );
}

export default App;

const AppContainer = styled.div`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.primary};
`;
