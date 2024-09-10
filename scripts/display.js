function displayCards(){
    const CARDS = document.getElementById("petCards");
    CARDS.innerHTML="";
    for(let i=0;i<pets.length;i++){
        let pet = pets[i];
        CARDS.innerHTML+=`
        <div class="pet">
            <p>Name:${pet.name}</p>
            <p>Age:${pet.age}</p>
        </div>
        `
    }
}