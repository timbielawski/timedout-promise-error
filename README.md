# timedout-promise-error

An easy way to put a timeout on a promise with a custom error

* * *

## Installation

```sh
yarn add timedout-promise-error
```

```sh
npm i timedout-promise-error --save
```

* * *

## Usage

```js
import timedoutPromiseError from "timedout-promise-error"

// simple GET request:
try {
    const response = await timedoutPromiseError(fetch('https://www.somewhere.com'), 5000, {
      status: 504
    });
} catch(error) {
    console.log(error.status); //504
    console.log(error.stack); // Error.stack
}

```

* * *

## API
timedout-promise-error allows you to put a timeout on a promise while providing a custom error. Your error is returned in a Error so you get the error stack too.

### `timedoutPromiseError(somePromise: Object, timeout: Number, error: Object)`

```js
// simple GET request:
try {
    const response = await timedoutPromiseError(fetch('https://www.somewhere.com'), 5000, {
      status: 504
    });
} catch(error) {
    console.log(error.status); //504
    console.log(error.stack); // Error.stack
}

```




