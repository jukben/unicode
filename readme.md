# @jukben/unicode

![Codecov](https://codecov.io/gh/jukben/unicode/branch/master/graph/badge.svg)

Safe work with unicode strings with emoji chars up to _Emoji 5.0_ (Unicode 10.0)

## Install

`npm i --save-dev @jukben/unicode`

## Usage

```javascript
import unicode from "@jukben/unicode";

`console.log(unicode("hello ✌🏻").reverse()); // ✌🏻 olleh`;
```

### API

### `unicode(string: text)`

#### `.reverse()`

returns correctly reversed string

`console.log(unicode("hello ✌🏻").reverse()); // ✌🏻 olleh`

#### `.length`

returns correct length

`console.log(unicode("hello ✌🏻").length); // 6`

#### `.charAt(index: number)`

returns character at the index or undefined

`console.log(unicode("hello ✌🏻").charAt(6)); // ✌🏻`

#### `.hexCodeAt(index: number)`

returns hax code at the index or undefined

`console.log(unicode("hello ✌🏻").hexCodeAt(6)); // 270c-1f3fb`

#### `.chars`

returns arrays of chars

`console.log(unicode("hello ✌🏻").chars); // ["h", "e", "l", "l", "o", " ", "✌🏻"]`

## License

<img src="https://media.giphy.com/media/AuIvUrZpzBl04/giphy.gif" width="500">

MIT
