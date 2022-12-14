function capitalize(string){
    let flett = string[0];
    return flett.toUpperCase()+string.slice(1);
}

module.exports = capitalize;