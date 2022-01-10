import { Link, Outlet } from "react-router-dom";

import "./App.css";
import Footer from "./components/Footer";
import NavBar from "./components/Navbar/NavBar";

const App = (): JSX.Element => {
  return (
    <>
      <div>
        <NavBar />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default App;
