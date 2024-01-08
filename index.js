function capitalize(string) {
  string = string.trimStart();
  return string.replace(string.at(0), string.at(0).toUpperCase());
}

function reverseString(string) {
  let reversedString = "";
  for (let i = string.length - 1; i >= 0; i--) {
    reversedString = reversedString.concat(string.at(i));
  }
  return reversedString;
}

export { capitalize, reverseString };
