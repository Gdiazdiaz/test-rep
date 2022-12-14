function stringLength(string){
    if(string.length<1 || string.length>10){
 throw ('The string needs to be at least 1 character long and less than 10 chars');
    }
    else{
        return string.length;
    }
}

function  reverseString(string){
    let wordReve='';
      for(let i=string.length-1;i>=0;i--){
        wordReve+=string[i];
      }
  return wordReve;
    }


module.exports = {stringLength, reverseString};