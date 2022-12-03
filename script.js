
function calculate(){
var statValue = document.getElementById("stat").value
var dampValue = document.getElementById("damp").value
var consValue = document.getElementById("const").value
var stat = parseInt(statValue)
var damp = parseInt(dampValue)
var cons = parseInt(consValue)

var operations = 9;

		if (stat < 100) {
		document.getElementById("results").innerHTML = "Results: <br> (stat+upgrade) <br> <kolor class='green'>" + stat + " -> " + Math.floor((stat + cons + ((100-stat)/10)))
		stat = Math.floor((stat + cons + ((100-stat)/10)))
		
		} else	{
		document.getElementById("results").innerHTML = "Results: <br> (stat+upgrade) <br> <kolor class='green'>" + stat + " -> " + Math.floor((stat + cons))
		stat = Math.floor((stat + cons))
		
		}


	for (var i = 0; i < operations; i++) {
		if (stat < 100) {
		document.getElementById("results").innerHTML = document.getElementById("results").innerHTML + "<br> <kolor class='blue'>" + stat + " -> "+ Math.floor((stat + cons + ((100-stat)/10)))
		stat = Math.floor((stat + cons + ((100-stat)/10)))
		
		} else	{
		document.getElementById("results").innerHTML = document.getElementById("results").innerHTML + "<br> <kolor class='blue'>" + stat + " -> "+ Math.floor((stat + cons))
		stat = Math.floor((stat + cons))
		}
	}
}