function numerosRomanos(numero,Romano_1,Romano_5,Romano_10){
  let numeroRomano = "";
  if (numero === 1) numeroRomano = Romano_1;
  else if (numero === 2) numeroRomano = Romano_1 + Romano_1;
  else if (numero === 3) numeroRomano = Romano_1 + Romano_1 + Romano_1;
  else if (numero === 4) numeroRomano = Romano_1 + Romano_5;
  else if (numero === 5) numeroRomano = Romano_5;
  else if (numero === 6) numeroRomano = Romano_5 + Romano_1;
  else if (numero === 7) numeroRomano = Romano_5 + Romano_1 + Romano_1;
  else if (numero === 8) numeroRomano = Romano_5 + Romano_1 + Romano_1 + Romano_1;
  else if (numero === 9) numeroRomano = Romano_1 + Romano_10;
  return numeroRomano;
}


function NumerosDel1Al9(numero) {
  let numeroRomano = "";
  numeroRomano=numerosRomanos(numero,"I","V","X");
  return numeroRomano;
}

function NumerosDel10Al90(numero) {
  let numeroRomano = "";
  numeroRomano=numerosRomanos(numero,"X","L","C");
  return numeroRomano;
}

function NumerosDel100Al900(numero) {
    let numeroRomano = "";
    if (numero >= 100 && numero < 200) numeroRomano = "C";
    else if (numero >= 200 && numero < 300) numeroRomano = "CC";
    else if (numero >= 300 && numero < 400) numeroRomano = "CCC";
    else if (numero >= 400 && numero < 500) numeroRomano = "CD";
    else if (numero >= 500 && numero < 600) numeroRomano = "D";
    else if (numero >= 600 && numero < 700) numeroRomano = "DC";
    else if (numero >= 700 && numero < 800) numeroRomano = "DCC";
    else if (numero >= 800 && numero < 900) numeroRomano = "DCCC";
    else if (numero >= 900) numeroRomano = "CM";
    return numeroRomano;
}


function ConvertirARomanos(numero) {
  let numeroRomano = "";
  if (numero >= 1 && numero <= 9) {
    numeroRomano = NumerosDel1Al9(numero);
  } else if (numero >= 10 && numero <= 90) {
    numeroRomano = NumerosDel10Al90(Math.floor(numero/10)) + NumerosDel1Al9(numero % 10);
  }
  else if (numero >= 100 && numero <= 900) {
    numeroRomano = NumerosDel100Al900(numero) + NumerosDel10Al90(numero % 100) + NumerosDel1Al9(numero % 10);
  }
  else if (numero >= 1000) {
    numeroRomano = "M";
  }
  return numeroRomano;
}

export default ConvertirARomanos;
