console.log("Register");

let pets=[];//empty array

//object literal
let pet1={
    name:"Moka",
    age:1,
    gender:"Female",
    breed:"Mixed"
}

let pet2={
    name:"Macchi",
    age:2,
    gender:"Male",
    breed:"Boxer"
}
let pet3={
    name:"Scooby",
    age:30,
    gender:"Male",
    breed:"Dane"
}
//push pets into the array
pets.push(pet1,pet2,pet3);

function displayNames(){
    console.log("Total pets = " + pets.length);
    for(let i=0;i<pets.length;i++){
        // console.log(pets[i].name);
        document.getElementById("petsNames").innerHTML+="<p> " +pets[i].name + "</p>";
    }
}

displayNames();