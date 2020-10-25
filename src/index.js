const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let str = expr;
    let arr = [];
    let rezult = '';

    for (let i = 0; i < str.length / 10; i++) {
        arr[i] = [];
        for (let j = 0; j < 5; j++) {
            arr[i][j] = str.slice(i * 10, i * 10 + 10).slice(j * 2, j * 2 + 2);
            if (arr[i][j] === '10') {
                arr[i][j] = '.'
            }
            if (arr[i][j] === '11') {
                arr[i][j] = '-'
            }
            if (arr[i][j] === '00') {
                arr[i][j] = ''
            }
            if (arr[i][j] === '**') {
                arr[i] = ['space']
            }
        }
    }


    for (let i = 0; i < str.length / 10; i++) {
        arr[i] = arr[i].join('');
        if (arr[i] == 'space') {
            rezult += ' '
        } else rezult += MORSE_TABLE[arr[i]];
    }

    return rezult;
}

module.exports = {
    decode
}
