import Lottie from "lottie-react";
import emptyBox from "../../../lotties/empty-box.json";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const EmptyBox = () => {
  return (
    <motion.div
      initial={{ y: -250 }}
      animate={{ y: -10 }}
      // transition={{ delay: 0.2 }}
      className="h-screen flex justify-center items-center"
    >
      {/* <p className="text-4xl px-40">Empty</p> */}
      <div>
        <Lottie animationData={emptyBox} className="w-32 mx-auto" />
        <div className="text-center text-lg pb-4 pt-2">
          <p>Your board seems empty!</p>
          <p>Feel free to add one</p>
        </div>
        <Link to="addApp">
          <div className="text-gray-700 bg-slate-200 px-2 py-2 font-semibold text-center rounded-sm cursor-pointer">
            Add App
          </div>
        </Link>
      </div>
    </motion.div>
  );
};

export default EmptyBox;
