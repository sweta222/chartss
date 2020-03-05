  const mySong = document.querySelector('h1');
  //alert("hello world");
  mySong.textContent = 'Hello World!';

  function myFunction() {
  //method1
  
  //   var revString = "";
  //   var input = document.getElementById("mybutton").value;
  //   var i = input.length;

  //   for (var j = i; j >=0; j--){
  //        revString = revString  + input.charAt(j);
  //   }
  //  if(input === revString){
  //    alert(input + "is pall");
  //  }
  //  else{
  //    alert(input + "isn't pall");
  //  }

  //method2
  var input = document.getElementById("mybutton").value;
  var z = input.toLowerCase().replace(/\W/g, "");
  var t = z.split("").reverse().join("");
  if(t === input){
    alert(input+ "is pallindrome");
  }
  else{
    alert(input+ "isnt pallindrome");
  }
  }