/* eslint-disable */
import { useEffect, useState } from "react";
import { ClassicSpinner } from "react-spinners-kit";
import useFormAccount from "../../../../hooks/useFormAccount";
const Li = ({
  label,
  field,
  value,
  isLoading,
  setValue,
  initialValue,
  onChangeFn,
  placeholder,
}) => {
  const { register, handleSubmit } = useFormAccount();
  const [focusState, setFocusState] = useState(false);

  useEffect(() => {
    const checkFn = () => {
      if (initialValue === value) {
        setFocusState(false);
      } else {
        setFocusState(true);
      }
    };
    checkFn();
  }, [value]);
  const cancelFn = (e) => {
    e.preventDefault();
    setValue(initialValue);
    setFocusState(false);
  };
  return (
    <>
      <div className="flow-root pt-4">
        <dl className="-my-3 divide-y divide-gray-100 text-sm dark:divide-gray-700">
          <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-gray-900 md:text-lg dark:text-white">
              {label}
            </dt>
            <dd className="text-gray-700 dark:text-gray-200 sm:col-span-2">
              <div className=" sm:flex sm:justify-between">
                <div>
                  <form onSubmit={handleSubmit(onChangeFn)}>
                    <div className="py-2">
                      <input
                        type="text"
                        value={value}
                        placeholder={placeholder}
                        className="input input-sm input-ghost w-full max-w-xs"
                        {...register(field)}
                        onChange={(e) => setValue(e.target.value)}
                      />
                    </div>
                    {focusState && (
                      <div className="grid grid-flow-col auto-cols-min gap-1 ">
                        <button
                          type="submit"
                          className="flex items-center justify-center space-x-2 py-1 px-4 w-28 rounded-md bg-blue-400"
                        >
                          <span>Save</span>
                        </button>
                        <button
                          className="bg-blue-100 w-28  text-blue-700 rounded-md"
                          onClick={cancelFn}
                        >
                          <span>Cancel</span>
                        </button>
                      </div>
                    )}
                  </form>
                </div>
              </div>
            </dd>
          </div>
        </dl>
      </div>
    </>
  );
};

export default Li;
