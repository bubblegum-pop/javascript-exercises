const findTheOldest = function(objArr) {
  let ageOfOldest = 0;
  let indexOfOldest;
  
  objArr.forEach((person, index) => {
    let endYear;
    if ("yearOfDeath" in person) {
      endYear = person["yearOfDeath"];
    } else {
      endYear = new Date().getFullYear();
    }
    let age = endYear - person["yearOfBirth"];
    if (age > ageOfOldest) {
      ageOfOldest = age;
      indexOfOldest = index;
    }
  });

  return objArr.at(indexOfOldest);
};

// Do not edit below this line
module.exports = findTheOldest;