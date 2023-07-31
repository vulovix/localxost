import { Cryptograph } from "./dist/index.es.js";

const a = Cryptograph();
const b = Cryptograph();

var sentenceOne = "Cryptograph is the awesome tool!";
var sentenceTwo = "Криптограф је страва алат!";

// a.run(sentenceOne, 100, console.log);
b.setSubset("sr-Cyrl");
b.run(sentenceTwo, 10, console.log);