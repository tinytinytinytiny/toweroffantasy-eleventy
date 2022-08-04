if ('querySelectorAll' in document && 'matchMedia' in window) {
	const mq = window.matchMedia('(min-height: 700px) and (min-width: 1024px)');

	if (mq.matches) {
		document.querySelector('main').querySelectorAll('details:not([data-collapse="always"])').forEach((details) => {
			details.setAttribute('open', '');
		});
	}
}
