import EditBookForm from "@/components/modules/booksForm/bookEditForm";

const EditBook = () => {
  return (
    <section>
      <h3 className="pt-8 mb-10 text-2xl font-semibold text-green-400">
        Edit book
      </h3>
      <div>
        <EditBookForm />
      </div>
    </section>
  );
};

export default EditBook;
