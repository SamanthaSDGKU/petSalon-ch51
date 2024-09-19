//constructor
function Service(description,price){
    this.description=description;
    this.price=price;
}
function isValidService(service){
    let validDescription=true;
    let validPrice=true;
    
    if(service.description==""){
        validDescription=false;
        $(".descriptionValiationMsg").css("color","red").show();
    }else{
        $(".descriptionValiationMsg").hide();
    }

    if(service.price==""){
        validPrice=false;
        $(".priceValidationMsg").css("color","red").show();
    }else{
        $(".priceValidationMsg").hide();
    }
    return validDescription;
}
//Remember to add the jquery on the html
function register(){
    let inputDescription=$("#txtDescription").val();
    let inputPrice = $("#txtPrice").val();
    //create the new object
    let newService = new Service(inputDescription,inputPrice);
    if(isValidService(newService)==true){
        save(newService);//this fn is under storeManager
        $("input").val(""); //clear the input
    }
}

function init(){
    $(".descriptionValiationMsg").hide();
    $(".priceValidationMsg").hide();
}

window.onload=init;