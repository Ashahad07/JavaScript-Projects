let api = `https://v6.exchangerate-api.com/v6/${apikey}/latest/USD`


const fromDropdown = document.getElementById("form-currency-select");
const todropdown = document.getElementById("to-currency-select")

//! Creating drop-down from the currencies array

currencies.forEach((currency) => {
    const option = document.createElement("option");
    option.value = currency;
    option.text = currency;
    fromDropdown.add(option)
});

//! Same for the to drop-down

currencies.forEach((currency) => {
    const option = document.createElement("option");
    option.value = currency;
    option.text = currency;
    todropdown.add(option)
})

//TODO Defult values
fromDropdown.value = "USD";
todropdown.value = "INR";

let convertCurrency = async () => {
    const amount = document.querySelector("#amount").value;
    const fromCurrency = fromDropdown.value;
    const toCurrency = todropdown.value

    if (amount.length != 0) {
        //! alert("ok")

        const resp = await fetch(api);
        const data = await resp.json();

        // console.log(data)
        let formExchangeRate = data.conversion_rates[fromCurrency];
        let toExchangeRate = data.conversion_rates[toCurrency]
        const convertedAmount = (amount / formExchangeRate) * toExchangeRate

        result.innerHTML = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`

        // ! Following is from promises
        // fetch(api)
        //     .then(resp => resp.json())
        //     .then(data => {
        //         // console.log(data)
        //         let formExchangeRate = data.conversion_rates[fromCurrency];
        //         let toExchangeRate = data.conversion_rates[toCurrency]
        //         const convertedAmount = (amount / formExchangeRate) * toExchangeRate

        //         result.innerHTML = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`
        //     })

    } else {
        alert("please enter the amount to know currency")
    }
};

document.querySelector("#convert-btn").addEventListener("click", convertCurrency)
window.addEventListener("load", convertCurrency)