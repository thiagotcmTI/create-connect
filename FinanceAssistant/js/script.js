const STORAGE_KEY = "bolso_patrimonial_assets_v2";
const SHEET_KEY = "bolso_patrimonial_sheet_v1";
const RATES_KEY = "bolso_patrimonial_rates_v1";
const LAST_SYNC_KEY = "bolso_patrimonial_last_sync";

const categories = [
    { value: "crypto", label: "Cripto", volatile: true },
    { value: "stock", label: "Ações", volatile: true },
    { value: "etf", label: "ETFs", volatile: true },
    { value: "fii", label: "FIIs", volatile: true },
    { value: "currency", label: "Moedas", volatile: true },
    { value: "fixed", label: "Renda fixa / poupança", volatile: false }
];

const fixedTypes = [
    { value: "poupanca", label: "Poupança", annualRate: 6.17, note: "Regra simplificada com TR zerada e Selic acima de 8,5%." },
    { value: "cdb_cdi", label: "CDB 100% CDI", annualRate: 10.65, note: "Usa CDI como referência e pode variar por banco." },
    { value: "tesouro_selic", label: "Tesouro Selic", annualRate: 10.65, note: "Acompanha a Selic, com taxas e impostos na vida real." },
    { value: "lci_lca", label: "LCI/LCA", annualRate: 9.05, note: "Geralmente isento de IR para pessoa física." },
    { value: "ipca", label: "Tesouro IPCA+", annualRate: 6.2, note: "Combina inflação medida pelo IPCA com taxa prefixada." },
    { value: "prefixado", label: "Prefixado", annualRate: 10.2, note: "Taxa contratada no início, sensível à marcação a mercado." }
];

const fallbackTicker = [
    { symbol: "BTC", price: 348500, change: 1.8 },
    { symbol: "ETH", price: 18600, change: -0.6 },
    { symbol: "PETR4", price: 38.42, change: 0.9 },
    { symbol: "VALE3", price: 62.18, change: -1.1 },
    { symbol: "IVVB11", price: 318.7, change: 0.4 },
    { symbol: "USD", price: 5.42, change: 0.2 },
    { symbol: "SELIC", price: 10.65, change: 0 }
];

let portfolioChart;
let assetChart;
let fixedChart;

const formatCurrency = (value) => Number(value || 0).toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
const formatPercent = (value) => `${Number(value || 0).toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}%`;
const $ = (selector) => document.querySelector(selector);

function readJson(key, fallback) {
    try {
        return JSON.parse(localStorage.getItem(key)) || fallback;
    } catch {
        return fallback;
    }
}

