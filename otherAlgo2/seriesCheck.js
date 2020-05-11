// Write An Algorithm using Javascript to check if a given number is in the following series:
// 4,16,64,256,1024,4096,16384.,......., 4^N

const seriesCheck = (n) => {
  if (n % 4 == 0) {
    console.log(`The given number is in the series `);
  } else {
    console.log(`The given number is not in the series`);
  }
};

let num = 4 ** 10;

seriesCheck(num);
