// Sticky nav
const header = document.querySelector('.header');
const headerHeight = header.getBoundingClientRect().height;
const firstSection = document.querySelector('.first');

function getStickyHeader(entries) {
	const entry = entries[0];
	if (!entry.isIntersecting) {
		header.classList.add('sticky');
	} else {
		header.classList.remove('sticky');
	}
}

const headerObserver = new IntersectionObserver(getStickyHeader, {
	root: null,
	threshold: 0,
	rootMargin: `-${headerHeight}px`
});

headerObserver.observe(firstSection);

// Smooth page nav
document.querySelector('.header__row').addEventListener('click', function (e) {
	e.preventDefault();

	if (e.target.closest('.header__logo')) {
		const href = e.target.closest('.header__logo').getAttribute('href');
		document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
	}

	if (e.target.classList.contains('nav__link')) {
		const href = e.target.getAttribute('href');
		document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
	}
});

// Tabs
const tabs = document.querySelectorAll('.decisions__tab');
const tabContainer = document.querySelector('.decisions__tabs');
const tabContentText = document.querySelectorAll('.decisions__content-text');

tabContainer.addEventListener('click', function (e) {
	const clickedBtn = e.target.closest('.decisions__tab');

	if (!clickedBtn) return;

	tabs.forEach(tab => tab.classList.remove('decisions__tab--active'));
	clickedBtn.classList.add('decisions__tab--active');

	tabContentText.forEach(content =>
		content.classList.remove('decisions__content-text--active')
	);

	document
		.querySelector(`.decisions__content-text--${clickedBtn.dataset.tab}`)
		.classList.add('decisions__content-text--active');
});