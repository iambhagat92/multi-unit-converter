// ====== Length Converter ======
const lengthRates = {
  meter: 1,
  kilometer: 0.001,
  mile: 0.000621371,
  inch: 39.3701,
  foot: 3.28084,
  yard: 1.09361
};

document.getElementById("length-input").addEventListener("input", convertLength);
document.getElementById("length-from").addEventListener("change", convertLength);
document.getElementById("length-to").addEventListener("change", convertLength);

function convertLength() {
  const value = parseFloat(document.getElementById("length-input").value);
  const from = document.getElementById("length-from").value;
  const to = document.getElementById("length-to").value;

  if (!isNaN(value)) {
    const meters = value / lengthRates[from];
    const result = meters * lengthRates[to];
    document.getElementById("length-result").innerText = result.toFixed(4);
  }
}

// ====== Weight Converter ======
const weightRates = {
  kg: 1,
  g: 1000,
  lb: 2.20462,
  oz: 35.274
};

document.getElementById("weight-input").addEventListener("input", convertWeight);
document.getElementById("weight-from").addEventListener("change", convertWeight);
document.getElementById("weight-to").addEventListener("change", convertWeight);

function convertWeight() {
  const value = parseFloat(document.getElementById("weight-input").value);
  const from = document.getElementById("weight-from").value;
  const to = document.getElementById("weight-to").value;

  if (!isNaN(value)) {
    const kg = value / weightRates[from];
    const result = kg * weightRates[to];
    document.getElementById("weight-result").innerText = result.toFixed(4);
  }
}

// ====== Temperature Converter ======
function convertTemp() {
  const value = parseFloat(document.getElementById("temp-input").value);
  const from = document.getElementById("temp-from").value;
  const to = document.getElementById("temp-to").value;

  if (isNaN(value)) return;

  let celsius;

  if (from === "C") celsius = value;
  if (from === "F") celsius = (value - 32) * 5 / 9;
  if (from === "K") celsius = value - 273.15;

  let result;
  if (to === "C") result = celsius;
  if (to === "F") result = (celsius * 9 / 5) + 32;
  if (to === "K") result = celsius + 273.15;

  document.getElementById("temp-result").innerText = result.toFixed(2);
}

document.getElementById("temp-input").addEventListener("input", convertTemp);
document.getElementById("temp-from").addEventListener("change", convertTemp);
document.getElementById("temp-to").addEventListener("change", convertTemp);

// ====== Area Converter ======
const areaRates = {
  sqm: 1,
  sqkm: 1e-6,
  acre: 0.000247105,
  hectare: 0.0001,
  sqmi: 3.861e-7
};

document.getElementById("area-input").addEventListener("input", convertArea);
document.getElementById("area-from").addEventListener("change", convertArea);
document.getElementById("area-to").addEventListener("change", convertArea);

function convertArea() {
  const value = parseFloat(document.getElementById("area-input").value);
  const from = document.getElementById("area-from").value;
  const to = document.getElementById("area-to").value;

  if (!isNaN(value)) {
    const sqm = value / areaRates[from];
    const result = sqm * areaRates[to];
    document.getElementById("area-result").innerText = result.toFixed(4);
  }
}

// ====== Volume Converter ======
const volumeRates = {
  l: 1,
  ml: 1000,
  m3: 0.001,
  gallon: 0.264172,
  pint: 2.11338
};

document.getElementById("volume-input").addEventListener("input", convertVolume);
document.getElementById("volume-from").addEventListener("change", convertVolume);
document.getElementById("volume-to").addEventListener("change", convertVolume);

function convertVolume() {
  const value = parseFloat(document.getElementById("volume-input").value);
  const from = document.getElementById("volume-from").value;
  const to = document.getElementById("volume-to").value;

  if (!isNaN(value)) {
    const liters = value / volumeRates[from];
    const result = liters * volumeRates[to];
    document.getElementById("volume-result").innerText = result.toFixed(4);
  }
}

// ====== Speed Converter ======
const speedRates = {
  kmh: 1,
  ms: 0.277778,
  mph: 0.621371
};

document.getElementById("speed-input").addEventListener("input", convertSpeed);
document.getElementById("speed-from").addEventListener("change", convertSpeed);
document.getElementById("speed-to").addEventListener("change", convertSpeed);

function convertSpeed() {
  const value = parseFloat(document.getElementById("speed-input").value);
  const from = document.getElementById("speed-from").value;
  const to = document.getElementById("speed-to").value;

  if (!isNaN(value)) {
    const kmh = value / speedRates[from];
    const result = kmh * speedRates[to];
    document.getElementById("speed-result").innerText = result.toFixed(4);
  }
}

// ====== Time Converter ======
const timeRates = {
  s: 1,
  min: 1 / 60,
  h: 1 / 3600,
  d: 1 / 86400
};

document.getElementById("time-input").addEventListener("input", convertTime);
document.getElementById("time-from").addEventListener("change", convertTime);
document.getElementById("time-to").addEventListener("change", convertTime);

function convertTime() {
  const value = parseFloat(document.getElementById("time-input").value);
  const from = document.getElementById("time-from").value;
  const to = document.getElementById("time-to").value;

  if (!isNaN(value)) {
    const seconds = value / timeRates[from];
    const result = seconds * timeRates[to];
    document.getElementById("time-result").innerText = result.toFixed(4);
  }
}

// ====== Reset Function ======
function resetConverter(type) {
  document.getElementById(`${type}-input`).value = "";
  document.getElementById(`${type}-result`).innerText = "0";
}

// ====== Dark/Light Theme Toggle ======
document.getElementById("theme-toggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
