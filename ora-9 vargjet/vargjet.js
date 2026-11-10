let fruits = ["Apple", "Orange", "Kiwi", "Peach"]

console.log(fruits[0])

console.log(fruits[3])

console.log(fruits)

console.log(fruits[5])

fruits[1] = "Cherry"
console.log(fruits)

console.log("Array fruits permbane ne total", fruits.length, "elements")

let years = [1990, 1967, 2000, 2010, 2011, 2012, 2013]

function calcAge(birthYear){
    return 2026 - birthYear
}

let age1 = calcAge(years[5])
let age2 = calcAge(years[2])

console.log(age1)
console.log(age2)

let cmimet = [1200, 450, 980]

let tarifaETransportit = 150

function  cmimiPerfundimtar(cmimi){
    return cmimi + tarifaETransportit
}

totali1 = cmimiPerfundimtar(cmimet[0])
totali2 = cmimiPerfundimtar(cmimet[1])
totali3 = cmimiPerfundimtar(cmimet[2])

console.log(totali1)
console.log(totali2)
console.log(totali3)

fruits.push("Pear")