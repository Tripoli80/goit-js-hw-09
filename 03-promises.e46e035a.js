!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var c={id:e,exports:{}};return n[e]=c,o.call(c.exports,c,c.exports),c.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,n){t[e]=n},e.parcelRequired7c6=o);var c=o("h6c0i"),a={form:document.getElementsByName("form"),delay:document.getElementsByName("delay"),step:document.getElementsByName("step"),amount:document.getElementsByName("amount"),btn:document.querySelector("button")};function r(e,n){new Promise((function(t,o){var c=Math.random()>.5;setTimeout((function(){c?t("✅ Fulfilled promise ".concat(e," in ").concat(n,"ms")):o("❌ Rejected promise ".concat(e," in ").concat(n,"ms"))}),n)})).then((function(e){console.log(e),c.Notify.success(e)})).catch((function(e){console.log(e),c.Notify.failure(e)}))}a.btn.addEventListener("click",(function(e){e.preventDefault();var n=Number(a.delay[0].value),t=Number(a.step[0].value),o=Number(a.amount[0].value);console.log("start -  delay: ".concat(n,", step: ").concat(t,", amount: ").concat(o));for(var c=0;c<o;c+=1)r(c,c*t+n)}))}();
//# sourceMappingURL=03-promises.e46e035a.js.map
