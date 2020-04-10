
class Button {
  constructor(code, enSymbol, ruSymbol, enAltSymbol = 'upper', ruAltSymbol = 'upper', buttonSize = 'x1', color = '1') {
    this.code = code;
    this.symbols = [enSymbol, ruSymbol];
    this.altSymbols = [enAltSymbol, ruAltSymbol];
    this.setButtonSize(buttonSize);
    this.setButtonColor(color);
  }

  setButtonSize(size) {
    switch (size) {
      case 'x0.75':
        this.buttonSize = 'keyboard__button_x0-75';
        break;
      case 'x1.25':
        this.buttonSize = 'keyboard__button_x1-25';
        break;
      case 'x1.5':
        this.buttonSize = 'keyboard__button_x1-5';
        break;
      case 'x1.75':
        this.buttonSize = 'keyboard__button_x1-75';
        break;
      case 'x2':
        this.buttonSize = 'keyboard__button_x2';
        break;
      case 'x2.25':
        this.buttonSize = 'keyboard__button_x2-25';
        break;
      case 'x2.75':
        this.buttonSize = 'keyboard__button_x2-75';
        break;
      case 'x6.25':
        this.buttonSize = 'keyboard__button_x6-25';
        break;
      default:
      case 'x1':
        this.buttonSize = undefined;
        break;
    }
  }

  setButtonColor(color) {
    switch (color) {
      case '2':
        this.buttonColor = 'keyboard__button_color2';
        break;
      case '3':
        this.buttonColor = 'keyboard__button_color3';
        break;
      default:
      case '1':
        this.buttonColor = undefined;
        break;
    }
  }

  getSymbol(keyboardLayoutIndex, leterUpperMode, numberUpperMode) {
    const upperMode = (!leterUpperMode && numberUpperMode) || (leterUpperMode && !numberUpperMode);
    if (this.altSymbols[keyboardLayoutIndex] === 'upper') {
      return upperMode
        ? this.symbols[keyboardLayoutIndex].toUpperCase()
        : this.symbols[keyboardLayoutIndex];
    }

    return numberUpperMode
      ? this.altSymbols[keyboardLayoutIndex]
      : this.symbols[keyboardLayoutIndex];
  }
}


const input = document.createElement('textarea');
input.classList.add('textarea');
input.setAttribute('readonly', true);
document.body.append(input);

const keyboard = document.createElement('div');
keyboard.classList.add('keyboard');
document.body.append(keyboard);

const lagend = document.createElement('div');
lagend.classList.add('lagend');
lagend.textContent = 'The keyboard was created in the Windows OS. Change keyboard layout: AltLeft + ControlLeft.';
document.body.append(lagend);

let keyboardLayoutIndex = parseInt(localStorage.keyboardLayoutIndex, 10);
if (Number.isNaN(keyboardLayoutIndex)) keyboardLayoutIndex = 0;
const keydowns = [];

let capsMode = false;
let shiftMode = false;

const inputedSymbols = [];

