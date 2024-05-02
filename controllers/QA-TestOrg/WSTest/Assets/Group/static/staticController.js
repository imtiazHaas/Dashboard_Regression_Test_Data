const apiService = require("../../../../../../services/apiService");

async function pointGrouping1() {
    try {
      return await apiService.pointGrouping1();
    } catch (error) {
      throw error;
    }
  }

  module.exports = {
    pointGrouping1
  }
