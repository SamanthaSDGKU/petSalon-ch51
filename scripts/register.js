let pets=[];//empty array
//create the constructor
//<------ paramenters (local) --->
function Pet(name,age,gender,breed,service){
    //property=paramenter
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.breed=breed;
    this.service=service;
}
//get the inputs
let inputName = document.getElementById("txtName");
let inputAge = document.getElementById("txtAge");
let inputBreed = document.getElementById("txtBreed");
let inputService=document.getElementById("txtService");

function isValid(pet){
    let validation =true;
    //check if name is empty?
    if(pet.name==""){
        validation=false;
    }
    return validation;
}

function register(){
    let inputGender = document.querySelector('input[name="gender"]:checked');
    console.log(inputGender.value);

    console.log(inputName.value,inputAge.value,inputGender.value,inputBreed.value);
    //create an obj
    let newPet = new Pet(inputName.value,inputAge.value,inputGender.value,inputBreed.value,inputService.value);

    if(isValid(newPet)==true){
        pets.push(newPet)//push the newpet to the array
        //display on the console the new pet  
        console.log(newPet);
        // displayCards();
        displayRows();
    }else{
        alert("Fill the information");
    }
}

function deletePet(petID){
    console.log("Deleting the pet");
    document.getElementById(petID).remove();//deletes from the HTML
    pets.splice(petID,1);//removes the pet from the array
    displayRows();
}

function search(){
    //by name
    displayRows();
    //display on the console the text that user enters on the input
    let ss=document.getElementById("txtSearch").value;
    let foundPet=null;
    let id;

    for(let i=0;i<pets.length;i++){
        if(pets[i].name.toLowerCase() == ss.toLowerCase()){
            foundPet=pets[i];
            id=i;
            break;
        }
    }
    if(foundPet){
        document.getElementById(id).classList.add("highlight");
    }else{
        displayRows();
    }
}
function getServices(){
    //get the list of services from the LS
    let services = read();
    let option;
    //travel the array (for)
    for(let i=0;i<services.length;i++){
        let service = services[i];
        //HTML for <option>
        option+=`<option value="${service.description}">${service.description} </option>`;
    }
    $("#txtService").append(option);
}
function init(){
    console.log("Init fn");
    let scooby = new Pet("Scooby",60,"Male","Dane","grooming");
    let scrappy= new Pet("Scrappy",50,"Male","Boxer","vaccines");
    pets.push(scooby,scrappy);
    // displayCards();
    displayRows();
    getServices();
}
window.onload=init;//it waits to render the HMTL