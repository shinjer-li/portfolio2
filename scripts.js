const FULL_RAW = "Physician-\nresearcher\n& builder.";
const ENABLE_ERASE = false;
const el = document.querySelector('.typed-hero');
const cursor = document.querySelector('.hero-cursor');

const DISPLAY = (str) =>
  str.replace("researcher", '<em style="color:var(--accent);font-style:italic;">researcher</em>');

function typeOut(cb) {
  let i = 0;
  function step() {
    el.innerHTML = DISPLAY(FULL_RAW.slice(0, i).replace(/\n/g, '<br/>'));
    if (i++ <= FULL_RAW.length) setTimeout(step, 70 + Math.random() * 40);
    else cb && setTimeout(cb, 10000);
  }
  step();
}

function eraseOut(cb) {
  let i = FULL_RAW.length;
  function step() {
    el.innerHTML = DISPLAY(FULL_RAW.slice(0, i).replace(/\n/g, '<br/>'));
    if (i-- > 0) setTimeout(step, 35);
    else cb && setTimeout(cb, 500);
  }
  step();
}

function loop() {
  if (ENABLE_ERASE) {
    typeOut(() => eraseOut(loop));
  } else {
    typeOut();
  }
}

document.addEventListener('DOMContentLoaded', () => { loop(); });