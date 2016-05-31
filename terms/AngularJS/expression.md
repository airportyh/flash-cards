# Expression

An AngularJS expression substitutes a dynamic value within a [template](#AngularJS/template). It begins with the symbol `{{` and ends with `}}`. Example, the below expression renders the `name` property
within the scope inside of an `<h1>`.

<pre>
&lt;h1&gt;<span class="highlight">{{name}}</span>&lt;/h1&gt;
</pre>

Expressions are quite powerful, although not quite as powerful as full-on JavaScript. Here are some forms that are valid expressions:

* `1+2`
* `a+b`
* `user.name`
* `items[index]`

For more, see [expressions](https://docs.angularjs.org/guide/expression).
