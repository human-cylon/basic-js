const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let names = [];

  if (Array.isArray(members) == false) {return false;}
  for (let member of members) {
    if (typeof member !== "string") {continue;}
    names.push(member.replace(/\s/g,'').slice(0, 1));
  }
  return names.map(name => name.toUpperCase()).sort().join("");

};
