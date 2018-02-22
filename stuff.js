'use strict';


function Component(element) {
  this._element = element;
}

Component.prototype.hide = function() {
  this._element.classList.add('hidden');
};

Component.prototype.show = function() {
  this._element.classList.add('hidden');
};


function Menu(element, title, options) {
  // this.__proto__ = Menu.prototype
  // this.__proto__.__proto__ = Component.prototype
  // Menu.prototype.__proto__ = Component.prototype

  this._element = element;
  this._title = title;
  this._options = options;

  this._render();

  element.querySelector('.menu__title').onclick = () => {
    element.classList.toggle('menu--closed');
  };
}

Menu.prototype.__proto__ = Component.prototype;

Menu.prototype.close = function() {
  this._element.classList.add('menu--closed');
};

Menu.prototype._render = function() {
  let optionsHtml = '';

  this._element.classList.add('menu');

  this._options.forEach((optionText) => {
    optionsHtml += `<li class="menu__item">${ optionText }</li>`
  });

  this._element.innerHTML = `
    <h3 class="menu__title">${ this._title }</h3>
    <ul class="menu__list">
      ${ optionsHtml }
    </ul>
  `;
};


let options = [4, 5, 6, 7, 8];

let menu1 = new Menu(document.querySelector('#menu1'), 'My Menu 1', options);
let menu2 = new Menu(document.querySelector('#menu2'), 'Menu 2', [10, 20]);

menu2.close();

menu1.hide();