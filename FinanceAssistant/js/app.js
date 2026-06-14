const STORAGE_KEY = "createConnectFinancePortfolio";

const sampleAssets = [
  { id: "sample-1", type: "Acao", name: "PETR4", quantity: 12, price: 32.4, quote: 36.9 },
  { id: "sample-2", type: "ETF", name: "IVVB11", quantity: 4, price: 285.2, quote: 312.8 },
  { id: "sample-3", type: "Crypto", name: "BTC", quantity: 0.025, price: 320000, quote: 348000 },
  { id: "sample-4", type: "Renda fixa", name: "Tesouro IPCA", quantity: 3, price: 980.5, quote: 1026.1 }
];

const form = document.querySelector("#assetForm");
const table = document.querySelector("#assetTable");
const emptyState = document.querySelector("#emptyState");
const totalInvested = document.querySelector("#totalInvested");
const currentValue = document.querySelector("#currentValue");
const portfolioResult = document.querySelector("#portfolioResult");
const chart = document.querySelector("#portfolioChart");
const loadSample = document.querySelector("#loadSample");
const clearPortfolio = document.querySelector("#clearPortfolio");
const context = chart.getContext("2d");

let assets = loadAssets();

function loadAssets() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  } catch {
    return [];
  }
}

function saveAssets() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(assets));
}

function formatMoney(value) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
  }).format(value);
}

function estimateQuote(type, price) {
  const movementByType = {
    Acao: 1.08,
    ETF: 1.06,
    Crypto: 1.14,
    Moeda: 1.03,
    "Renda fixa": 1.04
  };

  return price * (movementByType[type] || 1.05);
}

function renderSummary() {
  const invested = assets.reduce((sum, asset) => sum + asset.quantity * asset.price, 0);
  const current = assets.reduce((sum, asset) => sum + asset.quantity * asset.quote, 0);
  const result = current - invested;

  totalInvested.textContent = formatMoney(invested);
  currentValue.textContent = formatMoney(current);
  portfolioResult.textContent = formatMoney(result);
  portfolioResult.style.color = result >= 0 ? "#8ff0d5" : "#fecaca";
}

function renderTable() {
  table.innerHTML = "";
  emptyState.hidden = assets.length > 0;

  assets.forEach((asset) => {
    const row = document.createElement("tr");
    const current = asset.quantity * asset.quote;
    const nameCell = document.createElement("td");
    const nameWrap = document.createElement("div");
    const nameText = document.createElement("strong");
    const averageText = document.createElement("span");
    const typeCell = document.createElement("td");
    const quantityCell = document.createElement("td");
    const currentCell = document.createElement("td");
    const actionCell = document.createElement("td");
    const removeButton = document.createElement("button");

    nameWrap.className = "asset-name";
    nameText.textContent = asset.name;
    averageText.textContent = `Preco medio ${formatMoney(asset.price)}`;
    typeCell.textContent = asset.type;
    quantityCell.textContent = asset.quantity;
    currentCell.textContent = formatMoney(current);
    removeButton.className = "remove-button";
    removeButton.type = "button";
    removeButton.dataset.id = asset.id;
    removeButton.setAttribute("aria-label", `Remover ${asset.name}`);
    removeButton.textContent = "x";

    nameWrap.append(nameText, averageText);
    nameCell.appendChild(nameWrap);
    actionCell.appendChild(removeButton);
    row.append(nameCell, typeCell, quantityCell, currentCell, actionCell);

    table.appendChild(row);
  });
}

function drawChart() {
  const width = chart.width;
  const height = chart.height;
  context.clearRect(0, 0, width, height);

  if (!assets.length) {
    context.fillStyle = "#667085";
    context.font = "18px Segoe UI, Arial";
    context.fillText("Adicione ativos para gerar o grafico.", 28, 58);
    return;
  }

  const values = assets.map((asset) => asset.quantity * asset.quote);
  const maxValue = Math.max(...values);
  const barGap = 18;
  const chartPadding = 34;
  const barWidth = (width - chartPadding * 2 - barGap * (assets.length - 1)) / assets.length;
  const colors = ["#2563eb", "#10b981", "#f59e0b", "#bc435a", "#0f172a"];

  context.fillStyle = "#f8fbff";
  context.fillRect(0, 0, width, height);

  assets.forEach((asset, index) => {
    const value = values[index];
    const barHeight = Math.max(16, (value / maxValue) * (height - 96));
    const x = chartPadding + index * (barWidth + barGap);
    const y = height - barHeight - 46;

    context.fillStyle = colors[index % colors.length];
    context.roundRect(x, y, barWidth, barHeight, 12);
    context.fill();

    context.fillStyle = "#102033";
    context.font = "700 14px Segoe UI, Arial";
    context.fillText(asset.name.slice(0, 8), x, height - 20);

    context.fillStyle = "#667085";
    context.font = "12px Segoe UI, Arial";
    context.fillText(formatMoney(value), x, Math.max(20, y - 10));
  });
}

function render() {
  saveAssets();
  renderSummary();
  renderTable();
  drawChart();
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const type = document.querySelector("#assetType").value;
  const name = document.querySelector("#assetName").value.trim().toUpperCase();
  const quantity = Number(document.querySelector("#assetQuantity").value);
  const price = Number(document.querySelector("#assetPrice").value);

  if (!name || quantity <= 0 || price <= 0) return;

  assets.unshift({
    id: crypto.randomUUID(),
    type,
    name,
    quantity,
    price,
    quote: estimateQuote(type, price)
  });

  form.reset();
  render();
});

table.addEventListener("click", (event) => {
  const button = event.target.closest("[data-id]");
  if (!button) return;

  assets = assets.filter((asset) => asset.id !== button.dataset.id);
  render();
});

loadSample.addEventListener("click", () => {
  assets = sampleAssets.map((asset) => ({ ...asset, id: crypto.randomUUID() }));
  render();
});

clearPortfolio.addEventListener("click", () => {
  assets = [];
  render();
});

render();