function saveJson(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

function getAssets() {
    return readJson(STORAGE_KEY, []);
}

function saveAssets(assets) {
    saveJson(STORAGE_KEY, assets);
}

function getRates() {
    return readJson(RATES_KEY, fixedTypes);
}

function categoryLabel(value) {
    return categories.find((item) => item.value === value)?.label || value;
}

function fixedTypeLabel(value) {
    return fixedTypes.find((item) => item.value === value)?.label || "Renda fixa";
}

function isVolatile(asset) {
    return categories.find((item) => item.value === asset.category)?.volatile;
}

function seededVariation(text) {
    const seed = [...text].reduce((sum, char) => sum + char.charCodeAt(0), 0);
    return ((seed % 17) - 8) / 100;
}

function normalizeSymbol(value) {
    return value.trim().toUpperCase().replace(/\s+/g, "");
}

function calculateAsset(asset) {
    const invested = Number(asset.buyPrice) * Number(asset.quantity);
    const current = Number(asset.currentPrice || asset.buyPrice) * Number(asset.quantity);
    const gain = current - invested;
    const gainPercent = invested > 0 ? (gain / invested) * 100 : 0;
    return { invested, current, gain, gainPercent };
}

function monthlyRateFromAnnual(annualRate) {
    return Math.pow(1 + Number(annualRate || 0) / 100, 1 / 12) - 1;
}

function compoundProjection(initial, monthly, annualRate, months) {
    const rate = monthlyRateFromAnnual(annualRate);
    let balance = Number(initial || 0);
    const rows = [];

    for (let month = 1; month <= Number(months || 1); month += 1) {
        balance = balance * (1 + rate) + Number(monthly || 0);
        rows.push({ label: `${month}m`, value: balance });
    }

    return rows;
}

function updateConnectionStatus() {
    const isOnline = navigator.onLine;
    $("#connectionDot").className = `status-dot ${isOnline ? "online" : "offline"}`;
    $("#connectionLabel").textContent = isOnline ? "Online para atualizar dados" : "Modo offline seguro";

    const lastSync = localStorage.getItem(LAST_SYNC_KEY);
    $("#lastSyncLabel").textContent = lastSync
        ? `Última atualização: ${new Date(lastSync).toLocaleString("pt-BR")}`
        : "Nenhuma atualização realizada";
}

function setupSelectors() {
    $("#assetCategory").innerHTML = categories.map((item) => `<option value="${item.value}">${item.label}</option>`).join("");
    $("#fixedType").innerHTML = fixedTypes.map((item) => `<option value="${item.value}">${item.label}</option>`).join("");
    $("#assetCategory").addEventListener("change", () => {
        $("#fixedTypeWrap").classList.toggle("hidden", $("#assetCategory").value !== "fixed");
    });
}

function setupTabs() {
    document.querySelectorAll(".tab").forEach((tab) => {
        tab.addEventListener("click", () => {
            document.querySelectorAll(".tab").forEach((item) => item.classList.remove("active"));
            document.querySelectorAll(".tab-panel").forEach((panel) => panel.classList.remove("active"));
            tab.classList.add("active");
            $(`#${tab.dataset.tab}`).classList.add("active");
            renderCharts();
        });
    });
}

function renderTicker(items = fallbackTicker) {
    const content = [...items, ...items].map((item) => {
        const direction = Number(item.change) >= 0 ? "up" : "down";
        const marker = Number(item.change) >= 0 ? "▲" : "▼";
        const price = item.symbol === "SELIC" ? formatPercent(item.price) : formatCurrency(item.price);
        return `<span class="ticker-item"><strong>${item.symbol}</strong>${price}<span class="${direction}">${marker} ${formatPercent(Math.abs(item.change))}</span></span>`;
    }).join("");
    $("#tickerTrack").innerHTML = content;
}

function renderSummary() {
    const assets = getAssets();
    const totals = assets.reduce((acc, asset) => {
        const calc = calculateAsset(asset);
        acc.invested += calc.invested;
        acc.current += calc.current;
        acc.fixed += asset.category === "fixed" ? calc.current : 0;
        acc.volatile += asset.category !== "fixed" ? calc.current : 0;
        return acc;
    }, { invested: 0, current: 0, fixed: 0, volatile: 0 });
    const gain = totals.current - totals.invested;
    const gainPercent = totals.invested ? (gain / totals.invested) * 100 : 0;

    $("#totalPatrimony").textContent = formatCurrency(totals.current);
    $("#totalInvested").textContent = `Investido: ${formatCurrency(totals.invested)}`;
    $("#totalGain").textContent = formatCurrency(gain);
    $("#totalGain").className = gain >= 0 ? "up" : "down";
    $("#totalGainPercent").textContent = formatPercent(gainPercent);
    $("#assetCount").textContent = assets.length;
    $("#riskMix").textContent = assets.length
        ? `Volátil ${formatPercent((totals.volatile / totals.current) * 100)} • Conservador ${formatPercent((totals.fixed / totals.current) * 100)}`
        : "Sem composição";
    $("#fixedTotal").textContent = formatCurrency(totals.fixed);
}

function renderAssetRows() {
    const rows = getAssets().map((asset) => {
        const calc = calculateAsset(asset);
        const label = asset.category === "fixed" ? fixedTypeLabel(asset.fixedType) : categoryLabel(asset.category);
        return `
            <tr>
                <td><span class="asset-name">${asset.name}</span>${asset.symbol !== asset.name ? `<span class="asset-symbol">${asset.symbol}</span>` : ""}</td>
                <td><span class="pill">${label}</span></td>
                <td>${formatCurrency(asset.buyPrice)}</td>
                <td>${formatCurrency(asset.currentPrice)}</td>
                <td>${formatCurrency(calc.current)}</td>
                <td class="${calc.gain >= 0 ? "up" : "down"}">${formatCurrency(calc.gain)}<br><small>${formatPercent(calc.gainPercent)}</small></td>
                <td><button class="delete-button" data-delete="${asset.id}">Excluir</button></td>
            </tr>
        `;
    }).join("");

    $("#assetRows").innerHTML = rows || `<tr><td colspan="7">Cadastre seu primeiro investimento para montar a carteira.</td></tr>`;
    document.querySelectorAll("[data-delete]").forEach((button) => {
        button.addEventListener("click", () => {
            saveAssets(getAssets().filter((asset) => asset.id !== button.dataset.delete));
            renderAll();
        });
    });
}

function renderRateList() {
    const rates = getRates();
    $("#rateList").innerHTML = rates.map((rate) => `
        <div class="rate-card">
            <strong>${rate.label}</strong>
            <small>${formatPercent(rate.annualRate)} ao ano • ${formatPercent(monthlyRateFromAnnual(rate.annualRate) * 100)} ao mês</small>
            <small>${rate.note}</small>
        </div>
    `).join("");
}

function renderAssetSelectors() {
    const volatileAssets = getAssets().filter(isVolatile);
    const fixedAssets = getAssets().filter((asset) => asset.category === "fixed");
    $("#volatileAssetSelect").innerHTML = volatileAssets.length
        ? volatileAssets.map((asset) => `<option value="${asset.id}">${asset.name}</option>`).join("")
        : `<option value="">Sem ativos voláteis</option>`;
    $("#fixedProjectionAsset").innerHTML = fixedAssets.length
        ? fixedAssets.map((asset) => `<option value="${asset.id}">${asset.name}</option>`).join("")
        : `<option value="">Sem renda fixa</option>`;
}

function renderInsights() {
    const assets = getAssets();
    const volatileAssets = assets.filter(isVolatile);
    const biggest = assets.map((asset) => ({ asset, ...calculateAsset(asset) })).sort((a, b) => Math.abs(b.current) - Math.abs(a.current))[0];
    const positive = assets.filter((asset) => calculateAsset(asset).gain >= 0).length;

    $("#volatileInsights").innerHTML = volatileAssets.length ? volatileAssets.map((asset) => {
        const calc = calculateAsset(asset);
        return `<li><strong>${asset.name}</strong>: ${formatPercent(calc.gainPercent)} desde a compra. Último preço salvo: ${formatCurrency(asset.currentPrice)}.</li>`;
    }).join("") : "<li>Cadastre cripto, ações, ETFs, FIIs ou moedas para ver leituras de risco.</li>";

    const cards = [
        {
            title: "Segurança dos dados",
            body: "Os investimentos ficam salvos no navegador deste aparelho. Para produção, o próximo passo é criptografar dados locais e permitir backup exportável."
        },
        {
            title: "Atualização periódica",
            body: "O app tenta atualizar a cada 2 minutos quando há internet. Se estiver offline, mantém os últimos valores e registra histórico local."
        },
        {
            title: "Diversificação",
            body: biggest ? `Maior posição atual: ${biggest.asset.name}, com ${formatCurrency(biggest.current)}. Compare esse peso com sua tolerância a risco.` : "Ainda não há posição suficiente para avaliar concentração."
        },
        {
            title: "Previsões",
            body: `${positive} de ${assets.length} investimentos estão positivos. Projeções aqui são estimativas educativas, não recomendação de investimento.`
        }
    ];

    $("#insightBoard").innerHTML = cards.map((card) => `<article class="insight-card"><strong>${card.title}</strong><p>${card.body}</p></article>`).join("");
}

function chartContext(id) {
    const canvas = document.getElementById(id);
    return canvas ? canvas.getContext("2d") : null;
}

function renderCharts() {
    if (!window.Chart) return;

    const assets = getAssets();
    const mode = $("#chartMode").value;
    const grouped = assets.reduce((acc, asset) => {
        const key = asset.category === "fixed" ? fixedTypeLabel(asset.fixedType) : categoryLabel(asset.category);
        const calc = calculateAsset(asset);
        acc[key] = (acc[key] || 0) + (mode === "performance" ? calc.gain : calc.current);
        return acc;
    }, {});

    const labels = Object.keys(grouped);
    const data = Object.values(grouped);
    const colors = ["#38bdf8", "#34d399", "#fbbf24", "#fb7185", "#a78bfa", "#2dd4bf"];

    if (portfolioChart) portfolioChart.destroy();
    portfolioChart = new Chart(chartContext("portfolioChart"), {
        type: mode === "performance" ? "bar" : "doughnut",
        data: { labels, datasets: [{ data, backgroundColor: colors, borderColor: "#0b1020" }] },
        options: { responsive: true, plugins: { legend: { labels: { color: "#e5edf9" } } }, scales: mode === "performance" ? chartScales() : {} }
    });

    renderVolatileChart();
    renderFixedChart();
}

function chartScales() {
    return {
        x: { ticks: { color: "#94a3b8" }, grid: { color: "rgba(148,163,184,.12)" } },
        y: { ticks: { color: "#94a3b8" }, grid: { color: "rgba(148,163,184,.12)" } }
    };
}

function renderVolatileChart() {
    if (!window.Chart) return;
    const asset = getAssets().find((item) => item.id === $("#volatileAssetSelect").value) || getAssets().filter(isVolatile)[0];
    const history = asset?.history?.slice(-30) || [];

    if (assetChart) assetChart.destroy();
    assetChart = new Chart(chartContext("assetChart"), {
        type: "line",
        data: {
            labels: history.map((item) => new Date(item.date).toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit" })),
            datasets: [{
                label: asset ? asset.name : "Sem ativo",
                data: history.map((item) => item.price),
                borderColor: "#38bdf8",
                backgroundColor: "rgba(56,189,248,.15)",
                fill: true,
                tension: 0.35
            }]
        },
        options: { responsive: true, plugins: { legend: { labels: { color: "#e5edf9" } } }, scales: chartScales() }
    });
}

function renderFixedChart() {
    if (!window.Chart) return;
    const assets = getAssets();
    const asset = assets.find((item) => item.id === $("#fixedProjectionAsset").value) || assets.find((item) => item.category === "fixed");
    const rate = getRates().find((item) => item.value === asset?.fixedType)?.annualRate || 0;
    const projection = compoundProjection(calculateAsset(asset || {}).current, asset?.monthlyContribution || 0, rate, 24);

    if (fixedChart) fixedChart.destroy();
    fixedChart = new Chart(chartContext("fixedChart"), {
        type: "line",
        data: {
            labels: projection.map((item) => item.label),
            datasets: [{
                label: asset ? asset.name : "Projeção",
                data: projection.map((item) => item.value),
                borderColor: "#34d399",
                backgroundColor: "rgba(52,211,153,.16)",
                fill: true,
                tension: 0.35
            }]
        },
        options: { responsive: true, plugins: { legend: { labels: { color: "#e5edf9" } } }, scales: chartScales() }
    });
}

function renderAll() {
    updateConnectionStatus();
    renderSummary();
    renderAssetRows();
    renderRateList();
    renderAssetSelectors();
    renderInsights();
    renderCharts();
    renderSheet();
}

function setupForm() {
    $("#assetForm").addEventListener("submit", (event) => {
        event.preventDefault();
        const category = $("#assetCategory").value;
        const name = $("#assetName").value.trim();
        const symbol = normalizeSymbol(name);
        const buyPrice = Number($("#assetBuyPrice").value);
        const quantity = Number($("#assetQuantity").value);
        const fixedType = category === "fixed" ? $("#fixedType").value : "";
        const rate = getRates().find((item) => item.value === fixedType)?.annualRate;
        const currentPrice = category === "fixed"
            ? buyPrice * (1 + monthlyRateFromAnnual(rate || 0))
            : buyPrice * (1 + seededVariation(symbol));

        const asset = {
            id: crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random()}`,
            category,
            fixedType,
            name,
            symbol,
            buyPrice,
            quantity,
            currentPrice,
            monthlyContribution: Number($("#monthlyContribution").value || 0),
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            history: [{ date: new Date().toISOString(), price: currentPrice }]
        };

        saveAssets([...getAssets(), asset]);
        event.target.reset();
        $("#fixedTypeWrap").classList.add("hidden");
        renderAll();
        updateQuotes();
    });
}

async function updateQuotes() {
    if (!navigator.onLine) {
        updateConnectionStatus();
        return;
    }

    const assets = getAssets();
    const rates = await fetchRates();
    saveJson(RATES_KEY, rates);

    for (const asset of assets) {
        const quote = await fetchQuote(asset, rates);
        if (quote) {
            asset.currentPrice = quote;
            asset.updatedAt = new Date().toISOString();
            asset.history = asset.history || [];
            asset.history.push({ date: new Date().toISOString(), price: quote });
            asset.history = asset.history.slice(-90);
        }
    }

    saveAssets(assets);
    localStorage.setItem(LAST_SYNC_KEY, new Date().toISOString());
    renderAll();
}

async function fetchRates() {
    const rates = fixedTypes.map((item) => ({ ...item }));

    try {
        const response = await fetch("https://brasilapi.com.br/api/taxas/v1");
        const data = await response.json();
        const selic = data.find((item) => item.nome?.toLowerCase() === "selic")?.valor;
        const cdi = data.find((item) => item.nome?.toLowerCase() === "cdi")?.valor;
        const ipca = data.find((item) => item.nome?.toLowerCase() === "ipca")?.valor;

        rates.forEach((rate) => {
            if (["tesouro_selic", "poupanca"].includes(rate.value) && selic) rate.annualRate = rate.value === "poupanca" ? Math.min(6.17, selic * 0.7) : selic;
            if (rate.value === "cdb_cdi" && cdi) rate.annualRate = cdi;
            if (rate.value === "lci_lca" && cdi) rate.annualRate = cdi * 0.85;
            if (rate.value === "ipca" && ipca) rate.annualRate = ipca + 5.5;
        });
    } catch {
        return getRates();
    }

    return rates;
}

async function fetchQuote(asset, rates) {
    if (asset.category === "fixed") {
        const rate = rates.find((item) => item.value === asset.fixedType)?.annualRate || 0;
        const months = Math.max(1, Math.round((Date.now() - new Date(asset.createdAt).getTime()) / (1000 * 60 * 60 * 24 * 30)));
        return asset.buyPrice * Math.pow(1 + monthlyRateFromAnnual(rate), months);
    }

    try {
        if (asset.category === "crypto") {
            const id = asset.symbol.toLowerCase().replace("btc", "bitcoin").replace("eth", "ethereum");
            const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${encodeURIComponent(id)}&vs_currencies=brl`);
            const data = await response.json();
            return Number(data[id]?.brl);
        }

        if (asset.category === "currency") {
            const response = await fetch(`https://economia.awesomeapi.com.br/json/last/${asset.symbol}-BRL`);
            const data = await response.json();
            return Number(data[`${asset.symbol}BRL`]?.bid);
        }
    } catch {
        return null;
    }

    return null;
}

function setupTools() {
    $("#calculateButton").addEventListener("click", () => {
        const initial = Number($("#calcInitial").value);
        const monthly = Number($("#calcMonthly").value);
        const rate = Number($("#calcRate").value);
        const months = Number($("#calcMonths").value);
        const projection = compoundProjection(initial, monthly, rate, months);
        const finalValue = projection.at(-1)?.value || 0;
        const contributed = initial + monthly * months;
        $("#projectionResult").innerHTML = `
            <strong>Resultado estimado: ${formatCurrency(finalValue)}</strong><br>
            Total aportado: ${formatCurrency(contributed)}<br>
            Juros estimados: ${formatCurrency(finalValue - contributed)}
        `;
    });

    $("#addSheetRow").addEventListener("click", () => {
        const rows = getSheetRows();
        rows.push({ month: "Novo mês", income: 0, expenses: 0, investments: 0, goal: 0 });
        saveJson(SHEET_KEY, rows);
        renderSheet();
    });
}

function getSheetRows() {
    return readJson(SHEET_KEY, [
        { month: "Janeiro", income: 5000, expenses: 3200, investments: 800, goal: 1000 },
        { month: "Fevereiro", income: 5000, expenses: 3000, investments: 950, goal: 1000 },
        { month: "Março", income: 5200, expenses: 3350, investments: 900, goal: 1100 }
    ]);
}

function renderSheet() {
    const rows = getSheetRows();
    $("#sheetRows").innerHTML = rows.map((row, index) => {
        const balance = Number(row.income) - Number(row.expenses) - Number(row.investments);
        return `
            <tr data-sheet-row="${index}">
                <td><input value="${row.month}" data-field="month"></td>
                <td><input type="number" value="${row.income}" data-field="income"></td>
                <td><input type="number" value="${row.expenses}" data-field="expenses"></td>
                <td><input type="number" value="${row.investments}" data-field="investments"></td>
                <td><input type="number" value="${row.goal}" data-field="goal"></td>
                <td>${formatCurrency(balance)}</td>
            </tr>
        `;
    }).join("");

    document.querySelectorAll(".editable-sheet input").forEach((input) => {
        input.addEventListener("change", () => {
            const rowIndex = Number(input.closest("tr").dataset.sheetRow);
            const rows = getSheetRows();
            rows[rowIndex][input.dataset.field] = input.type === "number" ? Number(input.value) : input.value;
            saveJson(SHEET_KEY, rows);
            renderSheet();
        });
    });
}

function setupExport() {
    $("#exportButton").addEventListener("click", () => {
        const payload = {
            exportedAt: new Date().toISOString(),
            assets: getAssets(),
            sheet: getSheetRows(),
            rates: getRates()
        };
        const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "bolso-patrimonial-backup.json";
        link.click();
        URL.revokeObjectURL(url);
    });
}

function setupEvents() {
    $("#refreshButton").addEventListener("click", updateQuotes);
    $("#chartMode").addEventListener("change", renderCharts);
    $("#volatileAssetSelect").addEventListener("change", renderVolatileChart);
    $("#fixedProjectionAsset").addEventListener("change", renderFixedChart);
    window.addEventListener("online", () => {
        updateConnectionStatus();
        updateQuotes();
    });
    window.addEventListener("offline", updateConnectionStatus);
}

function boot() {
    setupSelectors();
    setupTabs();
    setupForm();
    setupTools();
    setupExport();
    setupEvents();
    renderTicker();
    renderAll();
    updateQuotes();
    setInterval(updateQuotes, 120000);
}

boot();
