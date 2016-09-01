app.config(function($routeProvider) {
  $routeProvider.
  when('/', {
    controller: 'MainController',
    templateUrl: 'app/components/main/MainView.html'
  }).
  when('/:category', {
    controller: 'CategoryController',
    templateUrl: 'app/components/category/CategoryView.html'
  }).
  when('/:category/:term', {
    controller: 'FlashCardController',
    templateUrl: 'app/components/flash-card/FlashCardView.html'
  });
});