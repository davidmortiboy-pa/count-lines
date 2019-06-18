const fs = require('fs');

function countLinesInFile(path) {
  fs.readFile(path, 'utf8', function(err, contents) {
    if (err) {
      return console.log(`Error reading file: ${err}`);
    }

    // regex flags: g = global, m = across multiple lines, s = the '.' character includes line terminators
    contents = contents.replace(/\/\*.*?\*\//gms, '') // replace multi line comments
      .replace(/\/\/.*/g, '') // replace single line comments
      .replace(/^\s*$[\r|\n|\r\n|\n\r]+/gm, ''); // replace empty lines - use m flag for multiline so ^ is start of line and $ is end

    const lines = contents.split(/[\r|\n|\r\n|\n\r]+/g);
    if (lines[lines.length-1] === '') { // remove final blank line
      lines.pop();
    }

    console.log(lines);
    return console.log(`\n\n${lines.length} lines after stripping whitespace and comments`);
  });
}

countLinesInFile(process.argv.slice(2).shift());
