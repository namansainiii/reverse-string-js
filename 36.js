function reveseString(){
    var str = document.getElementById('reversename').value;
    var newstring ="";
    for(var i=str.length-1; i>=0; i--){
        newstring += str[i];
    }
    document.getElementById('showdata').value = newstring;
}