import { Link, Outlet } from "react-router-dom";

import "./App.css";
import NavBar from "./components/Navbar/NavBar";

const App = (): JSX.Element => {
  return (
    <>
      <div>
        <NavBar />
        <Outlet />
      </div>
    </>
  );
};

export default App;
