/*Memoization is a technique used in programming to optimize function calls by caching the results of expensive function calls and returning the cached result for the same input arguments instead of re-computing the result.

So we use the trick  of memoization here to store the value  of already computed number. By storing it in array and instead of calling the function we return the value from that array
*/

/***********************************************************************************Practice******************************************************************/
/*Given a function fn, return a memoized version of that function.

A memoized function is a function that will never be called twice with the same inputs. Instead it will returned a cached value.

You can assume there are 3 possible input functions: sum, fib, and factorial.

sum accepts two integers a and b and returns a + b.
fib accepts a single integer n and returns 1 if n <= 1 or fib(n - 1) + fib(n - 2) otherwise.
factorial accepts a single integer n and returns 1 if n <= 1 or factorial(n - 1) * n otherwise. */

function memoize(fn) {
  const cache = new Map()
  return function () {
    let a = arguments[0]
    let b = arguments[1]
    let key = (a << b) | (b ?? 0)
    if (cache.has(key)) {
      return cache.get(key)
    }
    let value = fn(a, b)
    cache.set(key, value)
    return value
  }
}

/**
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1
 */
