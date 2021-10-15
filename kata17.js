const urlDecode = function (text) {
  // Put your solution here
  const object = {};
  if (text.includes("&")) {
    text
      .split("&")
      .forEach(
        (el) =>
          (object[el.split("=")[0]] = el.split("=")[1].replace(/\%20/g, " "))
      );
  } else {
    object[text.split("=")[0]] = text.split("=")[1].replace("%20", " ");
  }
  return object;
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);
