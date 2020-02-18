"use strict";

document.addEventListener("DOMContentLoaded", function(e){
	var generated_address = "website" + Math.random().toString(16) + "@" + window.location.host;
	var a = document.createElement("a");
	a.href = "mailto:" + generated_address;
	a.classList = ["email"];
	a.appendChild(document.createTextNode(generated_address));
	document.querySelector("#hcard-applehq").appendChild(a);
})
