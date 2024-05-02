
const axios = require("axios");
const dotenv = require("../../config/dotenv");
async function authenticate() {
  try {
    const authResponse = await axios.post(
      "https://auth.haasalertdev.com/oauth/token",
      {
        grant_type: "password",
        username: "qatest@haasalert.com",
        password: "newTest21!",
      },
      {
        headers: {
          Authorization: `Bearer ${dotenv.TOKEN}`,
        },
      }
    );
    console.log("Is authenticated using creds.", authResponse.status);
    return authResponse.data.access_token;
  } catch (error) {
    console.error("Authentication Error:", error.message);
    throw error;
  }
}
module.exports = {
  authenticate,
};
