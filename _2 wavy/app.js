var oldValue = 0
var newValue = 0
//window.addEventListener('scroll', (e) => {
//  newValue = window.pageYOffset;
//  if (oldValue < newValue) {
//    var tickbox = document.getElementById("project-ticker");
//      
//      tickbox.style.animationName = "ticker-reverse";
//      
//    
//  } else if (oldValue > newValue) {
//    console.log("Down");
//      var tickbox = document.getElementById("project-ticker");
//      
//      tickbox.style.animationName = "ticker";
//  }
//  oldValue = newValue;
//});
$.ajax({
    success: function() {
        console.log("Ajax!!");
      newValue = window.pageYOffset;
  var tickbox = document.getElementById("project-ticker");

    if (oldValue < newValue) {
        console.log("Up");
        tickbox.style.animationName
      
    
  } else if (oldValue > newValue) {
    console.log("Down");
      
      tickbox.style.animationName = "ticker";
  }
  oldValue = newValue;
        
    }
});

window.onscroll = function (e) {  
// called when the window is scrolled.  
  newValue = window.pageYOffset;
  var tickbox = document.getElementById("project-ticker");

    if (oldValue < newValue) {
        console.log("Up");
        tickbox.style.animationName
      
    
  } else if (oldValue > newValue) {
    console.log("Down");
      
      tickbox.style.animationName = "ticker";
  }
  oldValue = newValue;
} 

//function scrollChanger() {
//    
//  newValue = window.pageYOffset;
//  if (oldValue < newValue) {
//    console.log("Up");
//  } else if (oldValue > newValue) {
//    console.log("Down");
//  }
//  oldValue = newValue;
//    
//  
//}