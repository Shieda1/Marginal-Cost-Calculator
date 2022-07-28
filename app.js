// https://calculator.swiftutors.com/marginal-cost-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const marginalCostRadio = document.getElementById('marginalCostRadio');
const totalCostRadio = document.getElementById('totalCostRadio');
const totalOutputRadio = document.getElementById('totalOutputRadio');

let marginalCost;
let totalCost = v1;
let totalOutput = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

marginalCostRadio.addEventListener('click', function() {
  variable1.textContent = 'Total Cost';
  variable2.textContent = 'Total Output';
  totalCost = v1;
  totalOutput = v2;
  result.textContent = '';
});

totalCostRadio.addEventListener('click', function() {
  variable1.textContent = 'Marginal Cost';
  variable2.textContent = 'Total Output';
  marginalCost = v1;
  totalOutput = v2;
  result.textContent = '';
});

totalOutputRadio.addEventListener('click', function() {
  variable1.textContent = 'Marginal Cost';
  variable2.textContent = 'Total Cost';
  marginalCost = v1;
  totalCost = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(marginalCostRadio.checked)
    result.textContent = `Marginal Cost = ${computeMarginalCost().toFixed(2)}`;

  else if(totalCostRadio.checked)
    result.textContent = `Total Cost = ${computeTotalCost().toFixed(2)}`;

  else if(totalOutputRadio.checked)
    result.textContent = `Total Output = ${computeTotalOutput().toFixed(2)}`;
})

// calculation

function computeMarginalCost() {
  return Number(totalCost.value) / Number(totalOutput.value);
}

function computeTotalCost() {
  return Number(marginalCost.value) * Number(totalOutput.value);
}

function computeTotalOutput() {
  return Number(totalCost.value) / Number(marginalCost.value);
}