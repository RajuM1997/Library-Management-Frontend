import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Edit2, Trash2, View } from "lucide-react";
import BorrowForm from "../borrowForm/BorrowForm";
import { Link, useNavigate } from "react-router";
import type { IBook } from "@/types/bookTypes";
import { useGetBooksQuery, useRemoveBookMutation } from "@/redux/api/bookApi";
import Loader from "../loader/Loader";
import { errorMessage, successMessage } from "@/utils/notification";

const BookTable = () => {
  const navigate = useNavigate();
  const { data, isLoading } = useGetBooksQuery(undefined);
  const [removeBook] = useRemoveBookMutation();
  // console.log(data);

  const handleClick = (id: string) => {
    navigate(`/edit-book/${id}`);
  };

  const handleDelete = async (id: string) => {
    try {
      const res = await removeBook(id).unwrap();
      if (res.success) {
        successMessage(res.message);
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        errorMessage(error.message);
      } else {
        errorMessage("An unknown error occurred.");
      }
    }
  };

  if (isLoading) {
    return <Loader />;
  }
  console.log({ data });

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Title</TableHead>
          <TableHead>Author</TableHead>
          <TableHead>Genre</TableHead>
          <TableHead>Isbn</TableHead>
          <TableHead>Copies</TableHead>
          <TableHead>Availability</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data?.data?.map((book: IBook) => (
          <TableRow key={book._id}>
            <TableCell>{book.title}</TableCell>
            <TableCell>{book.author}</TableCell>
            <TableCell>{book.genre}</TableCell>
            <TableCell>{book.isbn}</TableCell>
            <TableCell>{book.copies}</TableCell>
            <TableCell>{book.available ? "true" : "false"}</TableCell>
            <TableCell className="flex gap-4 items-center">
              <Trash2
                className="text-red-400 cursor-pointer"
                onClick={() => handleDelete(book._id)}
              />
              <Edit2
                className="text-green-400 cursor-pointer"
                onClick={() => handleClick(book._id)}
              />
              <Link to={`/details/${book._id}`}>
                <View className="text-yellow-400 cursor-pointer" />
              </Link>
              <BorrowForm id={book._id} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default BookTable;
