import BorrowTable from "@/components/modules/borrowTable/BorrowTable";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useTitleChange } from "@/hooks/useTitleChange";
import { useGetBorrowsQuery } from "@/redux/api/borrowApi";
const BorrowSummary = () => {
  useTitleChange(`book-summary`);
  const { data } = useGetBorrowsQuery(undefined);
  return (
    <section>
      <h3 className="pt-8 mb-14 text-2xl font-semibold text-green-400">
        All-Borrow-Summary
      </h3>
      <div className="">
        <BorrowTable />
        {data?.data?.length > 0 && (
          <div className="mt-5">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>
                    2
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        )}
      </div>
    </section>
  );
};

export default BorrowSummary;
