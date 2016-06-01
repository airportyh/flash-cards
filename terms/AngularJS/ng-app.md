# `ng-app`

The `ng-app` directive makes a DOM element an AngularJS application. Example:

<pre>
&lt;div <span class="highlight">ng-app</span> ng-init=&quot;name = 'Mary';&quot;&gt;
  What's your name?&lt;br&gt;
  &lt;input type=&quot;text&quot; ng-model=&quot;name&quot;&gt;&lt;br&gt;
  &lt;label&gt;Hello, {{name}}!&lt;/label&gt;
&lt;/div&gt;
</pre>

Optionally, `ng-app` takes a value which references the name of a module.

<pre>
&lt;div <span class="highlight">ng-app="my-app"</span> ng-init=&quot;name = 'Mary';&quot;&gt;
  What's your name?&lt;br&gt;
  &lt;input type=&quot;text&quot; ng-model=&quot;name&quot;&gt;&lt;br&gt;
  &lt;label&gt;Hello, {{name}}!&lt;/label&gt;
&lt;/div&gt;
</pre>

The above ng-app declaration links to the module declared in the JavaScript below.

<pre>
var app = angular.module(<span class="highlight">'my-app'</span>, []);
</pre>
