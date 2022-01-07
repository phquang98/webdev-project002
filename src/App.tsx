import { Link, Outlet } from "react-router-dom";

const App = (): JSX.Element => {
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1>Fuck my life</h1>
        <nav style={{ borderBottom: "1px solid", paddingBottom: "1rem" }}>
          {/* to all use relative path -> path will be built based on parent + auto add delimiter `/` */}
          <Link to="invoices">Invoices</Link> | <Link to="expenses">Expenses</Link>
        </nav>
        <Outlet /> {/* children cpn will be rendered here */}
      </div>
    </>
  );
};

export default App;
// check git hooks again
