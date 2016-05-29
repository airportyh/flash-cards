var app = angular.module('flash-cards', ['ngSanitize', 'btford.markdown']);

app.controller('MainController', function($sce, $http) {

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
  };

  this.another();

});
