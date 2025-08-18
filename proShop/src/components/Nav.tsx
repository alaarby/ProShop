import { IoMdPerson } from "react-icons/io";
import { FaBookmark } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import SearchBar from "./SearchBar";
import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import { Link } from "react-router-dom";

const Nav = () => {

  const cartQuantity = useSelector((state: RootState) => state.cart.totalQuantity);
  return (
    <div>
      <header className="bg-neutral-800 flex justify-evenly items-center p-4">

        <Link to="/">
          <h1 className="text-yellow-300 font-bold text-[40px]">Pro
            <span className="text-white">
              Shop
            </span>
          </h1>
        </Link>

        <SearchBar />

        <div className="flex items-center justify-between gap-3 text-white text-[13px]">
          <div className="flex flex-col items-center cursor-pointer">
            <IoMdPerson className="w-[20px] h-[20px]"/>
            <p>Login / Sign up</p>
          </div>

          <div className="flex flex-col items-center cursor-pointer relative">
            <FaBookmark className="w-[20px] h-[20px]"/>
            <p>Wishlist</p>
            <span className="absolute -top-2 right-2 bg-yellow-300 rounded-full w-[15px] h-[15px] flex justify-center items-center text-[10px]"><p>1</p></span>
          </div>
          <Link to="/cart">
            <div className="flex flex-col items-center cursor-pointer relative">
              <IoMdCart  className="w-[20px] h-[20px]"/>
              <p>
                Cart
              </p>
              <span className="absolute -top-2 -right-1 bg-yellow-300 rounded-full w-[15px] h-[15px] flex justify-center items-center text-[10px]"><p>{cartQuantity}</p></span>
            </div>
          </Link>

        </div>
      </header>
    </div>
  )
}
export default Nav;