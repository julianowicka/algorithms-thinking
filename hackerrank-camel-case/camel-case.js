function processData(input) {
    const lines = input.trim().split('\n');

    for (let line of lines) {
        const parts = line.trim().split(';');
        const operation = parts[0];
        const type = parts[1];
        const words = parts[2];

        if (operation === 'S') {
            console.log(splitCamelCase(words));
        } else if (operation === 'C') {
            console.log(combineWords(type, words));
        }
    }
}

function splitCamelCase(str) {
    return str.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/\(\)/g, '').toLowerCase();
}

function combineWords(type, str) {
    let words = str.split(' ').map((word, index) => {
        if (type === 'C') {
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        }
        else {
            if (index === 0) {
                return word.toLowerCase();
            } else {
                return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
            }
        }
    });

    let combined = words.join('');

    if (type === 'M') {
        combined += '()';
    }

    return combined;
}
process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
