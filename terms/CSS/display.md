# `display` CSS Property

The `display` property is one of the most important CSS properties for controlling layout. `display` controls the type of box used to render an element in the document.

The most commonly used values of the `display` property include:

`block` - takes up an entire line
`inline` - takes up only the part of the line 
`inline-block` - the element itself behaves as if it is set to `inline`, but each of its children behaves as if it is set to `block`
`none` - takes the element out of the DOM; the page will render as if the element doesn't exist

```
<div class="column">
  <h2>This is the left column.</h2>
  <p>This is some content.</p>
</div>

<div class="column">
  <h2>This is the right column.</h2>
  <p>This is some more content.</p>
</div>
```

<pre>
.column {
  <span class="highlight">display: inline-block;</span>
  width: 50%;
  margin: 0 auto;
  text-align: center;
}
</pre>