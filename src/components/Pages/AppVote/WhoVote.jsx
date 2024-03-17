import { Link } from "react-router-dom";
import { ClassicSpinner } from "react-spinners-kit";

const WhoVote = ({ data, loading }) => {
  const pbClientEnv = import.meta.env.VITE_BASE_URL;

  return (
    <div className="flex items-center px-3 border-b border-b-slate-700 gap-2 py-2">
      {loading ? (
        <div className="w-full  flex justify-center  items-center">
          <ClassicSpinner size={25} color="#dbeafe" loading={loading} />
        </div>
      ) : (
        <>
          {data?.expand.voterId?.avatar ? (
            <div className="avatar">
              <div className="w-10 rounded-full bg-slate-300">
                <img
                  src={`${pbClientEnv}/api/files/${data?.expand.voterId.collectionName}/${data?.expand.voterId.id}/${data?.expand.voterId.avatar}`}
                />
              </div>
            </div>
          ) : (
            <div className="avatar">
              <div className="w-10 rounded-full">
                <img
                  src={`https://ui-avatars.com/api/?name=${data?.expand.voterId?.name}+${data?.expand.voterId?.lastname}&background=random`}
                />
              </div>
            </div>
          )}
          <div>
            <Link
              to={`/profileme/${data?.expand.voterId?.id}`}
              className="link link_hover text-xs sm:text-sm "
            >
              {data?.expand.voterId?.name}
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default WhoVote;
