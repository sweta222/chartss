/*function pallindromex() {
//method1
  var revString = "";
  var input = document.getElementById("mybutton").value;
  var i = input.length;

  for (var j = i; j >=0; j--){
      revString = revString + input.charAt(j);
  }
  if(input === revString){
      alert(input + "is pallindrome");
  }
  else{
      alert(input + "isn't pallindrome");
  }
}*/

//method2
function pallindromex() {
    var input = document.getElementById("mybutton").value;
    var z = input.toLowerCase().replace(/\W/g, "");
    var t = z.split("").reverse().join("");
    if(t === input){
        alert(input + "is pallindrome");
    }
    else{
        alert(input + "isn't pallindrome");
    }
}