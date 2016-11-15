Subscribable value

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
    console.log(newValue); // => 2333
});
val.set(2333);
val.get() // => 2333
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

MIT @ Cap32
