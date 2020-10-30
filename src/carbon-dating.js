const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {

if (isNaN(sampleActivity) || dateSample.arguments.length === 0 || sampleActivity <= 0 ||
typeof sampleActivity !== "string" || sampleActivity > 15) {
    return false;
  } else {
  let age = Math.ceil((Math.log(MODERN_ACTIVITY / Number(sampleActivity))) / (0.693 / HALF_LIFE_PERIOD));
  return age;
}
};
