// tady je místo pro náš program

/**
 * Funkce přidá nebo odebere na prvku třídu, která se stará o červenou barvu písma
 * 
 * @param {string} elementId 
 */

let text = document.querySelector('#js-paragraph');

text.addEventListener('mouseover', function () {
    text.style.fontWeight = 'bold';
});

text.addEventListener('mouseout', function () {
    text.style.fontWeight = 'normal';
});


document.querySelector('#prepniZcervenani').addEventListener('click', function () {
    text.classList.toggle('cerveny-text');
});



/**
 * Funkce zvětší/změnší písmo v elementu o definovanou velikost
 * 
 * @param {string} elementSelector 
 * @param {int} fontSizeChange 
 */
document.querySelector('#zvetsitPismo').addEventListener('click', function () {
    let currentFontSize = parseInt(text.style.fontSize);
    text.style.fontSize = (currentFontSize + 2 + 'px');
});




/*--------------*/
/* AUDIO FUNKCE */
/*--------------*/

document.querySelector('#prehraj').addEventListener('click', function () {
    document.querySelector('#js-audio').play();
});


document.querySelector('#pauzni').addEventListener('click', function () {
    document.querySelector('#js-audio').pause();
});

document.querySelector('#ztisit').addEventListener('click', function () {
    document.querySelector('#js-audio').volume = 0;
});

document.querySelector('#ztisitAkorat').addEventListener('click', function () {
    document.querySelector('#js-audio').volume = 0.5;
});

document.querySelector('#maximum').addEventListener('click', function () {
    document.querySelector('#js-audio').volume = 1;
});

document.querySelector('#resetuj').addEventListener('click', function () {
    document.querySelector('#js-audio').currentTime = 0;
});


