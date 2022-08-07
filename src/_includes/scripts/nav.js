if ('querySelector' in document) {
	const nav = document.querySelector('.nav');
	const details = document.querySelector('.nav__widget');

	if ('ResizeObserver' in window) {
		const scrollbarWidth = getScrollbarWidth();

		if (nav.offsetWidth >= document.body.clientWidth) {
			forceCloseMenu();
		} else {
			openMenu();
		}

		let prevInlineSize;

		const resizeObserver = new ResizeObserver((entries) => {
			for (const entry of entries) {
				if (entry.borderBoxSize) {
					const borderBoxSize = Array.isArray(entry.borderBoxSize) ? entry.borderBoxSize[0] : entry.borderBoxSize;

					if (borderBoxSize.inlineSize !== prevInlineSize) {
						prevInlineSize = borderBoxSize.inlineSize;
						handleWidthChange(borderBoxSize.inlineSize);
					}
				} else {
					if (entry.contentRect.width !== prevInlineSize) {
						prevInlineSize = entry.contentRect.width;
						handleWidthChange(entry.contentRect.width);
					}
				}
			}
		});

		resizeObserver.observe(nav);

		function handleWidthChange(width) {
			if ('matchMedia' in window) {
				if (window.matchMedia(`(max-width: ${width + scrollbarWidth}px)`).matches) {
					forceCloseMenu();
				} else {
					openMenu();
				}
			} else {
				if (width < document.body.clientWidth) {
					openMenu();
				} else {
					forceCloseMenu();
				}
			}
		}

		function forceCloseMenu() {
			if (details.hasAttribute('open')) {
				details.getAttribute('open');
				details.removeAttribute('open');
			}
			nav.setAttribute('data-state', 'collapsed');
		}

		function openMenu() {
			if (nav.getAttribute('data-state') !== 'expanded') {
				nav.setAttribute('data-state', 'expanded');
				details.setAttribute('open', '');
			}
		}
	}
}

function getScrollbarWidth() {
	const supportsLocalStorage = ('localStorage' in window);

	if (supportsLocalStorage && localStorage.getItem('scrollbarWidth')) {
		return localStorage.getItem('scrollbarWidth');
	}

	// Creating invisible container
	const outer = document.createElement('div');
	outer.style.visibility = 'hidden';
	outer.style.overflow = 'scroll'; // forcing scrollbar to appear
	outer.style.msOverflowStyle = 'scrollbar'; // needed for WinJS apps
	document.body.appendChild(outer);

	// Creating inner element and placing it in the container
	const inner = document.createElement('div');
	outer.appendChild(inner);

	// Calculating difference between container's full width and the child width
	const scrollbarWidth = (outer.offsetWidth - inner.offsetWidth);

	// Removing temporary elements from the DOM
	outer.parentNode.removeChild(outer);

	if (supportsLocalStorage) {
		localStorage.setItem('scrollbarWidth', scrollbarWidth);
	}

	return scrollbarWidth;
}
