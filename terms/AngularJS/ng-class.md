# `ng-class`

The `ng-class` directive conditionally adds a [class](#/CSS/class) to a [DOM element](#/HTML/element) based on a [scope](#/AngularJS/scope) [property](#/JavaScript/property). Example:

<pre>
&lt;div <span class="hl">ng-class=&quot;open ? 'open' : ''&quot;</span>&gt;
&lt;/div&gt;
</pre>

The expression within the `ng-class` [attribute](#/HTML/attribute) is a [ternary operator](#/JavaScript/Ternary_Operator) which resolves to the value `"open"` in the case that `open` is truthy and the value `""` in the case that `open` is falsy. The `open` property might be set in the [controller](#/AngularJS/controller) like so:

<pre>
var app = angular.module('my-app', []);
app.controller('MainController', function($scope) {
  <span class="hl">$scope.open = true;</span>
});
</pre>
