import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-6xl font-bold text-[#242424]">
        404
      </h1>
      <p className="text-xl text-[#707070] mt-4">
        Oops! Page not found.
      </p>
      <Link 
        to="/" 
        className="mt-6 px-6 py-3 bg-[#FCDD06] text-[#242424] font-semibold rounded-lg shadow hover:bg-yellow-400 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
