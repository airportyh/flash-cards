# Element

An HTML element is the basic unit of organization of an HTML document. An HTML document is written declaratively and is typically composed of many elements.

Elements may be nested within other elements. For example:

```
<div class="form-wrapper">
	<form action="/register" method="POST">
		<input type="text" name="firstName" placeholder="First name">
		<input type="text" name="lastName" placeholder="Last name">
		<button type="submit">Submit</button>
	</form>
</div>

```

The above tags represent elements that compose a registration form. The `<form>` element contains three additional elements: two `<input>` elements and a `<button>` element. The form itself is contained within a "form-wrapper" `<div>` element.