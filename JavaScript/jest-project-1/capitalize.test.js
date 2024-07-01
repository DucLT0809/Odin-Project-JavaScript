import { capitalizeFirstLetter } from "./capitalize";

test("capitalizes the first letter of a string", () => {
  expect(capitalizeFirstLetter("hello")).toBe("Hello");
});

test("does not change the rest of the string", () => {
  expect(capitalizeFirstLetter("world")).toBe("World");
});

test("handles an empty string", () => {
  expect(capitalizeFirstLetter("")).toBe("");
});

test("handles a single character", () => {
  expect(capitalizeFirstLetter("a")).toBe("A");
});
