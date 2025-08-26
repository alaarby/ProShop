import { CiSearch } from "react-icons/ci";

const SearchBar = () => {
  return (
    <div className="search-bar rounded-md bg-white md:w-[300px] lg:w-[705px] h-[40px] flex items-center justify-between">
      <input 
        type="text" 
        placeholder="Search products..." 
        className="search-input py-[12px] pl-[26px] w-[553px] h-[40px] text-[13px] outline-0 text-[#242424]" 
      />
      <button 
        className="search-button bg-[#FCDD06] rounded-r-[6px] w-[152px] h-[40px] flex items-center justify-center text-[11px] lg:text-[16px] text-[#000000] font-semibold cursor-pointer outline-0 py-[10px]"
      > 
        <CiSearch className="w-[18px] h-[18px]"/>  
        Search
      </button>
    </div>
  )
}

export default SearchBar;