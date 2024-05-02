const apiService = require("../../../../../../services/apiService");

async function point1Ambo3() {
    try {
      return await apiService.MoveOutOfpoint1Ambo3();
    } catch (error) {
      throw error;
    }
  }

  module.exports = {
    point1Ambo3
  }
