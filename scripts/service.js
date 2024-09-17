//constructor
function Service(description,price){
    this.description=description;
    this.price=price;
}
function isValid(){
    
}
//Remember to add the jquery on the html
function register(){
    let inputDescription=$("#txtDescription").val();
    let inputPrice = $("#txtPrice").val();
    //create the new object
    let newService = new Service(inputDescription,inputPrice);
    save(newService);//this fn is under storeManager
    $("input").val(""); //clear the input
}

function init(){

}

window.onload=init;