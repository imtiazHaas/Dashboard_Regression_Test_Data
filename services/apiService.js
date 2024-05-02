
const axios = require("axios");

const postDataModel = require("../models/postDataModel");
const postDataConfig = require("../config/index");
const { authenticate } = require("./signinServices/authService");


async function accessProtectedEndpoint() {
  try {
    const accessToken = await authenticate();
    const response = await axios.post(
      "https://api.haasalertdev.com/organizations/1377a295-7d70-4e41-a086-87c39f243fd7/things/test_thing_1/points",
      postDataModel,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
          Accept: "application/vnd.haasalert.com; version=2",
        },
      }
    );
    console.log("Submit point vehicle 1 Response:", response.data);
  } catch (error) {
    console.error("API Error:", error.message);
    throw error;
  }
}

/**
 * @description Asynchronously submits vehicle points to a protected endpoint for test_thing_2.
 * @throws {Error} If an error occurs during the API request.
 */
async function submitPointVehicl_2() {
  try {
    const accessToken = await authenticate();
    const response = await axios.post(
      "https://api.haasalertdev.com/organizations/1377a295-7d70-4e41-a086-87c39f243fd7/things/test_thing_2/points",
      postDataConfig.postData2,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
          Accept: "application/vnd.haasalert.com; version=2",
        },
      }
    );
    console.log("Submit point vehicle 2 Response:", response.data);
  } catch (error) {
    console.error("API Error:", error.message);
    throw error;
  }
}
async function submitPointVehicl_3() {
  try {
    const accessToken = await authenticate();
    const response = await axios.post(
      "https://api.haasalertdev.com/organizations/1377a295-7d70-4e41-a086-87c39f243fd7/things/test_thing_3/points",
      postDataConfig.postData3,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
          Accept: "application/vnd.haasalert.com; version=2",
        },
      }
    );
    console.log("Submit point vehicle 3 Response:", response.data);
  } catch (error) {
    console.error("API Error:", error.message);
    throw error;
  }
}
async function submitPointVehicl_4() {
  try {
    const accessToken = await authenticate();
    const response = await axios.post(
      "https://api.haasalertdev.com/organizations/1377a295-7d70-4e41-a086-87c39f243fd7/things/test_thing_4/points",
      postDataConfig.postData4,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
          Accept: "application/vnd.haasalert.com; version=2",
        },
      }
    );
    console.log("Submit point vehicle 4 Response:", response.data);
  } catch (error) {
    console.error("API Error:", error.message);
    throw error;
  }
}
async function submitPointVehicl_5() {
  try {
    const accessToken = await authenticate();
    const response = await axios.post(
      "https://api.haasalertdev.com/organizations/1377a295-7d70-4e41-a086-87c39f243fd7/things/test_thing_5/points",
      postDataConfig.postData5,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
          Accept: "application/vnd.haasalert.com; version=2",
        },
      }
    );
    console.log("Submit point vehicle 5 Response:", response.data);
  } catch (error) {
    console.error("API Error:", error.message);
    throw error;
  }
}
async function submitPointVehicl_6() {
  try {
    const accessToken = await authenticate();
    const response = await axios.post(
      "https://api.haasalertdev.com/organizations/1377a295-7d70-4e41-a086-87c39f243fd7/things/test_thing_6/points",
      postDataConfig.postData6,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
          Accept: "application/vnd.haasalert.com; version=2",
        },
      }
    );
    console.log("Submit point vehicle 6 Response:", response.data);
  } catch (error) {
    console.error("API Error:", error.message);
    throw error;
  }
}
async function submitPointVehicl_7() {
  try {
    const accessToken = await authenticate();
    const response = await axios.post(
      "https://api.haasalertdev.com/organizations/1377a295-7d70-4e41-a086-87c39f243fd7/things/test_thing_7/points",
      postDataConfig.postData7,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
          Accept: "application/vnd.haasalert.com; version=2",
        },
      }
    );
    console.log("Submit point vehicle 7 Response:", response.data);
  } catch (error) {
    console.error("API Error:", error.message);
    throw error;
  }
}
async function submitPointVehicl_8() {
  try {
    const accessToken = await authenticate();
    const response = await axios.post(
      "https://api.haasalertdev.com/organizations/1377a295-7d70-4e41-a086-87c39f243fd7/things/test_thing_8/points",
      postDataConfig.postData8,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
          Accept: "application/vnd.haasalert.com; version=2",
        },
      }
    );
    console.log("Submit point vehicle 8 Response:", response.data);
  } catch (error) {
    console.error("API Error:", error.message);
    throw error;
  }
}
async function submitPointVehicl_9() {
  try {
    const accessToken = await authenticate();
    const response = await axios.post(
      "https://api.haasalertdev.com/organizations/1377a295-7d70-4e41-a086-87c39f243fd7/things/test_thing_9/points",
      postDataConfig.postData9,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
          Accept: "application/vnd.haasalert.com; version=2",
        },
      }
    );
    console.log("Submit point vehicle 9 Response:", response.data);
  } catch (error) {
    console.error("API Error:", error.message);
    throw error;
  }
}
async function submitPointVehicl_10() {
  try {
    const accessToken = await authenticate();
    const response = await axios.post(
      "https://api.haasalertdev.com/organizations/1377a295-7d70-4e41-a086-87c39f243fd7/things/test_thing_10/points",
      postDataConfig.postData10,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
          Accept: "application/vnd.haasalert.com; version=2",
        },
      }
    );
    console.log("Submit point vehicle 10 Response:", response.data);
  } catch (error) {
    console.error("API Error:", error.message);
    throw error;
  }
}
async function submitLocation_WithThing11() {
  try {
    const accessToken = await authenticate();
    const response = await axios.post(
      "https://api.haasalertdev.com/organizations/1377a295-7d70-4e41-a086-87c39f243fd7/locations",
      postDataConfig.postData11,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
          Accept: "application/vnd.haasalert.com; version=2",
        },
      }
    );
    console.log("Submit locations with Thing 11:", response.data);
  } catch (error) {
    console.error("API Error:", error.message);
    throw error;
  }
}
async function submitLocation_WithThing12() {
  try {
    const accessToken = await authenticate();
    const response = await axios.post(
      "https://api.haasalertdev.com/organizations/1377a295-7d70-4e41-a086-87c39f243fd7/locations",
      postDataConfig.postData12,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
          Accept: "application/vnd.haasalert.com; version=2",
        },
      }
    );
    console.log("Submit location with Thing 12:", response.data);
  } catch (error) {
    console.error("API Error:", error.message);
    throw error;
  }
}
async function submitLocation_WithThing12() {
  try {
    const accessToken = await authenticate();
    const response = await axios.post(
      "https://api.haasalertdev.com/organizations/1377a295-7d70-4e41-a086-87c39f243fd7/locations",
      postDataConfig.postData12,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
          Accept: "application/vnd.haasalert.com; version=2",
        },
      }
    );
    console.log("Submit location with Thing 12:", response.data);
  } catch (error) {
    console.error("API Error:", error.message);
    throw error;
  }
}
async function updateAsset_Vehicl_10_defaults() {
  try {
    const accessToken = await authenticate();
    const response = await axios.put(
      "https://api.haasalertdev.com/organizations/1377a295-7d70-4e41-a086-87c39f243fd7/things/test_thing_10",
      postDataConfig.postData13,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
          Accept: "application/vnd.haasalert.com; version=2",
        },
      }
    );
    console.log("Update asset vehicle 10 defaults:", response.data);
  } catch (error) {
    console.error("API Error:", error.message);
    throw error;
  }
}


