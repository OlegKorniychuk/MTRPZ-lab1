#!/usr/bin/env node


const fs = require('fs');


const displayEquation = (a, b, c) => {
  console.log(`Equation is: ${a} x^2 + (${b}) x + (${c}) = 0`);
}


const solveQuadEquation = (a, b, c) => {
  const discriminant = b*b - 4*a*c;
  console.log('Discriminant: ', discriminant);
  if (discriminant > 0) {
    const res1 = (-1*b + Math.sqrt(discriminant)) / (2 * a);
    const res2 = (-1*b - Math.sqrt(discriminant)) / (2 * a);
    console.log('There are 2 roots to this equation.\n');
    console.log(`x1 = ${res1},\nx2 = ${res2}`);
  } else if (discriminant == 0) {
    const res1 = -1*b + Math.sqrt(discriminant);
    console.log('There is 1 root to this equation.\n')
    console.log(`x1 = ${res1}`);
  } else {
    console.log('There are no real roots to this equation');
  }
  process.exit(1);
}

const getArgsFromFile = (path) => {
  try {
    const data = fs.readFileSync(path, 'utf-8').trim().split(' ');
    if (data.length !== 3) {
      console.log('Wrong data format');
      process.exit(1);
    }
    const res = [];
    for (const number of data) {
      const floatNumber = parseFloat(number);
      if (floatNumber) {
        res.push(floatNumber)
      } else {
        console.log('Wrong data format');
        process.exit(1);
      }
    }
    return res;
  } catch (err) {
    console.log('Wrong path');
    process.exit(1);
  }
}

const startApp = () => {
  const path = process.argv[2];
  if (path) {
    const args = getArgsFromFile(path);
    displayEquation(...args);
    solveQuadEquation(...args);
  } else {
    const params = ['a', 'b', 'c'];
    const values = [];
    console.log('Input parameters` values: ');
    process.stdout.write(params[0]+'= ');
    process.stdin.on('data', data => {
      if (values.length < 3) {
        if (data.length != 0 && parseFloat(data)) {
          values.push(data);
          if (values.length < 3) {
            process.stdout.write(params[values.length]+'= ');
          } else {
            displayEquation(...values);
            solveQuadEquation(...values);
          }
        } else {
          process.stdout.write('Parameter value must be a number');
          process.stdout.write('\n' + params[values.length] + '= ');
        }
      }
    })
  }
}

startApp();


