alert("Дорбый день! Наведите мышкой на элементы на странице. Если в нажмете на пробел соделжимое страницы удалится!");
let divElem = document.getElementById('divEl');
console.log(divEl);
window.addEventListener('keydown', e => {
	console.log(e);
	if (e.code === "Space") {
		divElem.remove();
	}
})
