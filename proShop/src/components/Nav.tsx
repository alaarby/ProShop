import { IoMdPerson } from "react-icons/io";
import { FaBookmark } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import SearchBar from "./SearchBar";
import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import { Link } from "react-router-dom";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const Nav = () => {

  const currentUser = useSelector((state: RootState) => state.users.currentUser);
  const wishlist = useSelector((state: RootState) =>
    currentUser ? state.wishlist[currentUser.id] || [] : []
  )
  const cartQuantity = useSelector((state: RootState) =>
    currentUser ? state.cart[currentUser.id]?.totalQuantity ?? 0 : 0
  )
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[#242424] py-[18px] px-6 md:px-[70px] lg:px-[100px] xl:px-[140px]">
      <div className="flex justify-between items-center gap-5">
        <Link to="/">
          <h1 className="text-[#FCDD06] font-bold text-[28px] md:text-[40px]">Pro
            <span className="text-white">
              Shop
            </span>
          </h1>
        </Link>
        <div className="hidden md:block w-full max-w-[768px]">
          <SearchBar />
        </div>

        <div className="hidden md:flex items-center gap-[32px] justify-between text-white text-[13px]">
          <Link to={currentUser ? "/profile" : "/login"} >
            <div className="flex flex-col items-center cursor-pointer min-w-[88px]">
              <IoMdPerson className="w-[20px] h-[20px]"/>
              <p>
                {currentUser ? currentUser.name : "Login / Sign up"}
              </p>
            </div>
          </Link>
          <Link to="/wishlist">
          <div className="flex flex-col items-center cursor-pointer relative">
            <FaBookmark className="w-[20px] h-[20px]"/>
            <p>
              Wishlist
            </p>
            <span className="absolute -top-2 right-2 bg-[#FCDD06] rounded-full w-[15px] h-[15px] flex justify-center items-center text-[10px]">
              {wishlist.length}
            </span>
          </div>
          </Link>
          <Link to="/cart">
            <div className="flex flex-col items-center cursor-pointer relative">
              <IoMdCart  className="w-[20px] h-[20px]"/>
              <p>
                Cart
              </p>
              <span className="absolute -top-2 -right-1 bg-[#FCDD06] rounded-full w-[15px] h-[15px] flex justify-center items-center text-[10px]">
                <span>
                  {cartQuantity}
                </span>
              </span>
            </div>
          </Link>
        </div>
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-6 text-white text-[14px]">
          <SearchBar />

          <Link 
            to={currentUser ? "/profile" : "/login"} 
            onClick={() => setMenuOpen(false)}
          >
            <div className="flex items-center gap-2">
              <IoMdPerson className="w-[20px] h-[20px]" />
              <p>
                {currentUser?.name ?? "Login / Sign up"}
              </p>
            </div>
          </Link>

          <div className="flex items-center gap-2 relative">
            <FaBookmark className="w-[20px] h-[20px]" />
            <p>
              Wishlist
            </p>
            <span className="absolute -top-2 left-3 bg-[#FCDD06] rounded-full w-[15px] h-[15px] flex justify-center items-center text-[10px]">
              <span>
                {wishlist.length}
              </span>
            </span>
          </div>

          <Link 
            to="/cart" 
            onClick={() => setMenuOpen(false)}
          >
            <div className="flex items-center gap-2 relative">
              <IoMdCart className="w-[20px] h-[20px]" />
              <p>
                Cart
              </p>
              <span className="absolute -top-2 left-3 bg-[#FCDD06] rounded-full w-[15px] h-[15px] flex justify-center items-center text-[10px]">
                {cartQuantity}
              </span>
            </div>
          </Link>
        </div>
      )}
    </header>
  )
}

export default Nav;