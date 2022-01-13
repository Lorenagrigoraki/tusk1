let divElem = document.getElementById('divEl');
console.log(divEl);
window.addEventListener('keydown', e => {
	console.log(e);
	if (e.code === "Space") {
		divElem.remove();
	}
})
