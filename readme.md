### Testing 

**toBe** compares strict equality, using === <br />
**toEqual** compares the values of two variables. If it’s an object or array, checks equality of all the properties or elements<br />
**toBeNull** is true when passing a null value<br />
**toBeDefined** is true when passing a defined value (opposite as above)<br />
**toBeUndefined** is true when passing an undefined value<br />
**toBeCloseTo** is used to compare floating values, avoid rounding errors<br />
**toBeTruthy** true if the value is considered true (like an if does)<br />
**toBeFalsy** true if the value is considered false (like an if does)<br />
**toBeGreaterThan** true if the result of expect() is higher than the argument<br />
**toBeGreaterThanOrEqual** true if the result of expect() is equal to the argument, or higher than the argument<br />
**toBeLessThan** true if the result of expect() is lower than the argument<br />
**toBeLessThanOrEqual** true if the result of expect() is equal to the argument, or lower than the argument<br />
**toMatch** is used to compare strings with regular expression pattern matching<br />
**toContain** is used in arrays, true if the expected array contains the argument in its elements set<br />
**toHaveLength(number):** checks the length of an array<br />
**toHaveProperty(key, value):** checks if an object has a property, and optionally checks its value<br />
**toThrow** checks if a function you pass throws an exception (in general) or a specific exception<br />
**toBeInstanceOf():** checks if an object is an instance of a class<br />