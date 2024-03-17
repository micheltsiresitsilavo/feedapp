import { useParams } from "react-router-dom";
import localforage from "localforage";
import { useEffect, useState } from "react";

const Instruction = () => {
  const [instr, setInstr] = useState("");
  const id = useParams();
  const getInstr = async () => {
    try {
      const instruction = await localforage.getItem(`cocktas_${id.id}`);
      // This code runs once the value has been loaded
      // from the offline store.
      setInstr(instruction[0]?.strInstructions);
    } catch (err) {
      // This code runs if there were any errors.
      console.log(err);
    }
  };

  useEffect(() => {
    getInstr();
  }, []);

  return (
    <div className="px-2 h-60">
      <p className="pr-5 mb-5 text-base text-gray-700 dark:text-slate-50 font-semibold md:text-lg py-2">
        {instr}
      </p>
    </div>
  );
};

export default Instruction;
