import axios from "axios";

export async function createUser(accessToken, userData) {
  const apiUrl = "https://qa2.sunbasedata.com/sunbase/portal/api/assignment.jsp?cmd=create";

  try {
    const response = await axios.post(apiUrl, userData, {
      headers: {
        "Authorization": `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (error) {
    console.error("API error:", error);
    throw error;
  }
}
