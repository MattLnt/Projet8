const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]



let index = 0;

const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");

//const dots = document.querySelector(".dots");  a revoir

//slides.forEach(slide => { a revoir
	
//});

function ChangeSlide(sens) {

//let currentDot = document.querySelector(".dots .dot:nth-child("+(index+1)+")");

	document.querySelector(".dots .dot:nth-child("+(index+1)+")").classList.remove("dot_selected");
	index = index + sens;

	if (index > (slides.length-1))  
		index = 0;
	
	if (index < 0)
		index = slides.length -1;

	//let imageElement = document.getElementById('slide-image');
	//let textElement = document.getElementById('slide-tagline');

	document.querySelector(".dots .dot:nth-child("+(index+1)+")").classList.add("dot_selected")
	document.getElementById('slide-image').src = "assets/images/slideshow/" + slides[index].image;
	document.getElementById('slide-tagline').innerHTML = slides[index].tagLine;

	//imageElement.src = "assets/images/slideshow/" + slides[index].image;
	//textElement.innerHTML = slides[index].tagLine;
}

//setInterval ("ChangeSlide(1)" , 4000 );

arrowLeft.addEventListener("click", (event) => {

	ChangeSlide(-1);

});

arrowRight.addEventListener("click", (event) => {
 
	ChangeSlide(1);

});

