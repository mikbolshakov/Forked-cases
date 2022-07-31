export const getDropdown = (currencies) => {
  console.log(currencies);
  return (
    `<option value="">Выберите валюту</option>` +
    currencies
      .map((currency) => `<option value="">${currency}</option>`)
      .join("")
  );
};
