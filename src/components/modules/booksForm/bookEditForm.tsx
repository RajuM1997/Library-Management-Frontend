import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { genre } from "@/constants/constants";
import {
  useGetSingleBookQuery,
  useUpdateBookMutation,
} from "@/redux/api/bookApi";
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";
import Loader from "../loader/Loader";
import { useNavigate, useParams } from "react-router";
import { errorMessage, successMessage } from "@/utils/notification";

function EditBookForm() {
  const { id } = useParams();
  const { data, isLoading } = useGetSingleBookQuery(id);
  const form = useForm();
  const [updateBook] = useUpdateBookMutation();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FieldValues> = async (fieldData) => {
    try {
      const newBook = {
        title: fieldData.title || data.data.title,
        author: fieldData.author || data.data.author,
        isbn: fieldData.isbn || data.data.isbn,
        copies: Number(fieldData.copies) || Number(data.data.copies),
        genre: fieldData.genre || data.data.genre,
        description: fieldData.description || data.data.description,
      };

      const res = await updateBook({ id, newBook }).unwrap();
      if (res.success) {
        successMessage(res.message);
        navigate("/all-books");
      }
    } catch (error: unknown) {
      errorMessage("something went wrong");
      console.log(error);
    }
  };

  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className="md:w-[60%] mx-auto bg-white/20 rounded-2xl shadow-lg backdrop-blur-sm border border-white/30 p-4">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl className="my-2">
                  <Input {...field} defaultValue={data.data.title || ""} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="author"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="pt-2">Author</FormLabel>
                <FormControl className="my-2">
                  <Input {...field} defaultValue={data.data.author || ""} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="isbn"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="pt-2">Isbn</FormLabel>
                <FormControl className="my-2">
                  <Input {...field} defaultValue={data.data.isbn || ""} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="copies"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="pt-2">Copies</FormLabel>
                <FormControl className="my-2">
                  <Input {...field} defaultValue={data.data.copies || ""} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="genre"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="mt-2">genre</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={data.data.genre}
                >
                  <FormControl className={"w-full my-2"}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a book genre" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {genre.map((gn) => (
                      <SelectItem value={gn} key={gn}>
                        {gn}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="mt-2">Description</FormLabel>
                <FormControl className="my-2">
                  <Textarea
                    {...field}
                    defaultValue={data.data.description || ""}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <Button type="submit" className="mt-5 ml-auto bg-green-400">
            Save changes
          </Button>
        </form>
      </Form>
    </div>
  );
}
export default EditBookForm;
