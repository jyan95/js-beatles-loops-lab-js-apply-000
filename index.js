// add solution here
function theBeatlesPlay(musicians, instruments){
  var array = [];
  for(var i = 0; i < musicians.length ; i++){
    array.push(musicians[i] + ' plays ' + instruments[i]);
  }
  return array;
}

function johnLennonFacts(facts){
  var i = 1;
  while(i >= 0){
    facts[i] += '!!!';
  }
  return facts;
}

function iLoveTheBeatles(num){
  var arr = [];
  if(num < 15){
  do{
    arr.push('I love the Beatles!');
    num++;
  }
  while(num < 15);
  }
  return arr;
}