import axios from "axios";


export const updateUser = async (userData, accessToken) => {
  const apiEndpoint =
    `'https://qa2.sunbasedata.com/sunbase/portal/api/assignment.jsp?cmd=update&uuid${userData.uuid}`;

  console.log({ userData })
  delete (userData.uuid);

  try {
    const response = await axios.post(apiEndpoint, userData, {
      headers: {
        'Content-Type': 'text/plain',
        'Authorization': `Bearer ${accessToken}`
      }
    });
    return response.data;
  } catch (error) {
    console.error("Failed to update user:", error);
    throw new Error("Failed to update user. Please try again later.");
  }
};
