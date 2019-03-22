import { curry, compose } from './essential-fn';
import { Maybe } from './Maybe';

// match :: RegExp -> String -> Boolean
export const match = curry((re, str) => re.test(str));

// add :: Number -> Number -> Number
export const add = curry((a, b) => a + b);

// map :: Functor f => (a -> b) -> f a -> f b
export const map = curry((fn, f) => f.map(fn));

// prop :: String -> Object -> a
export const prop = curry((p, obj) => obj[p]);

// append :: String -> String
export const append = curry((str, str2) => `${str}${str2}`);

// toString :: a -> String
export const toString = String;

// split :: String -> String -> [String]
export const split = curry((sep, str) => str.split(sep));

// head :: [a] -> a
export const head = xs => xs[0];

// filter :: (a -> Boolean) -> [a] -> [a]
export const filter = curry((fn, xs) => xs.filter(fn));

// eq :: Eq a => a -> a -> Boolean
export const eq = curry((a, b) => a === b);

// last :: [a] -> a
export const last = xs => xs[xs.length - 1];

// safeHead :: [a] -> Maybe a
export const safeHead = compose(
  Maybe.of,
  head
);