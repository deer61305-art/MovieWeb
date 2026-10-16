let FilmsDiv = document.querySelector(".FilmsDiv");
let MainVideoDiv = document.querySelector(".MainVideoDiv");
let Film = document.getElementById("Film");
let closeBtn = document.querySelector(".closeBtn");

//აქ 20 ფილმის შესახებაა ერეი და მათი ინფორმაციებია
let Movies = [
    {id:1, name: "Minecraft", imagine: "./IMAGINES/Minecraft.jpg", year: 2025, time:"1h 41m", Genre: "adventure", rate: 5.6, Type: "Movie", Video:"/FilmsName/Minecraft.mpg"},
    {id:2, name: "Gladiator 2", imagine: "./IMAGINES/Gladiator.jpg", year: 2024, time:"2h 28min", Genre:"Action", rate: 6.5, Type: "Movie", Video:"/FilmsName/Gladiator.mpg"},
    {id:3, name: "The Godfather", imagine: "./IMAGINES/TheGodfather.jpg", year: 1972, time:"2h 55min", Genre:"Crime", rate: 9.2, Type: "Movie", Video:"/FilmsName/GodFather.mpg"},
    {id:4, name: "Lilo & Stitch", imagine: "./IMAGINES/liloStitch.jpg", year: 2025, time: "1h 48min", Genre: "Animation", rate: 6.7, Type: "Movie", Video:"/FilmsName/lilo&stitch.mpg"},
    {id:5, name: "Zodiac", imagine: "./IMAGINES/Zodiac.jpg", year: 2007, time:"2h 37min", Genre:"Crime", rate: 7.7, Type: "Movie", Video:"/FilmsName/Zodiac.mpg"},
    {id:6, name: "Pride & prejudice", imagine: "./IMAGINES/PridePre.jpg", year: 2005, time:"2h 8min", Genre:"Romance", rate: 7.8, Type: "Movie", Video:"/FilmsName/PrideNPrej.mpg"},
    {id:7, name: "Zootopia", imagine: "./IMAGINES/Zootopia.jpg", year: 2016, time:"1h 48min", Genre:"Animation", rate: 8.6, Type: "Movie", Video:"/FilmsName/Zootopia.mpg"},
    {id:8, name: "Scream 7", imagine: "./IMAGINES/Scream.jpg", year: 2026, time:"1h 54min", Genre:"Horror", rate: 5.5, Type: "Movie", Video:"/FilmsName/Scream7.mpg"},
    {id:9, name: "The Dog Stars", imagine: "./IMAGINES/TheDogStars.jpg", year: 2026, time:"1h 58min", Genre:"thriller",rate: 6.4, Type: "Movie"},
    {id:10, name: "Prisoners", imagine: "./IMAGINES/Prisoners.jpg", year: 2013, time: "2h 33min", Genre: "Crime", rate: 8.2, Type: "Movie"},
    {id:12, name: "Eis Ventura", imagine: "./IMAGINES/eisVentura.jpg", year: 1994, time:"1h 26min", Genre:"Comedy", rate: 6.9, Type: "Movie"},
    {id:11, name: "Oddysey", imagine: "./IMAGINES/Oddysey.jpg", year: 2026, time: "2h 52min", Genre: "Action", rate:8.2, Type: "Movie"},
    {id:13, name: "Pearl Harbor", imagine: "./IMAGINES/PearlHarbor.jpg", year: 2001, time:"3h 3min", Genre:"Romance", rate: 6.3, Type: "Movie"},
    {id:14, name: "The Notebook", imagine: "./IMAGINES/Notebook.jpg", year: 2004, time:"2h 3min", Genre:"Romance", rate: 7.8, Type: "Movie"},
    {id:15, name: "Michael", imagine: "./IMAGINES/Michael.jpg", year: 2026, time:"2h 7min", Genre:"biography", rate: 7.3, Type: "Movie"},
    {id:16, name: "Heat", imagine: "./IMAGINES/Heat.jpg", year: 1995, time:"2h 50min", Genre:"crime", rate: 8.3, Type: "Movie"},
    {id:17, name: "The Mask", imagine: "./IMAGINES/Mask.jpg", year: 1994, time:"1h 41min", Genre:"comedy", rate: 7.0, Type: "Movie"},
    {id:18, name: "The Northman", imagine: "./IMAGINES/Northman.jpg", year: 2022, time:"2h 17min", Genre:"action", rate: 7.0, Type: "Movie"},
    {id:19, name: "Moana", imagine: "./IMAGINES/Moana.jpg", year: 2016, time:"1h 47min", Genre:"Animation", rate: 7.3, Type: "Movie"},
    {id:20, name: "Get Out", imagine: "./IMAGINES/Getout.png", year: 2017, time:"1h 44min", Genre:"Horror", rate: 7.6, Type: "Movie"},
] 

