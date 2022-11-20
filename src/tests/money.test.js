import { formatMoney, parseMoney } from "../utils/money";

test("Parse money", () => {
  expect(parseMoney("50.000,50")).toBe(50000.5);
  expect(parseMoney("50.50")).toBe(50.5);
  expect(parseMoney("50,50")).toBe(50.5);
  expect(parseMoney(5050)).toBe(5050);
  expect(parseMoney(5.05)).toBe(5.05);
});

test("Format money", () => {
  const result = formatMoney(50.15);
  expect(formatMoney(50.15)).toBe(result);
});

test("Error in send params", () => {
  const options = { lang: "pt-BR", style: "currency" };

  try {
    formatMoney(50.15, options);
  } catch (error) {
    expect(error.message).toBe(
      "currency is required in options the format money"
    );
  }
});

test("Format Money - Dollar", () => {
  const options = { lang: "en-US", style: "currency", currency: "USD" };
  expect(formatMoney(5000.15, options)).toBe("$5,000.15");
});
