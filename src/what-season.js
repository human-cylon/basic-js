const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  let d = new Date(date);

  if (getSeason.arguments.length == 0) {return "Unable to determine the time of year!";}
  else if (Object.prototype.toString.call(date) 
  !== "[object Date]") {throw new Error();}
  else {
      let m = d.getMonth();
      if (m > 1 && m < 5) {return "spring";}
      else if (m > 4 && m < 8) {return "summer";} 
      else if (m > 7 && m < 11) {return "fall";}
      else {return "winter";}
  }
};
