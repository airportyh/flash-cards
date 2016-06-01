# `ng-click`

The `ng-click` directive registers a click event handler to a element and calls a specified function. The specified function is to be found in the scope of the controller in the context. For example:

<pre>
&lt;button <span class="highlight">ng-click=&quot;sayGreeting()&quot;</span>&gt;Hello&lt;/button&gt;
</pre>

Will trigger a call to the `sayGreeting()` function connected to the scope, as seen below

<pre>
var app = angular.module('my-app', []);
app.controller('MainController', function($scope) {
  <span class="highlight">$scope.sayGreeting = function() {

  };</span>
});
</pre>
