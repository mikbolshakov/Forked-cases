export function getDropdown(currencies) {
  console.log(currencies);
  let sum = `<option value="">Выберите 
  валюту</option>`;
  currencies.forEach(function (currency) {
    sum += `<option value="">${currency}</option>`;
  });
  return sum;
}
