var oldValue = 0
var newValue = 0
window.addEventListener('scroll', (e) => {
  newValue = window.pageYOffset;
  if (oldValue < newValue) {
    var document.getElementById("project-ticker");
      
    
  } else if (oldValue > newValue) {
    console.log("Down");
  }
  oldValue = newValue;
});

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