async function pointGrouping1() {
  try {
    const accessToken = await authenticate();
    const response = await axios.post(
      "https://api.haasalertdev.com/organizations/1377a295-7d70-4e41-a086-87c39f243fd7/things/grouping_ambo_1/points",
      postDataConfig.postGrouping1Data,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
          Accept: "application/vnd.haasalert.com; version=2",
        },
      }
    );
    console.log("Submit location with pointGrouping1:", response.data);
  } catch (error) {
    console.error("API Error:", error.message);
    throw error;
  }
}

// Move In to
async function point1Ambo3() {
  try {
    const accessToken = await authenticate();
    const response = await axios.post(
      "https://api.haasalertdev.com/organizations/1377a295-7d70-4e41-a086-87c39f243fd7/things/grouping_ambo_3/points",
      postDataConfig.point1Ambo3Data,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
          Accept: "application/vnd.haasalert.com; version=2",
        },
      }
    );
    console.log("Submit location with point1Ambo3:", response.data);
  } catch (error) {
    console.error("API Error:", error.message);
    throw error;
  }
}


//Move Out Of
async function MoveOutOfpoint1Ambo3() {
  try {
    const accessToken = await authenticate();
    const response = await axios.post(
      "https://api.haasalertdev.com/organizations/1377a295-7d70-4e41-a086-87c39f243fd7/things/grouping_ambo_3/points",
      postDataConfig.MoveOutOfpoint1Ambo3Data,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
          Accept: "application/vnd.haasalert.com; version=2",
        },
      }
    );
    console.log("Submit location with MoveOutOfpoint1Ambo3Data:", response.data);
  } catch (error) {
    console.error("API Error:", error.message);
    throw error;
  }
}
//closure
async function heartBeatOfflineClosure() {
  try {
    const accessToken = await authenticate();
    const response = await axios.post(
      "https://api.haasalertdev.com/organizations/1377a295-7d70-4e41-a086-87c39f243fd7/things/closure_thing_2/heartbeats",
      postDataConfig.heartBeatofflineData,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
          Accept: "application/vnd.haasalert.com; version=2",
        },
      }
    );
    console.log("Submit location with heartBeatOfflineClosure:", response.data);
  } catch (error) {
    console.error("API Error:", error.message);
    throw error;
  }
}
/**
 * @description Exports the accessProtectedEndpoint and submitPointVehicl functions for use in other modules.
*/

