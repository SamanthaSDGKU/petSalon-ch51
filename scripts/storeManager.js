function save(service){
    let servicesList=read();//getting list or []
    servicesList.push(service);
    let val = JSON.stringify(servicesList);
    console.log(val);
    localStorage.setItem("services",val);//sending to LS
}

function read(){
    let data = localStorage.getItem("services");
    if(!data){//NOT data?
        return []; //empty array
    }else{
        let list= JSON.parse(data);//converts string into array (op stringify)
        return list;
    }
}