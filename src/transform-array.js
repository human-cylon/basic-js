const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let newArr = [];
  let interm = Array.from(arr);

  if (Array.isArray(arr) === false) {throw Error;}
  for (let i = 0; i < interm.length; i++) {
    // console.log("hi!");
    if (typeof interm[i] === "string" && interm[i].includes("--")) {
      switch (interm[i]) {
        case "--discard-next":
          if (interm[i + 1] !== undefined) {interm.splice(i + 1, 1);}
          break;
          case "--discard-prev":
            if (interm[i - 1] !== undefined) {interm.splice(i - 1, 1);}
            break;
          case "--double-next":
            if (interm[i + 1] !== undefined) {interm.splice(i + 1, 0, interm[i + 1])}
            break;
          case "--double-prev":
            if (interm[i - 1] !== undefined) {interm.splice(i - 1, 0, interm[i - 1]);}
            i++;
            break;
          default:
            throw "Something went wrong!";
      }
    }
  }

  for (let i = 0; i < interm.length; i++) {
    if (typeof interm[i] == "string" && interm[i].includes("--")) {continue;} 
    else {newArr.push(interm[i]);}
  }

  return newArr;
  //   if (typeof arr[i] === "string" && arr[i].includes("--")) {
  //     switch (arr[i]) {
  //       case "--discard-next":
  //         if (arr[i + 1] !== undefined) {interm.splice(i + 1, 1);}
  //         i++;
  //         break;
  //       case "--discard-prev":
  //         if (arr[i - 1] !== undefined) {interm.splice(i - 1, 1);}
  //         break;
  //       case "--double-next":
  //         if (arr[i + 1] !== undefined) {interm.splice(i + 1, 1, arr[i + 1]);}
  //         break;
  //       case "--double-prev":
  //         if (arr[i - 1] !== undefined) {interm.splice(i - 1, 1, arr[i - 1]);}
  //         break;
  //     //   default:
  //     //     throw "Something went wrong!";
  //     }
  //   } else {
  //     interm.push(arr[i]);
  //   }
  // }
  
  console.log(interm);

  // for (let i = 0; i < arr.length; i++) {
  //   if (typeof arr[i] === "string" && arr[i].includes("--")) {
  //     switch (arr[i]) {
  //       case "--discard-next":
  //         i++;
  //         break;
  //       case "--discard-prev":
  //         if (arr[i - 1] !== undefined) {interm.pop();}
  //         break;
  //       case "--double-next":
  //         if (arr[i + 1] !== undefined) {interm.push(arr[i + 1]);}
  //         break;
  //       case "--double-prev":
  //         if (arr[i - 1] !== undefined) {interm.push(arr[i - 1]);}
  //         break;
  //       default:
  //         throw "Something went wrong!";
  //     }
  //   } else {
  //     interm.push(arr[i]);
  //   }
  // }

  // for (let i = 0; i < arr.length; i++) {
  //   if (typeof arr[i] === "string" && arr[i].includes("--")) {
  //     switch (arr[i]) {
  //       case "--discard-next":
  //         i++;
  //         break;
  //       case "--discard-prev":
  //         if (arr[i - 1] !== undefined) {newArr.pop();}
  //         break;
  //       case "--double-next":
  //         if (arr[i + 1] !== undefined) {newArr.push(arr[i + 1]);}
  //         break;
  //       case "--double-prev":
  //         if (arr[i - 1] !== undefined) {newArr.push(newArr[i - 1]);}
  //         break;
  //       default:
  //         throw "Something went wrong!";
  //     }
  //   } else {
  //     newArr.push(arr[i]);
  //   }
  // }
  // return newArr;
};
