import OptionT from "../src/typescript-lib-test"

describe("OptionT", () => {
  it("can be some", () => {
    const some = OptionT.some(1);
    expect(some.isSome()).toBe(true);
    expect(some.isNone()).toBe(false);

    expect(() => { return OptionT.some(undefined); }).toThrow();
    expect(() => { return OptionT.some(null); }).toThrow();
  });

  it("can be none", () => {
    const none = OptionT.none();
    expect(none.isSome()).toBe(false);
    expect(none.isNone()).toBe(true);

    expect(() => { return OptionT.none(1); }).toThrow();
  });

  it("can be either some or none", () => {
    const aThing = OptionT.of(2);
    expect(aThing.isSome()).toBe(true);
    expect(aThing.isNone()).toBe(false);

    const bThing = OptionT.of(null);
    expect(bThing.isSome()).toBe(false);
    expect(bThing.isNone()).toBe(true);

    const cThing = OptionT.of(undefined);
    expect(cThing.isSome()).toBe(false);
    expect(cThing.isNone()).toBe(true);
  });
});
