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
