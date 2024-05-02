/**
 * @description Imports the authService module, which contains methods for user authentication.
 */
const authService = require("../../services/signinServices/authService");

/**
 * @description Asynchronously authenticates a user using the methods provided by the authService module.
 * @returns {Promise} A promise that resolves with the result of the authentication process.
 * @throws {Error} If an error occurs during the authentication process.
 */
async function authenticate() {
  try {
    // Authenticate the user using the method from the authService module
    return await authService.authenticate();
  } catch (error) {
    // If an error occurs, rethrow it to the caller
    throw error;
  }
}

/**
 * @description Exports the authenticate function for use in other modules.
 */
module.exports = {
  authenticate,
};
