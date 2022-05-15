/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = "http://127.0.0.1:3000/cars.json";
const output = document.getElementById("output")

fetch(ENDPOINT)
.then(response => response.json())
    .then(data => {
        dataArray = []
        for (i = 0; i < data.length; i++)
         dataArray.push(` <div class = "output-card">LOGIN: ${data[i].brand}</div> <div class = "output-card">MODEL: ${data[i].models}`)
        output.innerHTML = dataArray
    })