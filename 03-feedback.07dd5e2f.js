!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var r="Expected a function",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,d=c||s||Function("return this")(),m=Object.prototype.toString,v=Math.max,g=Math.min,p=function(){return d.Date.now()};function y(e,t,n){var o,i,a,u,f,l,c=0,s=!1,d=!1,m=!0;if("function"!=typeof e)throw new TypeError(r);function y(t){var n=o,r=i;return o=i=void 0,c=t,u=e.apply(r,n)}function O(e){return c=e,f=setTimeout(x,t),s?y(e):u}function j(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=a}function x(){var e=p();if(j(e))return T(e);f=setTimeout(x,function(e){var n=t-(e-l);return d?g(n,a-(e-c)):n}(e))}function T(e){return f=void 0,m&&o?y(e):(o=i=void 0,u)}function h(){var e=p(),n=j(e);if(o=arguments,i=this,l=e,n){if(void 0===f)return O(l);if(d)return f=setTimeout(x,t),y(l)}return void 0===f&&(f=setTimeout(x,t)),u}return t=S(t)||0,b(n)&&(s=!!n.leading,a=(d="maxWait"in n)?v(S(n.maxWait)||0,t):a,m="trailing"in n?!!n.trailing:m),h.cancel=function(){void 0!==f&&clearTimeout(f),c=0,o=l=i=f=void 0},h.flush=function(){return void 0===f?u:T(p())},h}function b(t){var n=void 0===t?"undefined":e(o)(t);return!!t&&("object"==n||"function"==n)}function S(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(o)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==m.call(t)}(t))return NaN;if(b(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=b(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var r=u.test(t);return r||f.test(t)?l(t.slice(2),r?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError(r);return b(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),y(e,t,{leading:o,maxWait:t,trailing:i})};var O,j={form:document.querySelector(".feedback-form"),input:document.querySelector(".feedback-form input"),textarea:document.querySelector(".feedback-form textarea")},x={},T="feedback-form-state";j.form.addEventListener("submit",(function(e){e.preventDefault(),console.log(x),e.currentTarget.reset(),localStorage.removeItem(T)})),j.input.addEventListener("input",e(t)((function(e){x.email=e.target.value,console.log("значение поля email:",x.email),localStorage.setItem(T,JSON.stringify(x))}),500)),j.textarea.addEventListener("input",e(t)((function(e){x.message=e.target.value,localStorage.setItem(T,JSON.stringify(x)),console.log("значение поля message:",x.message)}),500)),(O=localStorage.getItem(T))&&(console.log(O),j.input.value=JSON.parse(O).email,j.textarea.value=JSON.parse(O).message)}();
//# sourceMappingURL=03-feedback.07dd5e2f.js.map