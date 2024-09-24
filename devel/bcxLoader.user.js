// ==UserScript==
// @name         StrictBCX - Bondage Club Extended (Loader)
// @namespace    BCX
// @version      1.0.5
// @description  Loader of Jomshir's "Bondage Club Extended" mod with the STRICT modification by Kink Side Of Moon
// @author       Jomshir98/Kink Side of Moon
// @include      /^https:\/\/(www\.)?bondageprojects\.elementfx\.com\/R\d+\/(BondageClub|\d+)(\/((index|\d+)\.html)?)?$/
// @include      /^https:\/\/(www\.)?bondage-europe\.com\/R\d+\/(BondageClub|\d+)(\/((index|\d+)\.html)?)?$/
// @homepage     https://github.com/kinksideofthemoon/StrictBCX.github.io
// @source       https://github.com/kinksideofthemoon/StrictBCX.github.io
// @downloadURL  https://github.com/kinksideofthemoon/StrictBCX.github.io
// @run-at       document-end
// @grant        none
// ==/UserScript==

// eslint-disable-next-line no-restricted-globals

!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="e9194e80-955d-59df-b14e-3537e1573d1d")}catch(e){}}();
setTimeout(
	function () {
		if (window.BCX_Loaded === undefined) {
			const n = document.createElement("script");
			n.setAttribute("language", "JavaScript");
			n.setAttribute("crossorigin", "anonymous");
			n.setAttribute("src", "https://kinksideofthemoon.github.io/StrictBCX/devel/bcx.js");
			n.onload = () => n.remove();
			document.head.appendChild(n);
		}
	},
	2000
);

//# debugId=e9194e80-955d-59df-b14e-3537e1573d1d
