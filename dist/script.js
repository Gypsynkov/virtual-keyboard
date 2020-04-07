/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/data */ "./src/js/data.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Keyboard = /*#__PURE__*/function () {
  function Keyboard() {
    _classCallCheck(this, Keyboard);

    this.keyCode = _js_data__WEBPACK_IMPORTED_MODULE_0__["default"].keyCode;
    this.keyWhich = _js_data__WEBPACK_IMPORTED_MODULE_0__["default"].keyWhich;
    this.keysOnEng = _js_data__WEBPACK_IMPORTED_MODULE_0__["default"].keysOnEng;
    this.keysOnEngUp = _js_data__WEBPACK_IMPORTED_MODULE_0__["default"].keysOnEngUp;
    this.keysOnRuss = _js_data__WEBPACK_IMPORTED_MODULE_0__["default"].keysOnRuss;
    this.keysOnRussUp = _js_data__WEBPACK_IMPORTED_MODULE_0__["default"].keysOnRussUp;
    this.isCapsLock = false;
    this.isShift = false;
    this.isEng = JSON.parse(localStorage.getItem('isEng'));
  }

  _createClass(Keyboard, [{
    key: "init",
    value: function init() {
      this.textarea = document.createElement('textarea');
      this.wrapper = document.createElement('div');
      this.keyboard = document.createElement('div');
      this.keyboard.classList.add('keyboard-wrapper');
      this.wrapper.classList.add('wrapper');
      var body = document.querySelector('body');
      body.appendChild(this.wrapper);
      this.wrapper.appendChild(this.textarea);
      this.wrapper.appendChild(this.keyboard);
      this.helper = document.createElement('div');
      this.helper.innerText = 'ShiftLeft + AltLeft === English/Russian';
      this.helper.classList.add('helper');
      this.wrapper.appendChild(this.helper);
    }
  }, {
    key: "changeCaseLayout",
    value: function changeCaseLayout(keyVal, index, isEng, isCapsLock, isShift) {
      if (isEng) {
        keyVal = this.keysOnEng[index];
      }

      ;

      if (isEng && isCapsLock) {
        keyVal = this.keysOnEngUp[index];
      }

      ;

      if (isShift && isEng && isCapsLock) {
        keyVal = this.keysOnEng[index];
      } else if (isEng && isShift) {
        keyVal = this.keysOnEngUp[index];
      }

      ;

      if (!isEng) {
        keyVal = this.keysOnRuss[index];
      }

      ;

      if (!isEng && isCapsLock) {
        keyVal = this.keysOnRussUp[index];
      }

      ;

      if (isShift && !isEng && isCapsLock) {
        keyVal = this.keysOnRuss[index];
      } else if (!isEng && isShift) {
        keyVal = this.keysOnRussUp[index];
      }

      ;
      return keyVal;
    }
  }, {
    key: "addKeysOnKeyboard",
    value: function addKeysOnKeyboard() {
      var _this = this;

      this.keyboard.querySelectorAll('span').forEach(function (item) {
        item.remove();
      });
      this.keyWhich.forEach(function (key, index) {
        var keyVal = '';
        keyVal = _this.changeCaseLayout(keyVal, index, _this.isEng, _this.isCapsLock, _this.isShift);
        var keyClass = 'key ';

        if (index == 14 || index == 29 || index == 42 || index == 55) {
          _this.keyboard.innerHTML += '<span style="clear: both; display: block; width: 100%"></span>';
        }

        if (key == 8) {
          keyVal = 'Backspace';
          keyClass += 'big_control_key control_key';
        }

        if (key == 9) {
          keyVal = 'Tab';
          keyClass += 'short-control-key control_key';
        }

        if (key == 46) {
          keyVal = 'Del';
          keyClass += 'control_key';
        }

        if (key == 20) {
          keyVal = 'CapsLock';
          keyClass += 'big_control_key  control_key';
        }

        if (key == 13) {
          keyVal = 'Enter';
          keyClass += 'big_control_key  control_key';
        }

        if (key == 16 || key == 'ShiftRight') {
          keyVal = 'Shift';
          keyClass += 'big_control_key  control_key';
        }

        if (key == 17 || key == 'ControlRight') {
          keyVal = 'CtrL';
          keyClass += 'short-control-key control_key';
        }

        if (key == 91 || key == 'MetaRight') {
          keyVal = 'Win';
          keyClass += 'short-control-key control_key';
        }

        if (key == 18 || key == 'AltRight') {
          keyVal = 'Alt';
          keyClass += 'short-control-key control_key';
        }

        if (key == ' ' || key == 'Space' || key == 32) {
          keyVal = " ";
          keyClass += 'backspace_key';
        }

        if (key == 38 || key == 40 || key == 37 || key == 39) {
          keyClass += 'short-control-key control_key';
        }

        _this.keyboard.innerHTML += "<span class=\"".concat(keyClass, "\" data=").concat(key, " datacode=").concat(_this.keyCode[index], " id=\"").concat(keyVal.charCodeAt(), "\"> ").concat(keyVal, " </span>");
      });
      var shiftL = document.querySelector('span.key[datacode="ShiftLeft"]');
      var shiftR = document.querySelector('span.key[datacode="ShiftRight"]');

      if (this.isShift == true) {
        if (event.code === 'ShiftLeft') {
          shiftL.classList.add('active-shift');
        } else if (event.code === 'ShiftRight') {
          shiftR.classList.add('active-shift');
        }

        ;
      }

      this.capslock = document.getElementById('67');

      if (this.isCapsLock) {
        this.capslock.classList.add('active-shift');
      } else {
        this.capslock.classList.remove('active-shift');
      }
    }
  }, {
    key: "keyUpHandler",
    value: function keyUpHandler(event) {
      event.preventDefault();
      document.querySelectorAll('.key').forEach(function (element) {
        var item_data = element.getAttribute('datacode');

        if (item_data == event.code) {
          element.classList.remove('active');
        }
      });

      if (event.code === 'AltLeft' && event.shiftKey || event.altKey && event.code === 'ShiftLeft') {
        this.isEng = !this.isEng;
        localStorage.setItem('isEng', this.isEng);
        this.addKeysOnKeyboard();
      }

      if (event.which === 20) {
        this.isCapsLock = !this.isCapsLock;
        this.addKeysOnKeyboard();
        if (this.isCapsLock) this.capslock.classList.add('active-shift');else this.capslock.classList.remove('active-shift');
      }

      if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
        this.isShift = false;
        this.addKeysOnKeyboard();
      }
    }
  }, {
    key: "deleteSymbol",
    value: function deleteSymbol(item_data) {
      var startText = this.textarea.selectionStart,
          endText = this.textarea.selectionEnd;

      if (!this.textarea.setRangeText) {
        return;
      }

      if (startText >= endText) {
        if (startText <= 0 || !this.textarea.setSelectionRange) {
          return;
        }

        if (event.key == 'Backspace' || item_data == "Backspace") {
          this.textarea.setSelectionRange(startText - 1, startText);
        } else {
          this.textarea.setSelectionRange(startText, startText + 1);
        }

        ;
      }

      this.textarea.setRangeText("");
      this.textarea.focus();
    }
  }, {
    key: "setSelectionRange",
    value: function setSelectionRange(text) {
      this.textarea.focus();
      this.textarea.setRangeText(text, this.textarea.selectionStart, this.textarea.selectionEnd, 'end');
    }
  }, {
    key: "keyDownHandler",
    value: function keyDownHandler(event) {
      var elm = document.querySelector('textarea');
      event.preventDefault();
      if (!document.querySelector('span.key[datacode="' + event.code + '"]')) return;else document.querySelector('span.key[datacode="' + event.code + '"]').classList.add('active');
      var text = '';
      var index = this.keyWhich.indexOf(event.which);
      text = this.changeCaseLayout(text, index, this.isEng, this.isCapsLock, this.isShift);

      if (event.key !== "Control" && event.key !== 'Alt' && event.key !== 'Shift' && event.code !== 'MetaLeft' && event.code !== 'Tab' && event.key !== "CapsLock" && event.key !== 'Backspace' && event.key !== 'Delete' && event.key !== 'Enter' && event.code !== 'Space' && event.code !== 'ArrowLeft' && event.code !== 'ArrowRight' && event.code !== 'ArrowUp' && event.code !== 'ArrowDown') {
        this.textarea.setRangeText(text);
        elm.focus();
      } else {
        if (event.key === 'Enter') {
          this.textarea.setRangeText('\n');
        }

        if (event.key === 'Backspace') {
          this.deleteSymbol();
        }

        if (event.code === 'Space') {
          this.textarea.innerHTML += ' ';
        }

        if (event.key === 'Delete') {
          this.deleteSymbol();
        }

        if (event.key === 'Tab') {
          this.textarea.innerHTML += '    ';
        }

        if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
          this.isShift = true;
          this.addKeysOnKeyboard();
        }

        if (event.code == 'ArrowRight') {
          elm.selectionStart += 1;
          elm.focus();
        }

        if (event.code == 'ArrowLeft') {
          var _elm = document.querySelector('textarea');

          _elm.selectionEnd -= 1;

          _elm.focus();
        }

        if (event.code == 'ArrowDown') {
          var pos = elm.selectionEnd,
              prevLine = elm.value.lastIndexOf('\n', pos),
              nextLine = elm.value.indexOf('\n', pos + 1);

          if (nextLine === -1) {
            return;
          }

          pos = pos - prevLine;
          elm.selectionStart = elm.selectionEnd = nextLine + pos;
        }

        if (event.code == 'ArrowUp') {
          var _pos = elm.selectionEnd,
              _prevLine = elm.value.lastIndexOf('\n', _pos),
              TwoBLine = elm.value.lastIndexOf('\n', _prevLine - 1);

          if (_prevLine === -1) {
            return;
          }

          _pos = _pos - _prevLine;
          elm.selectionStart = elm.selectionEnd = TwoBLine + _pos;
        }
      }
    }
  }, {
    key: "addListenersOnKeys",
    value: function addListenersOnKeys() {
      var _this2 = this;

      document.addEventListener('keydown', function (event) {
        return _this2.keyDownHandler(event);
      });
      document.addEventListener('keyup', function (event) {
        return _this2.keyUpHandler(event);
      });
      document.addEventListener('mousedown', function (e) {
        if (e.target.tagName !== "SPAN" || !e.target.classList.contains('key')) {
          return;
        } else {
          _this2.textarea.focus();

          var item = e.toElement;
          item.classList.add('active');
          var item_data = item.getAttribute('datacode');
          if (item_data !== "ControlRight" && item_data !== "ControlLeft" && item_data !== 'AltRight' && item_data !== 'AltLeft' && item_data !== 'ShiftLeft' && item_data !== 'ShiftRight' && item_data !== 'MetaLeft' && item_data !== 'Tab' && item_data !== "CapsLock" && item_data !== 'Backspace' && item_data !== 'Delete' && item_data !== 'Enter' && item_data !== 'Space' && item_data !== 'ArrowRight' && item_data !== 'ArrowLeft' && item_data !== 'ArrowUp' && item_data !== 'ArrowDown') _this2.setSelectionRange(item.innerText);else {
            if (item_data === 'Enter') {
              _this2.setSelectionRange('\n');
            }

            if (item_data === 'Backspace') {
              _this2.deleteSymbol(item_data);
            }

            if (item_data === 'Space') {
              _this2.setSelectionRange(' ');
            }

            if (item_data === 'Delete') {
              _this2.deleteSymbol(item_data);
            }

            if (item_data === 'Tab') {
              _this2.setSelectionRange('    ');
            }

            if (item_data == 'ShiftLeft' || item_data == 'ShiftRight') {
              _this2.isShift = !_this2.isShift;

              _this2.addKeysOnKeyboard();
            }

            if (item_data == 'CapsLock') {
              _this2.isCapsLock = !_this2.isCapsLock;

              _this2.addKeysOnKeyboard();
            }
          }
        }
      });
      document.addEventListener('mouseup', function () {
        _this2.isShift = false;

        _this2.addKeysOnKeyboard();

        var CAPSLOCK = document.getElementById('67');

        if (_this2.isCapsLock) {
          CAPSLOCK.classList.add('active-shift');
        } else {
          CAPSLOCK.classList.remove('active-shift');
        }
      });
    }
  }]);

  return Keyboard;
}();

