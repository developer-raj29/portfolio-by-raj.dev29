import { setLoading, setProjects } from "@/redux/slices/dataSlice";
import toast from "react-hot-toast";
import { apiConnector } from "../apiconnector";
import { projectsEndpoints } from "../apiendpoints";

const { PROJECTS_GET, PROJECTS_ADD, PROJECTS_UPDATE, PROJECTS_DELETE } =
  projectsEndpoints;

export const projectGET = () => {
  return async (dispatch) => {
    // const toastId = toast.loading("Loading...");
    // dispatch(setLoading(true));
    try {
      const response = await apiConnector("GET", PROJECTS_GET);

      console.log("PROJECTS_GET_API API RESPONSE............", response);

      if (!response.data.success) {
        throw new Error(response.data.message);
      }
      dispatch(setProjects(response.data));
    } catch (error) {}
    // dispatch(setLoading(false));
    // toast.dismiss(toastId);
  };
};

export const projectsADD = async () => {
  try {
  } catch (error) {}
};

export const projectsUPDATE = async () => {
  try {
  } catch (error) {}
};

export const projectsDELETE = async () => {
  try {
  } catch (error) {}
};
