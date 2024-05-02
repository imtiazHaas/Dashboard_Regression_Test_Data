const apiService = require("../../../../../services/apiService");

async function heartBeatOfflineClosure() {
    try {
      return await apiService.heartBeatOfflineClosure();
    } catch (error) {
      throw error;
    }
  }

  module.exports = {
    heartBeatOfflineClosure
  }
