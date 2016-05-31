# Controller

An AngularJS controller contains logic that determines what happens and in what way the model data is updated in response to user actions. A controller is connected to a [template](#AngularJS/template) and it shares data with its template through the [scope](#AngularJS/scope). Example controller:

<pre>
var app = angular.module('my-app', []);
<span class="highlight">app.controller('MainController', function($scope) {
  $scope.name = 'Camila';

  $scope.sayGreeting = function() {
    $scope.message = 'Hello, ' + $scope.name + '!';
  };
});</span>
</pre>

A scope can make properties or methods available to it's template, which can in turn access them using either [expressions](#/AngularJS/expression) or [directives](#/AngularJS/directive).

For more, read [controllers](https://docs.angularjs.org/guide/controller).
