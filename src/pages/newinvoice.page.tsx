const NewInvoice = (): JSX.Element => {
  return (
    <>
      <form style={{ padding: "1rem" }}>
        <label htmlFor="new-invoice" style={{ display: "block" }}>
          New Invoice Name
        </label>
        <input type="text" name="newInvoice" id="new-invoice" />
        <input type="submit" value="Create new invoice" />
      </form>
    </>
  );
};

export default NewInvoice;
