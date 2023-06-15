/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ (() => {

eval("// attach to content div to create rest of content via js\nconst content = document.getElementById(\"content\");\n\n// create title and top menu tabs\nconst title = document.createElement(\"div\");\ntitle.classList.add(\"title\");\ntitle.textContent = \"Pizza-legiance\";\n\nconst tabs = document.createElement(\"div\");\ntabs.classList.add(\"tabs\");\n\nconst home = document.createElement(\"a\");\nconst menu = document.createElement(\"a\");\nconst contact = document.createElement(\"a\");\n\nhome.classList.add(\"home\");\nhome.classList.add(\"active\");\nmenu.classList.add(\"menu\");\ncontact.classList.add(\"contact\");\n\nhome.textContent = \"Home\";\nmenu.textContent = \"Menu\";\ncontact.textContent = \"Contact\";\n\nhome.href = \"home.html\";\nmenu.href = \"menu.html\";\ncontact.href = \"contact.html\";\n\ncontent.appendChild(title);\ncontent.appendChild(tabs);\n\ntabs.appendChild(home);\ntabs.appendChild(menu);\ntabs.appendChild(contact);\n\n// create contactContent text boxes and image\n\n\n//# sourceURL=webpack://restaurantpage/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ (() => {

eval("// attach to content div to create rest of content via js\nconst content = document.getElementById(\"content\");\n\n// create title and top menu tabs\nconst title = document.createElement(\"div\");\ntitle.classList.add(\"title\");\ntitle.textContent = \"Pizza-legiance\";\n\nconst tabs = document.createElement(\"div\");\ntabs.classList.add(\"tabs\");\n\nconst home = document.createElement(\"a\");\nconst menu = document.createElement(\"a\");\nconst contact = document.createElement(\"a\");\n\nhome.classList.add(\"home\");\nhome.classList.add(\"active\");\nmenu.classList.add(\"menu\");\ncontact.classList.add(\"contact\");\n\nhome.textContent = \"Home\";\nmenu.textContent = \"Menu\";\ncontact.textContent = \"Contact\";\n\nhome.href = \"home.html\";\nmenu.href = \"menu.html\";\ncontact.href = \"contact.html\";\n\ncontent.appendChild(title);\ncontent.appendChild(tabs);\n\ntabs.appendChild(home);\ntabs.appendChild(menu);\ntabs.appendChild(contact);\n\n\n// create homeContent text boxes and image\n\nconst homeContent = document.createElement(\"div\");\nhomeContent.classList.add(\"homeContent\");\n\nconst topText = document.createElement(\"div\");\nconst upperText = document.createElement(\"div\");\nconst middleText = document.createElement(\"div\");\nconst lowerText = document.createElement(\"div\");\n\nconst pizzaChef = document.createElement(\"div\");\nconst pizzaImage = document.createElement(\"img\");\n\npizzaChef.appendChild(pizzaImage);\n\nconst bottomText = document.createElement(\"a\");\n\ntopText.classList.add(\"topText\")\nupperText.classList.add(\"upperText\")\nmiddleText.classList.add(\"middleText\")\nlowerText.classList.add(\"lowerText\")\npizzaChef.classList.add(\"pizzaChef\")\nbottomText.classList.add(\"bottomText\")\n\ntopText.textContent = \"DID YOU KNOW?\"\nupperText.textContent = \"Pizza was born on March 14, 1592\"\nmiddleText.textContent = \"300 years later to the day, we pledged our allegiance to the Pizza\"\nlowerText.textContent = \"We've been saucin' it up ever since March 14, 1892\"\nbottomText.textContent = \"Ready to order? Give us a call!\"\n\npizzaImage.src = \"./images/pizza.jpg\";\nbottomText.href = \"contact.html\";\n\ncontent.appendChild(homeContent);\n\nhomeContent.appendChild(topText);\nhomeContent.appendChild(upperText);\nhomeContent.appendChild(middleText);\nhomeContent.appendChild(lowerText);\nhomeContent.appendChild(pizzaChef);\nhomeContent.appendChild(bottomText);\n\n//# sourceURL=webpack://restaurantpage/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_menu_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_contact_js__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nconsole.log(\"index.js is linked\");\n\n\n\n//# sourceURL=webpack://restaurantpage/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ (() => {

eval("// attach to content div to create rest of content via js\nconst content = document.getElementById(\"content\");\n\n// create title and top menu tabs\nconst title = document.createElement(\"div\");\ntitle.classList.add(\"title\");\ntitle.textContent = \"Pizza-legiance\";\n\nconst tabs = document.createElement(\"div\");\ntabs.classList.add(\"tabs\");\n\nconst home = document.createElement(\"a\");\nconst menu = document.createElement(\"a\");\nconst contact = document.createElement(\"a\");\n\nhome.classList.add(\"home\");\nhome.classList.add(\"active\");\nmenu.classList.add(\"menu\");\ncontact.classList.add(\"contact\");\n\nhome.textContent = \"Home\";\nmenu.textContent = \"Menu\";\ncontact.textContent = \"Contact\";\n\nhome.href = \"home.html\";\nmenu.href = \"menu.html\";\ncontact.href = \"contact.html\";\n\ncontent.appendChild(title);\ncontent.appendChild(tabs);\n\ntabs.appendChild(home);\ntabs.appendChild(menu);\ntabs.appendChild(contact);\n\n// create menuContent text boxes and image\n\n\n//# sourceURL=webpack://restaurantpage/./src/menu.js?");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;