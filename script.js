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
	});
	document.addEventListener("mousemove", function (dets) {
		imageDiv.style.left = `${dets.x - 100}px`;
		imageDiv.style.top = `${dets.y - 140}px`;
		console.log(dets);
	});
});
