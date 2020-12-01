# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @ncolusso/lotide`

**Require it:**

`const _ = require('@ncolusso/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual`: with help of eqArrays function will log to the console a message whether or not two arrays are equal
* `asserEqual`: logs a message to the console whether or not two values are equal
* `assertObjectsEqual`: with help of eqObjects logs a message to the console whether or not two objects are equal
* `countLetters`: counts how many letters are in a given string (less spaces)
* `countOnly`: counts how many times a specific value shows up in an array of strings
* `eqArrays`: compares two arrays and returns whether or not they are strictly equal
* `eqObjects`: compares two objects and returns whether or not they are equal
* `findKey`: takes in an object and a callback and return the first key for which the callback returns a truthy value. If no key is found, returns undefined
* `findKeyByValue`: with a given value returns the first key where this value is found, if not undefined
* `flatten`: takes in an array with nested arrays, and returns a flattened array
* `head`: takes in an array and returns the first value of an array, if the array is empty returns undefined
* `letterPositions`: takes in a string and returns all the indices where each character is found (less spaces)
* `map`: takes in an array and callback and implement callback on the given array
* `middle`: takes in an array and returns the value at the middle index. If it is even, returns middle 2 values
* `tail`: takes in an array and returns the array less the first value
* `takeUntil`: takes in an array and callback and returns a slice of the array with elements taken from the beginning, until the callback returns a truthy value
* `without`: takes in two arrays and will return the first array less any values in the second