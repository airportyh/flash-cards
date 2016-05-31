# Template

An AngularJS template consists of HTML markup plus AngularJS [expressions](#AngularJS/expression) and [directives](#AngularJS/directive). Templates may live directly within the main HTML page of the application or it may reside in a separate HTML to be loaded dynamically. This is an example template:

<pre>
&lt;div ng-controller=&quot;MainController&quot;&gt;
  &lt;h1&gt;{{title}}&lt;/h1&gt;
  &lt;ul&gt;
    &lt;li ng-repeat=&quot;items in items&quot;&gt;
      {{ item.description }}
    &lt;/li&gt;
  &lt;/ul&gt;
&lt;/div&gt;
</pre>

For more read [templates](https://docs.angularjs.org/guide/templates).
