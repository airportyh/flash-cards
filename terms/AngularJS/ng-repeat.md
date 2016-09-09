# `ng-repeat`

The `ng-repeat` directive repeats a [DOM element](#/HTML/element) for each [object](#/JavaScript/object) within an [array](#/JavaScript/array) - the array must contain objects. Example, the following code will render an array of tasks as an [unordered list](#/HTML/ul). Each task contains a `description` [property](#/JavaScript/property).

<pre>
&lt;ul&gt;
	&lt;li <span class="highlight">ng-repeat=&quot;task in tasks&quot;</span>&gt;
		{{task.description}}
	&lt;/li&gt;
&lt;/ul&gt;
</pre>