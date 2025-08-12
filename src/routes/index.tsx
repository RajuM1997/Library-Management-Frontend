import MainLayout from "@/layout/mainLayout";
import AddBook from "@/pages/addBook/addBook";
import AllBooks from "@/pages/allBooks/allBooks";
import BookDetails from "@/pages/bookDetails/bookDetails";
import BorrowSummary from "@/pages/borrowSummary/borrowSummary";
import EditBook from "@/pages/editBook/editBook";
import Home from "@/pages/home/home";
import { createBrowserRouter } from "react-router";

const route = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "all-books",
        Component: AllBooks,
      },
      {
        path: "add-book",
        Component: AddBook,
      },
      {
        path: "details/:id",
        Component: BookDetails,
      },
      {
        path: "edit-book/:id",
        Component: EditBook,
      },
      {
        path: "borrow-summary",
        Component: BorrowSummary,
      },
    ],
  },
]);
export default route;
