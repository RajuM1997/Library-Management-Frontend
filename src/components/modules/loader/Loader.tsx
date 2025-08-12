import { DotLoader } from "react-spinners";
const Loader = () => {
  return (
    <div className="min-h-[calc(100vh-426px)] w-full flex justify-center items-center">
      <DotLoader color="#ffffff" />
    </div>
  );
};

export default Loader;
