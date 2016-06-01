# `ng-show`

Conditionally show or hide a [DOM element](#/HTML/element) based on a [scope](#/AngularJS/scope) [property](#/JavaScript/property). Example, the following code will show the `<div>` if the `open` property is truthy, and hide it when it is falsy:

<pre>
&lt;div <span class="hl">ng-show=&quot;open&quot;</span>&gt;
&lt;/div&gt;
</pre>

The open property might be set in the controller like so.

<pre>
var app = angular.module('my-app', []);
app.controller('MainController', function($scope) {
  <span class="hl">$scope.open = true;</span>
});
</pre>
