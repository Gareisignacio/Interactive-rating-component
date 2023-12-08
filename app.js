const ratingBtn = document.querySelectorAll(".rating-btn");
const ratingDiv = document.querySelectorAll(".rating")

const submitBtn = document.querySelector("#submit");

const output = document.querySelector(".output")

const cardBack = document.querySelector(".flip-card-back")


ratingBtn.forEach(btn =>{

   btn.addEventListener("click", (e)=>{      
      let value = btn.value;

      let btnList = btn.parentNode.children;

      btn.classList.toggle("selected");

      for(let i = 0; i < btnList.length; i++){
         btnList[i].classList.remove("selected")
      }

      btn.classList.toggle("selected");
      output.textContent = `You selected ${value} out of 5`
   })
})

submitBtn.addEventListener("click", ()=>{
   if(output.textContent !== ""){
      cardBack.style = "visibility: visible";
   } else {
      alert("Select a rate please")

   } 
})



