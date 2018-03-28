let map = document.getElementById("svg-kraje");
let SVGDocument = map.getSVGDocument();
let paths = SVGDocument.getElementsByTagName("path");
let opacity = 0.3;

function changeOpacity(object) {
    if (opacity < 1) {
        opacity += .05;
        timeout = setTimeout(function () {
            changeOpacity(object)
        }, 50);
    }
    object.style.opacity = opacity;
}

function increaseOpacity(event) {
	changeOpacity(event.target);
}

function decreaseOpacity(event) {

}

window.onload = function() {
	for(i = 0; i < paths.length; i++) {
		paths[i].style.stroke = "#9e6400";
		paths[i].style.fill = "#d69728";
		paths[i].style.opacity = opacity;
	}

	for(j = 0; j < paths.length; j++) {
		paths[j].addEventListener ("mouseover", increaseOpacity);
		paths[j].addEventListener ("mouseout", decreaseOpacity);
	}
}