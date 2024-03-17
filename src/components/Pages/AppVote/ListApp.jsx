import CardApp from "./CardApp";
import useGetLists from "../../../hooks/AppvoteHook/useGetLists";
import Loading from "./Loading";
import useGetVotes from "../../../hooks/AppvoteHook/useGetVote";
import EmptyBox from "./EmptyBox";
import { motion } from "framer-motion";

const ListApp = () => {
  const { data, isLoading } = useGetLists();

  const { data: votes } = useGetVotes();

  if (isLoading) return <Loading loading={isLoading} />;

  return (
    <div className="h-full">
      {data?.length === 0 ? (
        <EmptyBox />
      ) : (
        <motion.div
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ stiffness: 130 }}
          className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-2  px-4 py-4 lg:gap-4 gap-2 "
        >
          {data?.map((item) => (
            <CardApp key={item.id} data={item} votes={votes} />
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default ListApp;
