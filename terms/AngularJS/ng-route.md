# `ng-route`

[ng-route](https://docs.angularjs.org/api/ngRoute) is the routing module that is most commonly used with AngularJS. To set it up, you will usually go through these following steps:

1. Setup angular-route.js
2. Add "ngRoute" as a dependency in your app module
3. Add an `<ng-view>` tag to your app
4. Add a config section to your app (if it doesn't exist) and set up the routes using $routeProvider

## Setup angular-route.js

1. Get the file from: `http://ajax.googleapis.com/ajax/libs/angularjs/X.Y.Z/angular-route.js` where X.Y.Z is 1.5.6 - this is the version we are currently using. Save this file in your project directory.
2. Include the file in your HTML after angular.js:

        <script src="angular-route.js"></script>

## Add "ngRoute" as a dependency

1. Add "ngRoute" into the dependency array for the module definition of your app module.

        var app = angular.module('my-app', ["ngRoute"]);

## Add an `<ng-view>` to your app

<pre>
&lt;body ng-app=&quot;my-app&quot;&gt;
  &lt;ng-view&gt;&lt;/ng-view&gt;
&lt;/body&gt;
</pre>

## Add a config section for setting up routing

Example:

```
app.config(function($routeProvider) {
  $routeProvider
    // when the URL is /
    .when('/', {
      // dispatch to HomeController
      controller: 'HomeController',
      // using home.html as the template
      templateUrl: 'home.html'
    })
    // when the URL is /details/ plus an id
    .when('/details/:id', {
      // dispatch to DetailsController
      controller: 'DetailsController',
      // using details.html as the template
      templateUrl: 'details.html'
    });
});
```
