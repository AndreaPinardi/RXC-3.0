var sorcery = require("sorcery");
const replace = require("replace-in-file");
var cat = require("mapcat").cat;

cat(
  ["build/main.js.map", "build/rxc_scripts.js.map"],
  "build/rxc.js",
  "build/rxc.js.map"
);

const options = {
  //Single file
  files: "build/rxc.js",

  //Replacement to make (string or regex)
  from: /sourceMappingURL=undefined/g,
  to: "sourceMappingURL=",
};

replace.sync(options);

const options4 = {
  //Single file
  files: "build/rxc.js.map",

  //Replacement to make (string or regex)
  from: ',"unknown:/",',
  to: ",",
};
replace.sync(options4);

const options2 = {
  //Single file
  files: "build/rxc.js.map",

  //Replacement to make (string or regex)
  from: /\\\\/g,
  to: "/",
};
replace.sync(options2);

const options3 = {
  //Single file
  files: "build/rxc.js.map",

  //Replacement to make (string or regex)
  from: /:\//g,
  to: "://",
};
replace.sync(options3);

//setTimeout(()=>{
//sorcery.load( 'build/rxc.js' ).then( function ( chain ) {
// generate a flattened sourcemap
//var map = chain.apply(); // { version: 3, file: 'code.min.js', ... }

// get a JSON representation of the sourcemap
//map.toString(); // '{"version":3,"file":"code.min.js",...}'

// get a data URI representation
//map.toUrl(); // 'data:application/json;charset=utf-8;base64,eyJ2ZXJ...'

// write to a new file - this will create `output.js` and
// `output.js.map`, and will preserve relative paths. It
// returns a Promise
//chain.write( 'output.js' );

// write to a new file but use an absolute path for the
// sourceMappingURL
//chain.write( 'output.js', { absolutePath: true });

// write to a new file, but append the flattened sourcemap as a data URI
//chain.write( 'build/ooo.js', { inline: true, absolutePath: true });

// overwrite the existing file
//chain.write();
//chain.write({ inline: true });

// find the origin of line x, column y. Returns an object with
// `source`, `line`, `column` and (if applicable) `name` properties.
// Note - for consistency with other tools, line numbers are always
// one-based, column numbers are always zero-based. It's daft, I know.
//var loc = chain.trace( x, y );
//});
//},10000)
