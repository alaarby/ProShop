import { IoMdPerson } from "react-icons/io";
import { FaBookmark } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import SearchBar from "./SearchBar";
import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import { Link } from "react-router-dom";

const Nav = () => {

  const currentUser = useSelector((state: RootState) => state.users.currentUser);
  const cartQuantity = useSelector((state: RootState) => state.cart.totalQuantity);

  console.log( currentUser);

  return (
    <header className="bg-[#242424] flex justify-between items-center py-[18px] px-[140px] w-screen">
      <Link to="/">
        <h1 className="text-[#FCDD06] font-bold text-[40px]">Pro
          <span className="text-white">
            Shop
          </span>
        </h1>
      </Link>

      <SearchBar />

      <div className="flex items-center justify-between text-white text-[13px]">
        <Link to={ currentUser ? "/profile" : "/login"} >
          <div className="flex flex-col items-center cursor-pointer ml-[257px]">
            <IoMdPerson className="w-[20px] h-[20px]"/>
            <p>{ currentUser ? currentUser.name : "Login / Sign up"}</p>
          </div>
        </Link>

        <div className="flex flex-col items-center cursor-pointer relative ml-[32px]">
          <FaBookmark className="w-[20px] h-[20px]"/>
          <p>Wishlist</p>
          <span className="absolute -top-2 right-2 bg-[#FCDD06] rounded-full w-[15px] h-[15px] flex justify-center items-center text-[10px]"><p>1</p></span>
        </div>
        <Link to="/cart">
          <div className="flex flex-col items-center cursor-pointer relative ml-[32px]">
            <IoMdCart  className="w-[20px] h-[20px]"/>
            <p>
              Cart
            </p>
            <span className="absolute -top-2 -right-1 bg-[#FCDD06] rounded-full w-[15px] h-[15px] flex justify-center items-center text-[10px]"><p>{cartQuantity}</p></span>
          </div>
        </Link>
      </div>
    </header>
  )
}

export default Nav;