!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},o={},n=t.parcelRequired7c6;null==n&&((n=function(e){if(e in r)return r[e].exports;if(e in o){var t=o[e];delete o[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,t){o[e]=t},t.parcelRequired7c6=n),n.register("kMC0W",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return o.default(e)};var r,o=(r=n("8NIkP"))&&r.__esModule?r:{default:r}})),n.register("8NIkP",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o}})),n.register("7AJDX",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}})),n.register("8CtQK",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),n.register("auk6i",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!e)return;if("string"==typeof e)return o.default(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return o.default(e,t)};var r,o=(r=n("8NIkP"))&&r.__esModule?r:{default:r}}));var u={};Object.defineProperty(u,"__esModule",{value:!0}),u.default=function(e){return l.default(e)||a.default(e)||d.default(e)||i.default()};var l=s(n("kMC0W")),a=s(n("7AJDX")),i=s(n("8CtQK")),d=s(n("auk6i"));function s(e){return e&&e.__esModule?e:{default:e}}console.log("sxsa");var f={start:document.querySelector("button[data-start]"),stop:document.querySelector("button[data-stop]"),allbtn:document.querySelectorAll("button"),body:document.querySelector("body")},c=null;function p(){if(b(f.allbtn),c)return clearInterval(c),void(c=null);c=setInterval((function(){f.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3)}function b(t){e(u)(t).map((function(e){e.hasAttribute("disabled")?e.removeAttribute("disabled"):(console.log("on att",e),e.setAttribute("disabled","disabled"))}))}f.start.addEventListener("click",p),f.stop.addEventListener("click",p),b([f.stop])}();
//# sourceMappingURL=01-color-switcher.953dd068.js.map