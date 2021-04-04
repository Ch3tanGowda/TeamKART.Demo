function myFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("tk-show") == -1) {
      x.className += " tk-show";
    } else { 
      x.className = x.className.replace(" tk-show", "");
    }
  }