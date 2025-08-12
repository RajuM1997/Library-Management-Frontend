import AddBookForm from "@/components/modules/booksForm/addBookForm";

const AddBook = () => {
  return (
    <section>
      <h3 className="pt-8 mb-16  text-2xl font-semibold text-green-400">
        Add book
      </h3>
      <div className="md:w-[60%] mx-auto bg-white/20 rounded-2xl shadow-lg backdrop-blur-sm border border-white/30 p-4">
        <AddBookForm />
      </div>
    </section>
  );
};

export default AddBook;
