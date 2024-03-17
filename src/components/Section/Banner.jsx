import { useEffect, useState } from "react";
import axios_instance from "../../utils/axiosService";
import Popular from "./Popular";
import drinks from "../../utils/drinks";
import { Link } from "react-router-dom";

const Banner = () => {
  const [cocktailCate, setCocktailCate] = useState([]);

  const getCategory = async () => {
    try {
      const response = await axios_instance.get("/list.php?c=list");
      setCocktailCate(response.data.drinks);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCategory();
  }, []);

  return (
    <section className="bg-gray-50 dark:bg-gray-800 ">
      <div className="mx-auto max-w-screen-xl px-4 py-12 lg:flex lg:items-center">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-4xl text-gray-800 dark:text-slate-100 font-extrabold sm:text-5xl">
            Ry mpankafy Cocktail{"  "}
            <strong className="font-extrabold text-red-700 sm:block">
              Jereo ny mety @nao
            </strong>
          </h1>

          <p className="mt-4 sm:text-xl/relaxed text-gray-700 dark:text-slate-200">
            Hitanao ato daholo ireo cocktail malaza sy ny fanamboarana azy ary
            ny Ingredient ilaina.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              className="block w-full rounded bg-red-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
              href="/get-started"
            >
              Get Started
            </a>

            <a
              className="block w-full rounded px-12 py-3 text-sm font-medium dark:bg-slate-50 text-red-600 shadow hover:text-red-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto"
              href="/about"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
      <div className="mx-auto   px-2 sm:px-1  w-auto  space-x-2 overflow-x-auto scrollbar-thin  scrollbar-track-transparent    py-2 flex  md:justify-center">
        {drinks.map((drink) => {
          return (
            <Link
              to="/category"
              className=" rounded-md text-center flex items-center py-2 bg-slate-300 dark:bg-green-200 px-2 text-sm dark:hover:text-gray-800 hover:text-red-700 focus:outline-none focus:ring active:text-opacity-75"
              href="/download"
              key={drink?.strCategory}
            >
              <span className="whitespace-nowrap font-semibold">
                {drink?.strCategory}
              </span>
            </Link>
          );
        })}
      </div>
      <div className="px-8 py-8">
        <div className="py-4">
          <span className="text-gray-800 dark:text-slate-100 font-bold sm:text-lg border-b-4 border-red-500">
            Popular
          </span>
        </div>

        <Popular />
      </div>
    </section>
  );
};

export default Banner;
