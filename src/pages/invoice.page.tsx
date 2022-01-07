import { useEffect } from "react";

import { useNavigate, useParams } from "react-router-dom";
import { invoiceClt } from "../utils/invoices";

const Invoice = (): JSX.Element => {
  const navigateFnc = useNavigate();

  const { invoiceId } = useParams<"invoiceId">();
  const suspect = invoiceClt.find((ele) => ele.id.toString() === invoiceId);

  // if user HTTP to sth like /home/invoices/asd
  useEffect(() => {
    if (!suspect) {
      navigateFnc("home");
    }
  }, [suspect, navigateFnc]);

  return (
    <>
      <h2 style={{ padding: "1rem" }}>
        Invoice #{suspect?.id} for {suspect?.name}: 29.99$
      </h2>
    </>
  );
};

export default Invoice;
