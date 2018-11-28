let obj = {
  first : 123,
  second:'some value',
  third:[0,1,2,3,'someValueInArray'],
  fourth:{
    firstInner:12345667,
    secondInner:'InnerValueOfFourth',
    thirdInner:{
      anyvalue:'124'
    }
  }
};

function deepClone(obj) {
  let cloneObj = {};
  for (let element in obj){
    if (typeof element !== "object"){
      cloneObj[element] = obj[element];
    } else {
      deepClone(element)
    }
  }
  return cloneObj;
}

console.log('Initial object is ', obj)
console.log('Cloned object is ',deepClone(obj));