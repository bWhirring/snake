import "jest";
import { type, compareVersion } from "../util";

test("the type function input params 'express' return '/src/express-demo'", () => {
  const dir = type("express");
  expect(dir).toBe("/src/express-demo");
});

test("8.1 > 8", () => {
  const version = compareVersion("8.1");
  expect(version).toBe(true);
});

test("7.9 > 8", () => {
  const version = compareVersion("7.9");
  expect(version).toBe(false);
});
