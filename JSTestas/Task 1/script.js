/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
const submitBtn = document.getElementById("submit-btn")
const search = document.getElementById("search")
const output = document.getElementById("output")


output.style.textAlign = "center"
output.style.fontSize = "2rem"


submitBtn.addEventListener('click', function(e){
    e.preventDefault()
})

submitBtn.addEventListener('click', function(){
  if ( isNaN(search.value) === false){
      lbSearch = search.value * 2.2046 + " lb "
      gSearch = search.value / 0.0010000 + " g "
      ozSearch = search.value * 35.274 + " oz"
      output.textContent = lbSearch + gSearch + ozSearch
  }
})


