/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/delete.png":
/*!************************!*\
  !*** ./src/delete.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c3fa94aab82b6f6fe9bc.png";

/***/ }),

/***/ "./src/edit.png":
/*!**********************!*\
  !*** ./src/edit.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7a8496c444fe5d926bcc.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/todoItem.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ todoItem)
/* harmony export */ });
/* harmony import */ var _edit_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit.png */ "./src/edit.png");
/* harmony import */ var _delete_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./delete.png */ "./src/delete.png");



function todoItem(name, description, priority, dueDate, complete) {
    // String String int(0->2) Date boolean
    this.item = [name, description, priority, dueDate, complete];
};

todoItem.prototype.getItem = function () { return this.item; };
todoItem.prototype.getName = function () { return this.item[0]; };
todoItem.prototype.getDescription = function () { return this.item[1]; };
todoItem.prototype.getPriority = function () { return this.item[2]; };
todoItem.prototype.getDueDate = function () { return this.item[3]; };
todoItem.prototype.isComplete = function () { return this.item[4]; };
todoItem.prototype.setName = function (value) { return this.item[0] = value; };
todoItem.prototype.setDescription = function (value) { return this.item[1] = value; };
todoItem.prototype.setPriority = function (value) { return this.item[2] = value; };
todoItem.prototype.setDueDate = function (value) { return this.item[3] = value; };
todoItem.prototype.setComplete = function (value) { return this.item[4] = value; };

