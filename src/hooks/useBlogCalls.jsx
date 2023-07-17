import { useDispatch } from "react-redux";
import useAxios from "./useAxios";
import { fetchFail, fetchStart, getSuccess } from "../features/blogSlice";

const useBlogCalls = () => {
  const dispatch = useDispatch();
  const { axiosPublic, axiosWithToken } = useAxios();

  const getCategoriesData = async (url) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosPublic.get(`api/${url}/`);
      dispatch(getSuccess({ data, url }));
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
    }
  };

  const getBlogsData = async (url) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosPublic.get(`api/${url}/`);
      dispatch(getSuccess({ data, url }));
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
    }
  };
  return { getCategoriesData, getBlogsData };
};

export default useBlogCalls;
