

const fromCurrencySelect = document.getElementById('fromCurrency');
const toCurrencySelect = document.getElementById('toCurrency');
const amountInput = document.getElementById('amount');
const convertButton = document.getElementById('convert');
const resultSpan = document.getElementById('result');


getCurrencies().then(currencies => {
    for (const currency in currencies) {
        const option1 = new Option(currency, currency);
        const option2 = new Option(currency, currency);
        fromCurrencySelect.add(option1);
        toCurrencySelect.add(option2);
    }
});

convertButton.addEventListener('click', () => {
    const fromCurrency = fromCurrencySelect.value;
    const toCurrency = toCurrencySelect.value;
    const amount = parseFloat(amountInput.value);

    console.log('From Currency:', fromCurrency);
    console.log('To Currency:', toCurrency);
    console.log('Amount:', amount);

    getExchangeRate(fromCurrency, toCurrency).then(rate => {
        if (rate) {
            const convertedAmount = amount * rate;
            resultSpan.textContent = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
        } else {
            resultSpan.textContent = 'Error: Invalid currency or network issue';
        }
    });
});

async function getCurrencies() {
    const apiKey = '01d84e4278f593784b2e4a199bf04c4c';
    const response = await fetch(`http://data.fixer.io/api/latest?access_key=${apiKey}`);
    const data = await response.json();
    return data.rates;
}

async function getExchangeRate(fromCurrency, toCurrency) {
    const apiKey = '01d84e4278f593784b2e4a199bf04c4c';
    const response = await fetch(`http://data.fixer.io/api/latest?access_key=${apiKey}`);
    const data = await response.json();
    return data.rates[toCurrency] / data.rates[fromCurrency];
}