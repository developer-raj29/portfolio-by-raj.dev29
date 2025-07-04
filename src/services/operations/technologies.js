import toast from "react-hot-toast";
import { apiConnector } from "../apiconnector";
import { setLoading, setTechnologies } from "@/redux/slices/dataSlice";
import { technologiesEndpoints } from "../apiendpoints";

const {
  TECHNOLOGIES_GET,
  TECHONOLOGIES_ADD,
  TECHNOLOGIES_UPDATE,
  TECHNOLOGIES_DELETE,
} = technologiesEndpoints;

export const technologiesGET = () => {
  return async (dispatch) => {
    // const toastId = toast.loading("Loading...");
    // dispatch(setLoading(true));
    try {
      const response = await apiConnector("GET", TECHNOLOGIES_GET);

      console.log("TECHNOLOGIES_GET_API API RESPONSE............", response);

      if (!response.data.success) {
        throw new Error(response.data.message);
      }
      dispatch(setTechnologies(response.data));
    } catch (error) {}
    // dispatch(setLoading(false));
    // toast.dismiss(toastId);
  };
};

export const technologiesADD = async () => {
  try {
  } catch (error) {}
};

export const technologiesUPDATE = async () => {
  try {
  } catch (error) {}
};

export const technologiesDELETE = async () => {
  try {
  } catch (error) {}
};
