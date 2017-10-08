Subscribable value

[![Build Status](https://travis-ci.org/Cap32/subscribable-value.svg?branch=master)](https://travis-ci.org/Cap32/subscribable-value) [![Coverage Status](https://coveralls.io/repos/github/Cap32/subscribable-value/badge.svg?branch=master)](https://coveralls.io/github/Cap32/subscribable-value?branch=master) [![dependencies Status](https://david-dm.org/Cap32/subscribable-value/status.svg)](https://david-dm.org/Cap32/subscribable-value)

## Installing

Using npm:

```bash
$ npm install subscribable-value
```

Using yarn:

```bash
$ yarn add subscribable-value
```

## Usage

new SubValue(initialValue)

val.subscribe(handler)

val.set(anyValue)

val.get()

```js
import SubValue from 'subscribable-value';

const val = new SubValue(0);

val.subscribe((newValue) => {
    console.log(newValue); /* 2333 */
});
val.set(2333);
val.get() /* 2333 */
```

val.unsubscribe([handler])

```js
const unsubscribe = val.subscribe((newValue) => {
    console.log(newValue);
});

unsubscribe();
/* or `val.unsubscribe();` */

val.set(2333);
```

## License

MIT (c) Christopher Peng (Cap32)
