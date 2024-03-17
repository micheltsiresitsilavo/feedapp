import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import clsx from "clsx";
import { useSnapshot } from "valtio";
import Str from "@supercharge/strings";
import useFormAccount from "../../../hooks/useFormAccount";
import useGetOne from "../../../hooks/useGetOne";
import useUpdate from "../../../hooks/useUpdate";
import Li from "./AccountElement/List";
import Textarea from "./AccountElement/Textarea";
import { ClassicSpinner } from "react-spinners-kit";
import { stateStore } from "../../../store/valtioStore";

const MyAccount = () => {
  //User in auth session
  const { user } = useSnapshot(stateStore);

  const { data: profile } = useGetOne();
  //Contact

  const { mutate: updateProfile, isLoading } = useUpdate(profile?.id);

  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [status, setStatus] = useState("");
  const [biographie, setBiographie] = useState("");

  // const { register, handleSubmit, reset } = useFormAccount();

  useEffect(() => {
    if (profile) {
      setName(profile.name);
      setLastname(profile.lastname);
      setStatus(profile.status);
      setBiographie(profile.biographie);
    }
  }, [profile]);

  const handleAddProfile = (data) => {
    try {
      const payload = {
        name: data?.name,
        lastname: data?.lastname,
        status: data?.status,
        biographie: data?.biographie,
      };

      updateProfile(payload);
    } catch (error) {
      console.log(error);
    }
  };

  if (!profile) {
    return <div>Loading....</div>;
  }
  return (
    <div className=" h-auto  border-base-300 bg-gray-600 text-slate-100 shadow-2xl">
      <div className="w-full ">
        <div className="flex items-center justify-between bg-gray-500 px-4 py-2 borde-base-300 border-l-4">
          <span className=" font-semibold">
            {" "}
            <svg
              viewBox="0 0 256 256"
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-10"
            >
              <rect fill="none" height="256" width="256" />
              <circle cx="108" cy="100" opacity="0.2" r="60" />
              <circle
                cx="108"
                cy="100"
                fill="none"
                r="60"
                stroke="currentColor"
                strokeMiterlimit="10"
                strokeWidth="16"
              />
              <path
                d="M22.2,200a112,112,0,0,1,171.6,0"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
              />
              <circle
                cx="220"
                cy="136"
                fill="none"
                r="16"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
              />
              <line
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
                x1="220"
                x2="220"
                y1="120"
                y2="108"
              />
              <line
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
                x1="206.1"
                x2="195.8"
                y1="128"
                y2="122"
              />
              <line
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
                x1="206.1"
                x2="195.8"
                y1="144"
                y2="150"
              />
              <line
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
                x1="220"
                x2="220"
                y1="152"
                y2="164"
              />
              <line
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
                x1="233.9"
                x2="244.2"
                y1="144"
                y2="150"
              />
              <line
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
                x1="233.9"
                x2="244.2"
                y1="128"
                y2="122"
              />
            </svg>{" "}
          </span>

          <div
            className={clsx(
              "badge gap-2",
              profile.confirmed ? "badge-success" : "badge-warning"
            )}
          >
            {!profile.confirmed ? (
              <svg
                viewBox="0 0 256 256"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
              >
                <rect fill="none" height="256" width="256" />
                <path
                  d="M114.2,40l-88,152A16,16,0,0,0,40,216H216a16,16,0,0,0,13.8-24l-88-152A15.9,15.9,0,0,0,114.2,40Z"
                  opacity="0.2"
                />
                <line
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                  x1="128"
                  x2="128"
                  y1="112"
                  y2="144"
                />
                <path
                  d="M114.2,40l-88,152A16,16,0,0,0,40,216H216a16,16,0,0,0,13.8-24l-88-152A15.9,15.9,0,0,0,114.2,40Z"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                />
                <circle cx="128" cy="180" r="12" />
              </svg>
            ) : (
              <svg
                viewBox="0 0 256 256"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
              >
                <rect fill="none" height="256" width="256" />
                <circle cx="128" cy="128" opacity="0.2" r="96" />
                <polyline
                  fill="none"
                  points="172 104 113.3 160 84 132"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                />
                <circle
                  cx="128"
                  cy="128"
                  fill="none"
                  r="96"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                />
              </svg>
            )}
            {profile?.status}
          </div>
        </div>

        <div className=" px-2 ">
          <div className="mb-8">
            <h2 className="py-4 font-semibold border-b dark:border-gray-500 border-slate-200  md:text-lg text-md">
              Authorization
            </h2>
            <ul>
              <li className=" border-b dark:border-gray-500 border-slate-200  py-6  ">
                <div className="grid grid-cols-[100px, 1fr, 1fr] gap-2 items-center">
                  <div>Email</div>
                  <div className="">
                    {user.email}{" "}
                    <span className="text-xs bg-gray-400 px-2 py-1 uppercase font-semibold rounded-md text-white ">
                      {user.verified ? "Verifier" : "non verifier"}
                    </span>
                  </div>
                  <div className="text-end ">
                    <span className="cursor-pointer text-amber-400 hover:text-base-300">
                      Change
                    </span>
                  </div>
                </div>
              </li>
              <li className=" border-b dark:border-gray-500 border-slate-200  py-6  ">
                <div className="grid grid-cols-[200px_1fr_1fr] gap-2 items-center ">
                  <div>Password</div>
                  <div className="">
                    <span className="text-3xl">.......</span>
                  </div>
                  <div className="text-end ">
                    <span className="cursor-pointer text-amber-400 hover:text-base-300">
                      Change
                    </span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="py-4 font-semibold border-b dark:border-gray-500 border-slate-200  text-lg">
              Profile info
            </h2>
            <ul>
              <Li
                label="Name"
                value={name}
                field="name"
                isLoading={isLoading}
                setValue={setName}
                initialValue={profile.name}
                onChangeFn={handleAddProfile}
                placeholder="Add your name"
              />
              <Li
                label="Last Name"
                value={lastname}
                field="lastname"
                isLoading={isLoading}
                setValue={setLastname}
                initialValue={profile?.lastname}
                onChangeFn={handleAddProfile}
                placeholder="Add last name"
              />
              <Li
                label="Status"
                value={status}
                field="status"
                isLoading={isLoading}
                setValue={setStatus}
                initialValue={profile?.status}
                onChangeFn={handleAddProfile}
                placeholder="Add your status"
              />
              <Textarea
                label="Biographie"
                value={biographie}
                field="biographie"
                isLoading={isLoading}
                setValue={setBiographie}
                initialValue={profile?.biographie}
                onChangeFn={handleAddProfile}
                placeholder="Add your biographie"
              />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
