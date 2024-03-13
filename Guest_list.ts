

let Guest_list :string[] = ['Kashif','Waqas','Naveed',];

// for(let i=0; i<Guest_list.length; i++){

//     console.log('Dear Mr. ' + Guest_list[i] + '\n\nIts my pleasure to invite you in our party.\n\nThankyou!\n\n') ;

// }

let absent_Guest :string = 'Kashif' ;


let new_Guest :string = 'Azher' ;

Guest_list[0] = new_Guest ;

for(let i=0; i<Guest_list.length; i++){

    console.log('Dear Mr. ' + Guest_list[i] + '\n\nIts my pleasure to invite you in our party.\n\nThankyou!\n\n') ;

}

console.log(`${absent_Guest} is not coming to the party.\n\n`);

console.log('Good News! We find a big table so we are inviting 3 more guests.\n\n')

Guest_list.unshift('Shahmir') ;

Guest_list.splice(2 , 0 , 'Saam') ;

Guest_list.push('Kashif') ;

for(let i=0; i<Guest_list.length; i++){

    console.log('Dear Mr. ' + Guest_list[i] + '\n\nIts my pleasure to invite you in our party.\n\nThankyou!\n\n') ;

}





