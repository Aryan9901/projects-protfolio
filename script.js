/** @format */
const imageDiv = document.querySelector("#image");
const elems = document.querySelectorAll(".elems");
const main = document.querySelector("#main");
const txt = document.querySelectorAll("h2");
elems.forEach(function (elem) {
	// console.log(img, h, w);
	elem.addEventListener("mouseenter", function () {
		let img = elem.getAttribute("data-image");
		let w = elem.getAttribute("data-width");
		let h = elem.getAttribute("data-height");
		let c = elem.getAttribute("data-color");
		var t = elem.getAttribute("data-text");
		imageDiv.style.backgroundImage = `url(${img})`;
		imageDiv.style.width = w;
		imageDiv.style.height = h;
		main.style.backgroundColor = c;
		txt.forEach(function (el) {
			el.style.color = t;
		});
		elem.addEventListener("click", function () {
			// console.log("hii");
			// imageDiv.style.width = "100%";
			// imageDiv.style.height = "100%";
			// imageDiv.style.top = "0%";
			// imageDiv.style.left = "0%";
			// imageDiv.style.transform = `rotate(0deg)`;
			gsap.to("#image", {
				height: "100%",
				width: "100%",
				top: 0,
				duration: 0.7,
				left: 0,
				ease: Expo.easeInOut,
				rotate: "0deg",
			});
		});
	});
	document.addEventListener("mousemove", function (dets) {
		imageDiv.style.left = `${dets.x - 100}px`;
		imageDiv.style.top = `${dets.y - 140}px`;
		// console.log(dets);
	});
});
// cursor change
var outercursor = document.querySelector("#cursor");
var innercursor = document.querySelector("#curcent");
function cursorchange() {
	main.addEventListener("mousemove", function (det) {
		outercursor.style.left = `${det.pageX}px`;
		outercursor.style.top = `${det.pageY}px`;
	});
}
cursorchange();

// overlay animation
var tl = gsap.timeline({
	repeat: -1,
});
tl.to("#overlay", {
	left: 0,
	delay: 1,
	duration: 1.5,
	ease: Expo.easeInOut.power2,
}).to("#overlay", {
	left: "-100%",
	duration: 1.5,
	ease: Expo.easeInOut.power2,
});
