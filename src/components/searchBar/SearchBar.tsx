import { useAppDispatch } from "@/redux/hook";
import { setSearchState } from "@/redux/features/searchSlice";
import { Input } from "@/components/ui/input";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const SearchBar = () => {
  const dispatch = useAppDispatch();
  const searchTerm = useSelector((state: RootState) => state.search.searchTerm);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchState(e.target.value));
  };

  //   const handleClearSearch = () => {
  //     dispatch(clearSearchState());
  //   };

  return (
    <div className="flex items-center gap-2">
      <Input
        className="text-black lg:w-1/3 mx-auto"
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Search products..."
      />
    </div>
  );
};

export default SearchBar;
