# `action` Attribute

The `action` attribute specifies where to send form data. When a form is submitted, the form data is sent to a PHP script or route specified in the `action` attribute.

<pre>
	&lt;form <span class="highlight">action="register.php"</span> method="post"&gt;
	&lt;input type="text" name="firstName" placeholder="Enter your first name"&gt;
	&lt;input type="text" name="lastName" placeholder="Enter your last name"&gt;
&lt;/form&gt;
</pre>

When the above form is submitted, form data from the `firstName` and `lastName` input fields are sent to `register.php`. 

The `name` attribute is used as the unique identifier for each input field in the form. It is used to remember where each piece of form data is stored after being sent to the server.3

A PHP script at that location can then process the form data and potentially store it in a database.