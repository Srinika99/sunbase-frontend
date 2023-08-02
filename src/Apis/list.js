import axios from "axios";

export async function getUserList(accessToken) {
  const apiUrl = "https://qa2.sunbasedata.com/sunbase/portal/api/assignment.jsp?cmd=get_customer_list";

  try {
    const response = await axios.get(apiUrl, {
      headers: {
        "Authorization": 'Bearer dGVzdEBzdW5iYXNlZGF0YS5jb206VGVzdEAxMjM=',
        "Content-Type": "application/json",
      },
      mode: 'no-cors'
    });

    const data = response.data;

    return data;

  } catch (error) {
    console.error("Failed to fetch user list:", error);
    throw new Error("Failed to fetch user list. Please try again later.");
  }
}
