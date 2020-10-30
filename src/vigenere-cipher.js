const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(direct) {
    if (direct == true || direct == undefined) {this.direct = true;}
    else {this.direct == false;}
  }
  encrypt(message, key) {
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let messageReady = [];
    let keyReady = [];
    let tabula = "";
    let messageEnc = [];
    let n;

    if (message == undefined || key == undefined) {throw new Error;}
    
    console.log(messageReady = message.toUpperCase().replace(/\s|\W|[0-9]/g, "").split(""));
    console.log(key = key.toUpperCase().split(""));
    
    for (let i = 0; i < messageReady.length; i++) {

      if (i % key.length == 0) {n = i / key.length;}
      if (i >= key.length) {
        keyReady.push(key[i - key.length * n])
      } else {
          keyReady.push(key[i]);
      }
      // console.log(keyReady)
    }
    
    for (let i = 0; i < keyReady.length; i++) {
      tabula = alphabet.slice(alphabet.indexOf(keyReady[i])) + alphabet.slice(0, alphabet.indexOf(keyReady[i]));
      messageEnc.push(tabula[alphabet.indexOf(messageReady[i])]);
      console.log(messageEnc); 
    }

    for (let i = 0; i < message.length; i++) {
      if (/\W|\s|[0-9]/g.test(message[i])) {messageEnc.splice(i, 0, message[i]);}
    }
    return messageEnc.join("");
    
  }      
  decrypt(encryptedMessage, key) {
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let messageReady = [];
    let keyReady = [];
    let tabula = "";
    let messageDec = [];
    let n;

    if (encryptedMessage == undefined || key == undefined) {throw new Error;}
    messageReady = encryptedMessage.replace(/\s|\W|[0-9]/g, "").split("");
    key = key.toUpperCase().split("")
    
    for (let i = 0; i < messageReady.length; i++) {
      
      if (i % key.length == 0) {n = i / key.length;}
      if (i >= key.length) {
        keyReady.push(key[i - key.length * n])
      } else {
        keyReady.push(key[i]);
      }
      // console.log(keyReady)
    }

    for (let i = 0; i < keyReady.length; i++) {
      tabula = alphabet.slice(alphabet.indexOf(keyReady[i])) + alphabet.slice(0, alphabet.indexOf(keyReady[i]));
      messageDec.push(alphabet[tabula.indexOf(messageReady[i])]); 
    }

    for (let i = 0; i < encryptedMessage.length; i++) {
      if (/\W|\s|[0-9]/g.test(encryptedMessage[i])) {messageDec.splice(i, 0, encryptedMessage[i]);}
    }
    return messageDec.join("");
  }
}

module.exports = VigenereCipheringMachine;
