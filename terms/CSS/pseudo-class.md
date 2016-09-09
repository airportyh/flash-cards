# Pseudo-class

A pseudo-class is a special type of [selector](#CSS/CSS_Selector) that is appended to another selector. It allows CSS to target a special state of the element.

For example, the `:hover` pseudo-class can be used to change the cursor styling when the cursor is hovered over an element:

<pre>
img<span class="highlight">:hover</span> {
    cursor: pointer;
}
</pre>

`:first-child` is another example of a pseudo-class. `:first-child` can be used to target all elements that are the first [children](#HTML/children) of another element.

<pre>
.content<span class="highlight">:first-child</span> {
	margin-top: 10px;
}
</pre>

The above selector `.content:first-child` targets all elements within elements of class `content` that are the first child of another element.