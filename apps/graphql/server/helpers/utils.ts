import { objOf } from "ramda";
import { always, compose } from "ramda";

/**
 * Creates a function that always returns the given value.
 * @function
 * @template T
 * @param {T} value - The value to always return.
 * @return {function(): T} A function that always returns the given value.
 */
export const Of = compose(always);

/**
 * Creates a function that returns an array containing the given value.
 * @function
 * @template T
 * @param {T} t - The value to include in the returned array.
 * @return {function(): Array<T>} A function that returns an array containing the given value.
 */
export const Multi = <T>(t: T) => () => [t];

/**
 * A function that always returns an empty array.
 * @function
 * @return {function(): Array} A function that always returns an empty array.
 */
export const Empty = Of([]);

/**
 * Creates a function that returns an object with a 'defaultValue' property set to the given value.
 * @function
 * @template T
 * @param {T} value - The value to set as the 'defaultValue' property.
 * @return {function(): {defaultValue: T}} A function that returns an object with a 'defaultValue' property set to the given value.
 */
export const Fallback = compose(objOf('defaultValue'));

/**
 * Creates a function that returns an object with a 'name' property set to the given value.
 * @function
 * @template T
 * @param {T} value - The value to set as the 'name' property.
 * @return {function(): {name: T}} A function that returns an object with a 'name' property set to the given value.
 */
export const Alias = compose(objOf('name'));
