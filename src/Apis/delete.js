import axios from "axios";

// Function to delete a user by uuid
export const deleteUser = async (uuId, accessToken) => {
  try {
    const deleteEndpoint = `https://qa2.sunbasedata.com/sunbase/portal/api/assignment.jsp?cmd=delete&uuid=${uuId}`;
    const response = await axios.post(deleteEndpoint, null, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Failed to delete user:", error);
    throw new Error("Failed to delete user. Please try again later.");
  }
};
