let butxheti = 99;

if (butxheti > 100) {
  console.log("Buxheti eshte e pranishme");
} else {
  console.log("Jashte Buxhetit");
}

let nota = 5;

let rezultati = nota >= 5 ? "Kaluar" : "Nuk ka kaluar";
console.log(rezultati);

let dita = "e hene";

switch (dita) {
  case "e hene":
    console.log("Eshte e hene");
    break;

  case "e marte":
    console.log("Eshte e marte");
    break;

  case "e merkure":
    console.log("Eshte e merkure");
    break;
  default:
    console.log("Nuk eshte dite");
}

function shumezimi(a, b) {
  let rezultati60 = a * b;
  return rezultati60;
}

let answer = shumezimi(8, 9);
console.log(answer);

let nota1 = 3;

function kontrolloRezultatin(nota1) {
  if (nota1 >= 5) {
    return "Kaluar";
  } else {
    return "Nuk keni kaluar";
  }
}

console.log(kontrolloRezultatin(nota1));

function kontrolloSemaforin(ngjyre) {
  switch (ngjyre) {
    case "e kuqe":
      return "Ndalo";

    case "e verdhe":
      return "pergatitu";

    case "e gjelber":
      return "shko";

    default:
      return "nuke eshte ngjyre";
  }
}

console.log(kontrolloSemaforin("e kuqe"));
