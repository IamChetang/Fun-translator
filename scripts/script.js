'use strict';
const input = document.getElementById('input');
const btnTranslate = document.getElementById('btn-translate');
const output = document.getElementById('class');
const changeLang = document.getElementById('lang');

// Functions

const translateText = async function () {
  const inputText = input.value;
  const lang = changeLang.value;
  if (inputText === '' || inputText === null) {
    alert('Input text is mandatory');
  } else {
    const url = `https://api.funtranslations.com/translate/${lang}.json?text=${inputText}`;
    const data = await fetch(url);
    const result = await data.json();
    output.innerHTML = result.contents.translated;
  }
};
const translateLang = function () {
  translateText();
};

const checkKey = function (e) {
  if (e.key === 'Enter') {
    translateText();
  }
};

// Event listeners
btnTranslate.addEventListener('click', translateText);
document.addEventListener('keydown', checkKey);
changeLang.addEventListener('change', translateLang);
