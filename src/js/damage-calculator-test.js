'use strict';

const params = new URLSearchParams(window.location.href.split('?')[1]);
const inputs = new Map(params);

console.log(inputs);