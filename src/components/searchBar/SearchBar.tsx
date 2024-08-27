import { useAppDispatch } from "@/redux/hook";
import { setSearchState } from "@/redux/features/searchSlice";
import { Input } from "@/components/ui/input";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import React from "react";
import useDebounce from "@/hook/useDebounce";

const SearchBar = () => {
  const dispatch = useAppDispatch();
  const searchTerm = useSelector((state: RootState) => state.search.searchTerm);
  const [inputValue, setInputValue] = React.useState(searchTerm);

  // Debounce the search term
  const debouncedSearchTerm = useDebounce(inputValue, 500);
  React.useEffect(() => {
    dispatch(setSearchState(debouncedSearchTerm));
  }, [debouncedSearchTerm, dispatch]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="flex items-center gap-2">
      <Input
        className="text-black lg:w-1/3 mx-auto"
        type="text"
        value={inputValue}
        onChange={handleSearchChange}
        placeholder="Search products..."
      />
    </div>
  );
};

export default SearchBar;
