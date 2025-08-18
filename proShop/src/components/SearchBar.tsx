import { CiSearch } from "react-icons/ci";

const SearchBar = () => {
  return (
    <div className="search-bar rounded-md bg-white w-[705px] h-[40px] flex items-center justify-between">
      <input type="text" placeholder="Search products..." className="search-input p-2 w-[553px] h-[40px] text-[13px] outline-0" />
      <button className="search-button bg-yellow-300 rounded-tr-md rounded-br-md p-2 w-[152px] h-[40px] flex items-center justify-center text-[16px] cursor-pointer outline-0"> 
        <CiSearch className="w-[18px] h-[18px]"/>  
        Search
        </button>
    </div>
  )
}
export default SearchBar;