// ეს 
let StartedMovie = null;


//აქედან ქარდები დავამატეთ და გამოვიტანეთ ფეიჯზე
function AddMovies(){
    FilmsDiv.innerHTML = ""

    let FavsAdded = JSON.parse(localStorage.getItem("FavsAdded")) || [];
    //ქარდების სტრუქტურა
     Movies.forEach((movie,index) =>{
         let Card = document.createElement("div");
         Card.classList.add("Card");

         Card.dataset.index = index;
        
         let aris = FavsAdded.some(m => m.id === movie.id);
         let ClickedFav = aris ? "Click Clicked" : "Click"

         Card.innerHTML = `
           <img src="${movie.imagine}" alt="">

           

             <button class="${ClickedFav}"><i class="fa-solid fa-heart"></i></button>
             <div class="SomeBtns">
                <button class="play"><i class="fa-solid fa-play"></i></button>
                <button class="plus"><i class="fa-solid fa-plus"></i></button>
             </div>
              
             <div class="CardUpperTitles">
                <h4 class="TH4">${movie.Genre} • ${movie.time}</h4>
                <h4 class="starH">⭐  ${movie.rate}</h4>
             </div>
             
             
                <div class="titles">
                    <h2>${movie.name}</h2>
                    <p>${movie.year}</p>
                </div>
         `

         FilmsDiv.appendChild(Card)

    })
}
AddMovies()


FilmsDiv.addEventListener("click",(e)=>{
    
    let card = e.target.closest('.Card');
    if(!card) return;

    let i = card.dataset.index;
    let selected = Movies[i];

  //ეს ფლას ბათნის ფუნქციაა რომ თუ მას დააჭერ კონკრეტული ქარდი ინდექსის მიხედვით
  //რომ დაემატოს შესაბამის ანუ ვატჩლისტის ფეიჯზე
    let plusBtn = e.target.closest(".plus");
    if(plusBtn){
        let watchList = JSON.parse(localStorage.getItem("WatchlistMS")) || [];
        let aris = watchList.some(m => m.id === selected.id);

        if(!aris){
            watchList.push(selected)
            localStorage.setItem("WatchlistMS", JSON.stringify(watchList));
            alert(`${selected.name} added to your watchlist`)
        }else{
            alert(`${selected.name} is already in your watchlist`)
        } 
        return

    }

    //ეს ფლეი ბათნია და რომ დააჯერ 8იდან რომელიმე ფილმს ჩართავს
    let playBtn = e.target.closest(".play");
    if(playBtn){

        if(selected.Video){
            MainVideoDiv.classList.add("active");
            StartedMovie = selected.id;
            Film.src = selected.Video;

            localStorage.setItem("moviesSave", selected.id)

            let something = localStorage.getItem(`movie_time_${selected.id}`);
            Film.currentTime = something ? parseFloat(something) : 0;

            Film.play()
        }else{
            alert(`Sorry, ${selected.name} is not avaible for now!`)
        }
    }

    //ეს ფავორიტების ღილაკია
    let Click = e.target.closest(".Click");

    if(Click){
        Click.classList.toggle("Clicked");


        let Card = Click.closest(".Card");
        let i = card.dataset.index;
        let selected = Movies[i];

         let FavsAdded = JSON.parse(localStorage.getItem("FavsAdded")) || [];
         let aris = FavsAdded.some(m => m.id === selected.id);
        

        if(Click.classList.contains("Clicked")){  
            if(!aris){
                FavsAdded.push(selected)
                localStorage.setItem("FavsAdded", JSON.stringify(FavsAdded))
            }
        }else{
                FavsAdded = FavsAdded.filter(m => m.id !== selected.id);
                localStorage.setItem("FavsAdded", JSON.stringify(FavsAdded))
            }
            
        }
})

// ეს ქლოუს ღილაკია,რომელიც ფილმს რთავს და გაბრუნებს უკან მუვის ფეიჯზე 
closeBtn.addEventListener("click",()=>{
    if(StartedMovie !== null){
        localStorage.setItem(`movie_time_${StartedMovie}`, Film.currentTime)
    }
    MainVideoDiv.classList.remove("active");
    Film.pause()
    StartedMovie = null
})

//ვსიოო ესენია მარტო ,იმედია გაიგებ *-*



