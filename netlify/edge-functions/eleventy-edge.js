import { EleventyEdge, precompiledAppData } from "./_generated/eleventy-edge-app.js";

export default async (request, context) => {
	try {
		let edge = new EleventyEdge('edge', {
			request,
			context,
			precompiled: precompiledAppData,
			cookies: [
				'criticalRate',
				'criticalDmg',
				'mimicPassive',
				'resonance',
				'wep1',
				'wep2',
				'wep3',
				'chip1',
				'chip1Star',
				'chip2',
				'chip2Star',
				'arcCore',
				'otherMultipliers',
				'wounded',
				'elementalResistance',
				'elementalWeakness',
				'totalDmg',
				'totalDmgFootnote'
			]
		});

		edge.config((config) => {
			config.addFilter('urldecode', value => decodeURI(value));
		});

		return await edge.handleResponse();
	} catch (e) {
		console.log('ERROR', { e });
		return context.next(e);
	}
};
