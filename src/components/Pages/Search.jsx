import localforage from "localforage";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const Search = () => {
  const param = useParams();
  const [searchResult, setSearchResult] = useState();

  const getData = async (param) => {
    try {
      const data = await localforage.getItem("data");
      if (data) {
        const result = data.filter((cock) => {
          return cock.strDrink.toLowerCase().includes(param);
        });
        setSearchResult(result);
      }
    } catch (err) {
      // This code runs if there were any errors.
      console.log(err);
    }
  };

  useEffect(() => {
    getData(param.searchItem);
  }, [param]);

  return (
    <div>
      <div className="py-4 border-b-gray-100 border shadow-sm">
        <div className="mx-auto max-w-screen-xl px-4 lg:flex lg:items-center">
          <div className="mx-auto max-w-xl text-center">
            <h1 className="text-4xl text-gray-800 font-extrabold sm:text-5xl">
              Search result for
              <strong className="font-extrabold text-red-700 sm:block italic">
                '{param.searchItem}'
              </strong>
            </h1>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8 px-4 py-2">
        {searchResult ? (
          searchResult.map((item) => (
            <Link
              to={`/cocktaile/${item?.idDrink}/instruction`}
              className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg h-48"
              key={item?.idDrink}
            >
              <img
                alt={item?.strDrinkThumb}
                src={item?.strDrinkThumb}
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-32 h-full">
                <div className="p-4 sm:p-6">
                  <a href="#">
                    <h3 className="mt-0.5 text-lg text-white">
                      {item?.strDrink}
                    </h3>
                  </a>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <p>NO MORE</p>
        )}
      </div>
    </div>
  );
};

export default Search;
