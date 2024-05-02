const apiService = require("../../../../../services/apiService");

async function submitLocationNothingInLoc() {
    try {
      return await apiService.submitLocationNothingInLoc();
    } catch (error) {
      throw error;
    }
  }

  module.exports = {
    submitLocationNothingInLoc
  }
