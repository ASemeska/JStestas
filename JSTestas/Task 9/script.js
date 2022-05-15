/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri gebės sukurti objektus 3 savybėm ir 1 metodu.

Savybės:
title: string
director: string
budget: number

Metodas: 
wasExpensive() - jeigu filmo "budget" yra daugiau nei 100 000 000 mln USD, tada grąžins true, kitu atveju false. 
------------------------------------------------------------------------------------------------------ */

let title = new String()
let director = new String()
let budget = new Number()


function movie(){
    let array = new Object ()
    array.title = title
    array.director = director
    array.budget = budget
    console.log(array)
  
}

movie()


function wasExpensive(){
    if (budget > 100000000){
        console.log("Function is true")
        return true
       
        
    }
    else{
        console.log("Function is false")
        return false
    }
}

wasExpensive()