import styled, { ThemeProvider } from "styled-components";
import "./App.css";
import { theme } from "./commons/Theme";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Order from "./pages/Order";
import Contact from "./pages/Contact";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <AppContainer>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/zamow" component={Order} />
            <Route exact path="/kontakt" component={Contact} />
          </Switch>
        </AppContainer>
      </Router>
    </ThemeProvider>
  );
}

export default App;

const AppContainer = styled.div`
  min-height: calc(100vh - 4rem);
  background-color: ${({ theme }) => theme.primary};
`;
