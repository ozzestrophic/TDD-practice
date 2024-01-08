import { capitalize } from "./index.js";

test("Capitalize name", () => {
  expect(capitalize("ahmed")).toBe("Ahmed");
});

test("Capitalize spaced string", () => {
  expect(capitalize("   this is some space")).toBe("This is some space");
});
