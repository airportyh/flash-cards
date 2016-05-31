# Class Selector

A CSS selector that matches all elements in the HTML document with
specified class. For example, this Class rule:

<pre>
<span class="highlight">.tile</span> {
  color: red;
}
</pre>

will select the following elements in the HTML document

<pre>
&lt;div <span class="highlight">class=&quot;tile&quot;</span>&gt;
&lt;/div&gt;
&lt;div <span class="highlight">class=&quot;tile</span> selected&quot;&gt;
&lt;/div&gt;
</pre>

Note: a HTML element can contain multiple classes, and only one of its classes has to match in order for a CSS rule to match.
