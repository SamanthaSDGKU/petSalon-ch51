function save(service){
    console.log(service);//this is an obj
    let val = JSON.stringify(service);
    console.log(val);
    localStorage.setItem("services",val);//sending to LS
}