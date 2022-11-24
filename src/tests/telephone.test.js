import { formatTelephone } from "../utils/telephone.js";

test("Format telephone", () => {
  expect(formatTelephone(1144196539)).toBe("(11) 4419-6539");
  expect(formatTelephone("1144196539")).toBe("(11) 4419-6539");
  expect(formatTelephone(11955569001)).toBe("(11) 9 5556-9001");
  expect(formatTelephone("11955569001")).toBe("(11) 9 5556-9001");
  expect(formatTelephone("(11) 4419-6539")).toBe("(11) 4419-6539");
  expect(formatTelephone("(11) 9 5556-9001")).toBe("(11) 9 5556-9001");
});
