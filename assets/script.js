let dolar = 5.81;

let usdInput = document.querySelector("#usd");
let brlInput = document.querySelector("#brl");

//Vou setar o valor do dollar como MIL, e dps a pessoa altera para oq ela quiser
usdInput.value = "1000,00";
convert("usd-to-brl");

//Funções

function fixValue(value) {
  let fixedValue = value.replace(",", ".");
  let floatValue = parseFloat(fixedValue);

  if (floatValue == NaN) {
    floatValue = 0;
  }

  return floatValue;
}
function formatCurrency(value) {
  let fixedValue = fixValue(value); //ajusta o valor
  //utilizar funcao de formatar
  let options = {
    useGrouping: false,
    minimumFractionDigits: 2,
  };

  let formatter = new Intl.NumberFormat("pt-BR", options);
  return formatter.format(fixedValue);

  //retorna o valor formatado
}

function convert(type) {
  if (type == "usd-to-brl") {
    let fixedValue = fixValue(usdInput.value);
    let result = fixedValue * dolar;
    result = result.toFixed(2);

    brlInput.value = formatCurrency(result);
  }

  if (type == "brl-to-usd") {
    let fixedValue = fixValue(brlInput.value);

    let result = fixedValue / dolar;
    result = result.toFixed(2);

    usdInput.value = formatCurrency(result);
  }

  usdInput.addEventListener("blur", () => {
    usdInput.value = formatCurrency(usdInput.value);
  });

  brlInput.addEventListener("blur", () => {
    brlInput.value = formatCurrency(brlInput.value);
  });
}

//Chamando as funcoes

usdInput.addEventListener("keyup", () => {
  convert("usd-to-brl");
});

brlInput.addEventListener("keyup", () => {
  convert("brl-to-usd");
});
