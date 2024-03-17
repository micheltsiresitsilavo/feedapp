import pb from "../utils/pbClient";

const useVerify = () => {
  const checkIfExist = async () => {
    const reback = await pb
      .collection("suppervisors")
      .getFirstListItem('email = "rakoto@gmail.com"');
    return reback;
  };

  return checkIfExist;
};

export default useVerify;
