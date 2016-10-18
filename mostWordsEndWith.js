const assert = require('assert');

var mostWordsEndWith = function(commonEnd)
{
  var splittedWords = commonEnd.split(' ');
  var letterMap = {};
  var highestNum = 0;

  for( var i = 0; i < splittedWords.length; i++)
  {
    var storeLetters = splittedWords[i].slice(-1);

    if(letterMap[storeLetters] === undefined)
    {
      letterMap[storeLetters] = 0;
    }

    letterMap[storeLetters]++;
  }

  for(var numLetter in letterMap)
  {
    if(letterMap[i] > highestNum)
    {
      highestNum = letterMap[i];
      console.log(highestNum);
    }
  }

  //console.log(letterMap);
  return letterMap;
    //console.log(storeLetters);

}

var sentence = 'Down by the river there is a man that quiver and shiver, but he needs to deliver a packet that he think is a big racket and a packet of gum.';
mostWordsEndWith(sentence);
