import toast from "react-hot-toast";
import { apiConnector } from "../apiconnector";
import { setEducation, setLoading } from "@/redux/slices/dataSlice";
import { educationEndpoints } from "../apiendpoints";

const { EDUCATION_GET, EDUCATION_ADD, EDUCATION_UPDATE, EDUCATION_DELETE } =
  educationEndpoints;

export const educationGET = () => {
  return async (dispatch) => {
    // const toastId = toast.loading("Loading...");
    // dispatch(setLoading(true));
    try {
      const response = await apiConnector("GET", EDUCATION_GET);

      console.log("EDUCATION_GET_API API RESPONSE............", response);

      if (!response.data.success) {
        throw new Error(response.data.message);
      }
      dispatch(setEducation(response.data));
    } catch (error) {}
    // dispatch(setLoading(false));
    // toast.dismiss(toastId);
  };
};

export const educationADD = async () => {
  try {
  } catch (error) {}
};

export const educationUPDATE = async () => {
  try {
  } catch (error) {}
};

export const educationDELETE = async () => {
  try {
  } catch (error) {}
};
