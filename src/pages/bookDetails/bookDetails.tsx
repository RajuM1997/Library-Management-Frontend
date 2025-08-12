import Loader from "@/components/modules/loader/Loader";
import { Button } from "@/components/ui/button";
import { useGetSingleBookQuery } from "@/redux/api/bookApi";
import { CassetteTape, User } from "lucide-react";
import { Link, useParams } from "react-router";

const BookDetails = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetSingleBookQuery(id);
  console.log({ data });

  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-426px)]">
      <div className="min-w-[400px] min-h-[200px] flex flex-col justify-center bg-white/20 rounded-2xl shadow-lg backdrop-blur-sm border border-white/30 p-4">
        <div>
          <h4 className="text-[20px] font-medium">{data.data.title}</h4>
          <p className="pt-3">{data.data.description}</p>
        </div>
        <div className="flex justify-between py-3">
          <div className="flex gap-2 items-center">
            <User className="text-green-400" />
            <span className="font-medium">{data.data.author}</span>
          </div>
          <div className="flex gap-2 items-center">
            <CassetteTape className="text-green-400" />
            <span className="font-medium">{data.data.genre}</span>
          </div>
        </div>

        <div className="flex justify-between">
          <div className="flex gap-2 items-center">
            <span className="text-green-400">Isbn:</span>{" "}
            <span className="font-medium">{data.data.isbn}</span>
          </div>
          <div className="flex gap-2 items-center">
            <span className="text-green-400">Copies left</span>:
            <span className="font-medium">{data.data.copies}</span>
          </div>
        </div>
        <div className="ml-auto pt-6">
          <Link to={"/all-books"}>
            <Button variant="outline" className="cursor-pointer">
              Back to All book
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
