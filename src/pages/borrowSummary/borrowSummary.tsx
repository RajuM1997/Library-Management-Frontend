import BorrowTable from "@/components/modules/borrowTable/BorrowTable";

const BorrowSummary = () => {
  return (
    <section>
      <h3 className="pt-8 mb-14 text-2xl font-semibold text-green-400">
        All-Borrow-Summary
      </h3>
      <div className="">
        <BorrowTable />
      </div>
    </section>
  );
};

export default BorrowSummary;
