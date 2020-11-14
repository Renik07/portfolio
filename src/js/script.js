/* hamburger menu */
const hamburger = document.querySelector('.hamburger'),
			menu = document.querySelector('.menu'),
			closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
	menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
	menu.classList.remove('active');
});
/*  */

/* parallax */

(function() {
	document.addEventListener("mousemove", parallax);
	const elem = document.querySelector(".promo");

	function parallax(e) {
			let _w = window.innerWidth/2;
			let _h = window.innerHeight/2;
			let _mouseX = e.clientX;
			let _mouseY = e.clientY;
			let _parallax1 = `${50 - (_mouseX - _w) * 0.01}% ${50 - (_mouseY - _h) * 0.01}%`;
			let _parallax2 = `${50 - (_mouseX - _w) * 0.002}% ${50 - (_mouseY - _h) * 0.01}%`;
			let _parallax3 = `${50 - (_mouseX - _w) * 0.001}% ${50 - (_mouseY - _h) * 0.01}%`;
			let _parallax4 = `${50 - (_mouseX - _w) * 0.015}% ${50 - (_mouseY - _h) * 0.015}%`;
			let _parallax5 = `${50 - (_mouseX - _w) * 0.04}% ${50 - (_mouseY - _h) * 0.04}%`;
			let x = `${_parallax5}, ${_parallax4}, ${_parallax3}, ${_parallax2}, ${_parallax1}`;

			elem.style.backgroundPosition = x;
	}
})();
/*  */

/* progress bar */

const percent = document.querySelectorAll('.skills__progress-rating'),
			lines = document.querySelectorAll('.skills__progress-line span');

percent.forEach((item, i) => {
	lines[i].style.width = item.innerHTML;
});
/*  */

