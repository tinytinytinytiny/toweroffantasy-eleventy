'use strict';

document.getElementById('damage-calculator').addEventListener('change', (e) => {
	console.table({
		target: e.target.name,
		value: e.target.value
	});
});

document.getElementById('damage-calculator').addEventListener('reset', (e) => {
	e.currentTarget.querySelectorAll('[hidden]').forEach((el) => {
		el.getAttribute('hidden');
		el.removeAttribute('hidden');
	});
});

document.getElementById('weapon-buffs').addEventListener('change', (e) => {
	const bonusEffects = new Set();
	[...e.currentTarget.querySelectorAll('optgroup[label="Bonus Effects"] > *')].map(option => bonusEffects.add(option.value));

	const dropdowns = e.currentTarget.querySelectorAll('select');
	const dropdownsExceptSelected = e.currentTarget.querySelectorAll(
		[...dropdowns]
			.map(i => i.name)
			.filter(i => i !== e.target.name).map(wep => `[name="${wep}"]`)
	);

	const selections = [...dropdowns]
		.map(i => stripNumber(i.value))
		.filter(i => i.length);

	dropdownsExceptSelected.forEach((dropdown) => {
		const bonusEffectsGroup = dropdown.querySelector(`[label="Bonus Effects"]`);

		dropdown.querySelectorAll('[label="Awakening Buffs"] option').forEach((option) => {
		  if (selections.includes(stripNumber(option.value)) && stripNumber(option.value) !== stripNumber(dropdown.value)) {
		  	option.setAttribute('hidden', '');
		  } else {
		  	option.getAttribute('hidden');
				option.removeAttribute('hidden');
		  }
		});

		if (bonusEffects.has(e.target.value)) {
			bonusEffectsGroup.setAttribute('hidden', '');
		} else {
			if (!selections.filter(i => bonusEffects.has(i)).length) {
				bonusEffectsGroup.getAttribute('hidden');
				bonusEffectsGroup.removeAttribute('hidden');
			}
		}

		if (bonusEffects.has(e.target.value) && bonusEffects.has(dropdown.value)) {
			dropdown.value = '';
			dropdown.focus();
		}

		if (e.target.value && stripNumber(dropdown.value) === stripNumber(e.target.value)) {
			dropdown.value = '';
			dropdown.focus();
		}
	});
});

const params = new Map(new URLSearchParams(window.location.href.split('?')[1]));

console.log(params);

if (params.size) {
}

function stripNumber(str) {
	return str.replace(/[0-9]/g, '');
}
