import { Link, Outlet } from "react-router-dom";

import { invoiceClt } from "../utils/invoices";

const Invoices = (): JSX.Element => {
  return (
    <>
      <main>
        <h2>Invoices</h2>
        {/* <Link to={`/invoices/${invoices[0].id}`}>{invoices[0].name}</Link> */}
        <div style={{ display: "flex" }}>
          <nav style={{ padding: "1rem", borderRight: "1px solid" }}>
            <Link to="new" style={{ display: "block" }}>
              Create a new invoice
            </Link>
            <Link to="asd">Go to invoice with a non-existed Id</Link>
            {invoiceClt.map((ele) => {
              console.log("ele", ele);
              return (
                <Link to={ele.id.toString()} key={ele.id} style={{ display: "block", margin: "1rem" }}>
                  {ele.name}
                </Link>
              );
            })}
          </nav>
          <Outlet /> {/* children cpn will be rendered here */}
        </div>
      </main>
    </>
  );
};

export default Invoices;
