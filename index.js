var app = angular.module('flash-cards',
  ['ngSanitize', 'btford.markdown', 'ngRoute']);

app.config(function($routeProvider) {
  $routeProvider.when('/', {
    controller: 'FlashCardController',
    templateUrl: 'flash-card.html'
  });
  $routeProvider.when('/:term', {
    controller: 'FlashCardController',
    templateUrl: 'flash-card.html'
  });
});

app.controller('FlashCardController', function(
  $sce, $http, $routeParams, $location) {

  this.reveal = function() {
    var url = 'terms/' + this.word.replace(/ /g, '-') + '.md';
    var ctrl = this;
    $http.get(url).success(function(data) {
      ctrl.description = data;
      ctrl.revealed = true;
    });
  };

  this.another = function() {
    this.revealed = false;
    var idx = Math.floor(Math.random() * words.length);
    var word = words[idx];
    this.word = word;
    $location.path(`/${word.replace(/ /g, '-')}`);
  };

  var term = $routeParams.term;
  if (term) {
    this.revealed = false;
    this.word = term.replace(/-/g, ' ');
  } else {
    this.another();
  }

});
