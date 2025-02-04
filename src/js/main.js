window.addEventListener("load", () => {
	if ("serviceWorker" in navigator) {
		navigator.serviceWorker.register("/service-worker.js").then(
			(registration) =>
				console.log(
					"Service worker registration succeeded:",
					registration,
				),
			(error) =>
				console.error(
					`Service worker registration failed: ${error}`,
				),
		);

		if (navigator.serviceWorker.controller) {
			navigator.serviceWorker.controller.postMessage("cleanup");
		}
	}
});

(function () {
	if (!supportsFlexGap()) {
		document.documentElement.setAttribute('data-flex-gap', 'false');
	}

	function supportsFlexGap() {
		if (supportsLocalStorage && localStorage.getItem('supportsFlexGap')) {
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

		if (supportsLocalStorage) {
			localStorage.setItem('supportsFlexGap', isSupported);
		}

		return isSupported;
	}
})();
