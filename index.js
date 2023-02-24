#!/usr/bin/env node

// console.log('Gotcha!');

const checkType = (...args) => {
  args.forEach(arg => {
    if (typeof(arg) !== 'number') {
      return false;
    }
  })
  return true;
}

const solveQuadEquation = (a, b, c) => {
  const discriminant = b*b - 4*a*c;
  if (discriminant > 0) {
    const res1 = -1*b + Math.sqrt(discriminant);
    const res2 = -1*b - Math.sqrt(discriminant);
    console.log('There are 2 roots to this equation.\n');
    console.log(`x1 = ${res1},\nx2 = ${res2}`);
  } else if (discriminant == 0) {
    const res1 = -1*b + Math.sqrt(discriminant);
    console.log('There is 1 root to this equation.\n')
    console.log(`x1 = ${res1}`);
  } else {
    console.log('There are no real roots to this equation');
  }
}

