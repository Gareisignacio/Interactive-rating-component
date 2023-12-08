const ratingBtn = document.querySelectorAll(".rating-btn");
const ratingDiv = document.querySelectorAll(".rating")

const submitBtn = document.querySelector("#submit");

const output = document.querySelector(".output")

ratingBtn.forEach(btn =>{
   btn.addEventListener("click", (e)=>{
      let value = btn.value;
      btn.classList.toggle("selected")
      console.log(btn.classList.contains("selected"));
      let btnList = btn.parentNode.children;
      console.log(btnList);
      console.log(btnList.classlist.remove("selected"))

      



      output.textContent = `You selected ${value} out of 5`
   })
})

submitBtn.addEventListener("click", ()=>{
   
})

// if(thisBtn.classList.contains("selected")){
//    thisBtn.style.color = "white"
//    thisBtn.style.backgroundColor = "Orange"
// } else{
//    thisBtn.style.color = "#6D757";
//    thisBtn.style.backgroundColor = "rgb(38,47,56)"
// }


