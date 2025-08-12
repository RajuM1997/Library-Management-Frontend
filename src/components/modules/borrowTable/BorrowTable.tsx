import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetBorrowsQuery } from "@/redux/api/borrowApi";
import Loader from "../loader/Loader";
import type { IBorrow } from "@/types/borrowTypes";

const BorrowTable = () => {
  const { data, isLoading } = useGetBorrowsQuery(undefined);
  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="bg-white/20 rounded-2xl shadow-lg backdrop-blur-sm border border-white/30 p-4 md:max-w-[600px] mx-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Isbn</TableHead>
            <TableHead>Total Quantity</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.data?.map((borrow: IBorrow, index: number) => (
            <TableRow key={index}>
              <TableCell>{borrow.book.title}</TableCell>
              <TableCell>{borrow.book.isbn}</TableCell>
              <TableCell>{borrow.totalQuantity}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default BorrowTable;
