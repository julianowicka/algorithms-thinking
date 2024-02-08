process.stdin.resume();
process.stdin.setEncoding("ascii");

var input = "";

process.stdin.on("data", function (chunk) {
    input += chunk;
});

process.stdin.on("end", function () {
    var lines = input.split('\n');
    var s = lines[0];
    var t = lines[1];

    console.log(stringsXOR(s, t));
});

function stringsXOR(s, t) {
    let res = "";
    for(let i = 0; i < s.length; i++) {
        if(s.charAt(i) === t.charAt(i)) {
            res += "0";
        } else {
            res += "1";
        }
    }
    return res;
}
