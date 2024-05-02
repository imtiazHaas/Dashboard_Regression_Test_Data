const express = require("express");
const router = require("./routes/index");
const authController = require("./controllers/signinController/authController");
const apiController = require("./controllers/QA-TestOrg/SetUp/apiController");
const staticController = require("./controllers/QA-TestOrg/WSTest/Assets/Group/static/staticController")
const moveIntoController = require("./controllers/QA-TestOrg/WSTest/Assets/Group/MoveInTo/MoveInToController")
const moveOutOfController = require("./controllers/QA-TestOrg/WSTest/Assets/Group/MoveOutOf/MoveoutOfController")
const closureController = require("./controllers/QA-TestOrg/WSTest/Assets/Closures/closureController")
const addOrRemoveThingsController = require("./controllers/QA-TestOrg/WSTest/Assets/Locations/AddOrRemoveThings/AddorRemoveThingsController")
const locationController = require("./controllers/QA-TestOrg/WSTest/Assets/Locations/LocationController")
const app = express();

app.use(express.json());
app.use(router);

const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
(async () => {
  try {
    const accessToken = await authController.authenticate();
  
    await new Promise (resolve => setTimeout(resolve, 3000));
    await apiController.accessProtectedEndpoint(accessToken);
    await new Promise (resolve => setTimeout(resolve, 3000));
    await apiController.submitPointVehicl_2(accessToken);
    await apiController.submitPointVehicl_3(accessToken); 
    await new Promise (resolve => setTimeout(resolve, 3000));
    await apiController.submitPointVehicl_4(accessToken);             
    await apiController.submitPointVehicl_5(accessToken);
    await new Promise (resolve => setTimeout(resolve, 3000));
    await apiController.submitPointVehicl_6(accessToken);
		await apiController.submitPointVehicl_7(accessToken);
		await apiController.submitPointVehicl_8(accessToken);
    await new Promise (resolve => setTimeout(resolve, 3000));
		await apiController.submitPointVehicl_9(accessToken);
    await new Promise (resolve => setTimeout(resolve, 3000));
		await apiController.submitPointVehicl_10(accessToken);
    await new Promise (resolve => setTimeout(resolve, 3000));
    await apiController.submitLocation_WithThing11(accessToken);
		await apiController.submitLocation_WithThing12(accessToken);
    await new Promise (resolve => setTimeout(resolve, 3000));
    await apiController.updateAsset_Vehicl_10_defaults(accessToken);
    await staticController.pointGrouping1(accessToken);
    await new Promise (resolve => setTimeout(resolve, 3000));
    await moveIntoController.point1Ambo3(accessToken);
    await new Promise (resolve => setTimeout(resolve, 3000));
    await moveOutOfController.point1Ambo3(accessToken);
    await new Promise (resolve => setTimeout(resolve, 3000));
    await closureController.heartBeatOfflineClosure(accessToken);
    await new Promise (resolve => setTimeout(resolve, 3000));
    await addOrRemoveThingsController.submitLocationNoThing(accessToken);
    // await locationController.submitLocationNothingInLoc(accessToken);
    await new Promise (resolve => setTimeout(resolve, 3000));




    app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Error starting server:", error.message);
    process.exit(1); 
  }
})();