// <done:checkBox> <title> - <description:huh> <dueDate> <edit btn:huh> <delete btn:huh>, <priority:color>
//
//  priority, 0 = gray, 1 = orange, 2 = red
//
//  * huh = hidden until hover
todoItem.prototype.createItemDisplay = function () {
    // Parent Node
    const displayItem = document.createElement('div');
    displayItem.classList.add('todoItem');

    // Checkbox
    const checkBox = document.createElement('input');
    checkBox.setAttribute('type', 'checkBox');
    checkBox.checked = this.isComplete();
    checkBox.addEventListener('change', () => {
        item.setComplete(checkBox.isComplete());
    });
    displayItem.appendChild(checkBox);

    // Priority
    const priority = this.getPriority();
    let classText;
    switch (priority) {
        case 1:
            classText = "pMed";
            break;
        case 2:
            classText = "pHigh";
            break;
        case 0:
        default:
            classText = "pLow";
    }
    displayItem.classList.add(classText);

    // Name
    const name = document.createElement('div');
    name.textContent = this.getName();
    displayItem.appendChild(name);

    // Description, Hidden until hover
    const description = document.createElement('div');
    description.textContent = this.getDescription();
    description.classList.add('huh');
    displayItem.appendChild(description);

    // Due Date
    const dueDate = document.createElement('input');
    dueDate.setAttribute('type', 'datetime-local');
    dueDate.value = this.getDueDate().toISOString().slice(0, 16);
    dueDate.addEventListener('change', (e) => {
        this.setDueDate(dueDate.value);
    });
    displayItem.appendChild(dueDate);

    // Edit Button, Hidden until hover
    const editButton = document.createElement('button');
    let editImg = new Image();
    editImg.src = _edit_png__WEBPACK_IMPORTED_MODULE_0__;
    editImg.classList.add('itemImg');
    editButton.appendChild(editImg);
    displayItem.appendChild(editButton);

    // Delete Button, Hidden until hover
    const deleteButton = document.createElement('button');
    let deleteImg = new Image();
    deleteImg.src = _delete_png__WEBPACK_IMPORTED_MODULE_1__;
    deleteImg.classList.add('itemImg');
    deleteButton.appendChild(deleteImg);
    displayItem.appendChild(deleteButton);

    return displayItem;
};
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9kb0l0ZW0uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCOEI7QUFDQzs7QUFFaEI7QUFDZjtBQUNBO0FBQ0E7O0FBRUEsMkNBQTJDO0FBQzNDLDJDQUEyQztBQUMzQyxrREFBa0Q7QUFDbEQsK0NBQStDO0FBQy9DLDhDQUE4QztBQUM5Qyw4Q0FBOEM7QUFDOUMsZ0RBQWdEO0FBQ2hELHVEQUF1RDtBQUN2RCxvREFBb0Q7QUFDcEQsbURBQW1EO0FBQ25ELG9EQUFvRDs7QUFFcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHNDQUFJO0FBQ3RCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isd0NBQUc7QUFDdkI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRSIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy90b2RvSXRlbS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IGVkaXQgZnJvbSAnLi9lZGl0LnBuZyc7XG5pbXBvcnQgZGVsIGZyb20gJy4vZGVsZXRlLnBuZyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvZG9JdGVtKG5hbWUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgZHVlRGF0ZSwgY29tcGxldGUpIHtcbiAgICAvLyBTdHJpbmcgU3RyaW5nIGludCgwLT4yKSBEYXRlIGJvb2xlYW5cbiAgICB0aGlzLml0ZW0gPSBbbmFtZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBkdWVEYXRlLCBjb21wbGV0ZV07XG59O1xuXG50b2RvSXRlbS5wcm90b3R5cGUuZ2V0SXRlbSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuaXRlbTsgfTtcbnRvZG9JdGVtLnByb3RvdHlwZS5nZXROYW1lID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5pdGVtWzBdOyB9O1xudG9kb0l0ZW0ucHJvdG90eXBlLmdldERlc2NyaXB0aW9uID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5pdGVtWzFdOyB9O1xudG9kb0l0ZW0ucHJvdG90eXBlLmdldFByaW9yaXR5ID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5pdGVtWzJdOyB9O1xudG9kb0l0ZW0ucHJvdG90eXBlLmdldER1ZURhdGUgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLml0ZW1bM107IH07XG50b2RvSXRlbS5wcm90b3R5cGUuaXNDb21wbGV0ZSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuaXRlbVs0XTsgfTtcbnRvZG9JdGVtLnByb3RvdHlwZS5zZXROYW1lID0gZnVuY3Rpb24gKHZhbHVlKSB7IHJldHVybiB0aGlzLml0ZW1bMF0gPSB2YWx1ZTsgfTtcbnRvZG9JdGVtLnByb3RvdHlwZS5zZXREZXNjcmlwdGlvbiA9IGZ1bmN0aW9uICh2YWx1ZSkgeyByZXR1cm4gdGhpcy5pdGVtWzFdID0gdmFsdWU7IH07XG50b2RvSXRlbS5wcm90b3R5cGUuc2V0UHJpb3JpdHkgPSBmdW5jdGlvbiAodmFsdWUpIHsgcmV0dXJuIHRoaXMuaXRlbVsyXSA9IHZhbHVlOyB9O1xudG9kb0l0ZW0ucHJvdG90eXBlLnNldER1ZURhdGUgPSBmdW5jdGlvbiAodmFsdWUpIHsgcmV0dXJuIHRoaXMuaXRlbVszXSA9IHZhbHVlOyB9O1xudG9kb0l0ZW0ucHJvdG90eXBlLnNldENvbXBsZXRlID0gZnVuY3Rpb24gKHZhbHVlKSB7IHJldHVybiB0aGlzLml0ZW1bNF0gPSB2YWx1ZTsgfTtcblxuLy8gPGRvbmU6Y2hlY2tCb3g+IDx0aXRsZT4gLSA8ZGVzY3JpcHRpb246aHVoPiA8ZHVlRGF0ZT4gPGVkaXQgYnRuOmh1aD4gPGRlbGV0ZSBidG46aHVoPiwgPHByaW9yaXR5OmNvbG9yPlxuLy9cbi8vICBwcmlvcml0eSwgMCA9IGdyYXksIDEgPSBvcmFuZ2UsIDIgPSByZWRcbi8vXG4vLyAgKiBodWggPSBoaWRkZW4gdW50aWwgaG92ZXJcbnRvZG9JdGVtLnByb3RvdHlwZS5jcmVhdGVJdGVtRGlzcGxheSA9IGZ1bmN0aW9uICgpIHtcbiAgICAvLyBQYXJlbnQgTm9kZVxuICAgIGNvbnN0IGRpc3BsYXlJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGlzcGxheUl0ZW0uY2xhc3NMaXN0LmFkZCgndG9kb0l0ZW0nKTtcblxuICAgIC8vIENoZWNrYm94XG4gICAgY29uc3QgY2hlY2tCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGNoZWNrQm94LnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja0JveCcpO1xuICAgIGNoZWNrQm94LmNoZWNrZWQgPSB0aGlzLmlzQ29tcGxldGUoKTtcbiAgICBjaGVja0JveC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgIGl0ZW0uc2V0Q29tcGxldGUoY2hlY2tCb3guaXNDb21wbGV0ZSgpKTtcbiAgICB9KTtcbiAgICBkaXNwbGF5SXRlbS5hcHBlbmRDaGlsZChjaGVja0JveCk7XG5cbiAgICAvLyBQcmlvcml0eVxuICAgIGNvbnN0IHByaW9yaXR5ID0gdGhpcy5nZXRQcmlvcml0eSgpO1xuICAgIGxldCBjbGFzc1RleHQ7XG4gICAgc3dpdGNoIChwcmlvcml0eSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICBjbGFzc1RleHQgPSBcInBNZWRcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICBjbGFzc1RleHQgPSBcInBIaWdoXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgY2xhc3NUZXh0ID0gXCJwTG93XCI7XG4gICAgfVxuICAgIGRpc3BsYXlJdGVtLmNsYXNzTGlzdC5hZGQoY2xhc3NUZXh0KTtcblxuICAgIC8vIE5hbWVcbiAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmFtZS50ZXh0Q29udGVudCA9IHRoaXMuZ2V0TmFtZSgpO1xuICAgIGRpc3BsYXlJdGVtLmFwcGVuZENoaWxkKG5hbWUpO1xuXG4gICAgLy8gRGVzY3JpcHRpb24sIEhpZGRlbiB1bnRpbCBob3ZlclxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSB0aGlzLmdldERlc2NyaXB0aW9uKCk7XG4gICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnaHVoJyk7XG4gICAgZGlzcGxheUl0ZW0uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuXG4gICAgLy8gRHVlIERhdGVcbiAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBkdWVEYXRlLnNldEF0dHJpYnV0ZSgndHlwZScsICdkYXRldGltZS1sb2NhbCcpO1xuICAgIGR1ZURhdGUudmFsdWUgPSB0aGlzLmdldER1ZURhdGUoKS50b0lTT1N0cmluZygpLnNsaWNlKDAsIDE2KTtcbiAgICBkdWVEYXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0RHVlRGF0ZShkdWVEYXRlLnZhbHVlKTtcbiAgICB9KTtcbiAgICBkaXNwbGF5SXRlbS5hcHBlbmRDaGlsZChkdWVEYXRlKTtcblxuICAgIC8vIEVkaXQgQnV0dG9uLCBIaWRkZW4gdW50aWwgaG92ZXJcbiAgICBjb25zdCBlZGl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgbGV0IGVkaXRJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICBlZGl0SW1nLnNyYyA9IGVkaXQ7XG4gICAgZWRpdEltZy5jbGFzc0xpc3QuYWRkKCdpdGVtSW1nJyk7XG4gICAgZWRpdEJ1dHRvbi5hcHBlbmRDaGlsZChlZGl0SW1nKTtcbiAgICBkaXNwbGF5SXRlbS5hcHBlbmRDaGlsZChlZGl0QnV0dG9uKTtcblxuICAgIC8vIERlbGV0ZSBCdXR0b24sIEhpZGRlbiB1bnRpbCBob3ZlclxuICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGxldCBkZWxldGVJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICBkZWxldGVJbWcuc3JjID0gZGVsO1xuICAgIGRlbGV0ZUltZy5jbGFzc0xpc3QuYWRkKCdpdGVtSW1nJyk7XG4gICAgZGVsZXRlQnV0dG9uLmFwcGVuZENoaWxkKGRlbGV0ZUltZyk7XG4gICAgZGlzcGxheUl0ZW0uYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uKTtcblxuICAgIHJldHVybiBkaXNwbGF5SXRlbTtcbn07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9