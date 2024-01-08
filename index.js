function capitalize(string) {
  string = string.trimStart();
  let capitalized = string.replace(string.at(0), string.at(0).toUpperCase());
  return capitalized;
}

export { capitalize };
