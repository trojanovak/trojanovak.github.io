let opacity = .3;
let timeout;

let year1991 = document.getElementById("year-1991");
let year2001 = document.getElementById("year-2001");
let year2011 = document.getElementById("year-2011");

let map = document.getElementById("svg-kraje"); //získá celé SVG
let SVGDocument = map.getSVGDocument(); //obsah SVG
let paths = SVGDocument.getElementsByTagName("path"); //všechny elementy co mají path

window.onload = function () {
    for(i=0; i < paths.length; i++){
        paths[i].style.stroke ="#4d88ff"
        paths[i].style.opacity=opacity;
        paths[i].style.fill = "#4d88ff"
    }
};

function changeOpacity(object) {
    if(opacity<1){
        opacity+= .05
        timeout=setTimeout(function(){
            changeOpacity(object);
        }, 50);
    }
    object.style.opacity = opacity
};

function increaseOpacity(event){    year1991.innerText = Math.trunc(event.target.getAttribute("POCET_OB_91"));
    year2001.innerText = Math.trunc(event.target.getAttribute("POCET_OB_01"));
    year2011.innerText = Math.trunc(event.target.getAttribute("POCET_OB_11"));
        changeOpacity(event.target)

};
function decreaseOpacity(event){
    year1991.innerText = "N/A";
    year2001.innerText = "N/A";
    year2011.innerText = "N/A";
    clearTimeout(timeout);
    event.target.style.opacity = ".3";
    opacity = .3;
}

for(i=0; i<paths.length; i++){
    paths[i].addEventListener("mouseover", increaseOpacity);
    paths[i].addEventListener("mouseout", decreaseOpacity);
}
