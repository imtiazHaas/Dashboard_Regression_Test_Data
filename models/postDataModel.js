
const postDataModel = {
  lat: parseFloat(process.env.LATITUDE),

  lon: parseFloat(process.env.LONGITUDE),

  course: parseInt(process.env.COURSE),

  alt: parseInt(process.env.ALTITUDE),

  speed: parseInt(process.env.SPEED),

  accuracy: parseFloat(process.env.ACCURACY),

  is_active: process.env.IS_ACTIVE === "true",

  accelerometer: [
    {
      x: parseFloat(process.env.ACCELEROMETER_X),

      y: parseFloat(process.env.ACCELEROMETER_Y),

      z: parseFloat(process.env.ACCELEROMETER_Z),
    },
  ],
};


module.exports = postDataModel;
