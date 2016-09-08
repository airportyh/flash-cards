# `id` Attribute

The HTML `id` attribute specifies a unique identifier for that element. You should not use the same id for more than one element. In addition, each element should have no more than one id.

An element can be queried by its `id` attribute using JavaScript.

The `id` attribute can also be used as a [CSS selector](#CSS/CSS_Selector).

<pre>
&lt;div class="section" <span class="highlight">id="home"</span>&gt;
	&lt;div class="row one"&gt;&lt;/div&gt;
	&lt;div class="row two"&gt;&lt;/div&gt;
	&lt;div class="row three"&gt;&lt;/div&gt;
	&lt;div class="row four"&gt;&lt;/div&gt;
&lt;/div&gt;
&lt;div class="section" <span class="highlight">id="about"</span>&gt;
	&lt;div class="row one"&gt;&lt;/div&gt;
	&lt;div class="row two"&gt;&lt;/div&gt;
	&lt;div class="row three"&gt;&lt;/div&gt;
	&lt;div class="row four"&gt;&lt;/div&gt;
&lt;/div&gt;
</pre>