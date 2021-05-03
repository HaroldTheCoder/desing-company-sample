var modal = document.querySelector('#myModal');
var modalImg1 = document.querySelector('.modal-img1');
var captionText1 = document.querySelector('.img-caption1');

function openImg1() {
    var hiddenImg = document.querySelector(
		".modal-img2",
		".modal-img3",
		".modal-img4",
		".modal-img5",
		".modal-img6"
	);
    var hiddenCap = document.querySelector(
		".img-caption2",
		".img-caption3",
		".img-caption4",
		".img-caption5",
		".img-caption6"
	);
    hiddenCap.style.display = 'none'
    hiddenImg.style.display = 'none';
    modal.style.display = 'block';
    modalImg1.style.display = 'block';
    captionText1.style.display = 'block';
}

// IMAGE 2
var modalImg2 = document.querySelector(".modal-img2");
var captionText2 = document.querySelector(".img-caption2");

function openImg2() {
    var hiddenImg2 = document.querySelector(
			".modal-img1",
			".modal-img3",
			".modal-img4",
			".modal-img5",
			".modal-img6"
		);
    var hiddenCap2 = document.querySelector(
			".img-caption1",
			".img-caption3",
			".img-caption4",
			".img-caption5",
			".img-caption6"
		);
	hiddenImg2.style.display = "none";
    hiddenCap2.style.display = 'none';
	modal.style.display = "block";
	modalImg2.style.display = "block";
	captionText2.style.display = "block";
}

// IMAGE 3
var modalImg3 = document.querySelector(".modal-img3");
var captionText3 = document.querySelector(".img-caption3");

function openImg3() {
    var hiddenImg3 = document.querySelector(
		".modal-img1",
		".modal-img2",
		".modal-img4",
		".modal-img5",
		".modal-img6"
	);
	var hiddenCap3 = document.querySelector(
		".img-caption1",
		".img-caption2",
		".img-caption4",
		".img-caption5",
		".img-caption6"
	);
	hiddenImg3.style.display = "none";
	hiddenCap3.style.display = "none";
	modal.style.display = "block";
	modalImg3.style.display = "block";
	captionText3.style.display = "block";
}

// IMAGE 4 
var modalImg4 = document.querySelector(".modal-img4");
var captionText4 = document.querySelector(".img-caption4");

function openImg4() {
    var hiddenImg4 = document.querySelector(
		".modal-img1",
		".modal-img2",
		".modal-img3",
		".modal-img5",
		".modal-img6"
	);
	var hiddenCap4 = document.querySelector(
		".img-caption1",
		".img-caption2",
		".img-caption3",
		".img-caption5",
		".img-caption6"
	);
	hiddenImg4.style.display = "none";
	hiddenCap4.style.display = "none";
	modal.style.display = "block";
	modalImg4.style.display = "block";
	captionText4.style.display = "block";
}

// IMAGE 5 
var modalImg5 = document.querySelector(".modal-img5");
var captionText5 = document.querySelector(".img-caption5");

function openImg5() {
    var hiddenImg5 = document.querySelector(
		".modal-img1",
		".modal-img2",
		".modal-img3",
		".modal-img4",
		".modal-img6"
	);
	var hiddenCap5 = document.querySelector(
		".img-caption1",
		".img-caption2",
		".img-caption3",
		".img-caption5",
		".img-caption6"
	);
	hiddenImg5.style.display = "none";
	hiddenCap5.style.display = "none";
	modal.style.display = "block";
	modalImg5.style.display = "block";
	captionText5.style.display = "block";
}

// IMAGE 6
var modalImg6 = document.querySelector(".modal-img6");
var captionText6 = document.querySelector(".img-caption6");

function openImg6() {
    var hiddenImg6 = document.querySelector(
		".modal-img1",
		".modal-img2",
		".modal-img3",
		".modal-img4",
		".modal-img5"
	);
	var hiddenCap6 = document.querySelector(
		".img-caption1",
		".img-caption2",
		".img-caption3",
		".img-caption4",
		".img-caption5"
	);
	hiddenImg6.style.display = "none";
	hiddenCap6.style.display = "none";
	modal.style.display = "block";
	modalImg6.style.display = "block";
	captionText6.style.display = "block";
}
function closeImg() {
    modal.style.display = 'none';
}

// OPEN / CLOSE NAVBAR FUNCTION

 function openNav() {
	document.querySelector(".mobile-navigation").style.display = "block";

	if (document.getElementById("close").src == "icon-close.svg") {
		document.getElementById("open").src = "icon-hamburger.svg";
	} else {
		document.getElementById("close").src = "icon-close.svg";
		document.getElementById("close").style.display = "block";
		document.getElementById("open").style.display = "none";
	}

 }
 function closeNav() {
	document.querySelector(".mobile-navigation").style.display = "none";
	
	document.getElementById("open").style.display = "block";
	document.getElementById("close").style.display = "none";
 }
