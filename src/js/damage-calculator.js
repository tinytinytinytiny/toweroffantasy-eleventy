document.getElementById('damage-calculator').addEventListener('change', (e) => {
	if (e.target.hasAttribute('min') && Number(e.target.value) < Number(e.target.getAttribute('min'))) {
		e.target.value = e.target.getAttribute('min');
	} else if (e.target.hasAttribute('max') && Number(e.target.value) > Number(e.target.getAttribute('max'))) {
		e.target.value = e.target.getAttribute('max');
	}
});

if (document.querySelector('fieldset#chip1 select').value.endsWith('4')) {
	document.querySelector('fieldset#chip2').disabled = true;

	document.querySelectorAll('[name*="chip2"]').forEach((input) => {
		if (matchesTagName(input, 'select')) {
			input.value = '';
		}

		if (matchesTagName(input, 'input') && input.value === '0') {
			input.checked = true;
		}
	});
}

groupOptionCategory({
	fieldset: document.getElementById('weapon-buffs'),
	label: 'Bonus Effects'
});

groupDropdowns({
	fieldset: document.getElementById('weapon-buffs'),
	optgroup: 'Advancement Buffs'
});

groupDropdowns({
	fieldset: document.getElementById('matrices'),
	optgroup: '2-set'
});

document.getElementById('matrices').addEventListener('change', (e) => {
	const chip2Fieldset = document.querySelector('fieldset#chip2');

	if (matchesTagName(e.target, 'select')) {
		if (e.target.value.endsWith('4')) {
			chip2Fieldset.disabled = true;

			e.currentTarget.querySelectorAll('[name*="chip2"]').forEach((input) => {
				if (matchesTagName(input, 'select')) {
					input.value = '';
				}

				if (matchesTagName(input, 'input') && input.value === '0') {
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
 * @param {HTMLElement} fieldset the parent element that will listen for change events
 * @param {String} optgroup the 'label' attribute of the <optgroup> of which each <option> element is a child
 */
function groupDropdowns({ fieldset, optgroup }) {
	const dropdowns = getDropdowns(fieldset);
	const selections = dropdowns.getSelectedValues();

	/**
	 * @function hideSelectedOptions
	 * 
	 * Check the <select> element's <option> values and hide any that have already been selected.
	 * Any <option> elements whose values aren't currently selected will be made visible again.
	 * 
	 * @param {Array} selections all the <option> values that are currently selected
	 * @param {HTMLElement} dropdown the parent <select> element
	 */
	function hideSelectedOptions(selections, dropdown) {
		const options = dropdown.querySelectorAll(`[label="${optgroup}"] option`);

		const valueAlreadySelected = (option) => Boolean(
			selections.includes(stripNumber(option.value))
			&& stripNumber(option.value) !== stripNumber(dropdown.value)
		);

		options.forEach((option) => {
			if (valueAlreadySelected(option)) {
				hide(option);
			} else {
				unhide(option);
			}
		});
	}

	dropdowns.getAll().forEach((dropdown) => {
		const siblingDropdowns = dropdowns.exclude(dropdown);

		siblingDropdowns.forEach((sibling) => hideSelectedOptions(selections, sibling));
	});

	fieldset.addEventListener('change', (e) => {
		if (!matchesTagName(e.target, 'select') && !matchesTagName(e.target, 'option')) {
			return;
		}

		const dropdowns = getDropdowns(e.currentTarget);
		const dropdownsExceptSelected = dropdowns.exclude(e.target);
		const selections = dropdowns.getSelectedValues();

		dropdownsExceptSelected.forEach((dropdown) => {
			hideSelectedOptions(selections, dropdown);

			// in case hideSelectedOptions() fails, clear the values of sibling <select>s if their values matches the current selection
			if (
				e.target.value
				&& stripNumber(dropdown.value) === stripNumber(e.target.value)
			) {
				dropdown.value = '';
				dropdown.focus();
			}
		});
	});
}

/**
 * @function groupOptionCategory
 *
 * A variant of the groupDropdowns function that makes <optgroup> elements unique.
 *
 * For example, if one <select> element’s value is in the Bonus Weapon Effect <optgroup>, all sibling <select> elements are prevented from selecting any weapons under the same <optgroup>, not just the one weapon that was previously selected.
 *
 * @param {HTMLElement} fieldset the parent element that will listen for change events
 * @param {String} label the 'label' attribute of the <optgroup>
 */
function groupOptionCategory({ fieldset, label }) {
	const optgroupChildren = [...fieldset.querySelectorAll(`optgroup[label="${label}"] > option`)];
	const optgroupValues = new Set();

	optgroupChildren.forEach(option => optgroupValues.add(option.value));

	const dropdowns = getDropdowns(fieldset);
	const selections = dropdowns.getSelectedValues();

	dropdowns.getAll().forEach((dropdown) => {
		const siblingDropdowns = dropdowns.exclude(dropdown);

		// check all sibling <select> elements for <optgroup>s that contain <option>s with values that match the current selection
		siblingDropdowns.forEach((sibling) => {
			const siblingOptgroup = sibling.querySelector(`optgroup[label="${label}"]`);
			const siblingOptgroupChildren = siblingOptgroup.querySelectorAll('option');

			if (
				optgroupValues.has(stripNumber(sibling.value))
				&& optgroupValues.has(dropdown.value)
			) {
				hide(siblingOptgroup);
				siblingOptgroupChildren.forEach((option) => hide(option));
			} else {
				const selectedOptgroupValues = selections.filter(selection => optgroupValues.has(selection));
				if (!selectedOptgroupValues.length) {
					unhide(siblingOptgroup);
					siblingOptgroupChildren.forEach((option) => unhide(option));
				}
			}
		});
	});

	fieldset.addEventListener('change', (e) => {
		if (!matchesTagName(e.target, 'select') && !matchesTagName(e.target, 'option')) {
			return;
		}

		const dropdowns = getDropdowns(e.currentTarget);
		const dropdownsExceptSelected = dropdowns.exclude(e.target);
		const selections = dropdowns.getSelectedValues();

		dropdownsExceptSelected.forEach((dropdown) => {
			const optgroup = dropdown.querySelector(`optgroup[label="${label}"]`);
			const optgroupChildren = optgroup.querySelectorAll('option');

			if (optgroupValues.has(stripNumber(e.target.value))) {
				hide(optgroup);
				optgroupChildren.forEach((option) => hide(option));
			} else {
				const selectedOptgroupValues = selections.filter(selection => optgroupValues.has(selection));
				if (!selectedOptgroupValues.length) {
					unhide(optgroup);
					optgroupChildren.forEach((option) => unhide(option));
				}
			}

			if (
				optgroupValues.has(e.target.value)
				&& optgroupValues.has(dropdown.value)
			) {
				dropdown.value = '';
				dropdown.focus();
			}
		});
	});
}

function getDropdowns(parent) {
	const dropdowns = parent.querySelectorAll('select');

	return {
		getAll: () => dropdowns,
		getSelectedValues: () =>
			[...dropdowns]
				.map(dropdown => stripNumber(dropdown.value))
				.filter(i => i.length), // filters out blank array entries
		exclude: (exclusion) =>
			parent.querySelectorAll(
				[...dropdowns]
					.map(dropdown => dropdown.name)
					.filter(name => name !== exclusion.name)
					.map(name => `[name="${name}"]`)
			)
	};
}

function matchesTagName(element, tagName) {
	return Boolean(element.tagName.toLowerCase() === tagName.toLowerCase());
}

function stripNumber(str) {
	return str.replace(/[0-9]/g, '');
}

function hide(el) {
	el.setAttribute('hidden', '');
	el.setAttribute('disabled', '');
}

function unhide(el) {
	el.getAttribute('hidden');
	el.removeAttribute('hidden');
	el.getAttribute('disabled');
	el.removeAttribute('disabled');
}
