var c = document.getElementById("clear");
var svg = document.getElementById("svg");

var x = null;
var y = null;

var clear = function(){
    while (svg.hasChildNodes()){
	svg.removeChild(svg.lastChild);
    }
    x = null;
    y = null;
}

c.addEventListener('click', clear);

var circle = function(e){
    
    var circ = document.createElementNS("http://www.w3.org/2000/svg","circle");
    circ.setAttribute("cx",e.offsetX);
    circ.setAttribute("cy",e.offsetY);
    circ.setAttribute("r","10");
    circ.setAttribute("fill","teal");
    circ.setAttribute("stroke","lightcoral");
    svg.appendChild(circ);

}

var lines = function(e){
    //tried using previous nodes but didn't work :(
    var x1;
    var y1;
    
    if (svg.hasChildNodes()){
	var prev = svg.childNodes[svg.childNodes.length-1]; //svg.lastChild didn't work
	x1 = prev.getAttribute("cx");
	y1 = prev.getAttribute("cy");
    }

    
    var line = document.createElementNS("http://www.w3.org/2000/svg","line");
    line.setAttribute("x1", x);
    line.setAttribute("y1", y);
    line.setAttribute("x2", e.offsetX);
    line.setAttribute("y2", e.offsetY);
    line.setAttribute("stroke", "seagreen");
    console.log(line);
    svg.appendChild(line);
}

svg.addEventListener('click', function(e){
    circle(e);
    if (x != null){
	lines(e);
    }
    x = e.offsetX;
    y = e.offsetY;
});
