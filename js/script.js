const input = document.createElement('textarea');
input.classList.add('textarea');
document.body.append(input);

const keyboard = document.createElement('div');
keyboard.classList.add('keyboard');
document.body.append(keyboard);

const buttons = [
  { code: 'Backquote', symbol: '`' }, // 0
  { code: 'Digit1', symbol: '1' }, // 1
  { code: 'Digit2', symbol: '2' }, // 2
  { code: 'Digit3', symbol: '3' }, // 3
  { code: 'Digit4', symbol: '4' }, // 4
  { code: 'Digit5', symbol: '5' }, // 5
  { code: 'Digit6', symbol: '6' }, // 6
  { code: 'Digit7', symbol: '7' }, // 7
  { code: 'Digit8', symbol: '8' }, // 8
  { code: 'Digit9', symbol: '9' }, // 9
  { code: 'Digit0', symbol: '0' }, // 10
  { code: 'Minus', symbol: '-' }, // 11
  { code: 'Equal', symbol: '=' }, // 12
  { code: 'Backspace', symbol: 'Backspace' }, // 13

  { code: 'Tab', symbol: 'Tab' }, // 14
  { code: 'KeyQ', symbol: 'q' }, // 15
  { code: 'KeyW', symbol: 'w' }, // 16
  { code: 'KeyE', symbol: 'e' }, // 17
  { code: 'KeyR', symbol: 'r' }, // 18
  { code: 'KeyT', symbol: 't' }, // 19
  { code: 'KeyY', symbol: 'y' }, // 20
  { code: 'KeyU', symbol: 'u' }, // 21
  { code: 'KeyI', symbol: 'i' }, // 22
  { code: 'KeyO', symbol: 'o' }, // 23
  { code: 'KeyP', symbol: 'p' }, // 24
  { code: 'BracketLeft', symbol: '[' }, // 25
  { code: 'BracketRight', symbol: ']' }, // 26
  { code: 'Backslash', symbol: '\\' }, // 27

  { code: 'CapsLock', symbol: 'Caps Lock' }, // 28
  { code: 'KeyA', symbol: 'a' }, // 29
  { code: 'KeyS', symbol: 's' }, // 30
  { code: 'KeyD', symbol: 'd' }, // 31
  { code: 'KeyF', symbol: 'f' }, // 32
  { code: 'KeyG', symbol: 'g' }, // 33
  { code: 'KeyH', symbol: 'h' }, // 34
  { code: 'KeyJ', symbol: 'j' }, // 35
  { code: 'KeyK', symbol: 'k' }, // 36
  { code: 'KeyL', symbol: 'l' }, // 37
  { code: 'Semicolon', symbol: ';' }, // 38
  { code: 'Quote', symbol: '\'' }, // 37
  { code: 'Enter', symbol: 'Enter' }, // 40

  { code: 'ShiftLeft', symbol: 'Shift' }, // 41
  { code: 'KeyZ', symbol: 'z' }, // 42
  { code: 'KeyX', symbol: 'x' }, // 43
  { code: 'KeyC', symbol: 'c' }, // 44
  { code: 'KeyV', symbol: 'v' }, // 45
  { code: 'KeyB', symbol: 'b' }, // 46
  { code: 'KeyN', symbol: 'n' }, // 47
  { code: 'KeyM', symbol: 'm' }, // 48
  { code: 'Comma', symbol: ',' }, // 49
  { code: 'Period', symbol: '.' }, // 50
  { code: 'Slash', symbol: '/' }, // 51
  { code: 'ShiftRight', symbol: 'Shift' }, // 52

  { code: 'ControlLeft', symbol: 'Ctrl' }, // 53
  { code: 'MetaLeft', symbol: 'Win' }, // 54
  { code: 'AltLeft', symbol: 'Alt' }, // 55
  { code: 'Space', symbol: ' ' }, // 56
  { code: 'AltRight', symbol: 'Alt Gr' }, // 57
  { code: 'MetaRight', symbol: 'Win' }, // 58
  { code: 'ContextMenu', symbol: 'Menu' }, // 59
  { code: 'ControlRight', symbol: 'Ctrl' }, // 60
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

function onClickButton() {
  setActiveButton(this);
  addSymbolToTextArea(this.textContent);
}

document.addEventListener('keydown', (event) => {
  const button = document.querySelector(`[data-code="${event.code}"]`);
  if (button == null) { return; }
  button.dataset.keydown = 'true';
  onClickButton.call(button);
});

document.addEventListener('keyup', (event) => {
  const button = document.querySelector(`[data-code="${event.code}"]`);
  if (button == null) { return; }
  button.dataset.keydown = 'false';
  unsetActiveButton(button);
});

for (let i = 0; i < buttons.length; i += 1) {
  const keyboardButton = document.createElement('div');
  keyboardButton.classList.add('keyboard__button');
  keyboardButton.dataset.code = buttons[i].code;
  keyboardButton.dataset.keydown = 'false';
  keyboardButton.textContent = buttons[i].symbol;
  keyboardButton.addEventListener('click', onClickButton);
  keyboardButton.addEventListener('transitionend', onAnimationEnd);
  if (bigButtons[`${i}`] !== undefined) { keyboardButton.classList.add(bigButtons[`${i}`]); }
  keyboard.appendChild(keyboardButton);
}
