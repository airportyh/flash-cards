function pathToWord(path) {
  return path.replace(/_/g, ' ');
}

function wordToPath(word) {
  return word.replace(/ /g, '_');
}