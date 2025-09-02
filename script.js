let main = document.querySelector("#main");
let header = document.querySelector("#header");
let modebtn = document.querySelector("#mode");
let Currmode = "light";
modebtn.addEventListener("click",() =>{
   if (Currmode === "light"){
    Currmode = "dark" ;
    document.querySelector("page1").style.backgroundColor = "black";
   }else {
    Currmode = "light";
    document.querySelector("page1").style.backgroundColor = "white";
   }
   console.log(Currmode);
})
