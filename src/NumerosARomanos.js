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
function ConvertirARomanos(numero) {
  let numeroRomano = "";
  if (numero >= 1 && numero <= 9) {
    numeroRomano = NumerosDel1Al9(numero);
  } else if (numero === 10) {
    numeroRomano = "X";
  }

  return numeroRomano;
}

export default ConvertirARomanos;