window.onload = function () {
  var keyboard = new Keyboard();
  keyboard.addListenersOnKeys();
  keyboard.init();
  keyboard.addKeysOnKeyboard();
};

document.onkeydown = function (event) {
  console.log(event);
};

/***/ }),

/***/ "./src/js/data.js":
/*!************************!*\
  !*** ./src/js/data.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var keyCode = ["Backquote", "Digit1", "Digit2", "Digit3", "Digit4", "Digit5", "Digit6", "Digit7", "Digit8", "Digit9", "Digit0", "Minus", "Equal", "Backspace", "Tab", "KeyQ", "KeyW", "KeyE", "KeyR", "KeyT", "KeyY", "KeyU", "KeyI", "KeyO", "KeyP", "BracketLeft", "BracketRight", "Backslash", "Delete", "CapsLock", "KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ", "KeyK", "KeyL", "Semicolon", "Quote", "Enter", "ShiftLeft", "KeyZ", "KeyX", "KeyC", "KeyV", "KeyB", "KeyN", "KeyM", "Comma", "Period", "Slash", "ArrowUp", "ShiftRight", "ControlLeft", "MetaLeft", "AltLeft", "Space", "AltRight", "ArrowLeft", "ArrowDown", "ArrowRight", "ControlRight"],
    keyWhich = [192, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 189, 187, 8, 9, 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 219, 221, 220, 46, 20, 65, 83, 68, 70, 71, 72, 74, 75, 76, 186, 222, 13, 16, 90, 88, 67, 86, 66, 78, 77, 188, 190, 191, 38, 16, 17, 91, 18, 32, 18, 37, 40, 39, 17],
    keysOnEng = ['`', '1', "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", 'Backspace', 'Tab', "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\", 'Delete', 'CapsLock', "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", 'Enter', "Shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", '&uarr;', "Shift", "Control", "Meta", "Alt", "Space", "Alt", "&larr;", "&darr;", "&rarr;", "Control"],
    keysOnEngUp = ['~', '!', "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", 'Backspace', 'Tab', "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "{", "}", "|", 'Delete', 'CapsLock', "A", "S", "D", "F", "G", "H", "J", "K", "L", ":", '"', 'Enter', "Shift", "Z", "X", "C", "V", "B", "N", "M", "<", ">", "?", '&uarr;', "Shift", "Control", "Meta", "Alt", "Space", "Alt", "&larr;", "&darr;", "&rarr;", "Control"],
    keysOnRuss = ['ё', '1', "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", 'Backspace', 'Tab', "й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ", "\\", 'Delete', 'CapsLock', "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э", 'Enter', "Shift", "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", ".", '&uarr;', "Shift", "Control", "Meta", "Alt", "Space", "Alt", "&larr;", "&darr;", "&rarr;", "Control"],
    keysOnRussUp = ['Ё', '!', '"', "№", ";", "%", ":", "?", "*", "(", ")", "_", "+", 'Backspace', 'Tab', "Й", "Ц", "У", "К", "Е", "Н", "Г", "Ш", "Щ", "З", "Х", "Ъ", "/", 'Delete', 'CapsLock', "Ф", "Ы", "В", "А", "П", "Р", "О", "Л", "Д", "Ж", "Э", 'Enter', "Shift", "Я", "Ч", "С", "М", "И", "Т", "Ь", "Б", "Ю", ",", '&uarr;', "Shift", "Control", "Meta", "Alt", "Space", "Alt", "&larr;", "&darr;", "&rarr;", "Control"];
/* harmony default export */ __webpack_exports__["default"] = ({
  keyCode: keyCode,
  keyWhich: keyWhich,
  keysOnEng: keysOnEng,
  keysOnEngUp: keysOnEngUp,
  keysOnRuss: keysOnRuss,
  keysOnRussUp: keysOnRussUp
});

/***/ }),

/***/ "./src/sass/style.scss":
/*!*****************************!*\
  !*** ./src/sass/style.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 0:
/*!**************************************************!*\
  !*** multi ./src/index.js ./src/sass/style.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./src/index.js */"./src/index.js");
module.exports = __webpack_require__(/*! ./src/sass/style.scss */"./src/sass/style.scss");


/***/ })

/******/ });
//# sourceMappingURL=script.js.map