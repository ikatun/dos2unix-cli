#!/usr/bin/env node

const yargs = require('yargs');
const globArray = require('glob-array');
const path = require('path');
const fs = require('fs');

const args = yargs
  .usage('Usage: dos2unix <paths...>')
  .demandCommand(1)
  .argv;

const files = globArray.sync(args._);

console.log('Converting:');
files.map(file => {
  console.log('  ' + file);
  const content = fs.readFileSync(file, 'utf8');
  fs.writeFileSync(file, Buffer.from(content.replace(/\r\n/g, '\n'), 'utf8'));
});
console.log('done');
