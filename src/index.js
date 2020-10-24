const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  let array = [];
  for (let i = 0; i < expr.length; i += 10) {
    array.push(expr.slice(i, i + 10));
  }

  array = array.map((el) => el.slice(el.indexOf(1)));

  for (let i = 0; i < array.length; i++) {
    if (array[i] === "*") {
      array[i] = " ";
    } else {
      let temp = "";
      for (let j = 0; j < array[i].length; j += 2) {
        let letter = array[i].slice(j, j + 2);
        letter === "10" ? (temp = temp.concat(".")) : (temp = temp.concat("-"));
      }
      array[i] = temp;
    }
  }

  array = array.map((el) => (el === " " ? (el = " ") : (el = MORSE_TABLE[el])));
  return array.join("");
}

module.exports = {
  decode,
};
