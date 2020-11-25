function padString (string, stringLength, stringSymbol, symbolPlace) {
    for (i = string.length; i < stringLength; i++) {
        if (symbolPlace === true) {
            string += stringSymbol;
        } else {
            string = stringSymbol + string;
        }
    }
    console.log(string);
}

padString('Ivan', 8, '*', false);