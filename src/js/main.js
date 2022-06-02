'use strict';

if ('querySelector' in document && 'ResizeObserver' in window) {
	const nav = document.querySelector('.nav');
	const details = document.querySelector('details');

	if (nav.offsetWidth > window.innerWidth * 0.9) {
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
		if (width < window.innerWidth * 0.9) {
			openMenu();
		} else {
			forceCloseMenu();
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

if (!isSupportsFlexGap()) {
	document.documentElement.setAttribute('data-flex-gap', 'false');
}

function isSupportsFlexGap() {
	// create flex container with row-gap set
	var flex = document.createElement("div");
	flex.style.display = "flex";
	flex.style.flexDirection = "column";
	flex.style.rowGap = "1px";

	// create two, elements inside it
	flex.appendChild(document.createElement("div"));
	flex.appendChild(document.createElement("div"));

	// append to the DOM (needed to obtain scrollHeight)
	document.body.appendChild(flex);
	var isSupported = flex.scrollHeight === 1; // flex container should be 1px high from the row-gap
	flex.parentNode.removeChild(flex);

	return isSupported;
}
