/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizdavima <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */
const ENDPOINT = 'https://api.github.com/users';
const btn = document.getElementById("btn")
const output = document.getElementById("output")

output.style.color = "white"


btn.addEventListener("click", function(){
    output.style.color = "black"
    btn.style.display = "none"
    output.style.backgroundColor = "orange"
    output.style.fontWeight = "600"
    output.style.margin = "2em"
})

fetch(ENDPOINT)
.then(response => response.json())
    .then(data => {
        dataArray = []
        for (i = 0; i < data.length; i++)
         dataArray.push(` LOGIN: ${data[i].login} AVATAR: ${data[i].avatar_url}`)
        output.textContent = dataArray
    })
