#!/usr/bin/env node

const yargs = require('yargs');
const lf = require('linefeeds');
const globArray = require('glob-array');
const path = require('path');

const args = yargs
  .usage('Usage: dos2unix <paths...>')
  .demandCommand(1)
  .argv;

const files = globArray.sync(args._);

console.log('Converting:')
files.map(file => {
  console.log('  ' + file);
  lf.convertSync(file, { ending: lf.lf });
});
console.log('done');

