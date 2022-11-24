import { validateCnpj, formatCnpj } from "../utils/cnpj.js";

test("Validate CNPJ", () => {
  expect(validateCnpj(83127443000175)).toBeTruthy();
  expect(validateCnpj(83127443000177)).toBeFalsy();
  expect(validateCnpj("07168056000107")).toBeTruthy();
  expect(validateCnpj("07.168.056/0001-07")).toBeTruthy();
  expect(validateCnpj("40325737861")).toBeFalsy();
});

test("Format CNPJ", () => {
  expect(formatCnpj("07168056000107")).toBe("07.168.056/0001-07");
});
