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

function decode(word){
    if(word[0] === 'a'){
        return word[1];
    }

    if(word[0] === 'b'){
        return word[2];
    }

    if(word[0] === 'c'){
        return word[3];
    }

    if(word[0] === 'd'){
        return word[4];
    }

    if(word[0] !== 'a' || word[0] !== 'b' || word[0] !== 'c' || word[0] !== 'd'){
        return ' ';
    }
}