function randomize() {
  for (var i = rando.children.length; i >= 0; i--){
 rando.appendChild(rando.children[Math.random() * i | 0]);
}
}

function makeVis(j) {
	var photo = rando.children[j].firstElementChild;
	setTimeout(function() { photo.classList.add("visible"); }, 700 * j);
}

function sequentize(){
for (var j = 0; j <= rando.children.length; ++j)
   makeVis(j);
}

var rando = document.getElementById('burningman'), waiter;

function fsort() {
randomize();
sequentize();
}

window.onresize = function() {
  clearTimeout(waiter);
  waiter = setTimeout(fsort, 1000);
}

fsort();


var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" w3-white", "");
  }
  x[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " w3-white";
}
