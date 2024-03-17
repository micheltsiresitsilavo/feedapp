import { useEffect, useState } from "react";
import { useSnapshot } from "valtio";
import useGetOne from "../../hooks/useGetOne";
import { stateStore } from "../../store/valtioStore";
import HeadProfile from "./HeadProfile";
import useUpdate from "../../hooks/useUpdate";
import Li from "./DashboardElement/AccountElement/List";
import Textarea from "./DashboardElement/AccountElement/Textarea";
import { ClassicSpinner } from "react-spinners-kit";
import { motion } from "framer-motion";

const Profile = () => {
  const { data: profile } = useGetOne();
  const { mutate: updateProfile, isLoading } = useUpdate(profile?.id);
  const { user } = useSnapshot(stateStore);
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [role, setRole] = useState("");
  const [biographie, setBiographie] = useState("");
  const [facebook, setFacebook] = useState("");
  const [linkdin, setLinkdin] = useState("");
  useEffect(() => {
    if (profile) {
      setName(profile.name);
      setLastname(profile.lastname);
      setRole(profile.role);
      setBiographie(profile.biographie);
      setFacebook(profile.facebook);
      setLinkdin(profile.linkdin);
    }
  }, [profile]);

  const handleAddProfile = (data) => {
    try {
      const payload = {
        name: data?.name,
        lastname: data?.lastname,
        role: data?.role,
        biographie: data?.biographie,
        facebook: data?.facebook,
        linkdin: data?.linkdin,
      };

      updateProfile(payload);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="px-8 py-2  md:px-20 md:max-w-4xl mx-auto"
    >
      <HeadProfile />
      <div className="py-8">
        <h2 className="font-semibold border-b dark:border-gray-500 border-slate-200  text-lg">
          Authorization
        </h2>
        <div className="flow-root  pt-4">
          <dl className="-my-3 divide-y divide-gray-100 text-sm dark:divide-gray-700">
            <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4 ">
              <dt className="font-medium  md:text-lg ">
                <p className="text-gray-800 dark:text-white">Email</p>
              </dt>
              <dd className="text-gray-700 dark:text-gray-200 sm:col-span-2">
                <div className=" sm:flex sm:justify-between">
                  <div>
                    <p className="text-slate-200 md:text-lg">{user?.email}</p>
                    <span className="text-xs bg-gray-400 px-2   font-semibold rounded-md text-slate-100 ">
                      {user?.verified ? "Verifier" : "non verifier"}
                    </span>
                  </div>
                  <div className="text-start">
                    <span className="cursor-pointer text-amber-400 hover:text-amber-300 md:text-lg">
                      Change
                    </span>
                  </div>
                </div>
              </dd>
            </div>

            <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
              <dt className="font-medium text-gray-900 md:text-lg dark:text-white">
                Password
              </dt>
              <dd className="text-gray-700 dark:text-gray-200 sm:col-span-2">
                <div className=" sm:flex sm:justify-between">
                  <p className="md:text-lg">*********</p>
                  <div className="text-start">
                    <span className="cursor-pointer text-amber-400 hover:text-amber-300 md:text-lg">
                      Change
                    </span>
                  </div>
                </div>
              </dd>
            </div>
          </dl>
        </div>
      </div>
      {/* Profile info */}
      <div className="py-8 px-2">
        <div className=" border-b dark:border-gray-500 border-slate-200 flex justify-between items-center">
          <h2 className="font-semibold  text-lg">Profile info</h2>
          <div className="flex items-center space-x-2">
            <ClassicSpinner size={15} color="#dbeafe" loading={isLoading} />
            {isLoading && <p className="text-xs md:text-sm">Saving</p>}
          </div>
        </div>

        <Li
          label="Name"
          value={name}
          field="name"
          isLoading={isLoading}
          setValue={setName}
          initialValue={profile?.name}
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
          value={role}
          field="role"
          isLoading={isLoading}
          setValue={setRole}
          initialValue={profile?.role}
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

        <Li
          label="Facebook"
          value={facebook}
          field="facebook"
          isLoading={isLoading}
          setValue={setFacebook}
          initialValue={profile?.facebook}
          onChangeFn={handleAddProfile}
          placeholder="Add your facebook link"
        />
        <Li
          label="Linkdin"
          value={linkdin}
          field="linkdin"
          isLoading={isLoading}
          setValue={setLinkdin}
          initialValue={profile?.linkdin}
          onChangeFn={handleAddProfile}
          placeholder="Add your Linkedin link"
        />
      </div>
    </motion.div>
  );
};

export default Profile;
