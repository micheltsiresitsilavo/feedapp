import { useEffectOnce } from "usehooks-ts";
import useGetOneProfile from "../../hooks/useGetOneProfile";
import { Link, useParams } from "react-router-dom";
import { ClassicSpinner } from "react-spinners-kit";
import clsx from "clsx";
import ModalDescription from "./AppVote/ModalDescription";
import useGetAppByUserId from "../../hooks/AppvoteHook/useGetAppByUserId";

export const ProfileOne = () => {
  const pbClientEnv = import.meta.env.VITE_BASE_URL;

  const { profileId } = useParams();

  const { data, isLoading } = useGetOneProfile(profileId);

  const { data: apps, isLoading: appLoading } = useGetAppByUserId(profileId);

  return (
    <div>
      {isLoading || !data ? (
        <div className=" h-screen flex items-center justify-center ">
          <ClassicSpinner size={30} color="#dbeafe" loading={true} />
        </div>
      ) : (
        <div className="    w-full">
          <div className=" overflow-hidden border-b bg-[url('./image/Hexagon.svg')] border-slate-500  text-slate-100   px-1    shadow-lg ">
            <div className="bg-gray-800/50 py-4">
              <div className="">
                <div className="flex justify-center ">
                  {data?.avatar ? (
                    <div className="avatar">
                      <div className="w-22 h-20  rounded-full ">
                        <img
                          src={`${pbClientEnv}/api/files/${data?.collectionName}/${data?.id}/${data?.avatar}`}
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="avatar">
                      <div className="w-22 h-20  rounded-full ">
                        <img
                          src={`https://ui-avatars.com/api/?name=${data?.name}&background=random`}
                        />
                      </div>
                    </div>
                  )}
                </div>
                <div className="flex justify-center pt-2">
                  <p className=" text-sm  md:text-lg md:font-semibold font-bold ">
                    {data?.lastname}
                  </p>
                </div>
                <div className="flex justify-center">
                  <p className=" text-sm  md:font-thin ">{data?.role}</p>
                </div>
                <div className="flex justify-center">
                  <ModalDescription
                    label={"Biographie"}
                    nameApp={`${data?.name} ${data?.lastname}`}
                    description={data?.biographie}
                  />
                </div>
              </div>
              <div className="px-3   py-2 space-y-2 md:font-semibold font-bold text-xs md:text-sm ">
                <div className="flex justify-center ">
                  <a
                    href={data?.linkdin}
                    target="_blank"
                    rel=" noreferrer"
                    className={clsx(
                      "bg-slate-500 px-3 py-2  hover:bg-accent ",
                      !data?.linkdin && "hidden"
                    )}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      viewBox="0 0 24 24"
                      style={{ fill: "#ffff" }}
                    >
                      <circle cx="4.983" cy="5.009" r="2.188"></circle>
                      <path d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z"></path>
                    </svg>
                  </a>
                  <a
                    href={data?.facebook}
                    target="_blank"
                    rel=" noreferrer"
                    className={clsx(
                      "bg-slate-500 px-3 py-2  hover:bg-accent ",
                      !data?.facebook && "hidden"
                    )}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      viewBox="0 0 24 24"
                      style={{ fill: "#ffff" }}
                    >
                      <path d="M12.001 2.002c-5.522 0-9.999 4.477-9.999 9.999 0 4.99 3.656 9.126 8.437 9.879v-6.988h-2.54v-2.891h2.54V9.798c0-2.508 1.493-3.891 3.776-3.891 1.094 0 2.24.195 2.24.195v2.459h-1.264c-1.24 0-1.628.772-1.628 1.563v1.875h2.771l-.443 2.891h-2.328v6.988C18.344 21.129 22 16.992 22 12.001c0-5.522-4.477-9.999-9.999-9.999z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className=" px-4 pt-4 pb-10">
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-5">
              {apps?.map((item) => {
                return (
                  <Link
                    to={`/appvote/${item.id}`}
                    key={item.id}
                    className=" bg-gray-300  text-gray-700 rounded-md px-2 py-3 flex items-center sm:justify-start gap-2 shadow-xl transition hover:border-pink-500  hover:shadow-pink-500/10 cursor-pointer justify-center"
                  >
                    <div>
                      {item?.iconApp ? (
                        <div className="avatar">
                          <div className="w-10 rounded-full">
                            <img
                              src={`${pbClientEnv}/api/files/${item?.collectionName}/${item?.id}/${apps?.iconApp}`}
                            />
                          </div>
                        </div>
                      ) : (
                        <div className="avatar">
                          <div className="w-10 rounded-full">
                            <img
                              src={`https://ui-avatars.com/api/?name=${item?.name}&background=random`}
                            />
                          </div>
                        </div>
                      )}
                    </div>
                    <div>
                      <p>{item.name}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
