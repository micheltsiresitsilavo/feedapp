import { ClassicSpinner } from "react-spinners-kit";

const Loading = ({ loading }) => {
  return (
    <div className=" h-screen flex items-center justify-center ">
      <ClassicSpinner size={30} color="#dbeafe" loading={loading} />
    </div>
  );
};

export default Loading;
