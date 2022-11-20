import { validateCpf, formatCpf } from "../utils/cpf";

test("Validate CPF", () => {
  expect(validateCpf(22617781046)).toBeTruthy();
  expect(validateCpf(22617781047)).toBeFalsy();
  expect(validateCpf("22617781046")).toBeTruthy();
  expect(validateCpf("226.177.810-46")).toBeTruthy();
  expect(validateCpf("40325737861")).toBeFalsy();
});

test("Format CPF", () => {
  expect(formatCpf("22617781046")).toBe("226.177.810-46");
});
