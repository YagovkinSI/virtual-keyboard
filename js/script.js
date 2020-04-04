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

let keyboardLayoutIndex = 0;
const keydowns = [];

const buttons = [
  { code: 'Backquote', symbol: '`', ru_symbol: '`' }, // 0
  { code: 'Digit1', symbol: '1', ru_symbol: '1' }, // 1
  { code: 'Digit2', symbol: '2', ru_symbol: '2' }, // 2
  { code: 'Digit3', symbol: '3', ru_symbol: '3' }, // 3
  { code: 'Digit4', symbol: '4', ru_symbol: '4' }, // 4
  { code: 'Digit5', symbol: '5', ru_symbol: '5' }, // 5
  { code: 'Digit6', symbol: '6', ru_symbol: '6' }, // 6
  { code: 'Digit7', symbol: '7', ru_symbol: '7' }, // 7
  { code: 'Digit8', symbol: '8', ru_symbol: '8' }, // 8
  { code: 'Digit9', symbol: '9', ru_symbol: '9' }, // 9
  { code: 'Digit0', symbol: '0', ru_symbol: '0' }, // 10
  { code: 'Minus', symbol: '-', ru_symbol: '-' }, // 11
  { code: 'Equal', symbol: '=', ru_symbol: '=' }, // 12
  { code: 'Backspace', symbol: 'Backspace', ru_symbol: 'Backspace' }, // 13

  { code: 'Tab', symbol: 'Tab', ru_symbol: 'Tab' }, // 14
  { code: 'KeyQ', symbol: 'q', ru_symbol: 'й' }, // 15
  { code: 'KeyW', symbol: 'w', ru_symbol: 'ц' }, // 16
  { code: 'KeyE', symbol: 'e', ru_symbol: 'у' }, // 17
  { code: 'KeyR', symbol: 'r', ru_symbol: 'к' }, // 18
  { code: 'KeyT', symbol: 't', ru_symbol: 'е' }, // 19
  { code: 'KeyY', symbol: 'y', ru_symbol: 'н' }, // 20
  { code: 'KeyU', symbol: 'u', ru_symbol: 'г' }, // 21
  { code: 'KeyI', symbol: 'i', ru_symbol: 'ш' }, // 22
  { code: 'KeyO', symbol: 'o', ru_symbol: 'щ' }, // 23
  { code: 'KeyP', symbol: 'p', ru_symbol: 'з' }, // 24
  { code: 'BracketLeft', symbol: '[', ru_symbol: 'х' }, // 25
  { code: 'BracketRight', symbol: ']', ru_symbol: 'ъ' }, // 26
  { code: 'Backslash', symbol: '\\', ru_symbol: '\\' }, // 27

  { code: 'CapsLock', symbol: 'Caps Lock', ru_symbol: 'Caps Lock' }, // 28
  { code: 'KeyA', symbol: 'a', ru_symbol: 'ф' }, // 29
  { code: 'KeyS', symbol: 's', ru_symbol: 'ы' }, // 30
  { code: 'KeyD', symbol: 'd', ru_symbol: 'в' }, // 31
  { code: 'KeyF', symbol: 'f', ru_symbol: 'а' }, // 32
  { code: 'KeyG', symbol: 'g', ru_symbol: 'п' }, // 33
  { code: 'KeyH', symbol: 'h', ru_symbol: 'р' }, // 34
  { code: 'KeyJ', symbol: 'j', ru_symbol: 'о' }, // 35
  { code: 'KeyK', symbol: 'k', ru_symbol: 'л' }, // 36
  { code: 'KeyL', symbol: 'l', ru_symbol: 'д' }, // 37
  { code: 'Semicolon', symbol: ';', ru_symbol: 'ж' }, // 38
  { code: 'Quote', symbol: '\'', ru_symbol: 'э' }, // 37
  { code: 'Enter', symbol: 'Enter', ru_symbol: 'Enter' }, // 40

  { code: 'ShiftLeft', symbol: 'Shift', ru_symbol: 'Shift' }, // 41
  { code: 'KeyZ', symbol: 'z', ru_symbol: 'я' }, // 42
  { code: 'KeyX', symbol: 'x', ru_symbol: 'ч' }, // 43
  { code: 'KeyC', symbol: 'c', ru_symbol: 'с' }, // 44
  { code: 'KeyV', symbol: 'v', ru_symbol: 'м' }, // 45
  { code: 'KeyB', symbol: 'b', ru_symbol: 'и' }, // 46
  { code: 'KeyN', symbol: 'n', ru_symbol: 'т' }, // 47
  { code: 'KeyM', symbol: 'm', ru_symbol: 'ь' }, // 48
  { code: 'Comma', symbol: ',', ru_symbol: 'б' }, // 49
  { code: 'Period', symbol: '.', ru_symbol: 'ю' }, // 50
  { code: 'Slash', symbol: '/', ru_symbol: '.' }, // 51
  { code: 'ShiftRight', symbol: 'Shift', ru_symbol: 'Shift' }, // 52

  { code: 'ControlLeft', symbol: 'Ctrl', ru_symbol: 'Ctrl' }, // 53
  { code: 'MetaLeft', symbol: 'Win', ru_symbol: 'Win' }, // 54
  { code: 'AltLeft', symbol: 'Alt', ru_symbol: 'Alt' }, // 55
  { code: 'Space', symbol: ' ', ru_symbol: ' ' }, // 56
  { code: 'AltRight', symbol: 'Alt Gr', ru_symbol: 'Alt Gr' }, // 57
  { code: 'MetaRight', symbol: 'Win', ru_symbol: 'Win' }, // 58
  { code: 'ContextMenu', symbol: 'Menu', ru_symbol: 'Menu' }, // 59
  { code: 'ControlRight', symbol: 'Ctrl', ru_symbol: 'Ctrl' }, // 60
];

const bigButtons = {
  13: 'keyboard__button_x2',
  14: 'keyboard__button_x1-5',
  27: 'keyboard__button_x1-5',
  28: 'keyboard__button_x1-75',
  40: 'keyboard__button_x2-25',
  41: 'keyboard__button_x2-25',
  52: 'keyboard__button_x2-75',
  53: 'keyboard__button_x1-25',
  54: 'keyboard__button_x1-25',
  55: 'keyboard__button_x1-25',
  56: 'keyboard__button_x6-25',
  57: 'keyboard__button_x1-25',
  58: 'keyboard__button_x1-25',
  59: 'keyboard__button_x1-25',
  60: 'keyboard__button_x1-25',
};

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
    keyboard.children[i].textContent = keyboardLayoutIndex === 0
      ? buttons[i].symbol
      : buttons[i].ru_symbol;
  }
}

function changeKeyboardLayout() {
  keyboardLayoutIndex = (keyboardLayoutIndex + 1) % 2;
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
    keyboardButton.textContent = keyboardLayoutIndex === 0
      ? buttons[i].symbol
      : buttons[i].ru_symbol;
    keyboardButton.addEventListener('click', onClickButton);
    keyboardButton.addEventListener('transitionend', onAnimationEnd);
    if (bigButtons[`${i}`] !== undefined) { keyboardButton.classList.add(bigButtons[`${i}`]); }
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
