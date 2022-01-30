console.log(0.1+0.2)
var formatterMtn = new Intl.NumberFormat('en-US', {
    maximumSignificantDigits: 2
  });

  console.log(formatterMtn.format(0.1+0.256))

  //ou 

  function formatarValorDecimal(valorDecimal) {
    valorEmReais = `Mt$ ${valorDecimal.toFixed(2).toString().replace(".", ",")}`
    console.log(valorEmReais)
}

formatarValorDecimal(0.1 + 0.2)