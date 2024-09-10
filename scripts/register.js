let pets=[];//empty array
//create the constructor
//<------ paramenters (local) --->
function Pet(name,age,gender,breed){
    //property=paramenter
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.breed=breed;
}
//get the inputs
let inputName = document.getElementById("txtName");
let inputAge = document.getElementById("txtAge");
let inputGender = document.getElementById("txtGender");
let inputBreed = document.getElementById("txtBreed");

function register(){
    console.log(inputName.value,inputAge.value,inputGender.value,inputBreed.value);
    //create an obj
    let newPet = new Pet(inputName.value,inputAge.value,inputGender.value,inputBreed.value);
    pets.push(newPet)//push the newpet to the array
    //display on the console the new pet  
    console.log(newPet);
    displayCards();
}

function init(){
    console.log("Init fn");
    let scooby = new Pet("Scooby",60,"Male","Dane");
    let scrappy= new Pet("Scrappy",50,"Male","Boxer");
    pets.push(scooby,scrappy);
    displayCards();
}
window.onload=init;//it waits to render the HMTL