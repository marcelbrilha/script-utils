import { convertObjectToBase64, convertBase64ToObject } from "../utils/base64";

test("Convert object to base64", () => {
  const objectTest = { test: "OK" };
  const expected = "JTdCJTIydGVzdCUyMiUzQSUyMk9LJTIyJTdE";

  expect(convertObjectToBase64(objectTest)).toBe(expected);
});

test("Convert base64 to object", () => {
  const base64Test = "JTdCJTIydGVzdCUyMiUzQSUyMk9LJTIyJTdE";
  const expected = { test: "OK" };

  expect(convertBase64ToObject(base64Test)).toEqual(expected);
});
