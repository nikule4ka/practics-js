import './styles.css';

function checkForSpam(message) {
  let result;
  // Пиши код ниже этой строки
  const saleSpam = 'spam' + 'sale';
  result = message.includes(saleSpam.toLowerCase().toUpperCase());
  // Пиши код выше этой строки
  return result;
}

console.log(checkForSpam('Amazing SalE, only tonight!'));
