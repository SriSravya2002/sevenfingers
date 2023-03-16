var censoredWords = ["sad","bad","mad"];
var customCensoredWords = [];
function censor (inStr){
    for(idx in censoredWords){
        inStr = inStr.replaceAll(censoredWords[idx],"***");
    }
    for(idx in customCensoredWords){
        inStr = inStr.replaceAll(customCensoredWords[idx],"***");
    }
    return inStr;
}

function addCensoredWord(word){
    customCensoredWords.push(word);
}
function getCensoredWords(){
    return censoredWords.concat(customCensoredWords);
}

exports.censor = censor;
exports.addCensoredWord = addCensoredWord;
exports.getCensoredWords = getCensoredWords;