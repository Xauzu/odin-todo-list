/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/todoItem.js":
/*!*************************!*\
  !*** ./src/todoItem.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
//  priority, 0 = white, 1 = yellow, 2 = red
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
    description.textContent = '- ' + this.getDescription();
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

/***/ }),

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
/*!**********************************!*\
  !*** ./src/displayController.js ***!
  \**********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ displayController)
/* harmony export */ });
/* harmony import */ var _todoItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoItem */ "./src/todoItem.js");


function displayController(display, projectText, todoContent) {
    this.display = display;
    this.projectText = projectText;
    this.todoContent = todoContent;
};

displayController.prototype.setup = function () {
    this.display = document.querySelector('#content');

    this.projectText = document.querySelector('#project-text');
    if (!this.projectText) {
        this.projectText = document.createElement('div');
        this.projectText.id = 'project-text';
        this.display.appendChild(this.projectText);
    }

    this.todoContent = document.querySelector('#todo-content');
    if (!this.todoContent) {
        this.todoContent = document.createElement('div');
        this.todoContent.id = 'todo-content';
        this.display.appendChild(this.todoContent);
    }
}
displayController.prototype.changeProjectName = function (title) { this.projectText.textContent = title; };
displayController.prototype.loadProject = function (project) {
    this.changeProjectName(project['name']);
    // Todo: Other code here 
    const data = project['data'];

    data.forEach(item => {
        this.todoContent.appendChild(item.createItemDisplay());
    });
};
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzcGxheUNvbnRyb2xsZXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUE4QjtBQUNDOztBQUVoQjtBQUNmO0FBQ0E7QUFDQTs7QUFFQSwyQ0FBMkM7QUFDM0MsMkNBQTJDO0FBQzNDLGtEQUFrRDtBQUNsRCwrQ0FBK0M7QUFDL0MsOENBQThDO0FBQzlDLDhDQUE4QztBQUM5QyxnREFBZ0Q7QUFDaEQsdURBQXVEO0FBQ3ZELG9EQUFvRDtBQUNwRCxtREFBbUQ7QUFDbkQsb0RBQW9EOztBQUVwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isc0NBQUk7QUFDdEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQix3Q0FBRztBQUN2QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM1RkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2xCaUM7O0FBRWxCO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtRUFBbUU7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTCxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvdG9kb0l0ZW0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL2Rpc3BsYXlDb250cm9sbGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBlZGl0IGZyb20gJy4vZWRpdC5wbmcnO1xuaW1wb3J0IGRlbCBmcm9tICcuL2RlbGV0ZS5wbmcnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b2RvSXRlbShuYW1lLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIGR1ZURhdGUsIGNvbXBsZXRlKSB7XG4gICAgLy8gU3RyaW5nIFN0cmluZyBpbnQoMC0+MikgRGF0ZSBib29sZWFuXG4gICAgdGhpcy5pdGVtID0gW25hbWUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgZHVlRGF0ZSwgY29tcGxldGVdO1xufTtcblxudG9kb0l0ZW0ucHJvdG90eXBlLmdldEl0ZW0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLml0ZW07IH07XG50b2RvSXRlbS5wcm90b3R5cGUuZ2V0TmFtZSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuaXRlbVswXTsgfTtcbnRvZG9JdGVtLnByb3RvdHlwZS5nZXREZXNjcmlwdGlvbiA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuaXRlbVsxXTsgfTtcbnRvZG9JdGVtLnByb3RvdHlwZS5nZXRQcmlvcml0eSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuaXRlbVsyXTsgfTtcbnRvZG9JdGVtLnByb3RvdHlwZS5nZXREdWVEYXRlID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5pdGVtWzNdOyB9O1xudG9kb0l0ZW0ucHJvdG90eXBlLmlzQ29tcGxldGUgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLml0ZW1bNF07IH07XG50b2RvSXRlbS5wcm90b3R5cGUuc2V0TmFtZSA9IGZ1bmN0aW9uICh2YWx1ZSkgeyByZXR1cm4gdGhpcy5pdGVtWzBdID0gdmFsdWU7IH07XG50b2RvSXRlbS5wcm90b3R5cGUuc2V0RGVzY3JpcHRpb24gPSBmdW5jdGlvbiAodmFsdWUpIHsgcmV0dXJuIHRoaXMuaXRlbVsxXSA9IHZhbHVlOyB9O1xudG9kb0l0ZW0ucHJvdG90eXBlLnNldFByaW9yaXR5ID0gZnVuY3Rpb24gKHZhbHVlKSB7IHJldHVybiB0aGlzLml0ZW1bMl0gPSB2YWx1ZTsgfTtcbnRvZG9JdGVtLnByb3RvdHlwZS5zZXREdWVEYXRlID0gZnVuY3Rpb24gKHZhbHVlKSB7IHJldHVybiB0aGlzLml0ZW1bM10gPSB2YWx1ZTsgfTtcbnRvZG9JdGVtLnByb3RvdHlwZS5zZXRDb21wbGV0ZSA9IGZ1bmN0aW9uICh2YWx1ZSkgeyByZXR1cm4gdGhpcy5pdGVtWzRdID0gdmFsdWU7IH07XG5cbi8vIDxkb25lOmNoZWNrQm94PiA8dGl0bGU+IC0gPGRlc2NyaXB0aW9uOmh1aD4gPGR1ZURhdGU+IDxlZGl0IGJ0bjpodWg+IDxkZWxldGUgYnRuOmh1aD4sIDxwcmlvcml0eTpjb2xvcj5cbi8vXG4vLyAgcHJpb3JpdHksIDAgPSB3aGl0ZSwgMSA9IHllbGxvdywgMiA9IHJlZFxuLy9cbi8vICAqIGh1aCA9IGhpZGRlbiB1bnRpbCBob3ZlclxudG9kb0l0ZW0ucHJvdG90eXBlLmNyZWF0ZUl0ZW1EaXNwbGF5ID0gZnVuY3Rpb24gKCkge1xuICAgIC8vIFBhcmVudCBOb2RlXG4gICAgY29uc3QgZGlzcGxheUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXNwbGF5SXRlbS5jbGFzc0xpc3QuYWRkKCd0b2RvSXRlbScpO1xuXG4gICAgLy8gQ2hlY2tib3hcbiAgICBjb25zdCBjaGVja0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgY2hlY2tCb3guc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrQm94Jyk7XG4gICAgY2hlY2tCb3guY2hlY2tlZCA9IHRoaXMuaXNDb21wbGV0ZSgpO1xuICAgIGNoZWNrQm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgaXRlbS5zZXRDb21wbGV0ZShjaGVja0JveC5pc0NvbXBsZXRlKCkpO1xuICAgIH0pO1xuICAgIGRpc3BsYXlJdGVtLmFwcGVuZENoaWxkKGNoZWNrQm94KTtcblxuICAgIC8vIFByaW9yaXR5XG4gICAgY29uc3QgcHJpb3JpdHkgPSB0aGlzLmdldFByaW9yaXR5KCk7XG4gICAgbGV0IGNsYXNzVGV4dDtcbiAgICBzd2l0Y2ggKHByaW9yaXR5KSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIGNsYXNzVGV4dCA9IFwicE1lZFwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIGNsYXNzVGV4dCA9IFwicEhpZ2hcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDA6XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBjbGFzc1RleHQgPSBcInBMb3dcIjtcbiAgICB9XG4gICAgZGlzcGxheUl0ZW0uY2xhc3NMaXN0LmFkZChjbGFzc1RleHQpO1xuXG4gICAgLy8gTmFtZVxuICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuYW1lLnRleHRDb250ZW50ID0gdGhpcy5nZXROYW1lKCk7XG4gICAgZGlzcGxheUl0ZW0uYXBwZW5kQ2hpbGQobmFtZSk7XG5cbiAgICAvLyBEZXNjcmlwdGlvbiwgSGlkZGVuIHVudGlsIGhvdmVyXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9ICctICcgKyB0aGlzLmdldERlc2NyaXB0aW9uKCk7XG4gICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnaHVoJyk7XG4gICAgZGlzcGxheUl0ZW0uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuXG4gICAgLy8gRHVlIERhdGVcbiAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBkdWVEYXRlLnNldEF0dHJpYnV0ZSgndHlwZScsICdkYXRldGltZS1sb2NhbCcpO1xuICAgIGR1ZURhdGUudmFsdWUgPSB0aGlzLmdldER1ZURhdGUoKS50b0lTT1N0cmluZygpLnNsaWNlKDAsIDE2KTtcbiAgICBkdWVEYXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0RHVlRGF0ZShkdWVEYXRlLnZhbHVlKTtcbiAgICB9KTtcbiAgICBkaXNwbGF5SXRlbS5hcHBlbmRDaGlsZChkdWVEYXRlKTtcblxuICAgIC8vIEVkaXQgQnV0dG9uLCBIaWRkZW4gdW50aWwgaG92ZXJcbiAgICBjb25zdCBlZGl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgbGV0IGVkaXRJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICBlZGl0SW1nLnNyYyA9IGVkaXQ7XG4gICAgZWRpdEltZy5jbGFzc0xpc3QuYWRkKCdpdGVtSW1nJyk7XG4gICAgZWRpdEJ1dHRvbi5hcHBlbmRDaGlsZChlZGl0SW1nKTtcbiAgICBkaXNwbGF5SXRlbS5hcHBlbmRDaGlsZChlZGl0QnV0dG9uKTtcblxuICAgIC8vIERlbGV0ZSBCdXR0b24sIEhpZGRlbiB1bnRpbCBob3ZlclxuICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGxldCBkZWxldGVJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICBkZWxldGVJbWcuc3JjID0gZGVsO1xuICAgIGRlbGV0ZUltZy5jbGFzc0xpc3QuYWRkKCdpdGVtSW1nJyk7XG4gICAgZGVsZXRlQnV0dG9uLmFwcGVuZENoaWxkKGRlbGV0ZUltZyk7XG4gICAgZGlzcGxheUl0ZW0uYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uKTtcblxuICAgIHJldHVybiBkaXNwbGF5SXRlbTtcbn07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCB0b2RvSXRlbSBmcm9tICcuL3RvZG9JdGVtJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaXNwbGF5Q29udHJvbGxlcihkaXNwbGF5LCBwcm9qZWN0VGV4dCwgdG9kb0NvbnRlbnQpIHtcbiAgICB0aGlzLmRpc3BsYXkgPSBkaXNwbGF5O1xuICAgIHRoaXMucHJvamVjdFRleHQgPSBwcm9qZWN0VGV4dDtcbiAgICB0aGlzLnRvZG9Db250ZW50ID0gdG9kb0NvbnRlbnQ7XG59O1xuXG5kaXNwbGF5Q29udHJvbGxlci5wcm90b3R5cGUuc2V0dXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5kaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcblxuICAgIHRoaXMucHJvamVjdFRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC10ZXh0Jyk7XG4gICAgaWYgKCF0aGlzLnByb2plY3RUZXh0KSB7XG4gICAgICAgIHRoaXMucHJvamVjdFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGhpcy5wcm9qZWN0VGV4dC5pZCA9ICdwcm9qZWN0LXRleHQnO1xuICAgICAgICB0aGlzLmRpc3BsYXkuYXBwZW5kQ2hpbGQodGhpcy5wcm9qZWN0VGV4dCk7XG4gICAgfVxuXG4gICAgdGhpcy50b2RvQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvLWNvbnRlbnQnKTtcbiAgICBpZiAoIXRoaXMudG9kb0NvbnRlbnQpIHtcbiAgICAgICAgdGhpcy50b2RvQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aGlzLnRvZG9Db250ZW50LmlkID0gJ3RvZG8tY29udGVudCc7XG4gICAgICAgIHRoaXMuZGlzcGxheS5hcHBlbmRDaGlsZCh0aGlzLnRvZG9Db250ZW50KTtcbiAgICB9XG59XG5kaXNwbGF5Q29udHJvbGxlci5wcm90b3R5cGUuY2hhbmdlUHJvamVjdE5hbWUgPSBmdW5jdGlvbiAodGl0bGUpIHsgdGhpcy5wcm9qZWN0VGV4dC50ZXh0Q29udGVudCA9IHRpdGxlOyB9O1xuZGlzcGxheUNvbnRyb2xsZXIucHJvdG90eXBlLmxvYWRQcm9qZWN0ID0gZnVuY3Rpb24gKHByb2plY3QpIHtcbiAgICB0aGlzLmNoYW5nZVByb2plY3ROYW1lKHByb2plY3RbJ25hbWUnXSk7XG4gICAgLy8gVG9kbzogT3RoZXIgY29kZSBoZXJlIFxuICAgIGNvbnN0IGRhdGEgPSBwcm9qZWN0WydkYXRhJ107XG5cbiAgICBkYXRhLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIHRoaXMudG9kb0NvbnRlbnQuYXBwZW5kQ2hpbGQoaXRlbS5jcmVhdGVJdGVtRGlzcGxheSgpKTtcbiAgICB9KTtcbn07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9