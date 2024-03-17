import { useState, useEffect } from "react";
import { Outlet, useParams } from "react-router-dom";
import localforage from "localforage";
import axios_instance from "../../utils/axiosService";
import { Nav } from "../partials/Nav";

const ShowOne = () => {
  const id = useParams();

  const [cock, setCock] = useState([]);

  const getOneCock = async () => {
    try {
      const data = await localforage.getItem(`cocktas_${id.id}`);
      if (!data) {
        const cocktas = await axios_instance.get(`/lookup.php?i=${id.id}`);

        localforage
          .setItem(`cocktas_${id.id}`, cocktas.data.drinks)
          .then((value) => setCock(value));
      } else {
        getForage();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const getForage = async () => {
    try {
      const data = await localforage.getItem(`cocktas_${id.id}`);
      // This code runs once the value has been loaded
      // from the offline store.
      setCock(data);
    } catch (err) {
      // This code runs if there were any errors.
      console.log(err);
    }
  };

  useEffect(() => {
    getOneCock();
  }, []);

  return (
    <div className="relative flex flex-col-reverse py-8 lg:pt-0 lg:flex-col lg:pb-0 dark:bg-gray-800 dark:text-slate-100 ">
      <div className="inset-y-0 top-0 right-0 z-0 w-full  max-w-xl px-4 mx-auto md:px-2 lg:py-4 lg:pr-4 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
        <img
          className="object-cover w-full h-56 rounded shadow-lg  lg:shadow-none md:h-96 "
          src={cock[0]?.strDrinkThumb}
          alt={cock[0]?.strDrink}
        />
      </div>
      <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
        <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-red-900 uppercase rounded-full bg-red-400">
            {cock[0] != undefined ? (
              cock[0]?.strCategory
            ) : (
              <span className="italic font-semibold text-xs">Loading...</span>
            )}
          </p>
          <h2 className="mb-5 font-sans text-3xl  font-bold tracking-tight text-gray-800 dark:text-slate-100 sm:text-4xl sm:leading-none">
            {cock[0] != undefined ? (
              cock[0]?.strDrink
            ) : (
              <span className="italic font-semibold text-xs">...</span>
            )}
          </h2>

          <div className=" sm:block">
            <div className="border-b border-gray-200">
              <nav className="-mb-px flex gap-6 " aria-label="Tabs">
                <Nav
                  pathname={`/cocktaile/${id.id}/instruction`}
                  state={cock[0]?.strInstructions}
                >
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 6C6 5.44772 6.44772 5 7 5H17C17.5523 5 18 5.44772 18 6C18 6.55228 17.5523 7 17 7H7C6.44771 7 6 6.55228 6 6Z"
                      fill="currentColor"
                    />
                    <path
                      d="M6 10C6 9.44771 6.44772 9 7 9H17C17.5523 9 18 9.44771 18 10C18 10.5523 17.5523 11 17 11H7C6.44771 11 6 10.5523 6 10Z"
                      fill="currentColor"
                    />
                    <path
                      d="M7 13C6.44772 13 6 13.4477 6 14C6 14.5523 6.44771 15 7 15H17C17.5523 15 18 14.5523 18 14C18 13.4477 17.5523 13 17 13H7Z"
                      fill="currentColor"
                    />
                    <path
                      d="M6 18C6 17.4477 6.44772 17 7 17H11C11.5523 17 12 17.4477 12 18C12 18.5523 11.5523 19 11 19H7C6.44772 19 6 18.5523 6 18Z"
                      fill="currentColor"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M2 4C2 2.34315 3.34315 1 5 1H19C20.6569 1 22 2.34315 22 4V20C22 21.6569 20.6569 23 19 23H5C3.34315 23 2 21.6569 2 20V4ZM5 3H19C19.5523 3 20 3.44771 20 4V20C20 20.5523 19.5523 21 19 21H5C4.44772 21 4 20.5523 4 20V4C4 3.44772 4.44771 3 5 3Z"
                      fill="currentColor"
                    />
                  </svg>
                  Instruction
                </Nav>

                <Nav pathname={`/cocktaile/${id.id}/ingredient`}>
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M15 16C15 17.6569 13.6569 19 12 19C10.3431 19 9 17.6569 9 16C9 14.3431 10.3431 13 12 13C13.6569 13 15 14.3431 15 16ZM13 16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16C11 15.4477 11.4477 15 12 15C12.5523 15 13 15.4477 13 16Z"
                      fill="currentColor"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M15 1H9V3H11V5H7C4.79086 5 3 6.79086 3 9V19C3 21.2091 4.79086 23 7 23H17C19.2091 23 21 21.2091 21 19V9C21 6.79086 19.2091 5 17 5H13V3H15V1ZM17 7H7C5.89543 7 5 7.89543 5 9H19C19 7.89543 18.1046 7 17 7ZM19 11H5V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V11Z"
                      fill="currentColor"
                    />
                  </svg>
                  Ingredients
                </Nav>
              </nav>
            </div>
          </div>

          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default ShowOne;
