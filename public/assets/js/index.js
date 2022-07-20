// Navigation Bar 
var navBarToggler = document.getElementsByClassName("navbar-toggler");
document.getElementById("navbar-toggler").addEventListener("mouseover", function(){
    var navBarToggler = document.getElementById("navbar-toggler");
    navBarToggler.style.backgroundColor = "yellow";
})
document.getElementById("navbar-toggler").addEventListener("mouseout", function(){
    var navBarToggler = document.getElementById("navbar-toggler");
    navBarToggler.style.backgroundColor = "";
})
// Navigation Bar 


// tile section 
let contactHome = document.querySelector(".contactHome").addEventListener("click", function(){
    window.open("contactus.html", "_self");
});

var tileBtn = document.querySelectorAll(".tile-inner-element");

for(i=0; i<tileBtn.length; i++){
    tileBtn[i].addEventListener("click", function(){
        window.open("service.html", "_self");
    });
}


var tileBtn = document.querySelectorAll(".tile-btn");

for(i=0; i<tileBtn.length; i++){
    tileBtn[i].addEventListener("click", function(){
        window.open("service.html", "_self");
    });
}


var tileBtnArrow = document.querySelectorAll(".tile-inner-element");

for(i=0; i<tileBtnArrow.length; i++){
    tileBtnArrow[i].addEventListener("mouseout", function(){
        this.style.transition = "1.5s";
    });
    tileBtnArrow[i].addEventListener("mouseover", function(){
        this.style.transition = ".5s";
    });
}

let classAdd = document.querySelectorAll("#bi");
for(i=0; i<classAdd.length; i++){
    classAdd[i].addEventListener("mouseover", function(){
        this.style.color = "white";
        this.style.transition = ".5s";
    })
    classAdd[i].addEventListener("mouseout", function(){
        this.style.color = "black";
        this.style.transition = ".8s";
    })
}
// tile section 




