import { setExperience, setLoading } from "@/redux/slices/dataSlice";
import toast from "react-hot-toast";
import { apiConnector } from "../apiconnector";
import { experienceEndpoints } from "../apiendpoints";

const { EXPERIENCE_GET, EXPERIENCE_ADD, EXPERIENCE_UPDATE, EXPERIENCE_DELETE } =
  experienceEndpoints;

export const experienceGET = () => {
  return async (dispatch) => {
    // const toastId = toast.loading("Loading...");
    // dispatch(setLoading(true));
    try {
      const response = await apiConnector("GET", EXPERIENCE_GET);

      console.log("EXPERIENCE_GET_API API RESPONSE............", response);

      if (!response.data.success) {
        throw new Error(response.data.message);
      }
      dispatch(setExperience(response.data));
    } catch (error) {}
    // dispatch(setLoading(false));
    // toast.dismiss(toastId);
  };
};

export const experienceADD = async () => {
  try {
  } catch (error) {}
};

export const experienceUPDATE = async () => {
  try {
  } catch (error) {}
};

export const experienceDELETE = async () => {
  try {
  } catch (error) {}
};
