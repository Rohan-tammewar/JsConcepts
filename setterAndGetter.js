//setter and getter
//The get and set syntax binds an object property to a function that will be called when that property is looked up. It can also be used in classes.
// When you write a set function it acts as a property
const obj = {
  log: [],
  set setLatest(n) {
    this.log.push(n)
  },
  get getLatest() {
    return [...this.log]
  },
}
//obj.setLatest = 1
//log =[1]
//   console.log(obj.getLatest);
//   Expected output: "c"

/********************************************************************Practice Question ***********************************************************************/

/*Write a class that allows getting and setting key-value pairs, however a time until expiration is associated with each key.

The class has three public methods:

set(key, value, duration): accepts an integer key, an integer value, and a duration in milliseconds. Once the duration has elapsed, the key should be inaccessible. The method should return true if the same un-expired key already exists and false otherwise. Both the value and duration should be overwritten if the key already exists.

get(key): if an un-expired key exists, it should return the associated value. Otherwise it should return -1.

count(): returns the count of un-expired keys. */
