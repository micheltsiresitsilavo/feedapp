import { useSearchParams } from "react-router-dom";

const SearchBar = () => {
  const [search, setSearch] = useSearchParams();

  const handleOnChange = (evt) => {
    let textInput = evt.target.value;
    if (textInput.length === 0) {
      search.delete("query");
      setSearch(search, { replace: true });
    } else {
      search.set("query", textInput);
      setSearch(search, { replace: true });
    }
  };

  return (
    <div className="navbar bg-base-100 flex-col-reverse md:flex-row    lg:justify-between justify-center">
      <div className="form-control">
        <input
          type="text"
          placeholder="Search"
          onChange={(evt) => handleOnChange(evt)}
          className="input input-bordered w-auto"
        />
      </div>
    </div>
  );
};

export default SearchBar;
