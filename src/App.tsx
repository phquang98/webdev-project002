import { Outlet } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import "./App.css";
import Footer from "./components/Footer";
import NavBar from "./components/Navbar/NavBar";
import { customTheme } from "./styles/theme";

const App = (): JSX.Element => {
  return (
    <>
      <ThemeProvider theme={customTheme}>
        <NavBar />
        <Outlet />
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default App;
