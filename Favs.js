document.addEventListener("DOMContentLoaded",()=>{
    let AddFavsDiv = document.querySelector(".FilmsDiv");

    //აქ შევქმენი ფავორიტი ქარდები (ანუ მაგის ფუნქციაა რომ თუ კლასი ქლიქდ არის რომ ქარდის
    //სტრუქტურა შექმნას და გამოაჩინოს ფავორიტის ფეიჯზე)
    function addFavs(){
        AddFavsDiv.innerHTML = "";
        let savedFavs = JSON.parse(localStorage.getItem("FavsAdded"))||[];

        if(savedFavs.length === 0){
            AddFavsDiv.innerHTML = "<p style='color: white; padding: 20px; font-size: 25px; text-align: center;'>There are no Favourite Films added</p>";
            AddFavsDiv.style.display = "flex";
            AddFavsDiv.style.alignItems = "center";
            AddFavsDiv.style.justifyContent = "center";

            return
        }
        
            AddFavsDiv.style.display = "";
            AddFavsDiv.style.alignItems = "";
            AddFavsDiv.style.justifyContent = "";

            savedFavs.forEach((Fav,index) => {

                let Card = document.createElement("div");
                Card.classList.add("Card");

                let imgs = Fav.imagine.startsWith("./") 
                        ? "../" + Fav.imagine.replace("./", "") 
                        : Fav.imagine;

                Card.innerHTML = `

                <img src="${imgs}" alt="">
                    
                        <div class="titles">
                            <h2>${Fav.name}</h2>
                            <p>${Fav.year}</p>
                        </div>
                <button class="cardRemove" data-index=${index}><i class="fa-solid fa-xmark"></i></button>
                ` 

                AddFavsDiv.appendChild(Card);     
                
            })
    }


    //ქარდს აქვს ფავორიტ ფეიჯზე რემუვ ღილაკი და მაგის ფუნქციაა რომ დააჭერ რომ წაიშალოს
      AddFavsDiv.addEventListener("click",(e) => {
                    let cardRemove = e.target.closest(".cardRemove");
                    if(!cardRemove)return;

                    let i = cardRemove.dataset.index;
                    let smth = JSON.parse(localStorage.getItem("FavsAdded"))||[];
                    smth.splice(i,1);
                    localStorage.setItem("FavsAdded", JSON.stringify(smth));
                    addFavs()
    })
                        
        
        addFavs()
})



