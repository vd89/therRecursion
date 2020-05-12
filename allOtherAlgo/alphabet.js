function genAlphabetic() {
  let alphabet = [];
  for (let i = 97; i <= 122; i++) {
    let alphabetVal = String.fromCharCode(i);
    alphabet.push(alphabetVal);
  }
  //    return alphabet;
  console.log(alphabet);
}

function genAlphabeticCap() {
  let alphabet = [];
  for (let i = 65; i <= 90; i++) {
    let alphabetVal = String.fromCharCode(i);
    alphabet.push(alphabetVal);
  }
  //    return alphabet;
  console.log(alphabet);
}
genAlphabetic();
genAlphabeticCap()


