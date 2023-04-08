/** @format */
const imageDiv = document.querySelector("#image");
const elems = document.querySelectorAll(".elems");
elems.forEach(function (elem) {
	// console.log(img, h, w);
	elem.addEventListener("mouseenter", function () {
		let img = elem.getAttribute("data-image");
		let w = elem.getAttribute("data-width");
		let h = elem.getAttribute("data-height");
		imageDiv.style.backgroundImage = `url(${img})`;
		imageDiv.style.width = w;
		imageDiv.style.height = h;
	});
	document.addEventListener("mousemove", function (dets) {
		imageDiv.style.left = `${dets.x - 100}px`;
		imageDiv.style.top = `${dets.y - 140}px`;
		console.log(dets);
	});
});
