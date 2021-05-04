// OPEN MODAL FUNCTIONS 

var modal = document.getElementById('myModal'); 
var images = document.getElementsByClassName('img-showcase');
var modalImg = document.getElementById('img01');
var captionText = document.getElementById('caption');


for (var i = 0; i < images.length; i++) {
  var img = images[i];

  img.onclick = function(evt) {
    modal.style.display = 'block';
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }
}

//CLOSE MODAL FUNCTIONS 

var span = document.getElementsByClassName('close-button')[0]; 
span.onclick = function() {
	modal.style.display = 'none'; 
}


// OPEN - CLOSE NAVBAR FUNCTION

 function openNav() {
	document.querySelector('.mobile-navigation').style.display = 'block';

	if (document.getElementById("close").src == '/images/icon-close.svg') {
		document.getElementById("open").src = '/images/icon-hamburger.svg';
	} else {
		document.getElementById("close").src = '/images/icon-close.svg';
		document.getElementById("close").style.display = 'block';
		document.getElementById("open").style.display = 'none';
	}

 }
 function closeNav() {
	document.querySelector('.mobile-navigation').style.display = 'none';
	
	document.getElementById('open').style.display = 'block';
	document.getElementById('close').style.display = 'none';
 }
