// Cards Div
let MoviesDiv = document.querySelector(".MoviesDiv");

//Continue Cards Div
let ContinueMoviesDiv = document.querySelector(".ContinueMoviesDiv");


//ფილმების ერრეი
let Movies = [
    {id:1, name: "Minecraft", imagine: "./IMAGINES/Minecraft.jpg", year: 2025, time:"1h 41m", Genre: "adventure", rate: 5.6, Type: "Movie"},
    {id:2, name: "Oddysey", imagine: "./IMAGINES/Oddysey.jpg", year: 2026, time: "2h 52min", Genre: "Action", rate:8.2, Type: "Movie"},
    {id:3, name: "Prisoners", imagine: "./IMAGINES/Prisoners.jpg", year: 2013, time: "2h 33min", Genre: "Crime", rate: 8.2, Type: "Movie"},
    {id:4, name: "The Dog Stars", imagine: "./IMAGINES/TheDogStars.jpg", year: 2026, time:"1h 58min", Genre:"thriller",rate: 6.4, Type: "Movie"},
    {id:5, name: "Zodiac", imagine: "./IMAGINES/Zodiac.jpg", year: 2007, time:"2h 37min", Genre:"Crime", rate: 7.7, Type: "Movie"},
] 


let ContinueMovie = [
  {id:6, name: "Alice In Boarderland", imagine: "./IMAGINES/AliceInB.webp", year: 2020, time: "48min Per ep", Genre: "Sci-Fi", rate: 7.7, Type: "Serial"},
  {id:7, name: "Lilo & Stitch", imagine: "./IMAGINES/Stitch.jpg", year: 2025, time: "1h 48min", Genre: "Animation", rate: 6.7, Type: "Movie"}
]

//ქარდების შექმნა და მათი გამოჩენის ფუნქცია
function AddCards(){
    //ქარდების სტრუქტურა
          Movies.forEach((movie,index) =>{
         let Card = document.createElement("div");
         Card.classList.add("Card");

         Card.dataset.index = index;

         Card.innerHTML = `

           <img src="${movie.imagine}" alt="">
             
                <div class="titles">
                    <h2>${movie.name}</h2>
                    <p>${movie.year}</p>
                </div>
         `

         MoviesDiv.appendChild(Card)

    })
}
AddCards()

let Cards = [...document.querySelectorAll(".Card")];

//ქარდებზე მაუსის მიტანისას ინფორმაციისა და მრგვალი ღილაკების გამოჩენა.
Cards.forEach(Card =>{
      Card.addEventListener("mouseover", () =>{

         let i = Card.dataset.index;

         Card.innerHTML =`
         <img src="${Movies[i].imagine}" alt="">
           
             <div class="SomeBtns">
                <button class="play"><i class="fa-solid fa-play"></i></button>
                <button class="plus"><i class="fa-solid fa-plus"></i></button>
             </div>
             <div class="CardUpperTitles">
                <h4 class="TH4">${Movies[i].Genre} • ${Movies[i].time}</h4>
                <h4 class="starH">⭐  ${Movies[i].rate}</h4>
             </div>
             
                <div class="titles">
                    <h2>${Movies[i].name}</h2>
                    <p>${Movies[i].year}</p>
                </div>
                `

            let CardImg = Card.querySelector("img");
            CardImg.style.opacity = "0.3";

      })
})

//ქარდებზე მაუსის აწევისას ინფორმაციისა და მრგვალი ღილაკების გაქრობა.
Cards.forEach(Card =>{
      Card.addEventListener("mouseleave", () =>{
         let i = Card.dataset.index;

         Card.innerHTML =`
         <img src="${Movies[i].imagine}" alt="">
             
                <div class="titles">
                    <h2>${Movies[i].name}</h2>
                    <p>${Movies[i].year}</p>
                </div>
                `
      })
})

//Continue Cards-ის გამოჩენა
function AddConCards(){

   ContinueMovie.forEach(Card =>{

       let ConCard = document.createElement("div");
       ConCard.classList.add("ConCard")

         ConCard.innerHTML = `
               <img src="${Card.imagine}" alt="">
                     <div class="PositionDiv">
                        <div class="titleInfo">
                           <h3>${Card.name}</h3>
                           <h5>${Card.Type} • ${Card.year}</h5>
                        </div>
                        <progress value="49" max="100"></progress>
                     </div>
                        <div class="playBtn">
                              <i class="fa-solid fa-play"></i>
                        </div>
         `


         ContinueMoviesDiv.appendChild(ConCard)
   })
}
AddConCards()


