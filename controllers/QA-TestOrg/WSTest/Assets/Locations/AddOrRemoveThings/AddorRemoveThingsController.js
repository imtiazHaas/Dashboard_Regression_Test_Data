const apiService = require("../../../../../../services/apiService");

async function submitLocationNoThing() {
    try {
      return await apiService.submitLocationNoThing();
    } catch (error) {
      throw error;
    }
  }

  module.exports = {
    submitLocationNoThing
  }
