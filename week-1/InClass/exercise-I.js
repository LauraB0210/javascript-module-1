function calculateBornYear(age){
    return 2022 - age;
}

function getInfoPerson (name, age) {
    const bornAge = calculateBornYear(age)
    return "My name is " + name + " and I was born in " + bornAge;
}

const greeting = getInfoPerson("juan", 33)
console.log(greeting);

