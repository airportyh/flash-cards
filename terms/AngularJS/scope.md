# Scope

The scope in an AngularJS application is where both data and methods reside and what connects the controller to the template. Within the controller, the scope is referenced as `$scope`. For example, in the following controller, the properties `name`, `message`, and the method `greet()` are initialized.

<pre>
var app = angular.module('my-app', []);
app.controller('MainController', function(<span class="highlight">$scope</span>) {
  <span class="highlight">$scope.name</span> = 'Sally';

  <span class="highlight">$scope.greet</span> = function() {
    <span class="highlight">$scope.message</span> = 'Hello, ' + $scope.name + '!';
  };
});
</pre>

Within the template, all three of these can be accessed directly.

<pre>
&lt;div ng-app=&quot;my-app&quot; ng-controller=&quot;MainController&quot;&gt;
  &lt;input type=&quot;text&quot; <span class="highlight">ng-model=&quot;name&quot;</span>&gt;
  &lt;button <span class="highlight">ng-click=&quot;greet()&quot;</span>&gt;&lt;/button&gt;
  &lt;span class=&quot;message&quot;&gt;<span class="highlight">{{message}}</span>&lt;/span&gt;
&lt;/div&gt;
</pre>

To see more, read [scopes](https://docs.angularjs.org/guide/scope).
