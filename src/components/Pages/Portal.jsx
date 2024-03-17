import { useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { useSWRConfig } from "swr";
import Lottie from "lottie-react";
import emptyBox from "../../lotties/empty-box.json";
import CardApp from "./AppVote/CardApp";
import SearchBar from "./AppVote/SearchBar";
import useFilter from "../../hooks/AppvoteHook/useFilter";
import Loading from "./AppVote/Loading";
import useGetVotes from "../../hooks/AppvoteHook/useGetVote";
import { motion } from "framer-motion";

const Portal = () => {
  const { mutate } = useSWRConfig();

  const [search] = useSearchParams();
  const query = search.get("query") ?? "";

  //Hooks useFilter
  const { data: filteredData } = useFilter(query.toString().toLowerCase());
  //Get data filtered
  const data = filteredData?.resp;
  //Transform loading state from useGetFullLists hooks
  const isLoading = filteredData?.isLoad;

  const isLoaded = isLoading === undefined ? true : false;

  const { data: votes } = useGetVotes();

  useEffect(() => {
    mutate("appFilter");
  }, [search, mutate]);

  if (isLoaded)
    return (
      <div>
        <Loading loading={isLoaded} />
      </div>
    );
  return (
    <>
      <div className="h-auto py-2">
        {data?.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className=" h-screen flex items-center justify-center "
          >
            <div>
              <Lottie animationData={emptyBox} className="w-52 mx-auto" />
              Oop! your search item return nothing <br />
              <div className="flex justify-center m-2">
                <Link
                  to="/portal"
                  className="bg-blue-100 text-xs sm:text-sm text-blue-500 px-2 py-[10px] rounded-md"
                >
                  Go back
                </Link>
              </div>
            </div>
          </motion.div>
        ) : (
          <>
            <SearchBar />

            <div>
              <motion.div
                initial={{ y: -250 }}
                animate={{ y: -10 }}
                transition={{ stiffness: 10 }}
                className="grid grid-cols-1  lg:grid-cols-4 xl:grid-cols-5  sm:grid-cols-3  px-4 py-4 lg:gap-3 gap-2  "
              >
                {data?.map((item) => (
                  <CardApp key={item.id} data={item} votes={votes} />
                ))}
              </motion.div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Portal;
