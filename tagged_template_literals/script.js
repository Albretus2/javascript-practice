// tagged templates literals
const nama = "alber";
const umur = 24;
const email = "Alber@gmail.com";

const example = (strings, ...values) => {
  //   let result = "";
  //   string.forEach((str, i) => {
  //     result += `${str}${values[i] || ""}`;
  //   });
  //   return result;

  return strings.reduce(
    (result, str, i) =>
      `${result}${str}<span class="hl">${values[i] || ""}</span>`,
    ""
  );
};

let literal = example`hello nama saya ${nama}, saya ${umur} tahun. email saya adalah ${email}`;

document.body.innerHTML = literal;
