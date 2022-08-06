if ('serviceWorker' in navigator) {
	let registration;

	const registerServiceWorker = async () => {
		registration = await navigator.serviceWorker.register('/service-worker.js');
	};

	registerServiceWorker();
}

if (!supportsFlexGap()) {
	document.documentElement.setAttribute('data-flex-gap', 'false');
}

function supportsFlexGap() {
	if ('localStorage' in window && localStorage.getItem('supportsFlexGap')) {
		return Boolean(localStorage.getItem('supportsFlexGap'));
	}

	// create flex container with row-gap set
	var flex = document.createElement('div');
	flex.style.display = 'flex';
	flex.style.position = 'absolute';
	flex.style.flexDirection = 'column';
	flex.style.rowGap = '1px';

	// create two, elements inside it
	flex.appendChild(document.createElement('div'));
	flex.appendChild(document.createElement('div'));

	// append to the DOM (needed to obtain scrollHeight)
	document.body.appendChild(flex);
	var isSupported = flex.scrollHeight === 1; // flex container should be 1px high from the row-gap
	flex.parentNode.removeChild(flex);

	if ('localStorage' in window) {
		localStorage.setItem('supportsFlexGap', isSupported);
	}

	return isSupported;
}
