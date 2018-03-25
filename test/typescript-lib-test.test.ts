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

  it("some and none have compatible types", () => {
    function get<T>(key: String): OptionT<T> {
      if (key === 'foo') {
        return OptionT.some('bar');
      } else if (key === 'num') {
        return OptionT.some(5);
      }
      return OptionT.none();
    }

    let bar = get('foo');
    expect(bar.isSome()).toBe(true);
    expect(bar.isNone()).toBe(false);

    let qux = get('baz');
    expect(qux.isSome()).toBe(false);
    expect(qux.isNone()).toBe(true);

    let five = get('num');
    expect(five.isSome()).toBe(true);
    expect(five.isNone()).toBe(false);
  });
});
