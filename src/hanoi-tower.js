const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let obj = {"turns": 0, "seconds": 0};

  obj.turns = (2 ** disksNumber) - 1;
  obj.seconds = Math.floor(obj.turns / (turnsSpeed / 3600));

  console.log(obj);
  return obj;

};
