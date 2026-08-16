const APP_ID = "87f2b43689d34ddabbab04852b7e3319";

const amount = document.getElementById("amount");
const fromCurrency = document.getElementById("from-currency");
const toCurrency = document.getElementById("to-currency");

const convertBtn = document.getElementById("convert-btn");
const swapBtn = document.getElementById("swap-btn");
const copyBtn = document.getElementById("copy-btn");
const favBtn = document.getElementById("fav-btn");
const clearHistoryBtn = document.getElementById("clear-history-btn");

const resultDisplay = document.getElementById("result-display");
const rateDisplay = document.getElementById("rate-display");
const statusMessage = document.getElementById("status-message");

const historyList = document.getElementById("history-list");
const favoritesList = document.getElementById("favorites-list");

let exchangeRates = {};
let currencies = {};

async function loadCurrencies() {
  
  try {
    
    const currencyResponse = await fetch(
      "https://openexchangerates.org/api/currencies.json"
    );
    
    currencies = await currencyResponse.json();
    
    const rateResponse = await fetch(
      `https://openexchangerates.org/api/latest.json?app_id=${APP_ID}`
    );
    
    const rateData = await rateResponse.json();
    
    exchangeRates = rateData.rates;
    
    populateDropdowns();
    
    renderHistory();
    renderFavorites();
    
  } catch (error) {
    
    showStatus("Unable to load exchange rates.", "error");
    
  }
  
}

function populateDropdowns() {
  
  const codes = Object.keys(currencies).sort();
  
  codes.forEach(code => {
    
    const option1 = document.createElement("option");
    option1.value = code;
    option1.textContent = `${code} - ${currencies[code]}`;
    
    const option2 = option1.cloneNode(true);
    
    fromCurrency.appendChild(option1);
    toCurrency.appendChild(option2);
    
  });
  
  fromCurrency.value = "USD";
  toCurrency.value = "NGN";
  
}

function convertCurrency() {
  
  const amt = parseFloat(amount.value);
  
  if (isNaN(amt) || amt <= 0) {
    
    showStatus("Enter a valid amount.", "error");
    return;
    
  }
  
  const from = fromCurrency.value;
  const to = toCurrency.value;
  
  const usd = amt / exchangeRates[from];
  
  const converted = usd * exchangeRates[to];
  
  resultDisplay.textContent = `${converted.toFixed(2)} ${to}`;
  
  const rate = exchangeRates[to] / exchangeRates[from];
  
  rateDisplay.textContent =
    `1 ${from} = ${rate.toFixed(6)} ${to}`;
  
  addHistory(
    `${amt} ${from} → ${converted.toFixed(2)} ${to}`
  );
  
}

function showStatus(message, type) {
  
  statusMessage.textContent = message;
  statusMessage.className = `status-msg ${type}`;
  
  setTimeout(() => {
    
    statusMessage.className = "status-msg hidden";
    
  }, 3000);
  
}

function addHistory(item) {
  
  let history =
    JSON.parse(localStorage.getItem("history")) || [];
  
  history.unshift(item);
  
  history = history.slice(0, 10);
  
  localStorage.setItem(
    "history",
    JSON.stringify(history)
  );
  
  renderHistory();
  
}

function renderHistory() {
  
  const history =
    JSON.parse(localStorage.getItem("history")) || [];
  
  historyList.innerHTML = "";
  
  if (history.length === 0) {
    
    historyList.innerHTML =
      "<li class='empty-msg'>No history yet.</li>";
    
    return;
    
  }
  
  history.forEach(item => {
    
    const li = document.createElement("li");
    
    li.textContent = item;
    
    historyList.appendChild(li);
    
  });
  
}

function saveFavorite() {
  
  const pair =
    `${fromCurrency.value} → ${toCurrency.value}`;
  
  let favorites =
    JSON.parse(localStorage.getItem("favorites")) || [];
  
  if (!favorites.includes(pair)) {
    
    favorites.push(pair);
    
    localStorage.setItem(
      "favorites",
      JSON.stringify(favorites)
    );
    
    renderFavorites();
    
    showStatus("Favourite pair saved.", "info");
    
  } else {
    
    showStatus("Already saved.", "info");
    
  }
  
}

function renderFavorites() {
  
  const favorites =
    JSON.parse(localStorage.getItem("favorites")) || [];
  
  favoritesList.innerHTML = "";
  
  if (favorites.length === 0) {
    
    favoritesList.innerHTML =
      "<li class='empty-msg'>No favorite pairs saved yet.</li>";
    
    return;
    
  }
  
  favorites.forEach(pair => {
    
    const li = document.createElement("li");
    
    li.innerHTML = `
            <button class="fav-item-btn">${pair}</button>
            <button class="delete-btn">✕</button>
        `;
    
    li.querySelector(".fav-item-btn")
      .addEventListener("click", () => {
        
        const [from, to] = pair.split(" → ");
        
        fromCurrency.value = from;
        toCurrency.value = to;
        
        convertCurrency();
        
      });
    
    li.querySelector(".delete-btn")
      .addEventListener("click", () => {
        
        removeFavorite(pair);
        
      });
    
    favoritesList.appendChild(li);
    
  });
  
}

function removeFavorite(pair) {
  
  let favorites =
    JSON.parse(localStorage.getItem("favorites")) || [];
  
  favorites = favorites.filter(item => item !== pair);
  
  localStorage.setItem(
    "favorites",
    JSON.stringify(favorites)
  );
  
  renderFavorites();
  
}

copyBtn.addEventListener("click", () => {
  
  navigator.clipboard.writeText(resultDisplay.textContent);
  
  showStatus("Result copied.", "info");
  
});

favBtn.addEventListener("click", saveFavorite);

clearHistoryBtn.addEventListener("click", () => {
  
  localStorage.removeItem("history");
  
  renderHistory();
  
});

convertBtn.addEventListener("click", convertCurrency);

swapBtn.addEventListener("click", () => {
 
  const temp = fromCurrency.value;
  
  fromCurrency.value = toCurrency.value;
  
  toCurrency.value = temp;
  
  convertCurrency();
  
});

loadCurrencies();