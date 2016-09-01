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