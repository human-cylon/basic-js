const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let repeatTimes;
  let separator;
  let addition;
  let additionRepeatTimes;
  let additionSeparator;
  let arrStr = [];
  let arrAdd = [];
  
  if (repeater.arguments.length === 1) {return str.toString();}
  if (typeof str !== "string") {String(str);}

  if (options.repeatTimes !== undefined) {repeatTimes = options.repeatTimes;}
  else {repeatTimes = 1;}

  if (options.separator !== undefined) {separator = options.separator;}
  else {separator = "+"}

  if (options.addition !== undefined) {addition = String(options.addition);}
  else {addition = "";}

  if (options.additionRepeatTimes !== undefined) {additionRepeatTimes = options.additionRepeatTimes;}
  else {additionRepeatTimes = 1;}

  if (options.additionSeparator !== undefined) {additionSeparator = options.additionSeparator;}
  else {additionSeparator = "|";}

  
  for (let i = 0; i < additionRepeatTimes; i++) {
    arrAdd.push(addition);
  }

  str += arrAdd.join(additionSeparator);

  for (let i = 0; i < repeatTimes; i ++) {
    arrStr.push(str);
  }
  return arrStr.join(separator);
};
  