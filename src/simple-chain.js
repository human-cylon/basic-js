const CustomError = require("../extensions/custom-error");

let arr = [];

const chainMaker = {
    getLength() {
      return arr.length;
    },
    addLink(value) {
      arr.push(`( ${value} )`)
      return this;
    },
    removeLink(position) {
      if (arr[position - 1] === undefined) {arr = []; throw Error;}
      arr.splice(position - 1, 1);
      return this;
    },
    reverseChain() {
      console.log(arr);
      arr.reverse();
      return this;
    },
    finishChain() {
      let chain = arr.join("~~");
      arr = [];
      return chain;
    }
  };

module.exports = chainMaker;
