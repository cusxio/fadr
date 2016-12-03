# fadr

A micro library without dependencies to fade things in and out.

CSS does not support animation or transition on display `none`, use this instead.

## Usage

Using [npm](https://www.npmjs.com/):

```
$ npm install --save fadr
```

The UMD build is also available on [unpkg](https://unpkg.com):

```html
<script src="https://unpkg.com/fadr/dist/fadr.min.js"></script>
```

## Examples

```js
import fadr from 'fadr';

const div = document.querySelector('div');

/**
 * To fade in an element to display `flex` at 1000ms with a custom easing function.
 *
 */
fadr('in', div, {
    duration: 1000,
    easing: (t, b, c, d) => (-c * (t /= d) * (t - 2)) + b,
    display: 'flex',
    complete: () => {
        console.log('done');
    },
});
```

## API

### fadr(direction, element, [options])

#### direction
Type: `String`

- fade in - `in`
- fade out - `out`

#### element
Type: `Node`

DOM node to fade in or fade out.

#### options
Type: `Object`

##### duration
Type: `number`
Default: `400`

##### easing
Type: `function`
Default : `easeOutQuad`

##### display
Type: `string`
Default: fade in - `block`, fade out - `none`

##### complete
Type: `function`
Default: `undefined`

## Browser Support

- [requestAnimationFrame](http://caniuse.com/#search=requestanimation)

## License

MIT © Jonathan Chan