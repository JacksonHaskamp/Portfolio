$( document ).ready(function() {
            console.log( "ready!" );
            $("#d").submit(function(e){
                e.preventDefault();
            });

});

var manifest = {};
            
function update_dropdown(){
    var inputSol = document.getElementById("inputSol").value;
    //inputSol = parseInt(inputSol, 10);
    console.dir(inputSol);
    if(inputSol in manifest){
        //update dropdown with available cameras
        var dropdown = document.getElementById("dropdown");
        dropdown.innerHTML = "";
                    
        for(var j=0; j<manifest[inputSol].length; j++){
            dropdown.innerHTML += "<option>" + manifest[inputSol][j] + "</option>"
        }
                    
                            
    }
    else{
        alert("This sol is not available"); 
    }
}
function getManifest(){
                
    var xmlHttp = new XMLHttpRequest();
                
    xmlHttp.onload = function(){
        if(xmlHttp.status == 200){
                        
            var response = xmlHttp.responseText;
                        
            //console.dir(response);
                        
            response = JSON.parse(response);
                        
            console.dir(response);
                        
            for(var i=0; i < response.photo_manifest.photos.length; i++){
                            
                var sol = response.photo_manifest.photos[i].sol;
                            
                manifest[sol] = response.photo_manifest.photos[i].cameras;
                            
            }
            console.dir(manifest);
                        
                        
        }
    };
               
     xmlHttp.open("GET", "https://api.nasa.gov/mars-photos/api/v1/manifests/curiosity?api_key=V6EVLUlzFWgU9HdCYbhaROgolTiODftNoqTrFk7w", true);
    xmlHttp.send();
                
}

function getPhotos(){
    //Gets input from sol and camera html, then grabs photos from api call
    var sol = document.getElementById("inputSol").value;
    var cam = document.getElementById("dropdown").value;
    var gallery = document.getElementById("gallery");
    
    gallery.innerHTML = "";
    
    console.dir(sol);
    console.dir(cam);
    
    var xmlHttp = new XMLHttpRequest();
                
    xmlHttp.onload = function(){
        if(xmlHttp.status == 200){
                        
            var response = xmlHttp.responseText;
                        
            //console.dir(response);
                        
            response = JSON.parse(response)["photos"];
            console.log("GetPhotos!") ;           
            console.dir(response);
            
            //console.dir(response.photos[1].img_src);
            
            for(image in response){
                var src = response[image]["img_src"];
                
                gallery.innerHTML += "<div class='mySlides'><img src='"+ src + "'alt='image' </img></div>"
            }
            
            //gallery.innerHTML += "<div><img src='"+ response.photos[1].img_src + "'alt='image' </img></div>"
            showCurrentSlide(1);            
                        
        }
    };
    
    document.getElementById("loading").innerHTML = "Loading...";
               
     xmlHttp.open("GET", "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol="+sol+ "&camera="+cam+"&api_key=V6EVLUlzFWgU9HdCYbhaROgolTiODftNoqTrFk7w", true);
    xmlHttp.send();
    
     document.getElementById("loading").innerHTML = "";
    
}
//Code referenced for slideshow: https://www.w3schools.com/howto/howto_js_slideshow_gallery.asp
var slideIndex = 0;
function showCurrentSlide(current){
    var slides = document.getElementsByClassName("mySlides");
    
    for(var i=0; i<slides.length;i++){
        slides[i].style.display = "none";
    }
    
    slides[current].style.display = "block";
}

function plusSlides(x){
    var slides = document.getElementsByClassName("mySlides");
    
    if(slideIndex + x > slides.length){
        slideIndex = 0;
    }
    else if(slideIndex + x < 0){
        slideIndex = slides.length-1;
    }
    else{
        slideIndex += x;
    }
    showCurrentSlide(slideIndex);
}

 function getRover(){
    console.log("getRover!");
    var xmlHttp = new XMLHttpRequest();
              
    xmlHttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            console.log("got in function");           
            var xmlDoc = xmlHttp.responseXML;
            console.dir(xmlDoc);
            var output= '';
            var count = 0;
            var selectedRover = document.getElementById("dataSelect").value;
            
            
            var name = xmlDoc.getElementsByTagName("name");
            var launchDate = xmlDoc.getElementsByTagName("launch_date");
            var description = xmlDoc.getElementsByTagName("description");
            
            
            for(var i=0;i<name.length; i++){
                if(name[i].textContent == selectedRover){
                    output += "<h3 class='data'>" + name[i].textContent + "</h3>"
                    break;
                }
                count++;
            }
            var Rdrop = document.getElementById("roverBox");
            
            output += "<h4 class='data'>Launch Date: "+ launchDate[count].textContent + "</h2>";
            output += "<h4 class='data'>Description: "+ description[count].textContent + "</h2>";
            Rdrop.innerHTML = output;
        }
            
           
                        
                 
        
        
    };
     console.log("loading...");
     document.getElementById("roverBox").innerHTML = "Loading...";
     xmlHttp.open("GET", "https://www.professorwergeles.com/webService.php?content=data&format=xml", true);
    xmlHttp.send();
}
















