import axios from "axios";

export async function login(loginId, password) {
  const apiUrl = "https://qa2.sunbasedata.com/sunbase/portal/api/assignment_auth.jsp";

  try {
    const response = await axios.post(apiUrl, {
      login_id: loginId,
      password: password,
    }, {
      headers: {
        'Content-Type': 'text/plain',
      },
      mode: 'no-cors'
    });

    const data = response.data;
    window.localStorage.setItem("access_token", data.access_token);
    window.location.href = '/list';

  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        console.error(
          "Login failed. Server responded with:",
          error.response.data
        );
      } else {
        console.error("Login failed. No response received from the server.");
      }
    } else {
      console.error("Login failed. Error:", error);
    }
    throw new Error("Login failed");
  }
}


