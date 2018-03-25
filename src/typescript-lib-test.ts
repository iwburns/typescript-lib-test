export default abstract class OptionT<T> {
  static of<T>(value?: T): OptionT<T> {
    if (value === null || typeof value === 'undefined') {
      return new None();
    }
    return new Some(value);
  }

  static some<T>(value: T): OptionT<T> {
    if (value === null || typeof value === 'undefined') {
      throw Error('Cannot create a Some of a null or undefined value');
    }
    return new Some(value);
  }

  static none<T>(value?: T): OptionT<T> {
    if (value === null || typeof value === 'undefined') {
      return new None();
    }
    throw Error('Cannot create a None of a non-null or undefined value');
  }

  /**
   * Returns `true` if this   [[OptionT]] is a `Some`, returns false if it is a `None`.
   *
   * ```
   * const one = OptionT.some(1);
   * if (one.isSome()) { // always going to be true.
   *   // ...
   * }
   * ```
   *
   * @returns {boolean}
   */
  abstract isSome(): boolean;

  /**
   * Returns `true` if this   [[OptionT]] is a `None`, returns false if it is a `Some`.
   *
   * ```
   * const nope = OptionT.none();
   * if (nope.isNone()) { // always going to be true.
   *   // ...
   * }
   * ```
   *
   * @returns {boolean}
   */
  abstract isNone(): boolean;
}

class Some<T> extends OptionT<T> {
  private value: T;
  constructor(value: T) {
    super();
    this.value = value;
  }

  isSome(): boolean {
    return true;
  }

  isNone(): boolean {
    return false;
  }
}

class None<T> extends OptionT<T> {
  constructor() {
    super();
  }

  isSome(): boolean {
    return false;
  }

  isNone(): boolean {
    return true;
  }
}
