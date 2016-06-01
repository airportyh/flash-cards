# `ng-controller`

`ng-controller` is a directive that connects an AngularJS controller to a DOM element and allows that controller to subsequently control the DOM element. The element must be a containing element of the element that is linked to the AngularJS module that the `ng-app` attribute links to. For example:

<pre>
&lt;div <span class="highlight">ng-app=&quot;my-app&quot;</span>&gt;
  &lt;div <span class="highlight">ng-controller=&quot;MainController&quot;</span>&gt;

  &lt;/div&gt;
&lt;/div&gt;
</pre>

The above `ng-controller` directive will link to the controller declared within the `my-app` module named `MainController`:

<pre>
var app = angular.module(<span class="highlight">'my-app'</span>);
app.controller(<span class="highlight">'MainController'</span>, function($scope) {
  
});
</pre>
