'use strict';

document.getElementById('damage-calculator').addEventListener('change', (e) => {
	if (e.target.hasAttribute('min') && Number(e.target.value) < Number(e.target.getAttribute('min'))) {
		e.target.value = e.target.getAttribute('min');
	} else if (e.target.hasAttribute('max') && Number(e.target.value) > Number(e.target.getAttribute('max'))) {
		e.target.value = e.target.getAttribute('max');
	}
});

groupDropdowns({
	fieldset: document.getElementById('weapon-buffs'),
	group: 'optgroup',
	selector: 'optgroup[label="Bonus Effects"]'
});

groupDropdowns({
	fieldset: document.getElementById('weapon-buffs'),
	group: 'options',
	selector: '[label="Awakening Buffs"] option'
});

groupDropdowns({
	fieldset: document.getElementById('matrices'),
	group: 'options',
	selector: '[label="2-set"] option'
});

document.getElementById('matrices').addEventListener('change', (e) => {
	const chip2Fieldset = document.querySelector('fieldset#chip2');

	if (e.target.tagName.toLowerCase() === 'select') {
		if (e.target.value.endsWith('4')) {
			chip2Fieldset.disabled = true;

			e.currentTarget.querySelectorAll('[name*="chip2"]').forEach((input) => {
				const tagName = input.tagName.toLowerCase();

				if (tagName === 'select') {
					input.value = '';
				}

				if (tagName === 'input' && input.value === '0') {
					input.checked = true;
				}
			});
		} else {
			chip2Fieldset.getAttribute('disabled');
			chip2Fieldset.removeAttribute('disabled');

			if (!e.target.value) {
				document.querySelector(`input[name="${e.target.name}-star"][value="0"]`).checked = 'true';
			}
		}
	}
});

/**
 * @function groupDropdowns
 *
 * Forces a group of <select> elements to have unique values, like a group of radio buttons with the same name. When the value of a <select> changes, all the options with the same value in the sibling <select> elements are hidden using the 'hidden' attribute.
 *
 * By default, each <option> is made unique; however, by changing 'group' to 'optgroup', an entire <optgroup> can be made unique. For example, if one <select> element’s value is in the Bonus Weapon Effect <optgroup>, all sibling <select> elements are prevented from selecting any weapons under the same <optgroup>, not just the one weapon that was previously selected.
 *
 * @param {HTMLElement} fieldset the parent element that will listen for change events
 * @param {String} group 'options' will make each option unique; 'optgroup' will make an entire optgroup unique
 * @param {String} selector CSS selector for <option> or <optgroup> elements to pass into a querySelector
 */
function groupDropdowns({ fieldset, group = 'options', selector } = {}) {
	let optgroupValues;

	if (group === 'optgroup') {
		const optgroupChildren = [...fieldset.querySelectorAll(`${selector || optgroup} > *`)];

		optgroupValues = new Set();
		optgroupChildren.forEach(option => optgroupValues.add(option.value));
	}

	fieldset.addEventListener('change', (e) => {
		if (e.target.tagName.toLowerCase() !== 'select' && e.target.tagName.toLowerCase() !== 'option') {
			return;
		}

		const dropdowns = e.currentTarget.querySelectorAll('select');
		const dropdownsExceptSelected = e.currentTarget.querySelectorAll(
			[...dropdowns]
				.map(dropdown => dropdown.name)
				.filter(name => name !== e.target.name)
				.map(name => `[name="${name}"]`)
		);

		const selections = [...dropdowns]
			.map(i => stripNumber(i.value))
			.filter(i => i.length);

		if (group === 'options') {
			dropdownsExceptSelected.forEach((dropdown) => {
				const options = dropdown.querySelectorAll(selector || 'option');

				options.forEach((option) => {
				  if (selections.includes(stripNumber(option.value)) && stripNumber(option.value) !== stripNumber(dropdown.value)) {
				  	option.setAttribute('hidden', '');
				  } else {
				  	option.getAttribute('hidden');
						option.removeAttribute('hidden');
				  }
				});

				if (e.target.value && stripNumber(dropdown.value) === stripNumber(e.target.value)) {
					dropdown.value = '';
					dropdown.focus();
				}
			});
		}

		if (group === 'optgroup') {
			dropdownsExceptSelected.forEach((dropdown) => {
				const optgroup = dropdown.querySelector(selector || 'optgroup');

				if (optgroupValues.has(e.target.value)) {
					optgroup.setAttribute('hidden', '');
				} else {
					if (!selections.filter(i => optgroupValues.has(i)).length) {
						optgroup.getAttribute('hidden');
						optgroup.removeAttribute('hidden');
					}
				}

				if (optgroupValues.has(e.target.value) && optgroupValues.has(dropdown.value)) {
					dropdown.value = '';
					dropdown.focus();
				}
			});
		}
	});
}

function stripNumber(str) {
	return str.replace(/[0-9]/g, '');
}

function getCookie(name) {
	return document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)')?.pop() || '';
}
