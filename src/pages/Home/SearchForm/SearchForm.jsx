import React, { forwardRef } from "react";
import { searchIcon, loaderIcon } from "@constants/uiConstants";

const SearchForm = forwardRef(({ isSearching, ...rest }, ref) => {
  return (
    <form
      className="flex items-center gap-5 bg-white border-2 border-gray-200 rounded-md w-full
        focus-within:border-blue-400 px-5"
    >
      <i
        className={`${
          isSearching ? loaderIcon : searchIcon
        } text-xl text-gray-400`}
      ></i>
      <input
        type="search"
        placeholder="Search for quizzes..."
        ref={ref}
        {...rest}
        className="text-lg w-full py-4 rounded-md text-slate-700 outline-none"
      />
    </form>
  );
});

export default SearchForm;
