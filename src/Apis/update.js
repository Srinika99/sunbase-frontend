import axios from "axios";

const apiEndpoint =
  "https://qa2.sunbasedata.com/sunbase/portal/api/assignment.jsp?cmd=update&uuid=test92d8871792264e37bbb5eac77016b03f";

export const updateUser = async (userData) => {
  try {
    const response = await axios.post(apiEndpoint, userData);
    return response.data; 
  } catch (error) {
    console.error("Failed to update user:", error);
    throw new Error("Failed to update user. Please try again later.");
  }
};
