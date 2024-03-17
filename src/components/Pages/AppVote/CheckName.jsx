import { Str } from "@supercharge/strings";

const CheckName = ({ filteredName, nameApp }) => {
  return (
    <>
      {Str(nameApp).length() >= 4 &&
        (filteredName?.length === 0 ? (
          <label className="label">
            <span className="lg:text-lg text-sm text-green-400 font-semibold italic">
              "{nameApp}" is available
            </span>
          </label>
        ) : (
          <label className="label">
            <span className="lg:text-lg text-sm italic text-red-400 font-semibold">
              "{nameApp}" already taken
            </span>
          </label>
        ))}
    </>
  );
};

export default CheckName;
