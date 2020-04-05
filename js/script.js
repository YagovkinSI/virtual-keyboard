
class Button {
  constructor(code, enSymbol, ruSymbol, buttonSize = 'x1') {
    this.code = code;
    this.symbols = [enSymbol, ruSymbol];
    this.setButtonSize(buttonSize);
  }

  setButtonSize(size) {
    switch (size) {
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

  getSymbol(keyboardLayoutIndex) {
    return this.symbols[keyboardLayoutIndex];
  }
}


const input = document.createElement('textarea');
input.classList.add('textarea');
document.body.append(input);

const keyboard = document.createElement('div');
keyboard.classList.add('keyboard');
document.body.append(keyboard);

const lagend = document.createElement('div');
lagend.classList.add('lagend');
lagend.textContent = 'Change keyboard layout: AltLeft + ShiftLeft';
document.body.append(lagend);

let keyboardLayoutIndex = parseInt(localStorage.keyboardLayoutIndex, 10);
if (Number.isNaN(keyboardLayoutIndex)) keyboardLayoutIndex = 0;
const keydowns = [];

const buttons = [
  new Button('Backquote', '`', '`'),
  new Button('Digit1', '1', '1'),
  new Button('Digit2', '2', '2'),
  new Button('Digit3', '3', '3'),
  new Button('Digit4', '4', '4'),
  new Button('Digit5', '5', '5'),
  new Button('Digit6', '6', '6'),
  new Button('Digit7', '7', '7'),
  new Button('Digit8', '8', '8'),
  new Button('Digit9', '9', '9'),
  new Button('Digit0', '0', '0'),
  new Button('Minus', '-', '-'),
  new Button('Equal', '=', '='),
  new Button('Backspace', 'Backspace', 'Backspace', 'x2'),


  new Button('Tab', 'Tab', 'Tab', 'x1.5'),
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
  new Button('BracketLeft', '[', 'х'),
  new Button('BracketRight', ']', 'ъ'),
  new Button('Backslash', '\\', '\\', 'x1.5'),

  new Button('CapsLock', 'Caps Lock', 'Caps Lock', 'x1.75'),
  new Button('KeyA', 'a', 'ф'),
  new Button('KeyS', 's', 'ы'),
  new Button('KeyD', 'd', 'в'),
  new Button('KeyF', 'f', 'а'),
  new Button('KeyG', 'g', 'п'),
  new Button('KeyH', 'h', 'р'),
  new Button('KeyJ', 'j', 'о'),
  new Button('KeyK', 'k', 'л'),
  new Button('KeyL', 'l', 'д'),
  new Button('Semicolon', ';', 'ж'),
  new Button('Quote', '\'', 'э'),
  new Button('Enter', 'Enter', 'Enter', 'x2.25'),


  new Button('ShiftLeft', 'Shift', 'Shift', 'x2.25'),
  new Button('KeyZ', 'z', 'я'),
  new Button('KeyX', 'x', 'ч'),
  new Button('KeyC', 'c', 'с'),
  new Button('KeyV', 'v', 'м'),
  new Button('KeyB', 'b', 'и'),
  new Button('KeyN', 'n', 'т'),
  new Button('KeyM', 'm', 'ь'),
  new Button('Comma', ',', 'б'),
  new Button('Period', '.', 'ю'),
  new Button('Slash', '/', '.'),
  new Button('ShiftRight', 'Shift', 'Shift', 'x2.75'),

  new Button('ControlLeft', 'Ctrl', 'Ctrl', 'x1.25'),
  new Button('MetaLeft', 'Win', 'Win', 'x1.25'),
  new Button('AltLeft', 'Alt', 'Alt', 'x1.25'),
  new Button('Space', ' ', ' ', 'x6.25'),
  new Button('AltRight', 'Alt Gr', 'Alt Gr', 'x1.25'),
  new Button('MetaRight', 'Win', 'Win', 'x1.25'),
  new Button('ContextMenu', 'Menu', 'Menu', 'x1.25'),
  new Button('ControlRight', 'Ctrl', 'Ctrl', 'x1.25'),
];


function setActiveButton(button) {
  button.classList.add('keyboard__button_active');
}

function unsetActiveButton(button) {
  button.classList.remove('keyboard__button_active');
}

function addSymbolToTextArea(symbol) {
  input.textContent += symbol;
}

function onAnimationEnd() {
  if (this.dataset.keydown === 'false') { unsetActiveButton(this); }
}

function fillKeyboardLayout() {
  for (let i = 0; i < buttons.length; i += 1) {
    keyboard.children[i].textContent = buttons[i].getSymbol(keyboardLayoutIndex);
  }
}

function changeKeyboardLayout() {
  keyboardLayoutIndex = (keyboardLayoutIndex + 1) % 2;
  localStorage.setItem('keyboardLayoutIndex', keyboardLayoutIndex);
  fillKeyboardLayout();
}

function setKeydown(button, state) {
  if (button == null) {
    return;
  }
  if (state === 'false' && keydowns.length === 2 && keydowns.includes('AltLeft') && keydowns.includes('ShiftLeft')) {
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
    keyboardButton.textContent = buttons[i].getSymbol(keyboardLayoutIndex);
    keyboardButton.addEventListener('click', onClickButton);
    keyboardButton.addEventListener('transitionend', onAnimationEnd);
    if (buttons[i].buttonSize !== undefined) {
      keyboardButton.classList.add(buttons[i].buttonSize);
    }
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
