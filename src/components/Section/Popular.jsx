import { useState, useEffect } from "react";
import axios_instance from "../../utils/axiosService";
import { Link } from "react-router-dom";
import localforage from "localforage";

const Popular = () => {
  const [pop, setPopular] = useState([]);
  const getPopular = async () => {
    try {
      const popular = await axios_instance.get("/filter.php?a=Alcoholic");
      localforage.setItem("data", popular.data.drinks);
    } catch (error) {
      console.error(error);
    }
  };

  const getForage = async () => {
    try {
      const data = await localforage.getItem("data");
      // This code runs once the value has been loaded
      // from the offline store.
      const sliceData = data.slice(0, 8);
      setPopular(sliceData);
    } catch (err) {
      // This code runs if there were any errors.
      console.log(err);
    }
  };

  useEffect(() => {
    getPopular();
    getForage();
  }, []);

  return (
    <>
      {pop != undefined ? (
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8">
          {pop.map((cock) => (
            <Link
              to={`/cocktaile/${cock?.idDrink}/instruction`}
              className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg h-48 cursor-pointer"
              key={cock?.idDrink}
            >
              <img
                alt={cock?.strDrink}
                src={cock?.strDrinkThumb}
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-32 h-full">
                <div className="p-4 sm:p-6">
                  <a href="#">
                    <h3 className="mt-0.5 text-lg text-white">
                      {cock?.strDrink}
                    </h3>
                  </a>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="w-auto mx-auto flex justify-center ">
          <span className="italic font-semibold text-lg">Loading...</span>
        </div>
      )}
    </>
  );
};

export default Popular;
