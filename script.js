// Area Converter
const areaInput = document.getElementById('area-input');
const areaFrom = document.getElementById('area-from');
const areaTo = document.getElementById('area-to');
const areaResult = document.getElementById('area-result');

const areaFactors = {
  sqm:1,
  sqkm:1000000,
  acre:4046.86,
  sqmile:2589988
};

function convertArea() {
  const val = parseFloat(areaInput.value);
  if(isNaN(val)) return areaResult.innerText='0';
  const fromFactor = areaFactors[areaFrom.value];
  const toFactor = areaFactors[areaTo.value];
  areaResult.innerText = ((val*fromFactor)/toFactor).toFixed(4);
}

areaInput.addEventListener('input', convertArea);
areaFrom.addEventListener('change', convertArea);
areaTo.addEventListener('change', convertArea);

// Volume Converter
const volumeInput = document.getElementById('volume-input');
const volumeFrom = document.getElementById('volume-from');
const volumeTo = document.getElementById('volume-to');
const volumeResult = document.getElementById('volume-result');

const volumeFactors = {
  liter:1,
  ml:0.001,
  gallon:3.78541,
  cup:0.24
};

function convertVolume() {
  const val = parseFloat(volumeInput.value);
  if(isNaN(val)) return volumeResult.innerText='0';
  const fromFactor = volumeFactors[volumeFrom.value];
  const toFactor = volumeFactors[volumeTo.value];
  volumeResult.innerText = ((val*fromFactor)/toFactor).toFixed(4);
}

volumeInput.addEventListener('input', convertVolume);
volumeFrom.addEventListener('change', convertVolume);
volumeTo.addEventListener('change', convertVolume);

// Speed Converter
const speedInput = document.getElementById('speed-input');
const speedFrom = document.getElementById('speed-from');
const speedTo = document.getElementById('speed-to');
const speedResult = document.getElementById('speed-result');

const speedFactors = {
  kmh:1,
  mph:1.60934,
  ms:3.6
};

function convertSpeed() {
  const val = parseFloat(speedInput.value);
  if(isNaN(val)) return speedResult.innerText='0';
  const fromFactor = speedFactors[speedFrom.value];
  const toFactor = speedFactors[speedTo.value];
  speedResult.innerText = ((val*fromFactor)/toFactor).toFixed(4);
}

speedInput.addEventListener('input', convertSpeed);
speedFrom.addEventListener('change', convertSpeed);
speedTo.addEventListener('change', convertSpeed);

// Time Converter
const timeInput = document.getElementById('time-input');
const timeFrom = document.getElementById('time-from');
const timeTo = document.getElementById('time-to');
const timeResult = document.getElementById('time-result');

const timeFactors = {
  second:1,
  minute:60,
  hour:3600,
  day:86400
};

function convertTime() {
  const val = parseFloat(timeInput.value);
  if(isNaN(val)) return timeResult.innerText='0';
  const fromFactor = timeFactors[timeFrom.value];
  const toFactor = timeFactors[timeTo.value];
  timeResult.innerText = ((val*fromFactor)/toFactor).toFixed(4);
}

timeInput.addEventListener('input', convertTime);
timeFrom.addEventListener('change', convertTime);
timeTo.addEventListener('change', convertTime);

