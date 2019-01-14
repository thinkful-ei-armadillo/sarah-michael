function getYearOfBirth(age){
if( age < 0){
    throw new Error("Age can not be negative");
}
    return (2019 - age);  
}

function createGreeting(name, age){
    const yob = getYearOfBirth(age); 
    if (name === undefined || age === undefined){
        throw new Error("Arguments not valid");
    }
    if (typeof name !== String || typeof age !== Number){
        throw new TypeError();
    }
    return `Hi, my name is ${name} and I'm ${age} years old and I was born in ${yob}.`; 
} 
try {

  const greeting1 = createGreeting(); 
    console.log(greeting1);
} 
catch(error) {
    console.error(error);
}
