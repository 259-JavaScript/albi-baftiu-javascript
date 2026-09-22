let = "Filan"

function identiteti(emri, mbiemri, mosha) {
    console.log("Une jam" + emri + mbiemri + "dhe jam" + mosha + "vjecare.")
}

identiteti("Filan", "Fisteku", 20)




 function mbledhjaR(a, b){
    let rezultatiR = a + b
    return rezultatiR
 }


 let shuma = mbledhjaR(5, 8)

 console.log(shuma)

 function mbledhja2(a, b, c){
    let rezultati2 = a * b * c
    return rezultati2
 }

 let shuma2 = mbledhja2(8, 2, 3)

 console.log(shuma2)


 function mbledhja(a,b){
    let rezultati = a + b
    return rezultati
 }
 



 //Arrow Function

 const mbledhArrow = (a, b) => {a + b}

 mbledhArrow(3,5)

 const prodhimArrow = (a, b, c) => {a * b * c}

 prodhimArrow(3, 5, 6)