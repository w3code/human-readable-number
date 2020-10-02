const stringNum = (n) => {
    switch (n) {
        case 0:
            return "zero";
            break;
        case 1:
            return "one";
            break;
        case 2:
            return "two";
            break;
        case 3:
            return "three";
            break;
        case 4:
            return "four";
            break;
        case 5:
            return "five";
            break;
        case 6:
            return "six";
            break;
        case 7:
            return "seven";
            break;
        case 8:
            return "eight";
            break;
        case 9:
            return "nine";
            break;
        case 10:
            return "ten";
            break;
        case 11:
            return "eleven";
            break;
        case 12:
            return "twelve";
            break;
        case 13:
            return "thirteen";
            break;
        case 14:
            return "fourteen";
            break;
        case 15:
            return "fifteen";
            break;
        case 16:
            return "sixteen";
            break;
        case 17:
            return "seventeen";
            break;
        case 18:
            return "eighteen";
            break;
        case 19:
            return "nineteen";
            break;
        case 20:
            return "twenty";
            break;
        case 30:
            return "thirty";
            break;
        case 40:
            return "forty";
            break;
        case 50:
            return "fifty";
            break;
        case 60:
            return "sixty";
            break;
        case 70:
            return "seventy";
            break;
        case 80:
            return "eighty";
            break;
        case 90:
            return "ninety";
            break;

    }
}


module.exports = function toReadable (number) {
  let readableStr = '';
    if (number >= 100) {
        let hundreds = Math.floor(number / 100);
        readableStr = stringNum(hundreds) + ' hundred';
        number = number % 100;
        if (number > 0) {
            readableStr = readableStr + ' ';
        }
        else{
            return readableStr;
        }
    }

    if (number >= 10 && number % 10 === 0) {
        readableStr = readableStr + stringNum(number) ;
    } else if (number > 20  && number % 10 > 0){
        let dozens = Math.floor(number / 10);
        readableStr = readableStr + stringNum(dozens*10) + ' ' + stringNum(number % 10);
    } else if (number < 20  && number != 0){
        readableStr = readableStr + stringNum(number);
    } else if (number === 0){
        readableStr = stringNum(number);
    }
    
    return readableStr;
}