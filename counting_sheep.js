function countSheeps(arrayOfSheeps) {
  // TODO May the force be with you
  number = 0;
  for (var i = 0; i < arrayOfSheeps.length; i++){
    if (arrayOfSheeps[i] === true){
      number++;
    }
  }
  return number;
}