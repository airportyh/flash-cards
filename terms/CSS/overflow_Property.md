# `overflow` Property

The `overflow` property determines how to handle content that exceeds the boundaries of an element. (The CSS box model determines the boundaries of an element.)

This property only has an effect if the element has its `display` property set to `block`, and if its `height` property is also set to a value.

For example, setting the `overflow` property to `hidden` will clip the content of an element to its boundaries; any content that overflows from the element will be hidden. Setting `overflow` to `hidden` also causes any child elements to pass their dimensions up to the parent element that has the overflow property set.

<pre>
<span class="highlight">.tile</span> {
  overflow: hidden;
}
</pre>