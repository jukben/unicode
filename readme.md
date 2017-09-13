# @jukben/emoji-search

Safe work with unicode strings with emoji chars up to *Emoji 3.0* (Unicode 9.0)

## Usage

```javascript
import unicode from '@jukben/unicode'

console.log(unicode("hello ❤️").reverse()) // ❤️ olleh
```

### API

### `reverse()`
returns correctly reversed string

`console.log(unicode10("hello ✌🏻").reverse(6)); // ✌🏻 olleh`
### `length`
returns correct length

`console.log(unicode10("hello ✌🏻").length); // 6`
### `charAt(index: number)`
returns character at the index or undefined

`console.log(unicode10("hello ✌🏻").charAt(6)); // ✌🏻`
### `hexCodeAt(index: number)`
returns hax code at the index or undefined

`console.log(unicode10("hello ✌🏻").hexCodeAt(6)); // 270c-1f3fb`
### `char`
returns arrays of chars

`console.log(unicode10("hello ✌🏻").chars); // ["h", "e", "l", "l", "o", " ", "✌🏻"]`

## Install

`npm i --save-dev @jukben/unicode`

## License

<img src="https://media.giphy.com/media/AuIvUrZpzBl04/giphy.gif" width="500">

MIT
