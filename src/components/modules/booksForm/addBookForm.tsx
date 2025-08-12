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
import { useAddBookMutation } from "@/redux/api/bookApi";
import type { IBook } from "@/types/bookTypes";
import {
  errorMessage,
  successMessage,
  warningMessage,
} from "@/utils/notification";
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router";
import { z, ZodError } from "zod";

const createBookZodSchema = z.object({
  title: z.string().min(1, { message: "Title is required" }),
  author: z.string().min(1, { message: "Author name is required" }),
  genre: z.enum(
    ["FICTION", "NON_FICTION", "SCIENCE", "HISTORY", "BIOGRAPHY", "FANTASY"],
    { message: "Invalid genre" }
  ),
  isbn: z.string().min(1, { message: "ISBN is required" }),
  copies: z
    .number({ message: "Copies must be a number" })
    .min(0, { message: "Copies must be positive" }),
  available: z.boolean().optional(),
  description: z.string().optional(),
});

interface IRes {
  message: string;
  success: boolean;
  data: IBook;
  error?: undefined;
}
interface ApiError {
  data?: {
    error?: {
      errors?: {
        [field: string]: {
          message?: string;
        };
      };
    };
  };
}

function AddBookForm() {
  const form = useForm();
  const [createBook] = useAddBookMutation();

  const navigate = useNavigate();
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const newBook = {
        ...data,
        copies: Number(data.copies),
      };
      const bookData = createBookZodSchema.parse(newBook);
      console.log({ bookData });

      if (!newBook) {
        warningMessage("Please fill in all required fields");
      }
      const res: IRes = await createBook(bookData).unwrap();
      if (res.success) {
        form.reset();
        successMessage(res.message);
        setTimeout(() => {
          navigate("/all-books");
        }, 500);
      }
    } catch (error: unknown) {
      const err = error as ApiError;
      const zodError = error as string;
      if (error instanceof ZodError) {
        const zodMessage = JSON.parse(zodError);
        errorMessage(zodMessage[0]?.message || "Unknown error");
      } else {
        errorMessage(err.data?.error?.errors?.isbn?.message || "Unknown error");
      }
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl className="my-2">
                <Input {...field} required value={field.value || ""} />
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
                <Input required {...field} value={field.value || ""} />
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
                <Input required {...field} value={field.value || ""} />
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
                <Input
                  required
                  {...field}
                  type="number"
                  value={field.value || ""}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="genre"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="mt-2">Genre</FormLabel>
              <Select
                required
                onValueChange={field.onChange}
                defaultValue={field.value}
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
                <Textarea required {...field} value={field.value || ""} />
              </FormControl>
            </FormItem>
          )}
        />

        <Button type="submit" className="mt-5 ml-auto bg-green-400">
          Save changes
        </Button>
      </form>
    </Form>
  );
}
export default AddBookForm;
