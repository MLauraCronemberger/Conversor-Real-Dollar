let dolar = 5.81;

let usdInput = document.querySelector("#usd");
let brlInput = document.querySelector("#brl");

usdInput.addEventListener("keyup", () => {});

brlInput.addEventListener("keyup", () => {});

//Vou setar o valor do dollar como MIL, e dps a pessoa altera para oq ela quiser
usdInput.value = "1000,00";
convert("usd-to-brl");

//Funções

function formatCurrency(value) {
  //ajustar o valor
  //utilizar funcao de formatar
  //retorna o valor formatado
}

function fixValue(value) {
  let fixedValue = value.replace(",", ".");
  let floatValue = parseFloat(fixedValue);

  if (floatValue == NaN0) {
    floatValue = 0;
  }

  return floatValue;
}
function convert(type) {
  if (type == "usd-to-brl") {
  }

  if (type == "brl-to-usd") {
  }
}
