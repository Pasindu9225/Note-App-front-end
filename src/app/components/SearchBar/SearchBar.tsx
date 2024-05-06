import React from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

const SearchBar = ({ value, onChange, handleSearch, onClearSearch }: any) => {
  return (
    <div className=" w-80 flex items-center px-4 bg-slate-100 rounded-md">
      <input
        type="text"
        placeholder="Search"
        className=" w-full text-xs bg-transparent py-[11px] outline-none"
        value={value}
        onChange={onChange}
      />
      {value && (
        <IoMdClose
          onClick={onClearSearch}
          className=" text-slate-400 mr-1 cursor-pointer  hover:text-black"
        />
      )}
      <FaMagnifyingGlass
        onClick={handleSearch}
        className=" text-slate-400 cursor-pointer  hover:text-black"
      />
    </div>
  );
};

export default SearchBar;
