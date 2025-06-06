import classNames from "./classNames";

describe("classNames", () => {
  test("with only first params", () => {
    expect(classNames("someClass")).toBe("someClass");
  });

  test("with additional class", () => {
    expect(classNames("someClass", {}, ["black"])).toBe("someClass black");
  });

  test("with additional and mods", () => {
    expect(
      classNames(
        "someClass",
        {
          blue: true,
          gray: "1",
        },
        ["black"]
      )
    ).toBe("someClass black blue gray");
  });

  test("with mods undefined or false", () => {
    expect(
      classNames(
        "someClass",
        {
          blue: true,
          white: undefined,
          gray: "1",
          true: false,
        },
        ["black"]
      )
    ).toBe("someClass black blue gray");
  });

  test("with additional undefined", () => {
    expect(classNames("someClass", {}, [undefined])).toBe("someClass");
  });

  test("with only mods", () => {
    expect(
      classNames("someClass", {
        black: true,
      })
    ).toBe("someClass black");
  });
});
