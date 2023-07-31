# @localxost/cryptograph

## About

Text decryption effect.

[Github Repository](https://github.com/vulovix/localxost/packages/cryptograph)

## Demo Example

[Demo Example](https://vulovix.com/craft/kriptograf)

## Install

```
yarn add @localxost/cryptograph
```

## Usage

```
import { Cryptograph } from "@localxost/cryptograph";
const a = Cryptograph();
const b = Cryptograph();

var sentenceOne = "Cryptograph is the awesome tool!";
var sentenceTwo = "Криптограф је страва алат!";

a.run(sentenceOne, 100, console.log);
b.setSubset("sr-Cyrl");
b.run(sentenceTwo, 10, console.log);

```
## Test

```
yarn run test
```