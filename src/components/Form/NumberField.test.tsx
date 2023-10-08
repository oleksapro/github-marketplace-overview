import { validateNumber } from "./NumberField";

describe(validateNumber.name, () => {
  test("should return 100", () => {
    expect(validateNumber(2000)).toEqual(100);
  });

  test("should return 0", () => {
    expect(validateNumber(-10)).toEqual(0);
  });

  test("should return value", () => {
    expect(validateNumber(10)).toEqual(10);
  });
});
