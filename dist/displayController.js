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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzcGxheUNvbnRyb2xsZXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUE4QjtBQUNDOztBQUVoQjtBQUNmO0FBQ0E7QUFDQTs7QUFFQSwyQ0FBMkM7QUFDM0MsMkNBQTJDO0FBQzNDLGtEQUFrRDtBQUNsRCwrQ0FBK0M7QUFDL0MsOENBQThDO0FBQzlDLDhDQUE4QztBQUM5QyxnREFBZ0Q7QUFDaEQsdURBQXVEO0FBQ3ZELG9EQUFvRDtBQUNwRCxtREFBbUQ7QUFDbkQsb0RBQW9EOztBQUVwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isc0NBQUk7QUFDdEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQix3Q0FBRztBQUN2QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM1RkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2xCaUM7O0FBRWxCO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtRUFBbUU7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTCxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvdG9kb0l0ZW0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL2Rpc3BsYXlDb250cm9sbGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBlZGl0IGZyb20gJy4vZWRpdC5wbmcnO1xuaW1wb3J0IGRlbCBmcm9tICcuL2RlbGV0ZS5wbmcnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b2RvSXRlbShuYW1lLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIGR1ZURhdGUsIGNvbXBsZXRlKSB7XG4gICAgLy8gU3RyaW5nIFN0cmluZyBpbnQoMC0+MikgRGF0ZSBib29sZWFuXG4gICAgdGhpcy5pdGVtID0gW25hbWUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgZHVlRGF0ZSwgY29tcGxldGVdO1xufTtcblxudG9kb0l0ZW0ucHJvdG90eXBlLmdldEl0ZW0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLml0ZW07IH07XG50b2RvSXRlbS5wcm90b3R5cGUuZ2V0TmFtZSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuaXRlbVswXTsgfTtcbnRvZG9JdGVtLnByb3RvdHlwZS5nZXREZXNjcmlwdGlvbiA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuaXRlbVsxXTsgfTtcbnRvZG9JdGVtLnByb3RvdHlwZS5nZXRQcmlvcml0eSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuaXRlbVsyXTsgfTtcbnRvZG9JdGVtLnByb3RvdHlwZS5nZXREdWVEYXRlID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5pdGVtWzNdOyB9O1xudG9kb0l0ZW0ucHJvdG90eXBlLmlzQ29tcGxldGUgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLml0ZW1bNF07IH07XG50b2RvSXRlbS5wcm90b3R5cGUuc2V0TmFtZSA9IGZ1bmN0aW9uICh2YWx1ZSkgeyByZXR1cm4gdGhpcy5pdGVtWzBdID0gdmFsdWU7IH07XG50b2RvSXRlbS5wcm90b3R5cGUuc2V0RGVzY3JpcHRpb24gPSBmdW5jdGlvbiAodmFsdWUpIHsgcmV0dXJuIHRoaXMuaXRlbVsxXSA9IHZhbHVlOyB9O1xudG9kb0l0ZW0ucHJvdG90eXBlLnNldFByaW9yaXR5ID0gZnVuY3Rpb24gKHZhbHVlKSB7IHJldHVybiB0aGlzLml0ZW1bMl0gPSB2YWx1ZTsgfTtcbnRvZG9JdGVtLnByb3RvdHlwZS5zZXREdWVEYXRlID0gZnVuY3Rpb24gKHZhbHVlKSB7IHJldHVybiB0aGlzLml0ZW1bM10gPSB2YWx1ZTsgfTtcbnRvZG9JdGVtLnByb3RvdHlwZS5zZXRDb21wbGV0ZSA9IGZ1bmN0aW9uICh2YWx1ZSkgeyByZXR1cm4gdGhpcy5pdGVtWzRdID0gdmFsdWU7IH07XG5cbi8vIDxkb25lOmNoZWNrQm94PiA8dGl0bGU+IC0gPGRlc2NyaXB0aW9uOmh1aD4gPGR1ZURhdGU+IDxlZGl0IGJ0bjpodWg+IDxkZWxldGUgYnRuOmh1aD4sIDxwcmlvcml0eTpjb2xvcj5cbi8vXG4vLyAgcHJpb3JpdHksIDAgPSBncmF5LCAxID0gb3JhbmdlLCAyID0gcmVkXG4vL1xuLy8gICogaHVoID0gaGlkZGVuIHVudGlsIGhvdmVyXG50b2RvSXRlbS5wcm90b3R5cGUuY3JlYXRlSXRlbURpc3BsYXkgPSBmdW5jdGlvbiAoKSB7XG4gICAgLy8gUGFyZW50IE5vZGVcbiAgICBjb25zdCBkaXNwbGF5SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpc3BsYXlJdGVtLmNsYXNzTGlzdC5hZGQoJ3RvZG9JdGVtJyk7XG5cbiAgICAvLyBDaGVja2JveFxuICAgIGNvbnN0IGNoZWNrQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBjaGVja0JveC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tCb3gnKTtcbiAgICBjaGVja0JveC5jaGVja2VkID0gdGhpcy5pc0NvbXBsZXRlKCk7XG4gICAgY2hlY2tCb3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICBpdGVtLnNldENvbXBsZXRlKGNoZWNrQm94LmlzQ29tcGxldGUoKSk7XG4gICAgfSk7XG4gICAgZGlzcGxheUl0ZW0uYXBwZW5kQ2hpbGQoY2hlY2tCb3gpO1xuXG4gICAgLy8gUHJpb3JpdHlcbiAgICBjb25zdCBwcmlvcml0eSA9IHRoaXMuZ2V0UHJpb3JpdHkoKTtcbiAgICBsZXQgY2xhc3NUZXh0O1xuICAgIHN3aXRjaCAocHJpb3JpdHkpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgY2xhc3NUZXh0ID0gXCJwTWVkXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgY2xhc3NUZXh0ID0gXCJwSGlnaFwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGNsYXNzVGV4dCA9IFwicExvd1wiO1xuICAgIH1cbiAgICBkaXNwbGF5SXRlbS5jbGFzc0xpc3QuYWRkKGNsYXNzVGV4dCk7XG5cbiAgICAvLyBOYW1lXG4gICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5hbWUudGV4dENvbnRlbnQgPSB0aGlzLmdldE5hbWUoKTtcbiAgICBkaXNwbGF5SXRlbS5hcHBlbmRDaGlsZChuYW1lKTtcblxuICAgIC8vIERlc2NyaXB0aW9uLCBIaWRkZW4gdW50aWwgaG92ZXJcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gdGhpcy5nZXREZXNjcmlwdGlvbigpO1xuICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ2h1aCcpO1xuICAgIGRpc3BsYXlJdGVtLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcblxuICAgIC8vIER1ZSBEYXRlXG4gICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgZHVlRGF0ZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZXRpbWUtbG9jYWwnKTtcbiAgICBkdWVEYXRlLnZhbHVlID0gdGhpcy5nZXREdWVEYXRlKCkudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxNik7XG4gICAgZHVlRGF0ZS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZSkgPT4ge1xuICAgICAgICB0aGlzLnNldER1ZURhdGUoZHVlRGF0ZS52YWx1ZSk7XG4gICAgfSk7XG4gICAgZGlzcGxheUl0ZW0uYXBwZW5kQ2hpbGQoZHVlRGF0ZSk7XG5cbiAgICAvLyBFZGl0IEJ1dHRvbiwgSGlkZGVuIHVudGlsIGhvdmVyXG4gICAgY29uc3QgZWRpdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGxldCBlZGl0SW1nID0gbmV3IEltYWdlKCk7XG4gICAgZWRpdEltZy5zcmMgPSBlZGl0O1xuICAgIGVkaXRJbWcuY2xhc3NMaXN0LmFkZCgnaXRlbUltZycpO1xuICAgIGVkaXRCdXR0b24uYXBwZW5kQ2hpbGQoZWRpdEltZyk7XG4gICAgZGlzcGxheUl0ZW0uYXBwZW5kQ2hpbGQoZWRpdEJ1dHRvbik7XG5cbiAgICAvLyBEZWxldGUgQnV0dG9uLCBIaWRkZW4gdW50aWwgaG92ZXJcbiAgICBjb25zdCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBsZXQgZGVsZXRlSW1nID0gbmV3IEltYWdlKCk7XG4gICAgZGVsZXRlSW1nLnNyYyA9IGRlbDtcbiAgICBkZWxldGVJbWcuY2xhc3NMaXN0LmFkZCgnaXRlbUltZycpO1xuICAgIGRlbGV0ZUJ1dHRvbi5hcHBlbmRDaGlsZChkZWxldGVJbWcpO1xuICAgIGRpc3BsYXlJdGVtLmFwcGVuZENoaWxkKGRlbGV0ZUJ1dHRvbik7XG5cbiAgICByZXR1cm4gZGlzcGxheUl0ZW07XG59OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgdG9kb0l0ZW0gZnJvbSAnLi90b2RvSXRlbSdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlzcGxheUNvbnRyb2xsZXIoZGlzcGxheSwgcHJvamVjdFRleHQsIHRvZG9Db250ZW50KSB7XG4gICAgdGhpcy5kaXNwbGF5ID0gZGlzcGxheTtcbiAgICB0aGlzLnByb2plY3RUZXh0ID0gcHJvamVjdFRleHQ7XG4gICAgdGhpcy50b2RvQ29udGVudCA9IHRvZG9Db250ZW50O1xufTtcblxuZGlzcGxheUNvbnRyb2xsZXIucHJvdG90eXBlLnNldHVwID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG5cbiAgICB0aGlzLnByb2plY3RUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtdGV4dCcpO1xuICAgIGlmICghdGhpcy5wcm9qZWN0VGV4dCkge1xuICAgICAgICB0aGlzLnByb2plY3RUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRoaXMucHJvamVjdFRleHQuaWQgPSAncHJvamVjdC10ZXh0JztcbiAgICAgICAgdGhpcy5kaXNwbGF5LmFwcGVuZENoaWxkKHRoaXMucHJvamVjdFRleHQpO1xuICAgIH1cblxuICAgIHRoaXMudG9kb0NvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kby1jb250ZW50Jyk7XG4gICAgaWYgKCF0aGlzLnRvZG9Db250ZW50KSB7XG4gICAgICAgIHRoaXMudG9kb0NvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGhpcy50b2RvQ29udGVudC5pZCA9ICd0b2RvLWNvbnRlbnQnO1xuICAgICAgICB0aGlzLmRpc3BsYXkuYXBwZW5kQ2hpbGQodGhpcy50b2RvQ29udGVudCk7XG4gICAgfVxufVxuZGlzcGxheUNvbnRyb2xsZXIucHJvdG90eXBlLmNoYW5nZVByb2plY3ROYW1lID0gZnVuY3Rpb24gKHRpdGxlKSB7IHRoaXMucHJvamVjdFRleHQudGV4dENvbnRlbnQgPSB0aXRsZTsgfTtcbmRpc3BsYXlDb250cm9sbGVyLnByb3RvdHlwZS5sb2FkUHJvamVjdCA9IGZ1bmN0aW9uIChwcm9qZWN0KSB7XG4gICAgdGhpcy5jaGFuZ2VQcm9qZWN0TmFtZShwcm9qZWN0WyduYW1lJ10pO1xuICAgIC8vIFRvZG86IE90aGVyIGNvZGUgaGVyZSBcbiAgICBjb25zdCBkYXRhID0gcHJvamVjdFsnZGF0YSddO1xuXG4gICAgZGF0YS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICB0aGlzLnRvZG9Db250ZW50LmFwcGVuZENoaWxkKGl0ZW0uY3JlYXRlSXRlbURpc3BsYXkoKSk7XG4gICAgfSk7XG59OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==