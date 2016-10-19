const assert = require('assert');

var mostWordsEndWith = function(commonEnd)
{
  var splittedWords = commonEnd.split(' ');
  var letterMap = {};
  var highestNum = 0;
  var dominantLetter;

  for( var i = 0; i < splittedWords.length; i++)
  {
    var storeLetters = splittedWords[i].slice(-1);

    if(letterMap[storeLetters] === undefined)
    {
      letterMap[storeLetters] = 0;
    }

    letterMap[storeLetters]++;
  }
    //console.log(letterMap);

  for(var numLetter in letterMap)
  {
    if(highestNum < letterMap[numLetter])
    {
      highestNum = letterMap[numLetter];
      dominantLetter = numLetter;
    }

    if (splittedWords[i].endsWith(dominantLetter))
    {
     console.log(splittedWords[i]);
    }
  }





  return {highestNum, dominantLetter};
    //console.log(storeLetters);

}

var sentence = 'Down by the river there is a man that quiver and shiver , but he needs to deliver a packet that he think is a big racket and a packet of gum .';
mostWordsEndWith(sentence);
console.log(mostWordsEndWith(sentence));
