import { CiSearch } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import { useState } from "react";
import { setSearchQuery } from "../redux/productsSlice";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const SearchBar = () => {
  
  const dispatch = useDispatch();
  const { searchQuery, products } = useSelector((state: RootState) => state.products);

  const [showDropdown, setShowDropdown] = useState(false);

  const filteredProducts = products.filter(p => 
    p.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <div className="relative w-full">
      <div className="rounded-md bg-white w-full h-[40px] flex items-center">
        <input 
          type="text" 
          placeholder="Search products..." 
          className="search-input py-[12px] pl-[26px] flex-1 h-[40px] text-[13px] outline-0 text-[#242424]" 
          value={searchQuery}
          onChange={(e)=>{
            dispatch(setSearchQuery(e.target.value));
            setShowDropdown(true);
          }}
          onFocus={() => setShowDropdown(true)}
          onBlur={() => setTimeout(() => setShowDropdown(false), 150)}
          />
        <button 
          className="bg-[#FCDD06] rounded-r-[6px] px-4 h-[40px] flex items-center justify-center text-[11px] lg:text-[16px] text-[#000000] font-semibold cursor-pointer outline-0 py-[10px] w-full max-w-[152px]"
          > 
          <CiSearch className="w-[18px] h-[18px]"/>  
          Search
        </button>
      </div>

      <AnimatePresence>
        {
          showDropdown && searchQuery && (
            <motion.ul 
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.2 }}
              className="absolute left-0 mt-1 w-full max-h-60 overflow-y-auto bg-white text-black  rounded-md shadow-lg z-10"
            >
              {
                filteredProducts.length > 0 ?(
                  filteredProducts.map(p => (
                    <li
                      key={p.id}
                      className="px-4 py-2 cursor-pointer hover:bg-gray-100 z-10"
                      onClick={() => {
                        dispatch(setSearchQuery(p.name));
                        setShowDropdown(false);
                      }}
                    >
                      <Link to={`/products/${p.slug}`} className="block w-full">
                        {p.name}
                      </Link>
                    </li>
                  ))
                ): (
                  <li className="px-4 py-2 text-gray-500">No results found</li>
                )
              }
            </motion.ul>
          )
        }
      </AnimatePresence>
    </div>
  )
}

export default SearchBar;