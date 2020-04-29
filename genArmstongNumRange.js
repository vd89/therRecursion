const armStrongNum = require('./armStrongNum');

// console.log(armStrongNum.armStrongNum(153));

const genArmStrongNumRange = (n) => {
  let armRange = [];

  for (var i = 0; i < n; i++) {
    if (armStrongNum(i)) {
      armRange.push(i);
    }
  }
  if (armStrongNum(n)) {
    armRange.push(n)
  }
  console.log(armRange);
};

genArmStrongNumRange(12345678);
