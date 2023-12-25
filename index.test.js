const { capitalize, filterOddNumber, epochDateToUTC } = require("./index");
const { expect, describe, test } = require("@jest/globals");

describe("Capitalize", () => {
  test("should return uppercased Hello", () => {
    expect(capitalize("hello")).toEqual("Hello");
  });

  test("should capitalize a single character", () => {
    expect(capitalize("a")).toEqual("A");
  });

  test("should handle empty string", () => {
    expect(capitalize("")).toEqual("");
  });

  test("should not capitalize already uppercased words", () => {
    expect(capitalize("HELLO")).toEqual("HELLO");
  });
});

describe("FilterOddNumber", () => {
  it("should return [2,4]", () => {
    expect(filterOddNumber([1, 2, 3, 4, 5])).toEqual([2, 4]);
  });

  it("should return []", () => {
    expect(filterOddNumber([1, 3, 5, 7, 9])).toEqual([]);
  });
});

describe("EpochDateToUTC", () => {
  test("should return Thu, 01 Jan 1970 00:00:00 GMT for 0", () => {
    expect(epochDateToUTC(0)).toEqual("Thu, 01 Jan 1970 00:00:00 GMT");
  });

  test("should return Thu, 01 Jan 1970 01:00:00 GMT for 3600", () => {
    expect(epochDateToUTC(3600)).toEqual("Thu, 01 Jan 1970 01:00:00 GMT");
  });

  test("should handle a negative epoch", () => {
    expect(epochDateToUTC(-3600)).toEqual("Wed, 31 Dec 1969 23:00:00 GMT");
  });
});
