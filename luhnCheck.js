const count = (num) => {
  if (num === undefined) throw new Error("no number was provided");
  if (isNaN(num)) throw new Error("input is not a number");

  const arr = Array.from(String(num), Number);
  const payload = arr.slice(0, arr.length - 1).join("");
  const payloadArr = arr.slice(0, arr.length - 1);

  for (let i = payloadArr.length - 1; i >= 0; i -= 2) {
    payloadArr[i] *= 2;
  }

  const digitsArr = payloadArr.join("").split("");
  const sum = digitsArr.reduce((prev, curr) => prev + Number(curr), 0);
  const checkDigit = 10 - (sum % 10);

  return num == payload + checkDigit;
};


module.exports = count;