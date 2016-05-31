var app = angular.module('flash-cards',
  ['btford.markdown', 'ngRoute']);

app.config(function($routeProvider) {
  $routeProvider.when('/', {
    controller: 'MainController',
    templateUrl: 'main.html'
  });
  $routeProvider.when('/:category', {
    controller: 'CategoryController',
    templateUrl: 'category.html'
  })
  $routeProvider.when('/:category/:term', {
    controller: 'FlashCardController',
    templateUrl: 'flash-card.html'
  });
});

app.controller('MainController', function() {
  this.categories = Object.keys(words);
});

app.controller('CategoryController',
  function($routeParams, $location) {
  this.category = $routeParams.category;
  this.words = words[this.category];

  this.start = function() {
    var idx = Math.floor(Math.random() * this.words.length);
    var word = this.words[idx];
    var path = `/${this.category}/${wordToPath(word)}`;
    $location.path(path);
  };
});

function pathToWord(path) {
  return path.replace(/_/g, ' ');
}

function wordToPath(word) {
  return word.replace(/ /g, '_');
}

app.controller('FlashCardController',
  function($sce, $http, $routeParams, $location) {

  var term = $routeParams.term;
  var category = $routeParams.category;
  this.words = words[category];

  this.reveal = function() {
    var url = 'terms/' + category + '/' + wordToPath(this.word) + '.md';
    var ctrl = this;
    $http.get(url).success(function(data) {
      ctrl.description = data;
      ctrl.revealed = true;
    });
  };

  this.another = function() {
    this.revealed = false;
    var idx = Math.floor(Math.random() * this.words.length);
    var word = this.words[idx];
    this.word = word;
    $location.path(`/${category}/${wordToPath(word)}`);
  };

  if (term) {
    this.revealed = false;
    this.word = pathToWord(term);
  } else {
    this.another();
  }

});
