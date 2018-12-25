export const sum = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Please pass numbers');
  }

  return a + b;
};
export const mul = (a, b) => a * b;
export const sub = (a, b) => a - b;
export const div = (a, b) => a / b;