//Add Or remove Things
async function submitLocationNoThing() {
  try {
    const accessToken = await authenticate();
    const response = await axios.post(
      "https://api.haasalertdev.com/organizations/1377a295-7d70-4e41-a086-87c39f243fd7/locations",
      postDataConfig.submitLocation,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
          Accept: "application/vnd.haasalert.com; version=2",
        },
      }
    );
    console.log("Submit location with submitLocationNoThing:", response.data);
  } catch (error) {
    console.error("API Error:", error.message);
    throw error;
  }
}


async function submitLocationNothingInLoc() {
  try {
    const accessToken = await authenticate();
    const response = await axios.post(
      "https://api.haasalertdev.com/organizations/1377a295-7d70-4e41-a086-87c39f243fd7/locations",
      postDataConfig.submitLocationNothingInLoc,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
          Accept: "application/vnd.haasalert.com; version=2",
        },
      }
    );
    console.log("Submit location with submitLocationNothingInLoc:", response.data);
  } catch (error) {
    console.error("API Error:", error.message);
    throw error;
  }
}



module.exports = {
  accessProtectedEndpoint,
  submitPointVehicl_2,
  submitPointVehicl_3,
  submitPointVehicl_4,
  submitPointVehicl_5,
  submitPointVehicl_6,
  submitPointVehicl_7,
  submitPointVehicl_8,
  submitPointVehicl_9,
  submitPointVehicl_10,
  submitLocation_WithThing11,
  submitLocation_WithThing12,
  updateAsset_Vehicl_10_defaults,
  pointGrouping1,
  point1Ambo3,
  MoveOutOfpoint1Ambo3,
  heartBeatOfflineClosure,
  submitLocationNoThing,
  submitLocationNothingInLoc
};
