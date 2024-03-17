import { Str } from "@supercharge/strings";

const CheckNameAdd = ({ filteredName, nameApp }) => {
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
            <span className="lg:text-lg text-sm italic text-orange-400 font-semibold">
              "{nameApp}" already taken or your current app name
            </span>
          </label>
        ))}
    </>
  );
};

export default CheckNameAdd;
