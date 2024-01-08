import {
  capitalize,
  reverseString,
  calculator,
  ceasarCipher,
  analyzeArray,
} from "./index.js";

test("Capitalize name", () => {
  expect(capitalize("ahmed")).toBe("Ahmed");
});

test("Capitalize spaced string", () => {
  expect(capitalize("   this is some space")).toBe("This is some space");
});

test("reverse string", () => {
  expect(reverseString("ozzeek")).toBe("keezzo");
});

test("calculator add", () => {
  expect(calculator.add(2, 2)).toBe(4);
});

test("calculator subtract", () => {
  expect(calculator.subtract(4, 2)).toBe(2);
});

test("calculator multiply", () => {
  expect(calculator.multiply(2, 2)).toBe(4);
});

test("calculator divide", () => {
  expect(calculator.divide(4, 2)).toBe(2);
});

test("cipher lower case", () => {
  expect(ceasarCipher("abcxyz", 3)).toBe("defabc");
});

test("cipher upper case", () => {
  expect(ceasarCipher("ABCXYZ", 3)).toBe("DEFABC");
});

test("cipher don't change punc", () => {
  expect(ceasarCipher("abc, XYZ !", 3)).toBe("def, ABC !");
});

test("analyze", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
