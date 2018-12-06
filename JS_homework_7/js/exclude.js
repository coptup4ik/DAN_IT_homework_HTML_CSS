const firstArray = [{
  name: "Ivan",
  surname: "Ivanov",
  gender: "male",
  age: 30
},
  {
    name: "Anna",
    surname: "Ivanova",
    gender: "female",
    age: 22
  }
];


const secondArray = [{
  name: "Vasya",
  surname: "Ivanov",
  gender: "male",
  age: 30
},
  {
    name: "Anna",
    surname: "Ivanova",
    gender: "female",
    age: 22
  }
];

function excludeBy(first, second, name) {
  let newArray = [];
  first.forEach(firstItem => {
    let exclude = false;
    second.forEach(secondItem => {
      if (firstItem[name] === secondItem[name]) {
        exclude = true;
      }
    });
    if (!exclude) {
      newArray.push(firstItem)
    }
  });
  return newArray
}

console.log(excludeBy(firstArray, secondArray, 'name'));