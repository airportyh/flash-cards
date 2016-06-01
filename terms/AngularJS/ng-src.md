# `ng-src`

Sets an image's `src` [attribute](#/HTML/attribute) to the value of a [scope](#/AngularJS/scope) [property](#/JavaScript/property). Example:

<pre>
&lt;img <span class="hl">ng-src=&quot;{{imageUrl}}&quot;</span>&gt;
</pre>

The `imageUrl` might be set on the scope like so:

<pre>
var app = angular.module('my-app', []);
app.controller('MainController', function($scope) {
  <span class="hl">$scope.imageUrl = 'kitten.png';</span>
});
</pre>
