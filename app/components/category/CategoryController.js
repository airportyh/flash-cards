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
