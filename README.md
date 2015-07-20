# equality
Simple javascript plugin to create equal-sized content on your page

## Installation

### Bower
`bower install equality`

### NPM
`npm install equalityjs`

## Usage

 - Include the minified `dist/equality.min.js` file in your project.
 - Tell Equality what you want to be equal:

it defaults to all children of the element you put Equality on:

```html
<ul data-equality>
    <li><h1>Example</h1></li>
    <li><h2>Example</h2></li>
    <li><h3>Example</h3></li>
    <li><h4>Example</h4></li>
    <li><h5>Example</h5></li>
</ul>
```

```js
var eq = new Equality('[data-equality]');
```

however you can also use data attributes to do some fancy stuff:

```html
<ul data-equality data-equality-children=".equal">
    <li class="equal"><h1>Example</h1></li>
    <li class="equal"><h2>Example</h2></li>
    <li><h3>Example</h3></li>
    <li class="equal"><h4>Example</h4></li>
    <li><h5>Example</h5></li>
</ul>
```

So far, our examples have shown how to create elements with equal height, you can overide this by
specifying `data-equality-width` to make all child elements have the same width. Doing this will stop
the elements from being equal in height but you can make the height equal too by explicitly specifying `data-equality-height`
on the parent element.

Finally, (for the initial short readme) it's probably likely that you are going to be updating content
on the fly using some wonderful AJAX or something else. If you're doing this, your equal boxes might break. To fix them,
simply call `render` on the Equality instance:

```js
var eq = new Equality('[data-equality]');

$http(...).then(function (response) {
    // magic
    eq.render();
});

```
