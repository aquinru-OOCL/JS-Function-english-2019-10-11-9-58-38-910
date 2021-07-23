function palindrome(message){
    var msgLength = message.length;
    var midChar = Math.floor(msgLength / 2);

    for(var i = 0; i < midChar; i++){
        if (message[i] !== message[msgLength - 1 - i]) {
            return false;
        }

        return true;
    }
}

console.log(palindrome('hello')); // false
console.log(palindrome('abcba')); // true