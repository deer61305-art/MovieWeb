document.addEventListener("DOMContentLoaded", ()=>{
    let wachlist = document.querySelector(".FilmsDiv");


    //აქაც როგორც ფავორიტებში გადმოვიდა ლოქალსთორეიჯით მუვიეოლდერიდან 
    //ინფორმაცია და კონკრეტული ქარდები დააბ=მატა ამ ფეიჯზე
    function addtoList(){
        wachlist.innerHTML = "";

        let savedMovies = JSON.parse(localStorage.getItem("WatchlistMS")) || [];


        //აქ დამატებული თუ არაა ფილმები უბრალოდ გამოვა ტექსტი რო ჩამატებული არ არის 
        if(savedMovies.length === 0){
            wachlist.innerHTML = "<p style='color: white; padding: 20px; font-size: 25px; text-align: center;'>There are no films added</p>";
            wachlist.style.display = "flex";
            wachlist.style.alignItems = "center";
            wachlist.style.justifyContent = "center";

            return
        }

            wachlist.style.display = "";
            wachlist.style.alignItems = "";
            wachlist.style.justifyContent = "";

    //ლოქალსთორეიჯს გადაუვლის და შექმნის ქარდებს რომელზეც დავაკლიკეთ ჰეჰ
    savedMovies.forEach((movie,index)=>{
        let Card = document.createElement("div");
        Card.classList.add("Card");

        // აქ კიდე იდკ როგორ ავხსნა ანუ ./-ით თუ იწყება ეგ უნდა მოუშალოს და ისე აქცევს
        // რომ ჩაემატოს ამ ქარდში ,რადგან ეს ფოტო გადმოტანილია ლოქალსთორეიჯიდან და
        //ეს ლოქალსთორეიშ შეიცავს მუვიე ფოლდერში რომ ჯს-ია იმის ინფორმაცია და როგორც იქ წერია
        //ისე ვერ ცაწერ აქ სტრუტურულად,იმიტო რომ ეს ფოლდერი იმ მუვიე-ს ფოლდერშია ^^
        //(იმედია გაიგებთ რაც ვიგულისხმე)
        let imgs = movie.imagine.startsWith("./") 
                ? "../" + movie.imagine.replace("./", "") 
                : movie.imagine;

        Card.innerHTML = `

         <img src="${imgs}" alt="">
             
                <div class="titles">
                    <h2>${movie.name}</h2>
                    <p>${movie.year}</p>
                </div>
        <button class="cardRemove"><i class="fa-solid fa-xmark"></i></button>
        `

        let cardRemove = Card.querySelector(".cardRemove");



        //წაშლის ფუნქცია
        cardRemove.addEventListener("click",()=>{
            let smth = JSON.parse(localStorage.getItem("WatchlistMS"))||[];
            smth.splice(index,1);
            localStorage.setItem("WatchlistMS", JSON.stringify(smth));
            addtoList()
        })

        wachlist.appendChild(Card)
    })
    }
    addtoList()
})

addtoList()