'use strict';

if ('serviceWorker' in navigator) {
	let registration;

	const registerServiceWorker = async () => {
		registration = await navigator.serviceWorker.register('/service-worker.js');
	};

	registerServiceWorker();
}

if ('ResizeObserver' in window) {
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

if (document.querySelectorAll('.reel').length) {
	document.querySelectorAll('.reel').forEach((reel) => enableDragScroll(reel));

	if (document.querySelectorAll('.reel-instructions').length) {
		document.querySelectorAll('.reel-instructions').forEach((reelInstruction) => {
			const siblingReel = reelInstruction.previousSibling;
			if (siblingReel.scrollWidth > siblingReel.offsetWidth) {
				reelInstruction.setAttribute('data-state', 'visible');
			}
		});
	}
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

function enableDragScroll(el) {
	if (!el instanceof HTMLElement) return;
	if (el.querySelectorAll('*').length) {
		el.querySelectorAll('*').forEach(child => child.setAttribute('draggable', false));
	}

	const pos = { left: 0, x: 0 };
	let dragTimeout;
	let dragged = false;

	el.setAttribute('data-draggable', true);
	el.addEventListener('click', (event) => {
		if (dragged) event.preventDefault();
	});
	document.addEventListener('mousedown', handleMouseDown);

	function handleMouseDown(event) {
		if (hasAncestor(event.target, el)) {
			clearTimeout(dragTimeout);
			dragged = false;

			el.setAttribute('data-state', 'pressed');

			pos.left = el.scrollLeft;
			pos.x = event.clientX;

			document.addEventListener('mousemove', handleMouseMove);
			document.addEventListener('mouseup', handleMouseUp);
		}
	}

	function handleMouseMove(event) {
		if (hasAncestor(event.target, el)) {
			dragTimeout = setTimeout(() => { dragged = true; }, 100);

			el.setAttribute('data-state', 'dragging');

			const dx = event.clientX - pos.x;
			el.scrollLeft = pos.left - dx;

			if (Math.abs(dx) > 5) {
				dragged = true;
			}
		}
	}

	function handleMouseUp(event) {
		document.removeEventListener('mousemove', handleMouseMove);
		document.removeEventListener('mouseup', handleMouseUp);

		el.getAttribute('data-state');
		el.removeAttribute('data-state');
	}
}

function hasAncestor(el, ancestor) {
	let selection = el;
	let result = false;

	while (selection.parentNode) {
		selection = selection.parentNode;

		if (selection === ancestor) {
			result = true;
			break;
		}
	}

	return result;
}
