"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
try {
    var dict = {};
    var file = fs_1.readFileSync("yourFullPath\\hello.txt", "utf8");
    var lines = file.replace("\r", "").split("\n");
    var newLines = [];
    for (var _i = 0, lines_1 = lines; _i < lines_1.length; _i++) {
        var line = lines_1[_i];
        newLines.push(line.replace("\r", ""));
    }
    var words = [];
    for (var _a = 0, newLines_1 = newLines; _a < newLines_1.length; _a++) {
        var newLine = newLines_1[_a];
        words.push(newLine.toLowerCase().split(" "));
    }
    for (var _b = 0, words_1 = words; _b < words_1.length; _b++) {
        var word = words_1[_b];
        for (var _c = 0, word_1 = word; _c < word_1.length; _c++) {
            var string = word_1[_c];
            if (!dict.hasOwnProperty(string))
                dict[string] = 1;
            else
                dict[string] += 1;
        }
    }
    console.log(dict);
}
catch (e) {
    console.error(e);
}
