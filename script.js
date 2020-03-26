const input = document.createElement('textarea');
input.classList.add('textarea');
document.body.append(input);

const keyboard = document.createElement('div');
keyboard.classList.add('keyboard');
document.body.append(keyboard);

const buttons = [
    { symbol: '`' }, //0
    { symbol: '1' }, //1 
    { symbol: '2' }, //2
    { symbol: '3' }, //3
    { symbol: '4' }, //4
    { symbol: '5' }, //5
    { symbol: '6' }, //6
    { symbol: '7' }, //7
    { symbol: '8' }, //8
    { symbol: '9' }, //9
    { symbol: '0' }, //10
    { symbol: '-' }, //11
    { symbol: '=' }, //12
    { symbol: 'Backspace' }, //13
      
    { symbol: 'Tab' }, //14
    { symbol: 'q' }, //15
    { symbol: 'w' }, //16
    { symbol: 'e' }, //17
    { symbol: 'r' }, //18
    { symbol: 't' }, //19
    { symbol: 'y' }, //20
    { symbol: 'u' }, //21
    { symbol: 'i' }, //22
    { symbol: 'o' }, //23
    { symbol: 'p' }, //24
    { symbol: '[' }, //25
    { symbol: ']' }, //26
    { symbol: '\\' }, //27
      
    { symbol: 'Caps Lock' }, //28
    { symbol: 'a' }, //29
    { symbol: 'd' }, //30
    { symbol: 'f' }, //31
    { symbol: 'g' }, //32
    { symbol: 's' }, //33
    { symbol: 'h' }, //34
    { symbol: 'j' }, //35
    { symbol: 'k' }, //36
    { symbol: 'l' }, //37
    { symbol: ';' }, //38
    { symbol: '\'' }, //37
    { symbol: 'Enter' }, //40
      
    { symbol: 'Shift' }, //41
    { symbol: 'z' }, //42
    { symbol: 'x' }, //43
    { symbol: 'c' }, //44
    { symbol: 'v' }, //45
    { symbol: 'b' }, //46
    { symbol: 'n' }, //47
    { symbol: 'm' }, //48
    { symbol: ',' }, //49
    { symbol: '.' }, //50
    { symbol: '\/' }, //51
    { symbol: 'Shift' }, //52
      
    { symbol: 'Ctrl' }, //53
    { symbol: 'Win' }, //54
    { symbol: 'Alt' }, //55
    { symbol: ' ' }, //56
    { symbol: 'Alt Gr' }, //57
    { symbol: 'Win' }, //58
    { symbol: 'Menu' }, //59
    { symbol: 'Ctrl' } //60
];

var big_buttons = {
    "13": "keyboard__button_x2",
    "14": "keyboard__button_x1-5",
    "27": "keyboard__button_x1-5",
    "28": "keyboard__button_x1-75",
    "40": "keyboard__button_x2-25",
    "41": "keyboard__button_x2-25",
    "52": "keyboard__button_x2-75",
    "53": "keyboard__button_x1-25",
    "54": "keyboard__button_x1-25",
    "55": "keyboard__button_x1-25",
    "56": "keyboard__button_x6-25",
    "57": "keyboard__button_x1-25",
    "58": "keyboard__button_x1-25",
    "59": "keyboard__button_x1-25",
    "60": "keyboard__button_x1-25",
};
    


for (var i = 0; i < buttons.length; i++) {
    var keyboardButton = document.createElement('div');
    keyboardButton.classList.add('keyboard__button');
    keyboardButton.textContent = buttons[i].symbol;
    if (big_buttons[`${i}`] != undefined)
        keyboardButton.classList.add(big_buttons[`${i}`]);
    keyboard.appendChild(keyboardButton);   
}




