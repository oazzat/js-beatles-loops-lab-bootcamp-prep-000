function theBeatlesPlay(musicians,instruments){
  var array = []
  
  for(var i=0;i<musicians;i++){
    array[i] = `${musicians[i]} plays ${instruments[i]}`
  }
  return array
}