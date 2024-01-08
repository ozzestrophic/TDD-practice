import { capitalize, reverseString, calculator } from "./index.js";

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
