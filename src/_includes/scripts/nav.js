(function handleNav() {
	var nav = document.getElementsByClassName('nav')[0];
	var navContentsTemplate = document.getElementById('nav-contents');
	var details = ('content' in navContentsTemplate) ?
		navContentsTemplate.content.firstElementChild.cloneNode(true) :
		navContentsTemplate.getElementsByTagName('details')[0].cloneNode(true);

	details.style.opacity = '0';

	while (nav.childNodes.length) {
		nav.removeChild(nav.childNodes[0]);
	}

	nav.appendChild(details);

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
			details.getAttribute('open');
			details.removeAttribute('open');
			nav.setAttribute('data-state', 'collapsed');
		}

		function openMenu() {
			details.setAttribute('open', '');
			nav.setAttribute('data-state', 'expanded');
		}
	}

	details.style.opacity = '';
})();

function getScrollbarWidth() {
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

	return scrollbarWidth;
}