const buttons = [
  new Button('Backquote', '`', 'ё', '~'),
  new Button('Digit1', '1', '1', '!', '!'),
  new Button('Digit2', '2', '2', '@', '@'),
  new Button('Digit3', '3', '3', '#', '#'),
  new Button('Digit4', '4', '4', '$', '$'),
  new Button('Digit5', '5', '5', '%', '%'),
  new Button('Digit6', '6', '6', '^', '^'),
  new Button('Digit7', '7', '7', '&', '&'),
  new Button('Digit8', '8', '8', '*', '*'),
  new Button('Digit9', '9', '9', '(', '('),
  new Button('Digit0', '0', '0', ')', ')'),
  new Button('Minus', '-', '-', '_', '_'),
  new Button('Equal', '=', '=', '+', '+'),
  new Button('Backspace', 'Backspace', 'Backspace', 'Backspace', 'Backspace', 'x2', '2'),

  new Button('Tab', 'Tab', 'Tab', 'Tab', 'Tab', 'x1.5', '2'),
  new Button('KeyQ', 'q', 'й'),
  new Button('KeyW', 'w', 'ц'),
  new Button('KeyE', 'e', 'у'),
  new Button('KeyR', 'r', 'к'),
  new Button('KeyT', 't', 'е'),
  new Button('KeyY', 'y', 'н'),
  new Button('KeyU', 'u', 'г'),
  new Button('KeyI', 'i', 'ш'),
  new Button('KeyO', 'o', 'щ'),
  new Button('KeyP', 'p', 'з'),
  new Button('BracketLeft', '[', 'х', '{'),
  new Button('BracketRight', ']', 'ъ', '}'),
  new Button('Backslash', '\\', '\\', '|', '|', 'x1.5'),

  new Button('CapsLock', 'Caps Lock', 'Caps Lock', 'Caps Lock', 'Caps Lock', 'x1.75', '2'),
  new Button('KeyA', 'a', 'ф'),
  new Button('KeyS', 's', 'ы'),
  new Button('KeyD', 'd', 'в'),
  new Button('KeyF', 'f', 'а'),
  new Button('KeyG', 'g', 'п'),
  new Button('KeyH', 'h', 'р'),
  new Button('KeyJ', 'j', 'о'),
  new Button('KeyK', 'k', 'л'),
  new Button('KeyL', 'l', 'д'),
  new Button('Semicolon', ';', 'ж', ':'),
  new Button('Quote', '\'', 'э', '"'),
  new Button('Enter', 'Enter', 'Enter', 'Enter', 'Enter', 'x2.25', '2'),

  new Button('ShiftLeft', 'Shift', 'Shift', 'Shift', 'Shift', 'x2.25', '2'),
  new Button('KeyZ', 'z', 'я'),
  new Button('KeyX', 'x', 'ч'),
  new Button('KeyC', 'c', 'с'),
  new Button('KeyV', 'v', 'м'),
  new Button('KeyB', 'b', 'и'),
  new Button('KeyN', 'n', 'т'),
  new Button('KeyM', 'm', 'ь'),
  new Button('Comma', ',', 'б', '<'),
  new Button('Period', '.', 'ю', '>'),
  new Button('Slash', '/', '.', '?', ','),
  new Button('ShiftRight', 'Shift', 'Shift', 'Shift', 'Shift', 'x1.25', '2'),
  new Button('ArrowUp', 'ᐃ', 'ᐃ', 'ᐃ', 'ᐃ', 'x0.75', '3'),
  new Button('ContextMenu', 'CM', 'CM', 'CM', 'CM', 'x0.75', '3'),

  new Button('ControlLeft', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl', 'x1.25', '2'),
  new Button('MetaLeft', 'Win', 'Win', 'Win', 'Win', 'x1.25', '2'),
  new Button('AltLeft', 'Alt', 'Alt', 'Alt', 'Alt', 'x1.25', '2'),
  new Button('Space', ' ', ' ', ' ', ' ', 'x6.25'),
  new Button('AltRight', 'Alt Gr', 'Alt Gr', 'Alt Gr', 'Alt Gr', 'x1.25', '2'),
  new Button('MetaRight', 'Win', 'Win', 'Win', 'Win', 'x1.5', '2'),
  new Button('ArrowLeft', 'ᐊ', 'ᐊ', 'ᐊ', 'ᐊ', 'x0.75', '3'),
  new Button('ArrowDown', 'ᐁ', 'ᐁ', 'ᐁ', 'ᐁ', 'x0.75', '3'),
  new Button('ArrowRight', 'ᐅ', 'ᐅ', 'ᐅ', 'ᐅ', 'x0.75', '3'),
];


function setActiveButton(button) {
  button.classList.add('keyboard__button_active');
}

function unsetActiveButton(button) {
  button.classList.remove('keyboard__button_active');
}

function onAnimationEnd() {
  if (this.dataset.keydown === 'false') { unsetActiveButton(this); }
}

function fillKeyboardLayout() {
  for (let i = 0; i < buttons.length; i += 1) {
    const button = keyboard.children[i];
    button.textContent = buttons[i].getSymbol(keyboardLayoutIndex, capsMode, shiftMode);

    if (capsMode) keyboard.children[28].classList.add('keyboard__button_active-mode');
    else keyboard.children[28].classList.remove('keyboard__button_active-mode');

    if (shiftMode) {
      keyboard.children[41].classList.add('keyboard__button_active-mode');
      keyboard.children[52].classList.add('keyboard__button_active-mode');
    } else {
      keyboard.children[41].classList.remove('keyboard__button_active-mode');
      keyboard.children[52].classList.remove('keyboard__button_active-mode');
    }
  }
}

function changeKeyboardLayout() {
  keyboardLayoutIndex = (keyboardLayoutIndex + 1) % 2;
  localStorage.setItem('keyboardLayoutIndex', keyboardLayoutIndex);
  fillKeyboardLayout();
}

function changeMode(mode) {
  switch (mode) {
    case 'caps':
      capsMode = !capsMode;
      fillKeyboardLayout();
      break;
    case 'shift':
      shiftMode = !shiftMode;
      fillKeyboardLayout();
      break;
    default:
      break;
  }
}

function addSymbolToTextArea(symbol) {
  switch (symbol) {
    case 'Backspace':
      inputedSymbols.pop();
      break;
    case 'Enter':
      inputedSymbols.push('\r\n');
      break;
    case 'Tab':
      inputedSymbols.push('\t');
      break;
    case 'Caps Lock':
      changeMode('caps');
      break;
    case 'Shift':
      changeMode('shift');
      break;
    case 'Ctrl':
    case 'Win':
    case 'Alt':
    case 'Alt Gr':
    case 'CM':
      break;
    default:
      inputedSymbols.push(symbol);
      break;
  }
  input.textContent = inputedSymbols.join('');
}

function setKeydown(button, state) {
  if (button == null) {
    return;
  }
  if (state === 'false' && keydowns.length === 2 && keydowns.includes('AltLeft') && keydowns.includes('ControlLeft')) {
    changeKeyboardLayout();
  }
  if (state === 'false' && keydowns.includes(button.dataset.code)) { keydowns.splice(keydowns.indexOf(button.dataset.code), 1); }
  if (state === 'true' && !keydowns.includes(button.dataset.code)) { keydowns.push(button.dataset.code); }
}

function onClickButton() {
  setActiveButton(this);
  addSymbolToTextArea(this.textContent);
}

function fillKeyboard() {
  for (let i = 0; i < buttons.length; i += 1) {
    const keyboardButton = document.createElement('div');
    keyboardButton.classList.add('keyboard__button');
    keyboardButton.dataset.code = buttons[i].code;
    keyboardButton.dataset.keydown = 'false';
    keyboardButton.textContent = buttons[i].getSymbol(keyboardLayoutIndex, capsMode, shiftMode);
    keyboardButton.addEventListener('click', onClickButton);
    keyboardButton.addEventListener('transitionend', onAnimationEnd);
    if (buttons[i].buttonSize !== undefined) keyboardButton.classList.add(buttons[i].buttonSize);

    if (buttons[i].buttonColor !== undefined) keyboardButton.classList.add(buttons[i].buttonColor);

    keyboard.appendChild(keyboardButton);
  }
}

document.addEventListener('keydown', (event) => {
  const button = document.querySelector(`[data-code="${event.code}"]`);
  if (button == null) { return; }
  setKeydown(button, 'true');
  button.dataset.keydown = 'true';
  onClickButton.call(button);
});

document.addEventListener('keyup', (event) => {
  const button = document.querySelector(`[data-code="${event.code}"]`);
  if (button == null) { return; }
  setKeydown(button, 'false');
  button.dataset.keydown = 'false';
  unsetActiveButton(button);
});

fillKeyboard();
