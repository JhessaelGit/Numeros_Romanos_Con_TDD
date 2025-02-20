function NumerosDel1Al9(numero) {
  let numeroRomano = "";
  if (numero === 1) numeroRomano = "I";
  else if (numero === 2) numeroRomano = "II";
  else if (numero === 3) numeroRomano = "III";
  else if (numero === 4) numeroRomano = "IV";
  else if (numero === 5) numeroRomano = "V";
  else if (numero === 6) numeroRomano = "VI";
  else if (numero === 7) numeroRomano = "VII";
  else if (numero === 8) numeroRomano = "VIII";
  else if (numero === 9) numeroRomano = "IX";
  return numeroRomano;
}

function NumerosDel10Al90(numero) {
  let numeroRomano = "";
  if (numero >= 10 && numero < 20) numeroRomano = "X";
  else if (numero >= 20 && numero < 30) numeroRomano = "XX";
  else if (numero >= 30 && numero < 40) numeroRomano = "XXX";
  else if (numero >= 40 && numero < 50) numeroRomano = "XL";
  else if (numero >= 50 && numero < 60) numeroRomano = "L";
  else if (numero >= 60 && numero < 70) numeroRomano = "LX";
  else if (numero >= 70 && numero < 80) numeroRomano = "LXX";
  else if (numero >= 80 && numero < 90) numeroRomano = "LXXX";
  else if (numero >= 90) numeroRomano = "XC";
  return numeroRomano;
}

function NumerosDel100Al900(numero) {
    let numeroRomano = "";
    if (numero >= 100 && numero < 200) numeroRomano = "C";
    else if (numero >= 200 && numero < 300) numeroRomano = "CC";
    else if (numero >= 300 && numero < 400) numeroRomano = "CCC";
    return numeroRomano;
}


function ConvertirARomanos(numero) {
  let numeroRomano = "";
  if (numero >= 1 && numero <= 9) {
    numeroRomano = NumerosDel1Al9(numero);
  } else if (numero >= 10 && numero <= 90) {
    numeroRomano = NumerosDel10Al90(numero) + NumerosDel1Al9(numero % 10);
  }
  else if (numero >= 100 && numero <= 900) {
    numeroRomano = NumerosDel100Al900(numero) + NumerosDel10Al90(numero % 100) + NumerosDel1Al9(numero % 10);
  }


  return numeroRomano;
}

export default ConvertirARomanos;
