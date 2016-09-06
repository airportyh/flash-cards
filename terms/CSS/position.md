# `position` CSS Property

The `position` property is one of the most important [CSS properties](#CSS/CSS_Property) controlling layout. `position` specifies the way that the element is positioned on the page.

There are four possible values for `position`:
1. `static` - the default value of `position`; setting `top`, `bottom`, `left`, or `right` properties has no effect
2. `relative` - positioned relative to its normal position
3. `fixed` - stays in the same position even when the page is scrolled
4. `absolute` - positioned relative to the nearest parent element that has its `position` property set to `relative` or `fixed`

Elements that have a `position` of `relative`, `fixed`, or `absolute` can be positioned using the `top`, `bottom`, `left`, and/or `right` properties.

<pre>
&lt;div class="tile-wrapper"&gt;
  &lt;div class="tile tile1"&gt;&lt;/div&gt;
  &lt;div class="tile tile2"&gt;&lt;/div&gt;
  &lt;div class="tile tile3"&gt;&lt;/div&gt;
&lt;/div&gt;

.tile-wrapper {
  <span class="highlight">position: relative;</span>
  top: 10px;
  left: 10px;
}

.tile {
  <span class="highlight">position: absolute;</span>
  top: 0;
  background-color: red;
  width: 100px;
  height: 100px;
}

.tile1 {
  left: 0;
}

.tile2 {
  left: 150px;
}

.tile3 {
  left: 300px;
}
</pre>