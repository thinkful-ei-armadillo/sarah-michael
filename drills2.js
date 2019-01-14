function jediName(firstName, lastName){
    firstName = firstName.substring(0,1);
    lastName = lastName.substring(0,2);

    return lastName + firstName;
}

function beyond(num){
    if(num === 0){
        console.log('Staying home.')
    }
    if(num > 0 && num === Infinity){
        console.log('To infinity');
    }
    if(num <0 && num === Infinity){
        console.log('To negative inifinity');
    }
    if( num !== Infinity){
        console.log('And beyond');
    }
}