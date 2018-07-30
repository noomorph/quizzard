/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp"];
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, callbacks = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId])
/******/ 				callbacks.push.apply(callbacks, installedChunks[chunkId]);
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules);
/******/ 		while(callbacks.length)
/******/ 			callbacks.shift().call(null, __webpack_require__);
/******/
/******/ 	};
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// "0" means "already loaded"
/******/ 	// Array means "loading", array contains callbacks
/******/ 	var installedChunks = {
/******/ 		7:0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId, callback) {
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] === 0)
/******/ 			return callback.call(null, __webpack_require__);
/******/
/******/ 		// an array means "currently loading".
/******/ 		if(installedChunks[chunkId] !== undefined) {
/******/ 			installedChunks[chunkId].push(callback);
/******/ 		} else {
/******/ 			// start chunk loading
/******/ 			installedChunks[chunkId] = [callback];
/******/ 			var head = document.getElementsByTagName('head')[0];
/******/ 			var script = document.createElement('script');
/******/ 			script.type = 'text/javascript';
/******/ 			script.charset = 'utf-8';
/******/ 			script.async = true;
/******/
/******/ 			script.src = __webpack_require__.p + "" + ({"0":"SPA-runtime-RU","1":"Amon-runtime-RU","2":"Emin-runtime-RU","3":"Alexithymia-runtime-RU"}[chunkId]||chunkId) + ".chunk." + chunkId + ".js";
/******/ 			head.appendChild(script);
/******/ 		}
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(242);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;
	
	module.exports = isArray;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	var freeGlobal = __webpack_require__(45);
	
	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
	
	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();
	
	module.exports = root;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.register = register;
	exports.change = change;
	exports.default = translate;
	
	var _translate = __webpack_require__(186);
	
	var _translate2 = _interopRequireDefault(_translate);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var currentLanguage = void 0;
	var dirty = new Set();
	var dictionaries = new Map();
	var translates = new Map();
	
	function build(lang) {
	    var debug = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
	
	    if (dirty.has(lang)) {
	        var fn = (0, _translate2.default)(dictionaries.get(lang), { debug: debug });
	        translates.set(lang, fn);
	        dirty.delete(lang);
	    }
	
	    return translates.has(lang);
	}
	
	function register(lang, data) {
	    var forceRebuild = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
	
	    dictionaries.set(lang, Object.assign({}, data, dictionaries.get(lang)));
	
	    dirty.add(lang);
	
	    if (forceRebuild) {
	        build(lang);
	    }
	}
	
	function change(lang) {
	    if (dictionaries.has(lang) && build(lang)) {
	        currentLanguage = lang;
	        return true;
	    }
	
	    return false;
	}
	
	function translate() {
	    var fn = translates.get(currentLanguage) || translates.get('');
	    return fn.apply(undefined, arguments);
	}
	
	register('', {});
	build('');
	change('');

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	var baseIsNative = __webpack_require__(114),
	    getValue = __webpack_require__(142);
	
	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = getValue(object, key);
	  return baseIsNative(value) ? value : undefined;
	}
	
	module.exports = getNative;


/***/ }),
/* 5 */
/***/ (function(module, exports) {

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return value != null && (type == 'object' || type == 'function');
	}
	
	module.exports = isObject;


/***/ }),
/* 6 */
/***/ (function(module, exports) {

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return value != null && typeof value == 'object';
	}
	
	module.exports = isObjectLike;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(9),
	    getRawTag = __webpack_require__(139),
	    objectToString = __webpack_require__(165);
	
	/** `Object#toString` result references. */
	var nullTag = '[object Null]',
	    undefinedTag = '[object Undefined]';
	
	/** Built-in value references. */
	var symToStringTag = Symbol ? Symbol.toStringTag : undefined;
	
	/**
	 * The base implementation of `getTag` without fallbacks for buggy environments.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function baseGetTag(value) {
	  if (value == null) {
	    return value === undefined ? undefinedTag : nullTag;
	  }
	  return (symToStringTag && symToStringTag in Object(value))
	    ? getRawTag(value)
	    : objectToString(value);
	}
	
	module.exports = baseGetTag;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(33),
	    isLength = __webpack_require__(27);
	
	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null && isLength(value.length) && !isFunction(value);
	}
	
	module.exports = isArrayLike;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	var root = __webpack_require__(2);
	
	/** Built-in value references. */
	var Symbol = root.Symbol;
	
	module.exports = Symbol;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	var isSymbol = __webpack_require__(18);
	
	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0;
	
	/**
	 * Converts `value` to a string key if it's not a string or symbol.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @returns {string|symbol} Returns the key.
	 */
	function toKey(value) {
	  if (typeof value == 'string' || isSymbol(value)) {
	    return value;
	  }
	  var result = (value + '');
	  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
	}
	
	module.exports = toKey;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	var arrayLikeKeys = __webpack_require__(105),
	    baseKeys = __webpack_require__(116),
	    isArrayLike = __webpack_require__(8);
	
	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	 * for more details.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */
	function keys(object) {
	  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
	}
	
	module.exports = keys;


/***/ }),
/* 12 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = uniq;
	function uniq(id) {
	    return id + String(Math.random()).slice(2);
	}

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	var listCacheClear = __webpack_require__(151),
	    listCacheDelete = __webpack_require__(152),
	    listCacheGet = __webpack_require__(153),
	    listCacheHas = __webpack_require__(154),
	    listCacheSet = __webpack_require__(155);
	
	/**
	 * Creates an list cache object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function ListCache(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;
	
	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}
	
	// Add methods to `ListCache`.
	ListCache.prototype.clear = listCacheClear;
	ListCache.prototype['delete'] = listCacheDelete;
	ListCache.prototype.get = listCacheGet;
	ListCache.prototype.has = listCacheHas;
	ListCache.prototype.set = listCacheSet;
	
	module.exports = ListCache;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	var eq = __webpack_require__(17);
	
	/**
	 * Gets the index at which the `key` is found in `array` of key-value pairs.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} key The key to search for.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function assocIndexOf(array, key) {
	  var length = array.length;
	  while (length--) {
	    if (eq(array[length][0], key)) {
	      return length;
	    }
	  }
	  return -1;
	}
	
	module.exports = assocIndexOf;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	var isKeyable = __webpack_require__(149);
	
	/**
	 * Gets the data for `map`.
	 *
	 * @private
	 * @param {Object} map The map to query.
	 * @param {string} key The reference key.
	 * @returns {*} Returns the map data.
	 */
	function getMapData(map, key) {
	  var data = map.__data__;
	  return isKeyable(key)
	    ? data[typeof key == 'string' ? 'string' : 'hash']
	    : data.map;
	}
	
	module.exports = getMapData;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(4);
	
	/* Built-in method references that are verified to be native. */
	var nativeCreate = getNative(Object, 'create');
	
	module.exports = nativeCreate;


/***/ }),
/* 17 */
/***/ (function(module, exports) {

	/**
	 * Performs a
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * comparison between two values to determine if they are equivalent.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 * var other = { 'a': 1 };
	 *
	 * _.eq(object, object);
	 * // => true
	 *
	 * _.eq(object, other);
	 * // => false
	 *
	 * _.eq('a', 'a');
	 * // => true
	 *
	 * _.eq('a', Object('a'));
	 * // => false
	 *
	 * _.eq(NaN, NaN);
	 * // => true
	 */
	function eq(value, other) {
	  return value === other || (value !== value && other !== other);
	}
	
	module.exports = eq;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(7),
	    isObjectLike = __webpack_require__(6);
	
	/** `Object#toString` result references. */
	var symbolTag = '[object Symbol]';
	
	/**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */
	function isSymbol(value) {
	  return typeof value == 'symbol' ||
	    (isObjectLike(value) && baseGetTag(value) == symbolTag);
	}
	
	module.exports = isSymbol;


/***/ }),
/* 19 */
/***/ (function(module, exports) {

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
	/** Used to detect unsigned integer values. */
	var reIsUint = /^(?:0|[1-9]\d*)$/;
	
	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  var type = typeof value;
	  length = length == null ? MAX_SAFE_INTEGER : length;
	
	  return !!length &&
	    (type == 'number' ||
	      (type != 'symbol' && reIsUint.test(value))) &&
	        (value > -1 && value % 1 == 0 && value < length);
	}
	
	module.exports = isIndex;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	var defineProperty = __webpack_require__(43);
	
	/**
	 * The base implementation of `assignValue` and `assignMergeValue` without
	 * value checks.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function baseAssignValue(object, key, value) {
	  if (key == '__proto__' && defineProperty) {
	    defineProperty(object, key, {
	      'configurable': true,
	      'enumerable': true,
	      'value': value,
	      'writable': true
	    });
	  } else {
	    object[key] = value;
	  }
	}
	
	module.exports = baseAssignValue;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	var baseMatches = __webpack_require__(118),
	    baseMatchesProperty = __webpack_require__(119),
	    identity = __webpack_require__(22),
	    isArray = __webpack_require__(1),
	    property = __webpack_require__(180);
	
	/**
	 * The base implementation of `_.iteratee`.
	 *
	 * @private
	 * @param {*} [value=_.identity] The value to convert to an iteratee.
	 * @returns {Function} Returns the iteratee.
	 */
	function baseIteratee(value) {
	  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
	  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
	  if (typeof value == 'function') {
	    return value;
	  }
	  if (value == null) {
	    return identity;
	  }
	  if (typeof value == 'object') {
	    return isArray(value)
	      ? baseMatchesProperty(value[0], value[1])
	      : baseMatches(value);
	  }
	  return property(value);
	}
	
	module.exports = baseIteratee;


/***/ }),
/* 22 */
/***/ (function(module, exports) {

	/**
	 * This method returns the first argument it receives.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Util
	 * @param {*} value Any value.
	 * @returns {*} Returns `value`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 *
	 * console.log(_.identity(object) === object);
	 * // => true
	 */
	function identity(value) {
	  return value;
	}
	
	module.exports = identity;


/***/ }),
/* 23 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.softbreak = softbreak;
	exports.linebreak = linebreak;
	function softbreak(str) {
	    return str && str.replace(/_/g, '<wbr/>');
	}
	
	function linebreak(str) {
	    return str && str.replace(/\n/g, '<br/>');
	}

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(4),
	    root = __webpack_require__(2);
	
	/* Built-in method references that are verified to be native. */
	var Map = getNative(root, 'Map');
	
	module.exports = Map;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

	var mapCacheClear = __webpack_require__(156),
	    mapCacheDelete = __webpack_require__(157),
	    mapCacheGet = __webpack_require__(158),
	    mapCacheHas = __webpack_require__(159),
	    mapCacheSet = __webpack_require__(160);
	
	/**
	 * Creates a map cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function MapCache(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;
	
	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}
	
	// Add methods to `MapCache`.
	MapCache.prototype.clear = mapCacheClear;
	MapCache.prototype['delete'] = mapCacheDelete;
	MapCache.prototype.get = mapCacheGet;
	MapCache.prototype.has = mapCacheHas;
	MapCache.prototype.set = mapCacheSet;
	
	module.exports = MapCache;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

	var isArray = __webpack_require__(1),
	    isSymbol = __webpack_require__(18);
	
	/** Used to match property names within property paths. */
	var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
	    reIsPlainProp = /^\w*$/;
	
	/**
	 * Checks if `value` is a property name and not a property path.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {Object} [object] The object to query keys on.
	 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
	 */
	function isKey(value, object) {
	  if (isArray(value)) {
	    return false;
	  }
	  var type = typeof value;
	  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
	      value == null || isSymbol(value)) {
	    return true;
	  }
	  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
	    (object != null && value in Object(object));
	}
	
	module.exports = isKey;


/***/ }),
/* 27 */
/***/ (function(module, exports) {

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' &&
	    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}
	
	module.exports = isLength;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

	var baseFor = __webpack_require__(108),
	    keys = __webpack_require__(11);
	
	/**
	 * The base implementation of `_.forOwn` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Object} Returns `object`.
	 */
	function baseForOwn(object, iteratee) {
	  return object && baseFor(object, iteratee, keys);
	}
	
	module.exports = baseForOwn;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

	var baseIsArguments = __webpack_require__(111),
	    isObjectLike = __webpack_require__(6);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/** Built-in value references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;
	
	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
	  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
	    !propertyIsEnumerable.call(value, 'callee');
	};
	
	module.exports = isArguments;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

	var baseAssignValue = __webpack_require__(20),
	    eq = __webpack_require__(17);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Assigns `value` to `key` of `object` if the existing value is not equivalent
	 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * for equality comparisons.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function assignValue(object, key, value) {
	  var objValue = object[key];
	  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
	      (value === undefined && !(key in object))) {
	    baseAssignValue(object, key, value);
	  }
	}
	
	module.exports = assignValue;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

	var isArray = __webpack_require__(1),
	    isKey = __webpack_require__(26),
	    stringToPath = __webpack_require__(174),
	    toString = __webpack_require__(185);
	
	/**
	 * Casts `value` to a path array if it's not one.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @param {Object} [object] The object to query keys on.
	 * @returns {Array} Returns the cast property path array.
	 */
	function castPath(value, object) {
	  if (isArray(value)) {
	    return value;
	  }
	  return isKey(value, object) ? [value] : stringToPath(toString(value));
	}
	
	module.exports = castPath;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(2),
	    stubFalse = __webpack_require__(182);
	
	/** Detect free variable `exports`. */
	var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;
	
	/** Detect free variable `module`. */
	var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;
	
	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;
	
	/** Built-in value references. */
	var Buffer = moduleExports ? root.Buffer : undefined;
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;
	
	/**
	 * Checks if `value` is a buffer.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.3.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
	 * @example
	 *
	 * _.isBuffer(new Buffer(2));
	 * // => true
	 *
	 * _.isBuffer(new Uint8Array(2));
	 * // => false
	 */
	var isBuffer = nativeIsBuffer || stubFalse;
	
	module.exports = isBuffer;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(51)(module)))

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(7),
	    isObject = __webpack_require__(5);
	
	/** `Object#toString` result references. */
	var asyncTag = '[object AsyncFunction]',
	    funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]',
	    proxyTag = '[object Proxy]';
	
	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  if (!isObject(value)) {
	    return false;
	  }
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 9 which returns 'object' for typed arrays and other constructors.
	  var tag = baseGetTag(value);
	  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
	}
	
	module.exports = isFunction;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

	var baseIsTypedArray = __webpack_require__(115),
	    baseUnary = __webpack_require__(127),
	    nodeUtil = __webpack_require__(164);
	
	/* Node.js helper references. */
	var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
	
	/**
	 * Checks if `value` is classified as a typed array.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 * @example
	 *
	 * _.isTypedArray(new Uint8Array);
	 * // => true
	 *
	 * _.isTypedArray([]);
	 * // => false
	 */
	var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
	
	module.exports = isTypedArray;


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.buildMetaData = buildMetaData;
	
	var _range = __webpack_require__(79);
	
	var _range2 = _interopRequireDefault(_range);
	
	var _i18n = __webpack_require__(3);
	
	var _i18n2 = _interopRequireDefault(_i18n);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function buildMetaData(_ref, i18n) {
	    var className = _ref.className,
	        questionsCount = _ref.questionsCount,
	        answers = _ref.answers,
	        scaleIds = _ref.scaleIds;
	
	    i18n = i18n || _i18n2.default;
	
	    function getAnswer(value, index) {
	        if (index === undefined) {
	            return i18n(className + '::answers::' + value);
	        }
	
	        return i18n(className + '::questions::' + index + '.' + value);
	    }
	
	    return {
	        id: className.toLowerCase(),
	        className: className,
	        questionsCount: questionsCount,
	        get name() {
	            return i18n(className + '::name');
	        },
	        get description() {
	            return i18n(className + '::description');
	        },
	        getAnswer: getAnswer,
	        questions: (0, _range2.default)(questionsCount).map(function (index) {
	            return {
	                get text() {
	                    return i18n(className + '::questions::' + (index + 1));
	                }
	            };
	        }),
	        answers: answers,
	        scales: scaleIds.map(function (id) {
	            return {
	                id: id,
	                get text() {
	                    return i18n(className + '::scales::' + id);
	                }
	            };
	        })
	    };
	}

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.getWidgetClass = getWidgetClass;
	exports.mountWidget = mountWidget;
	exports.forceRender = forceRender;
	exports.default = hotMount;
	
	var _gator = __webpack_require__(97);
	
	var _gator2 = _interopRequireDefault(_gator);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var globalQueries = typeof window !== 'undefined' ? { window: window, document: document, '': null } : { '': null };
	
	function toggleListeners(element) {
	    var listenersMap = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	    var shouldAddEventListeners = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
	
	    if (listenersMap) {
	        Object.keys(listenersMap).forEach(function processSelector(query) {
	            Object.keys(listenersMap[query]).forEach(function processEventName(eventName) {
	                // HACK: private Gator's _root selector
	                var selector = globalQueries.hasOwnProperty(query) ? '_root' : query;
	
	                if (shouldAddEventListeners) {
	                    this.on(eventName, selector, listenersMap[query][eventName]);
	                } else {
	                    this.off(eventName, selector);
	                }
	            }, (0, _gator2.default)(globalQueries[query] || this));
	        }, element);
	    }
	}
	
	function mountListeners(element, listenersMap) {
	    toggleListeners(element, listenersMap, true);
	}
	
	function unmountListeners(element, listenersMap) {
	    toggleListeners(element, listenersMap, false);
	}
	
	var instanceMap = new WeakMap();
	var listenersMap = new WeakMap();
	var nodeMap = new WeakMap();
	
	function safeRender(newPrototype, instance, node) {
	    if (!newPrototype) {
	        return node && node.innerHTML || '';
	    }
	
	    var html = void 0;
	    var originalPrototype = Object.getPrototypeOf(instance);
	
	    try {
	        Object.setPrototypeOf(instance, newPrototype);
	        html = instance.render();
	    } catch (exception) {
	        html = exception.toString();
	    } finally {
	        Object.setPrototypeOf(instance, originalPrototype);
	    }
	
	    return html || '';
	}
	
	var widgetsRegistry = {};
	
	function getWidgetClass(className) {
	    return widgetsRegistry[className];
	}
	
	function mountWidget(node, OldClass, NewClass, sharedData) {
	    var instance = void 0;
	
	    if (OldClass) {
	        widgetsRegistry = this.oldWidgets; // HACK
	        instance = instanceMap.get(node);
	        unmountListeners(node, instance.listeners);
	    } else {
	        widgetsRegistry = this.newWidgets; // HACK
	        instance = new NewClass(sharedData);
	    }
	
	    widgetsRegistry = this.oldWidgets; // HACK
	    var oldHTML = safeRender(OldClass && OldClass.prototype, instance, node);
	    widgetsRegistry = this.newWidgets; // HACK
	    var newHTML = safeRender(NewClass && NewClass.prototype, instance);
	
	    if (oldHTML.trim() !== newHTML.trim()) {
	        node.innerHTML = newHTML; // eslint-disable-line no-param-reassign
	    }
	
	    if (OldClass && NewClass) {
	        instance = Object.setPrototypeOf(instance, NewClass.prototype);
	    }
	
	    if (NewClass) {
	        var listeners = instance.listeners;
	        mountListeners(node, listeners);
	        instanceMap.set(node, instance);
	        listenersMap.set(instance, listeners);
	        nodeMap.set(instance, node);
	    } else {
	        instanceMap.delete(node);
	        listenersMap.delete(instance);
	        nodeMap.delete(instance);
	    }
	}
	
	function forceRender(instance) {
	    var node = nodeMap.get(instance);
	    var listeners = listenersMap.get(instance);
	
	    if (node) {
	        unmountListeners(node, listeners);
	        listeners = instance.listeners;
	        listenersMap.set(instance, listeners);
	
	        node.innerHTML = instance.render();
	        mountListeners(node, listeners);
	    }
	}
	
	function hotMount(root) {
	    var oldWidgets = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	    var newWidgets = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	    var sharedData = arguments[3];
	
	    var allWidgets = Object.assign({}, oldWidgets, newWidgets);
	
	    Object.keys(allWidgets).forEach(function (className) {
	        var nodes = [].slice.call(root.querySelectorAll('[data-widget-class="' + className + '"]'));
	        var OldClass = oldWidgets[className];
	        var NewClass = newWidgets[className];
	
	        nodes.forEach(function (node) {
	            return mountWidget.call({
	                oldWidgets: oldWidgets,
	                newWidgets: newWidgets
	            }, node, OldClass, NewClass, sharedData);
	        });
	    });
	}

/***/ }),
/* 37 */,
/* 38 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.quoteattr = quoteattr;
	exports.escape = escape;
	function quoteattr(str) {
	    var shouldPreserveCR = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
	
	    var preserveCR = shouldPreserveCR ? '&#13;' : '\n';
	    return ('' + str). /* Forces the conversion to string. */
	    replace(/&/g, '&amp;') /* This MUST be the 1st replacement. */
	    .replace(/'/g, '&apos;') /* The 4 other predefined entities, required. */
	    .replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
	    /*
	        You may add other replacements here for HTML only
	        (but it's not necessary).
	        Or for XML, only if the named entities are defined in its DTD.
	        */
	    .replace(/\r\n/g, preserveCR) /* Must be before the next replacement. */
	    .replace(/[\r\n]/g, preserveCR);
	}
	
	function escape(html) {
	    return ('' + html).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
	}

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

	var ListCache = __webpack_require__(13),
	    stackClear = __webpack_require__(169),
	    stackDelete = __webpack_require__(170),
	    stackGet = __webpack_require__(171),
	    stackHas = __webpack_require__(172),
	    stackSet = __webpack_require__(173);
	
	/**
	 * Creates a stack cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Stack(entries) {
	  var data = this.__data__ = new ListCache(entries);
	  this.size = data.size;
	}
	
	// Add methods to `Stack`.
	Stack.prototype.clear = stackClear;
	Stack.prototype['delete'] = stackDelete;
	Stack.prototype.get = stackGet;
	Stack.prototype.has = stackHas;
	Stack.prototype.set = stackSet;
	
	module.exports = Stack;


/***/ }),
/* 40 */
/***/ (function(module, exports) {

	/**
	 * A specialized version of `_.map` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the new mapped array.
	 */
	function arrayMap(array, iteratee) {
	  var index = -1,
	      length = array == null ? 0 : array.length,
	      result = Array(length);
	
	  while (++index < length) {
	    result[index] = iteratee(array[index], index, array);
	  }
	  return result;
	}
	
	module.exports = arrayMap;


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

	var castPath = __webpack_require__(31),
	    toKey = __webpack_require__(10);
	
	/**
	 * The base implementation of `_.get` without support for default values.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path of the property to get.
	 * @returns {*} Returns the resolved value.
	 */
	function baseGet(object, path) {
	  path = castPath(path, object);
	
	  var index = 0,
	      length = path.length;
	
	  while (object != null && index < length) {
	    object = object[toKey(path[index++])];
	  }
	  return (index && index == length) ? object : undefined;
	}
	
	module.exports = baseGet;


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

	var baseIsEqualDeep = __webpack_require__(112),
	    isObjectLike = __webpack_require__(6);
	
	/**
	 * The base implementation of `_.isEqual` which supports partial comparisons
	 * and tracks traversed objects.
	 *
	 * @private
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @param {boolean} bitmask The bitmask flags.
	 *  1 - Unordered comparison
	 *  2 - Partial comparison
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 */
	function baseIsEqual(value, other, bitmask, customizer, stack) {
	  if (value === other) {
	    return true;
	  }
	  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
	    return value !== value && other !== other;
	  }
	  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
	}
	
	module.exports = baseIsEqual;


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(4);
	
	var defineProperty = (function() {
	  try {
	    var func = getNative(Object, 'defineProperty');
	    func({}, '', {});
	    return func;
	  } catch (e) {}
	}());
	
	module.exports = defineProperty;


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

	var SetCache = __webpack_require__(102),
	    arraySome = __webpack_require__(106),
	    cacheHas = __webpack_require__(128);
	
	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1,
	    COMPARE_UNORDERED_FLAG = 2;
	
	/**
	 * A specialized version of `baseIsEqualDeep` for arrays with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Array} array The array to compare.
	 * @param {Array} other The other array to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} stack Tracks traversed `array` and `other` objects.
	 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
	 */
	function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
	  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
	      arrLength = array.length,
	      othLength = other.length;
	
	  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
	    return false;
	  }
	  // Assume cyclic values are equal.
	  var stacked = stack.get(array);
	  if (stacked && stack.get(other)) {
	    return stacked == other;
	  }
	  var index = -1,
	      result = true,
	      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;
	
	  stack.set(array, other);
	  stack.set(other, array);
	
	  // Ignore non-index properties.
	  while (++index < arrLength) {
	    var arrValue = array[index],
	        othValue = other[index];
	
	    if (customizer) {
	      var compared = isPartial
	        ? customizer(othValue, arrValue, index, other, array, stack)
	        : customizer(arrValue, othValue, index, array, other, stack);
	    }
	    if (compared !== undefined) {
	      if (compared) {
	        continue;
	      }
	      result = false;
	      break;
	    }
	    // Recursively compare arrays (susceptible to call stack limits).
	    if (seen) {
	      if (!arraySome(other, function(othValue, othIndex) {
	            if (!cacheHas(seen, othIndex) &&
	                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
	              return seen.push(othIndex);
	            }
	          })) {
	        result = false;
	        break;
	      }
	    } else if (!(
	          arrValue === othValue ||
	            equalFunc(arrValue, othValue, bitmask, customizer, stack)
	        )) {
	      result = false;
	      break;
	    }
	  }
	  stack['delete'](array);
	  stack['delete'](other);
	  return result;
	}
	
	module.exports = equalArrays;


/***/ }),
/* 45 */
/***/ (function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;
	
	module.exports = freeGlobal;
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

	var eq = __webpack_require__(17),
	    isArrayLike = __webpack_require__(8),
	    isIndex = __webpack_require__(19),
	    isObject = __webpack_require__(5);
	
	/**
	 * Checks if the given arguments are from an iteratee call.
	 *
	 * @private
	 * @param {*} value The potential iteratee value argument.
	 * @param {*} index The potential iteratee index or key argument.
	 * @param {*} object The potential iteratee object argument.
	 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
	 *  else `false`.
	 */
	function isIterateeCall(value, index, object) {
	  if (!isObject(object)) {
	    return false;
	  }
	  var type = typeof index;
	  if (type == 'number'
	        ? (isArrayLike(object) && isIndex(index, object.length))
	        : (type == 'string' && index in object)
	      ) {
	    return eq(object[index], value);
	  }
	  return false;
	}
	
	module.exports = isIterateeCall;


/***/ }),
/* 47 */
/***/ (function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Checks if `value` is likely a prototype object.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
	 */
	function isPrototype(value) {
	  var Ctor = value && value.constructor,
	      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;
	
	  return value === proto;
	}
	
	module.exports = isPrototype;


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(5);
	
	/**
	 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` if suitable for strict
	 *  equality comparisons, else `false`.
	 */
	function isStrictComparable(value) {
	  return value === value && !isObject(value);
	}
	
	module.exports = isStrictComparable;


/***/ }),
/* 49 */
/***/ (function(module, exports) {

	/**
	 * A specialized version of `matchesProperty` for source values suitable
	 * for strict equality comparisons, i.e. `===`.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @param {*} srcValue The value to match.
	 * @returns {Function} Returns the new spec function.
	 */
	function matchesStrictComparable(key, srcValue) {
	  return function(object) {
	    if (object == null) {
	      return false;
	    }
	    return object[key] === srcValue &&
	      (srcValue !== undefined || (key in Object(object)));
	  };
	}
	
	module.exports = matchesStrictComparable;


/***/ }),
/* 50 */
/***/ (function(module, exports) {

	/** Used for built-in method references. */
	var funcProto = Function.prototype;
	
	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;
	
	/**
	 * Converts `func` to its source code.
	 *
	 * @private
	 * @param {Function} func The function to convert.
	 * @returns {string} Returns the source code.
	 */
	function toSource(func) {
	  if (func != null) {
	    try {
	      return funcToString.call(func);
	    } catch (e) {}
	    try {
	      return (func + '');
	    } catch (e) {}
	  }
	  return '';
	}
	
	module.exports = toSource;


/***/ }),
/* 51 */
/***/ (function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ }),
/* 52 */
/***/ (function(module, exports) {

	/**
	 * A faster alternative to `Function#apply`, this function invokes `func`
	 * with the `this` binding of `thisArg` and the arguments of `args`.
	 *
	 * @private
	 * @param {Function} func The function to invoke.
	 * @param {*} thisArg The `this` binding of `func`.
	 * @param {Array} args The arguments to invoke `func` with.
	 * @returns {*} Returns the result of `func`.
	 */
	function apply(func, thisArg, args) {
	  switch (args.length) {
	    case 0: return func.call(thisArg);
	    case 1: return func.call(thisArg, args[0]);
	    case 2: return func.call(thisArg, args[0], args[1]);
	    case 3: return func.call(thisArg, args[0], args[1], args[2]);
	  }
	  return func.apply(thisArg, args);
	}
	
	module.exports = apply;


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

	var baseForOwn = __webpack_require__(28),
	    createBaseEach = __webpack_require__(132);
	
	/**
	 * The base implementation of `_.forEach` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Array|Object} collection The collection to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array|Object} Returns `collection`.
	 */
	var baseEach = createBaseEach(baseForOwn);
	
	module.exports = baseEach;


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

	var baseSetToString = __webpack_require__(123),
	    shortOut = __webpack_require__(67);
	
	/**
	 * Sets the `toString` method of `func` to return `string`.
	 *
	 * @private
	 * @param {Function} func The function to modify.
	 * @param {Function} string The `toString` result.
	 * @returns {Function} Returns `func`.
	 */
	var setToString = shortOut(baseSetToString);
	
	module.exports = setToString;


/***/ }),
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */
/***/ (function(module, exports) {

	/**
	 * Appends the elements of `values` to `array`.
	 *
	 * @private
	 * @param {Array} array The array to modify.
	 * @param {Array} values The values to append.
	 * @returns {Array} Returns `array`.
	 */
	function arrayPush(array, values) {
	  var index = -1,
	      length = values.length,
	      offset = array.length;
	
	  while (++index < length) {
	    array[offset + index] = values[index];
	  }
	  return array;
	}
	
	module.exports = arrayPush;


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(4),
	    root = __webpack_require__(2);
	
	/* Built-in method references that are verified to be native. */
	var WeakMap = getNative(root, 'WeakMap');
	
	module.exports = WeakMap;


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

	var apply = __webpack_require__(52);
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max;
	
	/**
	 * A specialized version of `baseRest` which transforms the rest array.
	 *
	 * @private
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @param {Function} transform The rest array transform.
	 * @returns {Function} Returns the new function.
	 */
	function overRest(func, start, transform) {
	  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
	  return function() {
	    var args = arguments,
	        index = -1,
	        length = nativeMax(args.length - start, 0),
	        array = Array(length);
	
	    while (++index < length) {
	      array[index] = args[start + index];
	    }
	    index = -1;
	    var otherArgs = Array(start + 1);
	    while (++index < start) {
	      otherArgs[index] = args[index];
	    }
	    otherArgs[start] = transform(array);
	    return apply(func, this, otherArgs);
	  };
	}
	
	module.exports = overRest;


/***/ }),
/* 67 */
/***/ (function(module, exports) {

	/** Used to detect hot functions by number of calls within a span of milliseconds. */
	var HOT_COUNT = 800,
	    HOT_SPAN = 16;
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeNow = Date.now;
	
	/**
	 * Creates a function that'll short out and invoke `identity` instead
	 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
	 * milliseconds.
	 *
	 * @private
	 * @param {Function} func The function to restrict.
	 * @returns {Function} Returns the new shortable function.
	 */
	function shortOut(func) {
	  var count = 0,
	      lastCalled = 0;
	
	  return function() {
	    var stamp = nativeNow(),
	        remaining = HOT_SPAN - (stamp - lastCalled);
	
	    lastCalled = stamp;
	    if (remaining > 0) {
	      if (++count >= HOT_COUNT) {
	        return arguments[0];
	      }
	    } else {
	      count = 0;
	    }
	    return func.apply(undefined, arguments);
	  };
	}
	
	module.exports = shortOut;


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

	var baseGet = __webpack_require__(41);
	
	/**
	 * Gets the value at `path` of `object`. If the resolved value is
	 * `undefined`, the `defaultValue` is returned in its place.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.7.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path of the property to get.
	 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
	 * @returns {*} Returns the resolved value.
	 * @example
	 *
	 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
	 *
	 * _.get(object, 'a[0].b.c');
	 * // => 3
	 *
	 * _.get(object, ['a', '0', 'b', 'c']);
	 * // => 3
	 *
	 * _.get(object, 'a.b.c', 'default');
	 * // => 'default'
	 */
	function get(object, path, defaultValue) {
	  var result = object == null ? undefined : baseGet(object, path);
	  return result === undefined ? defaultValue : result;
	}
	
	module.exports = get;


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

	var toFinite = __webpack_require__(183);
	
	/**
	 * Converts `value` to an integer.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {number} Returns the converted integer.
	 * @example
	 *
	 * _.toInteger(3.2);
	 * // => 3
	 *
	 * _.toInteger(Number.MIN_VALUE);
	 * // => 0
	 *
	 * _.toInteger(Infinity);
	 * // => 1.7976931348623157e+308
	 *
	 * _.toInteger('3.2');
	 * // => 3
	 */
	function toInteger(value) {
	  var result = toFinite(value),
	      remainder = result % 1;
	
	  return result === result ? (remainder ? result - remainder : result) : 0;
	}
	
	module.exports = toInteger;


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = [__webpack_require__(82).default, __webpack_require__(85).default, __webpack_require__(91).default, __webpack_require__(88).default];

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = main;
	
	var _i18n = __webpack_require__(3);
	
	var _hotMount = __webpack_require__(36);
	
	var _hotMount2 = _interopRequireDefault(_hotMount);
	
	var _User = __webpack_require__(76);
	
	var _User2 = _interopRequireDefault(_User);
	
	var _widgets = __webpack_require__(92);
	
	var _widgets2 = _interopRequireDefault(_widgets);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function main(_ref) {
	    var lang = _ref.lang,
	        translations = _ref.translations,
	        Survey = _ref.Survey;
	
	    translations.forEach(function (dic) {
	        return (0, _i18n.register)(lang, dic);
	    });
	    (0, _i18n.change)(lang);
	
	    (0, _hotMount2.default)(document.body, undefined, _widgets2.default, {
	        user: new _User2.default(),
	        survey: new Survey()
	    });
	
	    var oldWidgets = _widgets2.default;
	
	    if (false) {
	        module.hot.accept('../widgets', function () {
	            var newWidgets = require('../widgets').default;
	            (0, _hotMount2.default)(document.body, oldWidgets, newWidgets);
	            oldWidgets = newWidgets;
	        });
	    }
	}

/***/ }),
/* 72 */
/***/ (function(module, exports) {

	/**
	 * Creates a unary function that invokes `func` with its argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */
	function overArg(func, transform) {
	  return function(arg) {
	    return func(transform(arg));
	  };
	}
	
	module.exports = overArg;


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

	var arrayMap = __webpack_require__(40),
	    baseIteratee = __webpack_require__(21),
	    baseMap = __webpack_require__(117),
	    isArray = __webpack_require__(1);
	
	/**
	 * Creates an array of values by running each element in `collection` thru
	 * `iteratee`. The iteratee is invoked with three arguments:
	 * (value, index|key, collection).
	 *
	 * Many lodash methods are guarded to work as iteratees for methods like
	 * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
	 *
	 * The guarded methods are:
	 * `ary`, `chunk`, `curry`, `curryRight`, `drop`, `dropRight`, `every`,
	 * `fill`, `invert`, `parseInt`, `random`, `range`, `rangeRight`, `repeat`,
	 * `sampleSize`, `slice`, `some`, `sortBy`, `split`, `take`, `takeRight`,
	 * `template`, `trim`, `trimEnd`, `trimStart`, and `words`
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Collection
	 * @param {Array|Object} collection The collection to iterate over.
	 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	 * @returns {Array} Returns the new mapped array.
	 * @example
	 *
	 * function square(n) {
	 *   return n * n;
	 * }
	 *
	 * _.map([4, 8], square);
	 * // => [16, 64]
	 *
	 * _.map({ 'a': 4, 'b': 8 }, square);
	 * // => [16, 64] (iteration order is not guaranteed)
	 *
	 * var users = [
	 *   { 'user': 'barney' },
	 *   { 'user': 'fred' }
	 * ];
	 *
	 * // The `_.property` iteratee shorthand.
	 * _.map(users, 'user');
	 * // => ['barney', 'fred']
	 */
	function map(collection, iteratee) {
	  var func = isArray(collection) ? arrayMap : baseMap;
	  return func(collection, baseIteratee(iteratee, 3));
	}
	
	module.exports = map;


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.surveys = exports.load = undefined;
	
	var _i18n = __webpack_require__(3);
	
	var load = exports.load = {
	    Amon: function Amon(callback, context) {
	        __webpack_require__.e/* nsure */(1, function (require) {
	            (0, _i18n.register)('ru', __webpack_require__(59).default, true);
	            callback.call(context, __webpack_require__(58).default);
	        });
	    },
	    Alexithymia: function Alexithymia(callback, context) {
	        __webpack_require__.e/* nsure */(3, function (require) {
	            (0, _i18n.register)('ru', __webpack_require__(57).default, true);
	            callback.call(context, __webpack_require__(56).default);
	        });
	    },
	    Emin: function Emin(callback, context) {
	        __webpack_require__.e/* nsure */(2, function (require) {
	            (0, _i18n.register)('ru', __webpack_require__(61).default, true);
	            callback.call(context, __webpack_require__(60).default);
	        });
	    },
	    SPA: function SPA(callback, context) {
	        __webpack_require__.e/* nsure */(0, function (require) {
	            (0, _i18n.register)('ru', __webpack_require__(63).default, true);
	            callback.call(context, __webpack_require__(62).default);
	        });
	    }
	};
	
	var surveys = exports.surveys = Object.keys(load);
	
	exports.default = {
	    getPrevious: function getPrevious(survey) {
	        var position = surveys.indexOf(survey.constructor.name);
	        return load[surveys[position - 1]];
	    },
	    getNext: function getNext(survey) {
	        var position = surveys.indexOf(survey.constructor.name);
	        return load[surveys[position + 1]];
	    }
	};

/***/ }),
/* 75 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	exports.getCurrentRoute = getCurrentRoute;
	var EMPTY_REGEX = /^#?\/?$/;
	var REGISTER_REGEX = /^#?\/register\/?/;
	var SURVEY_REGEX = /^#?\/questions\/(\d+)/;
	var RESULTS_REGEX = /^#?\/results\/?/;
	
	// import ResultsForm from 'widgets/ResultsForm';
	
	var routeParams = {
	    register: function register() {
	        return { widget: 'RegisterForm', is: { register: true } };
	    },
	    survey: function survey(index) {
	        return { widget: 'SurveyForm', data: { index: index }, is: { survey: true } };
	    },
	    results: function results() {
	        return { widget: 'ResultsForm', is: { results: true } };
	    }
	};
	
	function register(hash) {
	    if (EMPTY_REGEX.test(hash) || REGISTER_REGEX.test(hash)) {
	        return routeParams.register();
	    }
	}
	
	function survey(hash) {
	    var _ref = hash.match(SURVEY_REGEX) || [],
	        _ref2 = _slicedToArray(_ref, 2),
	        index = _ref2[1];
	
	    return index && routeParams.survey(+index);
	}
	
	function results(hash) {
	    return RESULTS_REGEX.test(hash) && routeParams.results();
	}
	
	function getCurrentRoute() {
	    var hash = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
	
	    return register(hash) || survey(hash) || results(hash) || null;
	}
	
	var DEFAULT_URL = exports.DEFAULT_URL = '/';

/***/ }),
/* 76 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var User = function User() {
	    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
	        _ref$name = _ref.name,
	        name = _ref$name === undefined ? '' : _ref$name,
	        _ref$age = _ref.age,
	        age = _ref$age === undefined ? NaN : _ref$age,
	        _ref$gender = _ref.gender,
	        gender = _ref$gender === undefined ? NaN : _ref$gender,
	        _ref$agree = _ref.agree,
	        agree = _ref$agree === undefined ? false : _ref$agree,
	        _ref$submitted = _ref.submitted,
	        submitted = _ref$submitted === undefined ? false : _ref$submitted,
	        _ref$valid = _ref.valid,
	        valid = _ref$valid === undefined ? false : _ref$valid;
	
	    _classCallCheck(this, User);
	
	    this.name = name;
	    this.age = age;
	    this.gender = gender;
	    this.agree = agree;
	    this.submitted = submitted;
	    this.valid = valid;
	};
	
	exports.default = User;

/***/ }),
/* 77 */,
/* 78 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = format;
	function zero(val) {
	    return "0" + val;
	}
	
	function format(date) {
	    var day = date.getDate();
	    var month = date.getMonth() + 1;
	    var year = date.getYear();
	
	    year = year < 200 ? year + 1900 : year;
	    month = month < 10 ? zero(month) : month;
	    day = day < 10 ? zero(day) : day;
	
	    return day + "." + month + "." + year;
	}

/***/ }),
/* 79 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = range;
	function range(start, end, step) {
	    var number = void 0;
	
	    if (!step) {
	        return range(start, end, 1);
	    }
	
	    if (end === undefined) {
	        return range(0, start, step);
	    }
	
	    var arr = [];
	
	    for (number = start; number < end; number += step) {
	        arr.push(number);
	    }
	
	    return arr;
	}

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _i18n = __webpack_require__(3);
	
	var _i18n2 = _interopRequireDefault(_i18n);
	
	var _softbreak = __webpack_require__(23);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function iif(data, str) {
	    if (!data) return '';
	    return str;
	}
	
	exports.default = function (_ref) {
	    var _ref$surveyLinks = _ref.surveyLinks,
	        prev = _ref$surveyLinks.prev,
	        next = _ref$surveyLinks.next,
	        name = _ref.metaData.name,
	        currentScreen = _ref.currentScreen;
	    return '\n    <h1>\n        ' + iif(prev && false, '<a class="prev-survey" href="#">&#171;</a>') + '\n        ' + (0, _softbreak.linebreak)(name) + '\n        ' + iif(next && false, '<a class="next-survey" href="#">&#187;</a>') + '\n    </h1>\n    <h2>' + (0, _softbreak.linebreak)((0, _i18n2.default)('INSTITUTION')) + '</h2>\n    ' + (currentScreen ? currentScreen.render() : '') + '\n';
	};

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	__webpack_require__(93);
	
	var _assign = __webpack_require__(175);
	
	var _assign2 = _interopRequireDefault(_assign);
	
	var _uniq = __webpack_require__(12);
	
	var _uniq2 = _interopRequireDefault(_uniq);
	
	var _hotMount = __webpack_require__(36);
	
	var _routes = __webpack_require__(75);
	
	var _loader = __webpack_require__(74);
	
	var _loader2 = _interopRequireDefault(_loader);
	
	var _QuizzardApp = __webpack_require__(80);
	
	var _QuizzardApp2 = _interopRequireDefault(_QuizzardApp);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function isRouteValid(route, _ref) {
	    var user = _ref.user,
	        survey = _ref.survey;
	
	    if (!route || !route.is) {
	        return false;
	    }
	
	    if (route.is.register) {
	        return true;
	    }
	
	    var questionsCount = survey.metaData.questions.length;
	
	    if (route.is.survey) {
	        var index = route.data.index;
	
	        return user.valid && index > 0 && index <= questionsCount && (index === 1 || survey.answers[index - 2] !== undefined);
	    }
	
	    if (route.is.results) {
	        return user.valid && survey.answers[questionsCount - 1] !== undefined;
	    }
	
	    return false;
	}
	
	var QuizzardApp = function () {
	    function QuizzardApp(_ref2) {
	        var user = _ref2.user,
	            survey = _ref2.survey;
	
	        _classCallCheck(this, QuizzardApp);
	
	        this.id = (0, _uniq2.default)('quizzard');
	        this.user = user;
	        this.survey = survey;
	        this.route = (0, _routes.getCurrentRoute)(location.hash);
	        this.onHashChange = this.onHashChange.bind(this);
	
	        if (!isRouteValid(this.route, this)) {
	            this.route = (0, _routes.getCurrentRoute)(_routes.DEFAULT_URL);
	            location.hash = _routes.DEFAULT_URL;
	        }
	    }
	
	    _createClass(QuizzardApp, [{
	        key: 'createWidget',
	        value: function createWidget() {
	            var _route = this.route,
	                widget = _route.widget,
	                data = _route.data;
	
	            var Widget = (0, _hotMount.getWidgetClass)(widget);
	            return new Widget((0, _assign2.default)({}, this, data, { id: this.id + '_' + widget }));
	        }
	    }, {
	        key: 'loadSurvey',
	        value: function loadSurvey(Survey) {
	            this.survey = new Survey();
	            this.onHashChange({ oldURL: location.hash });
	        }
	    }, {
	        key: 'onHashChange',
	        value: function onHashChange(_ref3) {
	            var oldURL = _ref3.oldURL;
	
	            var newRoute = (0, _routes.getCurrentRoute)(location.hash);
	            if (newRoute) {
	                if (isRouteValid(newRoute, this)) {
	                    this.route = newRoute;
	                    (0, _hotMount.forceRender)(this);
	                } else {
	                    var _oldURL$split = oldURL.split('#'),
	                        _oldURL$split2 = _slicedToArray(_oldURL$split, 2),
	                        oldHash = _oldURL$split2[1];
	
	                    var oldRoute = (0, _routes.getCurrentRoute)(oldHash);
	
	                    if (isRouteValid(oldRoute, this)) {
	                        location.href = oldURL;
	                    } else {
	                        location.hash = _routes.DEFAULT_URL;
	                    }
	                }
	            } else {
	                location.hash = _routes.DEFAULT_URL;
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var surveyLinks = {
	                prev: !!_loader2.default.getPrevious(this.survey),
	                next: !!_loader2.default.getNext(this.survey)
	            };
	
	            return (0, _QuizzardApp2.default)({
	                surveyLinks: surveyLinks,
	                metaData: this.survey.metaData,
	                currentScreen: this.createWidget()
	            });
	        }
	    }, {
	        key: 'listeners',
	        get: function get() {
	            var _this = this;
	
	            return Object.assign({}, this.createWidget().listeners, {
	                '.prev-survey': {
	                    click: function click(ev) {
	                        ev.preventDefault();
	                        var fn = _loader2.default.getPrevious(_this.survey);
	                        if (fn) {
	                            fn(_this.loadSurvey, _this);
	                        }
	                    }
	                },
	                '.next-survey': {
	                    click: function click(ev) {
	                        ev.preventDefault();
	                        var fn = _loader2.default.getNext(_this.survey);
	                        if (fn) {
	                            fn(_this.loadSurvey, _this);
	                        }
	                    }
	                },
	                window: {
	                    hashchange: this.onHashChange
	                }
	            });
	        }
	    }]);
	
	    return QuizzardApp;
	}();
	
	exports.default = QuizzardApp;

/***/ }),
/* 82 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {
	    INSTITUTION: "\u0414\u0423 \xAB\u0423\u043A\u0440\u0413\u043E\u0441\u041D\u0418\u0418\u041C\u0421\u041F\u0418 \u041C\u0417\u041E \u0423\u043A\u0440\u0430\u0438\u043D\u044B\xBB\n        \u041E\u0442\u0434\u0435\u043B\u0435\u043D\u0438\u0435 \u043F\u0441\u0438\u0445\u043E\u043D\u0435\u0432\u0440\u043E\u043B\u043E\u0433\u0438\u0438, \u043F\u0441\u0438\u0445\u043E\u0442\u0435\u0440\u0430\u043F\u0438\u0438 \u0438\n        \u043C\u0435\u0434\u0438\u0446\u0438\u043D\u0441\u043A\u043E\u0439 \u043F\u0441\u0438\u0445\u043E\u043B\u043E\u0433\u0438\u0438"
	};

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _i18n = __webpack_require__(3);
	
	var _i18n2 = _interopRequireDefault(_i18n);
	
	var _xss = __webpack_require__(38);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function checked(val) {
	    return val ? 'checked="checked"' : '';
	}
	
	function value(val) {
	    return 'value="' + (0, _xss.quoteattr)(val) + '"';
	}
	
	module.exports = function (_ref) {
	    var _ref$id = _ref.id,
	        id = _ref$id === undefined ? 'intro' : _ref$id,
	        _ref$className = _ref.className,
	        className = _ref$className === undefined ? '' : _ref$className,
	        _ref$instruction = _ref.instruction,
	        instruction = _ref$instruction === undefined ? '' : _ref$instruction,
	        user = _ref.user;
	    return '\n  <form id="' + id + '" class="screen intro ' + (0, _xss.quoteattr)(className) + '" method="POST">\n    <fieldset>\n      <legend class="intro-legend">' + (0, _i18n2.default)('INFO_ABOUT_YOU') + '</legend>\n      <div class="intro-sorry">' + (0, _i18n2.default)('WE_NEED_YOUR_DATA') + '</div>\n      <div class="intro-fields">\n        <div class="intro-field intro-field-name">\n            <label class="intro-name" for="' + id + '_name">\n                ' + (0, _i18n2.default)('FULL_NAME') + '\n            </label>\n            <input type="text" id="' + id + '_name"\n                   name="name" ' + value(user.name) + '\n                   placeholder="' + (0, _i18n2.default)('FULL_NAME_PLACEHOLDER') + '"\n                   required />\n        </div>\n        <div class="intro-field intro-field-age">\n            <label class="intro-age" for="' + id + '_age">' + (0, _i18n2.default)('AGE') + '</label>\n            <input type="number"\n                   id="' + id + '_age"\n                   name="age" ' + value(user.age) + '\n                   pattern="[0-9]*" placeholder="18" min="16" max="70" required />\n        </div>\n        <div class="intro-field intro-field-gender">\n            <label>' + (0, _i18n2.default)('GENDER') + '</label>\n            <input type="radio" id="' + id + '_male"\n                   name="gender" ' + value(0) + ' ' + checked(+user.gender === 0) + ' required />\n            <label class="intro-gender" for="' + id + '_male">' + (0, _i18n2.default)('GENDER_NAME', 0) + '</label>\n            <input type="radio" id="' + id + '_female"\n                   name="gender" ' + value(1) + ' ' + checked(+user.gender === 1) + ' required />\n            <label class="intro-gender" for="' + id + '_female">' + (0, _i18n2.default)('GENDER_NAME', 1) + '</label>\n        </div>\n      </div>\n      <div>\n          <input type="checkbox" id="' + id + '_agree" name="agree" ' + checked(user.agree) + ' required />\n          <label for="' + id + '_agree" class="intro-agree">' + (0, _i18n2.default)('TERMS_OF_USE') + '</label>\n          <div class="intro-disclaimer">' + (0, _i18n2.default)('DISCLAIMER') + '</div>\n      </div>\n        <blockquote>\n          <strong>' + (0, _i18n2.default)('INSTRUCTION') + '</strong>:\n          <span>' + instruction + '</span>\n        </blockquote>\n        <div class="intro-button">\n            <button type="submit" class="intro-submit">' + (0, _i18n2.default)('START_SURVEY') + '</button>\n        </div>\n    </fieldset>\n  </form>\n';
	};

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	__webpack_require__(94);
	
	var _uniq = __webpack_require__(12);
	
	var _uniq2 = _interopRequireDefault(_uniq);
	
	var _RegisterForm = __webpack_require__(83);
	
	var _RegisterForm2 = _interopRequireDefault(_RegisterForm);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function toggleValidInput(el) {
	    if (el.checkValidity()) {
	        el.parentNode.classList.remove('invalid');
	    } else {
	        el.parentNode.classList.add('invalid');
	    }
	}
	
	var RegisterForm = function () {
	    function RegisterForm(_ref) {
	        var id = _ref.id,
	            user = _ref.user,
	            survey = _ref.survey;
	
	        _classCallCheck(this, RegisterForm);
	
	        this.id = id || (0, _uniq2.default)('RegisterForm');
	        this.user = user;
	        this.survey = survey;
	        this.submitted = !!user.valid;
	    }
	
	    _createClass(RegisterForm, [{
	        key: 'render',
	        value: function render() {
	            return (0, _RegisterForm2.default)({
	                id: this.id,
	                extraClass: this.submitted ? 'submitted' : '',
	                user: this.user,
	                instruction: this.survey.metaData.description
	            });
	        }
	    }, {
	        key: 'listeners',
	        get: function get() {
	            var _this = this;
	
	            return {
	                input: {
	                    change: function change(_ref2) {
	                        var target = _ref2.target;
	                        var value = target.value,
	                            name = target.name;
	
	
	                        if (name) {
	                            _this.user[name] = value;
	                        }
	
	                        toggleValidInput(target);
	                        _this.user.valid = false; // HACK: marking as dirty
	                    }
	                },
	                '': {
	                    submit: function submit(ev) {
	                        ev.preventDefault();
	                        var dom = document.getElementById(_this.id);
	                        _this.submitted = true;
	                        _this.user.valid = dom.checkValidity();
	
	                        dom.classList.add('submitted');
	                        var els = [].slice.call(dom.querySelectorAll('input'));
	                        els.forEach(toggleValidInput);
	
	                        if (_this.user.valid) {
	                            window.location.hash = '/questions/1';
	                        }
	                    }
	                }
	            };
	        }
	    }]);
	
	    return RegisterForm;
	}();
	
	exports.default = RegisterForm;

/***/ }),
/* 85 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {
	    INFO_ABOUT_YOU: 'Информация о вас',
	    WE_NEED_YOUR_DATA: '\u0414\u043B\u044F \u0442\u043E\u0433\u043E, \u0447\u0442\u043E\u0431\u044B \u043F\u0440\u0438\u043D\u044F\u0442\u044C \u0443\u0447\u0430\u0441\u0442\u0438\u0435 \u0432 \u0438\u0441\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u043D\u0438\u0438,\n        \u043E\u0442 \u0432\u0430\u0441 \u043F\u043E\u0442\u0440\u0435\u0431\u0443\u044E\u0442\u0441\u044F \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0435 \u0434\u0430\u043D\u043D\u044B\u0435: ',
	    FULL_NAME: 'ФИО',
	    FULL_NAME_PLACEHOLDER: 'Фамилия И. О.',
	    AGE: 'Возраст',
	    GENDER: 'Пол',
	    GENDER_NAME: {
	        0: 'мужской',
	        1: 'женский'
	    },
	    TERMS_OF_USE: '\u0417\u0430\u043F\u043E\u043B\u043D\u044F\u044F \u044D\u0442\u0438 \u043F\u043E\u043B\u044F,\n        \u0432\u044B \u0441\u043E\u0433\u043B\u0430\u0448\u0430\u0435\u0442\u0435\u0441\u044C \u0441 \u0443\u0441\u043B\u043E\u0432\u0438\u044F\u043C\u0438 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044F\n        \u0432\u0430\u0448\u0438\u0445 \u0434\u0430\u043D\u043D\u044B\u0445',
	    DISCLAIMER: '\u0412\u0430\u0448\u0438 \u0444\u0430\u043C\u0438\u043B\u0438\u044F, \u0432\u043E\u0437\u0440\u0430\u0441\u0442 \u0438 \u0438\u043D\u0438\u0446\u0438\u0430\u043B\u044B \u0431\u0443\u0434\u0443\u0442\n        \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C\u0441\u044F \u0438\u0441\u043A\u043B\u044E\u0447\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0432 \u043D\u0430\u0443\u0447\u043D\u044B\u0445 \u0446\u0435\u043B\u044F\u0445\n        \u0434\u043B\u044F \u043E\u0431\u0449\u0435\u0439 \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u0438 \u043D\u0435 \u0431\u0443\u0434\u0443\u0442\n        \u043F\u0435\u0440\u0435\u0434\u0430\u043D\u044B \u0442\u0440\u0435\u0442\u044C\u0438\u043C \u043B\u0438\u0446\u0430\u043C, \u0430 \u0442\u0430\u043A\u0436\u0435 \u043D\u0435 \u0431\u0443\u0434\u0443\u0442\n        \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C\u0441\u044F \u0434\u043B\u044F \u0432\u0430\u0448\u0435\u0439 \u0438\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u0438 \u0438/\u0438\u043B\u0438\n        \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u044F \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u0430 \u0441 \u0432\u0430\u043C\u0438.',
	    INSTRUCTION: 'ИНСТРУКЦИЯ',
	    START_SURVEY: 'Пройти опросник'
	};

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _map = __webpack_require__(73);
	
	var _map2 = _interopRequireDefault(_map);
	
	var _chunk = __webpack_require__(176);
	
	var _chunk2 = _interopRequireDefault(_chunk);
	
	var _i18n = __webpack_require__(3);
	
	var _i18n2 = _interopRequireDefault(_i18n);
	
	var _date = __webpack_require__(78);
	
	var _date2 = _interopRequireDefault(_date);
	
	var _xss = __webpack_require__(38);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function renderAnswer(value, index) {
	    var offset = this.offset,
	        metaData = this.metaData;
	
	    var answer = value !== undefined ? metaData.getAnswer(value) : '';
	
	    return '\n      <tr>\n        <td>' + (1 + index + offset) + '</td>\n        <td>' + answer + '</td>\n      </tr>\n    ';
	}
	
	function renderAnswers(answers, extra) {
	    return '\n        <table class="bordered" style="float: left">\n          <thead><tr>\n            <th>' + (0, _i18n2.default)('QUESTION_INDEX') + '</th>\n            <th>' + (0, _i18n2.default)('ANSWER') + '</th>\n          </tr></thead>\n          <tbody>\n            ' + (0, _map2.default)(answers, renderAnswer.bind(extra)).join('') + '\n          </tbody>\n        </table>\n    ';
	}
	
	function renderScale(_ref) {
	    var id = _ref.id,
	        text = _ref.text,
	        _ref$result = _ref.result,
	        value = _ref$result.value,
	        t = _ref$result.t;
	
	    var td3 = this.hasT ? '<td>' + t + '</td>' : '';
	
	    return '\n      <tr>\n        <td title="' + (0, _xss.quoteattr)(text) + '">' + (0, _xss.escape)(id) + '</td>\n        <td>' + value + '</td>\n        ' + td3 + '\n      </tr>\n    ';
	}
	
	function renderScales(scales) {
	    var hasT = scales[0] && scales[0].result.hasOwnProperty('t');
	
	    return '\n        <table class="bordered">\n          <thead>\n          <tr>\n            <th>' + (0, _i18n2.default)('SCALE') + '</th>\n            <th>' + (0, _i18n2.default)('SCORE') + '</th>\n            ' + (hasT && '<th>' + (0, _i18n2.default)('T_SCORE') + '</th>' || '') + '\n          </tr>\n          </thead>\n          <tbody>\n            ' + (0, _map2.default)(scales, renderScale.bind({ hasT: hasT })).join('') + '\n          </tbody>\n        </table>\n    ';
	}
	
	exports.default = function (_ref2) {
	    var id = _ref2.id,
	        user = _ref2.user,
	        answers = _ref2.answers,
	        metaData = _ref2.metaData,
	        scales = _ref2.scales;
	    return '\n    <div id="' + id + '" class="ResultsForm screen">\n      <table class="wide">\n        <tr>\n            <th class="w8">\n                ' + (0, _i18n2.default)('FULL_NAME') + '\n            </th>\n            <td class="under-border">\n                ' + (0, _xss.escape)(user.name) + '\n            </td>\n        </tr>\n        <tr>\n            <th class="w8">\n                ' + (0, _i18n2.default)('AGE') + '\n            </th>\n            <td class="under-border">\n                ' + (0, _xss.escape)(user.age) + '\n            </td>\n        </tr>\n        <tr>\n            <th class="w8">\n                ' + (0, _i18n2.default)('DATE') + '\n            </th>\n            <td class="under-border">\n                ' + (0, _date2.default)(new Date()) + '\n            </td>\n        </tr>\n      </table>\n      <table class="wide">\n        <tr>\n          <td class="topped clearfix">\n            ' + (0, _chunk2.default)(answers, Math.min(38, answers.length / 2)).reduce(function (_ref3, value) {
	        var offset = _ref3.offset,
	            html = _ref3.html;
	        return {
	            offset: offset + value.length,
	            html: html + renderAnswers(value, { offset: offset, metaData: metaData })
	        };
	    }, { offset: 0, html: '' }).html + '\n          </td>\n          <td></td>\n          <td class="topped">\n              ' + renderScales(scales) + '\n          </td>\n        </tr>\n      </table>\n    </div>\n';
	};

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	__webpack_require__(95);
	
	var _uniq = __webpack_require__(12);
	
	var _uniq2 = _interopRequireDefault(_uniq);
	
	var _ResultsForm = __webpack_require__(86);
	
	var _ResultsForm2 = _interopRequireDefault(_ResultsForm);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var ResultsForm = function () {
	    function ResultsForm(_ref) {
	        var id = _ref.id,
	            user = _ref.user,
	            survey = _ref.survey;
	
	        _classCallCheck(this, ResultsForm);
	
	        this.id = id || (0, _uniq2.default)('ResultsForm');
	        this.user = user;
	        this.survey = survey;
	    }
	
	    _createClass(ResultsForm, [{
	        key: 'render',
	        value: function render() {
	            var id = this.id,
	                user = this.user;
	            var _survey = this.survey,
	                metaData = _survey.metaData,
	                answers = _survey.answers;
	
	            var results = this.survey.calculate(user);
	            var scales = results[0].result ? results : metaData.scales.map(function (scale) {
	                return {
	                    id: scale.id,
	                    text: scale.text,
	                    result: results[scale.id]
	                };
	            });
	
	            return (0, _ResultsForm2.default)({
	                id: id,
	                user: user,
	                metaData: metaData,
	                answers: answers,
	                scales: scales
	            });
	        }
	    }, {
	        key: 'listeners',
	        get: function get() {
	            return {};
	        }
	    }]);
	
	    return ResultsForm;
	}();
	
	exports.default = ResultsForm;

/***/ }),
/* 88 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {
	    SCALE: 'Шкала',
	    SCORE: 'Балл',
	    T_SCORE: 'T',
	    DATE: 'Дата',
	    QUESTION_INDEX: '№ п/п',
	    ANSWER: 'Ответ'
	};

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _i18n = __webpack_require__(3);
	
	var _i18n2 = _interopRequireDefault(_i18n);
	
	var _softbreak = __webpack_require__(23);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function renderQuestion(metaData, index, answer) {
	  var answerHtml = answer !== undefined && metaData.getAnswer(answer, index) || '';
	
	  return '\n      <div class="card">\n        <div>\n          <span>' + metaData.questions[index - 1].text + '</span>\n          <span class="answer">' + answerHtml.toLowerCase() + '</span>\n        </div>\n      </div>\n    ';
	}
	
	function renderAnswer(_ref) {
	  var text = _ref.text,
	      cls = _ref.cls,
	      value = _ref.value;
	
	  return '\n      <button tabindex="-1" class="' + cls + '" data-value="' + value + '">\n        ' + (0, _softbreak.linebreak)(text) + '\n      </button>\n    ';
	}
	
	function renderForward(answer, link) {
	  if (answer !== undefined) {
	    return '<a href="#' + link + '">&#187;</a>';
	  }
	
	  return '';
	}
	
	function renderAnswersSection(metaData, index) {
	  return metaData.answers.map(function (answer) {
	    return Object.assign({}, answer, {
	      text: metaData.getAnswer(answer.value, index)
	    });
	  }).map(renderAnswer).join('');
	}
	
	exports.default = function (_ref2) {
	  var id = _ref2.id,
	      links = _ref2.links,
	      index = _ref2.index,
	      metaData = _ref2.metaData,
	      answers = _ref2.answers;
	  return '\n  <div id="' + id + '" class="SurveyForm screen">\n    <h4 id="breadcrumbs">\n      <a href="#' + links.back + '">&#171;</a>\n      ' + (0, _i18n2.default)('QUESTION') + '\n      <span class="current">' + index + '</span>&nbsp;' + (0, _i18n2.default)('FROM') + '\n      <span class="total">' + metaData.questions.length + '</span>\n      ' + renderForward(answers[index - 1], links.forward) + '\n    </h4>\n    <div class="frame">\n      <div class="ribbon">\n        ' + renderQuestion(metaData, index, answers[index - 1]) + '\n      </div>\n    </div>\n    <div class="controls clearfix">\n      ' + renderAnswersSection(metaData, index) + '\n    </div>\n  </div>\n';
	};

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	__webpack_require__(96);
	
	var _uniq = __webpack_require__(12);
	
	var _uniq2 = _interopRequireDefault(_uniq);
	
	var _SurveyForm = __webpack_require__(89);
	
	var _SurveyForm2 = _interopRequireDefault(_SurveyForm);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function getBackLink(index) {
	    var back = index - 1;
	    return back < 1 ? '/register' : '/questions/' + back;
	}
	
	function getForwardLink(index, count) {
	    var forward = index + 1;
	    return forward <= count ? '/questions/' + forward : '/results';
	}
	
	var SurveyForm = function () {
	    function SurveyForm(_ref) {
	        var id = _ref.id,
	            user = _ref.user,
	            survey = _ref.survey,
	            _ref$index = _ref.index,
	            index = _ref$index === undefined ? 1 : _ref$index;
	
	        _classCallCheck(this, SurveyForm);
	
	        this.id = id || (0, _uniq2.default)('SurveyForm');
	        this.user = user;
	        this.survey = survey;
	        this.index = index;
	    }
	
	    _createClass(SurveyForm, [{
	        key: 'render',
	        value: function render() {
	            var id = this.id,
	                survey = this.survey,
	                index = this.index;
	
	            var count = survey.metaData.questionsCount;
	
	            return (0, _SurveyForm2.default)({
	                id: id,
	                links: {
	                    back: getBackLink(index),
	                    forward: getForwardLink(index, count)
	                },
	                index: index,
	                metaData: survey.metaData,
	                answers: survey.answers
	            });
	        }
	    }, {
	        key: 'listeners',
	        get: function get() {
	            var _this = this;
	
	            return {
	                button: {
	                    click: function click(_ref2) {
	                        var target = _ref2.target;
	                        var value = target.dataset.value;
	                        var survey = _this.survey,
	                            index = _this.index;
	
	                        _this.survey.answers[index - 1] = isFinite(+value) ? +value : value;
	                        location.hash = getForwardLink(index, survey.metaData.questionsCount);
	                    }
	                }
	            };
	        }
	    }]);
	
	    return SurveyForm;
	}();
	
	exports.default = SurveyForm;

/***/ }),
/* 91 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {
	    QUESTION: 'Вопрос',
	    FROM: 'из'
	};

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _QuizzardApp = __webpack_require__(81);
	
	var _QuizzardApp2 = _interopRequireDefault(_QuizzardApp);
	
	var _RegisterForm = __webpack_require__(84);
	
	var _RegisterForm2 = _interopRequireDefault(_RegisterForm);
	
	var _ResultsForm = __webpack_require__(87);
	
	var _ResultsForm2 = _interopRequireDefault(_ResultsForm);
	
	var _SurveyForm = __webpack_require__(90);
	
	var _SurveyForm2 = _interopRequireDefault(_SurveyForm);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    QuizzardApp: _QuizzardApp2.default,
	    RegisterForm: _RegisterForm2.default,
	    ResultsForm: _ResultsForm2.default,
	    SurveyForm: _SurveyForm2.default
	};

/***/ }),
/* 93 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 94 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 95 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 96 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 97 */
/***/ (function(module, exports) {

	/**
	 * Copyright 2014 Craig Campbell
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 *
	 * GATOR.JS
	 * Simple Event Delegation
	 *
	 * @version 1.2.4
	 *
	 * Compatible with IE 9+, FF 3.6+, Safari 5+, Chrome
	 *
	 * Include legacy.js for compatibility with older browsers
	 *
	 *             .-._   _ _ _ _ _ _ _ _
	 *  .-''-.__.-'00  '-' ' ' ' ' ' ' ' '-.
	 * '.___ '    .   .--_'-' '-' '-' _'-' '._
	 *  V: V 'vv-'   '_   '.       .'  _..' '.'.
	 *    '=.____.=_.--'   :_.__.__:_   '.   : :
	 *            (((____.-'        '-.  /   : :
	 *                              (((-'\ .' /
	 *                            _____..'  .'
	 *                           '-._____.-'
	 */
	(function() {
	    var _matcher,
	        _level = 0,
	        _id = 0,
	        _handlers = {},
	        _gatorInstances = {};
	
	    function _addEvent(gator, type, callback) {
	
	        // blur and focus do not bubble up but if you use event capturing
	        // then you will get them
	        var useCapture = type == 'blur' || type == 'focus';
	        gator.element.addEventListener(type, callback, useCapture);
	    }
	
	    function _cancel(e) {
	        e.preventDefault();
	        e.stopPropagation();
	    }
	
	    /**
	     * returns function to use for determining if an element
	     * matches a query selector
	     *
	     * @returns {Function}
	     */
	    function _getMatcher(element) {
	        if (_matcher) {
	            return _matcher;
	        }
	
	        if (element.matches) {
	            _matcher = element.matches;
	            return _matcher;
	        }
	
	        if (element.webkitMatchesSelector) {
	            _matcher = element.webkitMatchesSelector;
	            return _matcher;
	        }
	
	        if (element.mozMatchesSelector) {
	            _matcher = element.mozMatchesSelector;
	            return _matcher;
	        }
	
	        if (element.msMatchesSelector) {
	            _matcher = element.msMatchesSelector;
	            return _matcher;
	        }
	
	        if (element.oMatchesSelector) {
	            _matcher = element.oMatchesSelector;
	            return _matcher;
	        }
	
	        // if it doesn't match a native browser method
	        // fall back to the gator function
	        _matcher = Gator.matchesSelector;
	        return _matcher;
	    }
	
	    /**
	     * determines if the specified element matches a given selector
	     *
	     * @param {Node} element - the element to compare against the selector
	     * @param {string} selector
	     * @param {Node} boundElement - the element the listener was attached to
	     * @returns {void|Node}
	     */
	    function _matchesSelector(element, selector, boundElement) {
	
	        // no selector means this event was bound directly to this element
	        if (selector == '_root') {
	            return boundElement;
	        }
	
	        // if we have moved up to the element you bound the event to
	        // then we have come too far
	        if (element === boundElement) {
	            return;
	        }
	
	        // if this is a match then we are done!
	        if (_getMatcher(element).call(element, selector)) {
	            return element;
	        }
	
	        // if this element did not match but has a parent we should try
	        // going up the tree to see if any of the parent elements match
	        // for example if you are looking for a click on an <a> tag but there
	        // is a <span> inside of the a tag that it is the target,
	        // it should still work
	        if (element.parentNode) {
	            _level++;
	            return _matchesSelector(element.parentNode, selector, boundElement);
	        }
	    }
	
	    function _addHandler(gator, event, selector, callback) {
	        if (!_handlers[gator.id]) {
	            _handlers[gator.id] = {};
	        }
	
	        if (!_handlers[gator.id][event]) {
	            _handlers[gator.id][event] = {};
	        }
	
	        if (!_handlers[gator.id][event][selector]) {
	            _handlers[gator.id][event][selector] = [];
	        }
	
	        _handlers[gator.id][event][selector].push(callback);
	    }
	
	    function _removeHandler(gator, event, selector, callback) {
	
	        // if there are no events tied to this element at all
	        // then don't do anything
	        if (!_handlers[gator.id]) {
	            return;
	        }
	
	        // if there is no event type specified then remove all events
	        // example: Gator(element).off()
	        if (!event) {
	            for (var type in _handlers[gator.id]) {
	                if (_handlers[gator.id].hasOwnProperty(type)) {
	                    _handlers[gator.id][type] = {};
	                }
	            }
	            return;
	        }
	
	        // if no callback or selector is specified remove all events of this type
	        // example: Gator(element).off('click')
	        if (!callback && !selector) {
	            _handlers[gator.id][event] = {};
	            return;
	        }
	
	        // if a selector is specified but no callback remove all events
	        // for this selector
	        // example: Gator(element).off('click', '.sub-element')
	        if (!callback) {
	            delete _handlers[gator.id][event][selector];
	            return;
	        }
	
	        // if we have specified an event type, selector, and callback then we
	        // need to make sure there are callbacks tied to this selector to
	        // begin with.  if there aren't then we can stop here
	        if (!_handlers[gator.id][event][selector]) {
	            return;
	        }
	
	        // if there are then loop through all the callbacks and if we find
	        // one that matches remove it from the array
	        for (var i = 0; i < _handlers[gator.id][event][selector].length; i++) {
	            if (_handlers[gator.id][event][selector][i] === callback) {
	                _handlers[gator.id][event][selector].splice(i, 1);
	                break;
	            }
	        }
	    }
	
	    function _handleEvent(id, e, type) {
	        if (!_handlers[id][type]) {
	            return;
	        }
	
	        var target = e.target || e.srcElement,
	            selector,
	            match,
	            matches = {},
	            i = 0,
	            j = 0;
	
	        // find all events that match
	        _level = 0;
	        for (selector in _handlers[id][type]) {
	            if (_handlers[id][type].hasOwnProperty(selector)) {
	                match = _matchesSelector(target, selector, _gatorInstances[id].element);
	
	                if (match && Gator.matchesEvent(type, _gatorInstances[id].element, match, selector == '_root', e)) {
	                    _level++;
	                    _handlers[id][type][selector].match = match;
	                    matches[_level] = _handlers[id][type][selector];
	                }
	            }
	        }
	
	        // stopPropagation() fails to set cancelBubble to true in Webkit
	        // @see http://code.google.com/p/chromium/issues/detail?id=162270
	        e.stopPropagation = function() {
	            e.cancelBubble = true;
	        };
	
	        for (i = 0; i <= _level; i++) {
	            if (matches[i]) {
	                for (j = 0; j < matches[i].length; j++) {
	                    if (matches[i][j].call(matches[i].match, e) === false) {
	                        Gator.cancel(e);
	                        return;
	                    }
	
	                    if (e.cancelBubble) {
	                        return;
	                    }
	                }
	            }
	        }
	    }
	
	    /**
	     * binds the specified events to the element
	     *
	     * @param {string|Array} events
	     * @param {string} selector
	     * @param {Function} callback
	     * @param {boolean=} remove
	     * @returns {Object}
	     */
	    function _bind(events, selector, callback, remove) {
	
	        // fail silently if you pass null or undefined as an alement
	        // in the Gator constructor
	        if (!this.element) {
	            return;
	        }
	
	        if (!(events instanceof Array)) {
	            events = [events];
	        }
	
	        if (!callback && typeof(selector) == 'function') {
	            callback = selector;
	            selector = '_root';
	        }
	
	        var id = this.id,
	            i;
	
	        function _getGlobalCallback(type) {
	            return function(e) {
	                _handleEvent(id, e, type);
	            };
	        }
	
	        for (i = 0; i < events.length; i++) {
	            if (remove) {
	                _removeHandler(this, events[i], selector, callback);
	                continue;
	            }
	
	            if (!_handlers[id] || !_handlers[id][events[i]]) {
	                Gator.addEvent(this, events[i], _getGlobalCallback(events[i]));
	            }
	
	            _addHandler(this, events[i], selector, callback);
	        }
	
	        return this;
	    }
	
	    /**
	     * Gator object constructor
	     *
	     * @param {Node} element
	     */
	    function Gator(element, id) {
	
	        // called as function
	        if (!(this instanceof Gator)) {
	            // only keep one Gator instance per node to make sure that
	            // we don't create a ton of new objects if you want to delegate
	            // multiple events from the same node
	            //
	            // for example: Gator(document).on(...
	            for (var key in _gatorInstances) {
	                if (_gatorInstances[key].element === element) {
	                    return _gatorInstances[key];
	                }
	            }
	
	            _id++;
	            _gatorInstances[_id] = new Gator(element, _id);
	
	            return _gatorInstances[_id];
	        }
	
	        this.element = element;
	        this.id = id;
	    }
	
	    /**
	     * adds an event
	     *
	     * @param {string|Array} events
	     * @param {string} selector
	     * @param {Function} callback
	     * @returns {Object}
	     */
	    Gator.prototype.on = function(events, selector, callback) {
	        return _bind.call(this, events, selector, callback);
	    };
	
	    /**
	     * removes an event
	     *
	     * @param {string|Array} events
	     * @param {string} selector
	     * @param {Function} callback
	     * @returns {Object}
	     */
	    Gator.prototype.off = function(events, selector, callback) {
	        return _bind.call(this, events, selector, callback, true);
	    };
	
	    Gator.matchesSelector = function() {};
	    Gator.cancel = _cancel;
	    Gator.addEvent = _addEvent;
	    Gator.matchesEvent = function() {
	        return true;
	    };
	
	    if (typeof module !== 'undefined' && module.exports) {
	        module.exports = Gator;
	    }
	
	    window.Gator = Gator;
	}) ();


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(4),
	    root = __webpack_require__(2);
	
	/* Built-in method references that are verified to be native. */
	var DataView = getNative(root, 'DataView');
	
	module.exports = DataView;


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

	var hashClear = __webpack_require__(144),
	    hashDelete = __webpack_require__(145),
	    hashGet = __webpack_require__(146),
	    hashHas = __webpack_require__(147),
	    hashSet = __webpack_require__(148);
	
	/**
	 * Creates a hash object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Hash(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;
	
	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}
	
	// Add methods to `Hash`.
	Hash.prototype.clear = hashClear;
	Hash.prototype['delete'] = hashDelete;
	Hash.prototype.get = hashGet;
	Hash.prototype.has = hashHas;
	Hash.prototype.set = hashSet;
	
	module.exports = Hash;


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(4),
	    root = __webpack_require__(2);
	
	/* Built-in method references that are verified to be native. */
	var Promise = getNative(root, 'Promise');
	
	module.exports = Promise;


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(4),
	    root = __webpack_require__(2);
	
	/* Built-in method references that are verified to be native. */
	var Set = getNative(root, 'Set');
	
	module.exports = Set;


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

	var MapCache = __webpack_require__(25),
	    setCacheAdd = __webpack_require__(166),
	    setCacheHas = __webpack_require__(167);
	
	/**
	 *
	 * Creates an array cache object to store unique values.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [values] The values to cache.
	 */
	function SetCache(values) {
	  var index = -1,
	      length = values == null ? 0 : values.length;
	
	  this.__data__ = new MapCache;
	  while (++index < length) {
	    this.add(values[index]);
	  }
	}
	
	// Add methods to `SetCache`.
	SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
	SetCache.prototype.has = setCacheHas;
	
	module.exports = SetCache;


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

	var root = __webpack_require__(2);
	
	/** Built-in value references. */
	var Uint8Array = root.Uint8Array;
	
	module.exports = Uint8Array;


/***/ }),
/* 104 */
/***/ (function(module, exports) {

	/**
	 * A specialized version of `_.filter` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {Array} Returns the new filtered array.
	 */
	function arrayFilter(array, predicate) {
	  var index = -1,
	      length = array == null ? 0 : array.length,
	      resIndex = 0,
	      result = [];
	
	  while (++index < length) {
	    var value = array[index];
	    if (predicate(value, index, array)) {
	      result[resIndex++] = value;
	    }
	  }
	  return result;
	}
	
	module.exports = arrayFilter;


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

	var baseTimes = __webpack_require__(125),
	    isArguments = __webpack_require__(29),
	    isArray = __webpack_require__(1),
	    isBuffer = __webpack_require__(32),
	    isIndex = __webpack_require__(19),
	    isTypedArray = __webpack_require__(34);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Creates an array of the enumerable property names of the array-like `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @param {boolean} inherited Specify returning inherited property names.
	 * @returns {Array} Returns the array of property names.
	 */
	function arrayLikeKeys(value, inherited) {
	  var isArr = isArray(value),
	      isArg = !isArr && isArguments(value),
	      isBuff = !isArr && !isArg && isBuffer(value),
	      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
	      skipIndexes = isArr || isArg || isBuff || isType,
	      result = skipIndexes ? baseTimes(value.length, String) : [],
	      length = result.length;
	
	  for (var key in value) {
	    if ((inherited || hasOwnProperty.call(value, key)) &&
	        !(skipIndexes && (
	           // Safari 9 has enumerable `arguments.length` in strict mode.
	           key == 'length' ||
	           // Node.js 0.10 has enumerable non-index properties on buffers.
	           (isBuff && (key == 'offset' || key == 'parent')) ||
	           // PhantomJS 2 has enumerable non-index properties on typed arrays.
	           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
	           // Skip index properties.
	           isIndex(key, length)
	        ))) {
	      result.push(key);
	    }
	  }
	  return result;
	}
	
	module.exports = arrayLikeKeys;


/***/ }),
/* 106 */
/***/ (function(module, exports) {

	/**
	 * A specialized version of `_.some` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {boolean} Returns `true` if any element passes the predicate check,
	 *  else `false`.
	 */
	function arraySome(array, predicate) {
	  var index = -1,
	      length = array == null ? 0 : array.length;
	
	  while (++index < length) {
	    if (predicate(array[index], index, array)) {
	      return true;
	    }
	  }
	  return false;
	}
	
	module.exports = arraySome;


/***/ }),
/* 107 */,
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

	var createBaseFor = __webpack_require__(133);
	
	/**
	 * The base implementation of `baseForOwn` which iterates over `object`
	 * properties returned by `keysFunc` and invokes `iteratee` for each property.
	 * Iteratee functions may exit iteration early by explicitly returning `false`.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @returns {Object} Returns `object`.
	 */
	var baseFor = createBaseFor();
	
	module.exports = baseFor;


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

	var arrayPush = __webpack_require__(64),
	    isArray = __webpack_require__(1);
	
	/**
	 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
	 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
	 * symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @param {Function} symbolsFunc The function to get the symbols of `object`.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function baseGetAllKeys(object, keysFunc, symbolsFunc) {
	  var result = keysFunc(object);
	  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
	}
	
	module.exports = baseGetAllKeys;


/***/ }),
/* 110 */
/***/ (function(module, exports) {

	/**
	 * The base implementation of `_.hasIn` without support for deep paths.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {Array|string} key The key to check.
	 * @returns {boolean} Returns `true` if `key` exists, else `false`.
	 */
	function baseHasIn(object, key) {
	  return object != null && key in Object(object);
	}
	
	module.exports = baseHasIn;


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(7),
	    isObjectLike = __webpack_require__(6);
	
	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]';
	
	/**
	 * The base implementation of `_.isArguments`.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 */
	function baseIsArguments(value) {
	  return isObjectLike(value) && baseGetTag(value) == argsTag;
	}
	
	module.exports = baseIsArguments;


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

	var Stack = __webpack_require__(39),
	    equalArrays = __webpack_require__(44),
	    equalByTag = __webpack_require__(135),
	    equalObjects = __webpack_require__(136),
	    getTag = __webpack_require__(141),
	    isArray = __webpack_require__(1),
	    isBuffer = __webpack_require__(32),
	    isTypedArray = __webpack_require__(34);
	
	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1;
	
	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    objectTag = '[object Object]';
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * A specialized version of `baseIsEqual` for arrays and objects which performs
	 * deep comparisons and tracks traversed objects enabling objects with circular
	 * references to be compared.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
	  var objIsArr = isArray(object),
	      othIsArr = isArray(other),
	      objTag = objIsArr ? arrayTag : getTag(object),
	      othTag = othIsArr ? arrayTag : getTag(other);
	
	  objTag = objTag == argsTag ? objectTag : objTag;
	  othTag = othTag == argsTag ? objectTag : othTag;
	
	  var objIsObj = objTag == objectTag,
	      othIsObj = othTag == objectTag,
	      isSameTag = objTag == othTag;
	
	  if (isSameTag && isBuffer(object)) {
	    if (!isBuffer(other)) {
	      return false;
	    }
	    objIsArr = true;
	    objIsObj = false;
	  }
	  if (isSameTag && !objIsObj) {
	    stack || (stack = new Stack);
	    return (objIsArr || isTypedArray(object))
	      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
	      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
	  }
	  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
	    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
	        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');
	
	    if (objIsWrapped || othIsWrapped) {
	      var objUnwrapped = objIsWrapped ? object.value() : object,
	          othUnwrapped = othIsWrapped ? other.value() : other;
	
	      stack || (stack = new Stack);
	      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
	    }
	  }
	  if (!isSameTag) {
	    return false;
	  }
	  stack || (stack = new Stack);
	  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
	}
	
	module.exports = baseIsEqualDeep;


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

	var Stack = __webpack_require__(39),
	    baseIsEqual = __webpack_require__(42);
	
	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1,
	    COMPARE_UNORDERED_FLAG = 2;
	
	/**
	 * The base implementation of `_.isMatch` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Object} object The object to inspect.
	 * @param {Object} source The object of property values to match.
	 * @param {Array} matchData The property names, values, and compare flags to match.
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
	 */
	function baseIsMatch(object, source, matchData, customizer) {
	  var index = matchData.length,
	      length = index,
	      noCustomizer = !customizer;
	
	  if (object == null) {
	    return !length;
	  }
	  object = Object(object);
	  while (index--) {
	    var data = matchData[index];
	    if ((noCustomizer && data[2])
	          ? data[1] !== object[data[0]]
	          : !(data[0] in object)
	        ) {
	      return false;
	    }
	  }
	  while (++index < length) {
	    data = matchData[index];
	    var key = data[0],
	        objValue = object[key],
	        srcValue = data[1];
	
	    if (noCustomizer && data[2]) {
	      if (objValue === undefined && !(key in object)) {
	        return false;
	      }
	    } else {
	      var stack = new Stack;
	      if (customizer) {
	        var result = customizer(objValue, srcValue, key, object, source, stack);
	      }
	      if (!(result === undefined
	            ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack)
	            : result
	          )) {
	        return false;
	      }
	    }
	  }
	  return true;
	}
	
	module.exports = baseIsMatch;


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(33),
	    isMasked = __webpack_require__(150),
	    isObject = __webpack_require__(5),
	    toSource = __webpack_require__(50);
	
	/**
	 * Used to match `RegExp`
	 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
	 */
	var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
	
	/** Used to detect host constructors (Safari). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;
	
	/** Used for built-in method references. */
	var funcProto = Function.prototype,
	    objectProto = Object.prototype;
	
	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);
	
	/**
	 * The base implementation of `_.isNative` without bad shim checks.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function,
	 *  else `false`.
	 */
	function baseIsNative(value) {
	  if (!isObject(value) || isMasked(value)) {
	    return false;
	  }
	  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
	  return pattern.test(toSource(value));
	}
	
	module.exports = baseIsNative;


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(7),
	    isLength = __webpack_require__(27),
	    isObjectLike = __webpack_require__(6);
	
	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    funcTag = '[object Function]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    objectTag = '[object Object]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    weakMapTag = '[object WeakMap]';
	
	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';
	
	/** Used to identify `toStringTag` values of typed arrays. */
	var typedArrayTags = {};
	typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
	typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
	typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
	typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
	typedArrayTags[uint32Tag] = true;
	typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
	typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
	typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
	typedArrayTags[errorTag] = typedArrayTags[funcTag] =
	typedArrayTags[mapTag] = typedArrayTags[numberTag] =
	typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
	typedArrayTags[setTag] = typedArrayTags[stringTag] =
	typedArrayTags[weakMapTag] = false;
	
	/**
	 * The base implementation of `_.isTypedArray` without Node.js optimizations.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 */
	function baseIsTypedArray(value) {
	  return isObjectLike(value) &&
	    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
	}
	
	module.exports = baseIsTypedArray;


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

	var isPrototype = __webpack_require__(47),
	    nativeKeys = __webpack_require__(163);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeys(object) {
	  if (!isPrototype(object)) {
	    return nativeKeys(object);
	  }
	  var result = [];
	  for (var key in Object(object)) {
	    if (hasOwnProperty.call(object, key) && key != 'constructor') {
	      result.push(key);
	    }
	  }
	  return result;
	}
	
	module.exports = baseKeys;


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

	var baseEach = __webpack_require__(53),
	    isArrayLike = __webpack_require__(8);
	
	/**
	 * The base implementation of `_.map` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Array|Object} collection The collection to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the new mapped array.
	 */
	function baseMap(collection, iteratee) {
	  var index = -1,
	      result = isArrayLike(collection) ? Array(collection.length) : [];
	
	  baseEach(collection, function(value, key, collection) {
	    result[++index] = iteratee(value, key, collection);
	  });
	  return result;
	}
	
	module.exports = baseMap;


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

	var baseIsMatch = __webpack_require__(113),
	    getMatchData = __webpack_require__(138),
	    matchesStrictComparable = __webpack_require__(49);
	
	/**
	 * The base implementation of `_.matches` which doesn't clone `source`.
	 *
	 * @private
	 * @param {Object} source The object of property values to match.
	 * @returns {Function} Returns the new spec function.
	 */
	function baseMatches(source) {
	  var matchData = getMatchData(source);
	  if (matchData.length == 1 && matchData[0][2]) {
	    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
	  }
	  return function(object) {
	    return object === source || baseIsMatch(object, source, matchData);
	  };
	}
	
	module.exports = baseMatches;


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

	var baseIsEqual = __webpack_require__(42),
	    get = __webpack_require__(68),
	    hasIn = __webpack_require__(178),
	    isKey = __webpack_require__(26),
	    isStrictComparable = __webpack_require__(48),
	    matchesStrictComparable = __webpack_require__(49),
	    toKey = __webpack_require__(10);
	
	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1,
	    COMPARE_UNORDERED_FLAG = 2;
	
	/**
	 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
	 *
	 * @private
	 * @param {string} path The path of the property to get.
	 * @param {*} srcValue The value to match.
	 * @returns {Function} Returns the new spec function.
	 */
	function baseMatchesProperty(path, srcValue) {
	  if (isKey(path) && isStrictComparable(srcValue)) {
	    return matchesStrictComparable(toKey(path), srcValue);
	  }
	  return function(object) {
	    var objValue = get(object, path);
	    return (objValue === undefined && objValue === srcValue)
	      ? hasIn(object, path)
	      : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
	  };
	}
	
	module.exports = baseMatchesProperty;


/***/ }),
/* 120 */
/***/ (function(module, exports) {

	/**
	 * The base implementation of `_.property` without support for deep paths.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 */
	function baseProperty(key) {
	  return function(object) {
	    return object == null ? undefined : object[key];
	  };
	}
	
	module.exports = baseProperty;


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

	var baseGet = __webpack_require__(41);
	
	/**
	 * A specialized version of `baseProperty` which supports deep paths.
	 *
	 * @private
	 * @param {Array|string} path The path of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 */
	function basePropertyDeep(path) {
	  return function(object) {
	    return baseGet(object, path);
	  };
	}
	
	module.exports = basePropertyDeep;


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

	var identity = __webpack_require__(22),
	    overRest = __webpack_require__(66),
	    setToString = __webpack_require__(54);
	
	/**
	 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
	 *
	 * @private
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @returns {Function} Returns the new function.
	 */
	function baseRest(func, start) {
	  return setToString(overRest(func, start, identity), func + '');
	}
	
	module.exports = baseRest;


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

	var constant = __webpack_require__(177),
	    defineProperty = __webpack_require__(43),
	    identity = __webpack_require__(22);
	
	/**
	 * The base implementation of `setToString` without support for hot loop shorting.
	 *
	 * @private
	 * @param {Function} func The function to modify.
	 * @param {Function} string The `toString` result.
	 * @returns {Function} Returns `func`.
	 */
	var baseSetToString = !defineProperty ? identity : function(func, string) {
	  return defineProperty(func, 'toString', {
	    'configurable': true,
	    'enumerable': false,
	    'value': constant(string),
	    'writable': true
	  });
	};
	
	module.exports = baseSetToString;


/***/ }),
/* 124 */
/***/ (function(module, exports) {

	/**
	 * The base implementation of `_.slice` without an iteratee call guard.
	 *
	 * @private
	 * @param {Array} array The array to slice.
	 * @param {number} [start=0] The start position.
	 * @param {number} [end=array.length] The end position.
	 * @returns {Array} Returns the slice of `array`.
	 */
	function baseSlice(array, start, end) {
	  var index = -1,
	      length = array.length;
	
	  if (start < 0) {
	    start = -start > length ? 0 : (length + start);
	  }
	  end = end > length ? length : end;
	  if (end < 0) {
	    end += length;
	  }
	  length = start > end ? 0 : ((end - start) >>> 0);
	  start >>>= 0;
	
	  var result = Array(length);
	  while (++index < length) {
	    result[index] = array[index + start];
	  }
	  return result;
	}
	
	module.exports = baseSlice;


/***/ }),
/* 125 */
/***/ (function(module, exports) {

	/**
	 * The base implementation of `_.times` without support for iteratee shorthands
	 * or max array length checks.
	 *
	 * @private
	 * @param {number} n The number of times to invoke `iteratee`.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the array of results.
	 */
	function baseTimes(n, iteratee) {
	  var index = -1,
	      result = Array(n);
	
	  while (++index < n) {
	    result[index] = iteratee(index);
	  }
	  return result;
	}
	
	module.exports = baseTimes;


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(9),
	    arrayMap = __webpack_require__(40),
	    isArray = __webpack_require__(1),
	    isSymbol = __webpack_require__(18);
	
	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0;
	
	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : undefined,
	    symbolToString = symbolProto ? symbolProto.toString : undefined;
	
	/**
	 * The base implementation of `_.toString` which doesn't convert nullish
	 * values to empty strings.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 */
	function baseToString(value) {
	  // Exit early for strings to avoid a performance hit in some environments.
	  if (typeof value == 'string') {
	    return value;
	  }
	  if (isArray(value)) {
	    // Recursively convert values (susceptible to call stack limits).
	    return arrayMap(value, baseToString) + '';
	  }
	  if (isSymbol(value)) {
	    return symbolToString ? symbolToString.call(value) : '';
	  }
	  var result = (value + '');
	  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
	}
	
	module.exports = baseToString;


/***/ }),
/* 127 */
/***/ (function(module, exports) {

	/**
	 * The base implementation of `_.unary` without support for storing metadata.
	 *
	 * @private
	 * @param {Function} func The function to cap arguments for.
	 * @returns {Function} Returns the new capped function.
	 */
	function baseUnary(func) {
	  return function(value) {
	    return func(value);
	  };
	}
	
	module.exports = baseUnary;


/***/ }),
/* 128 */
/***/ (function(module, exports) {

	/**
	 * Checks if a `cache` value for `key` exists.
	 *
	 * @private
	 * @param {Object} cache The cache to query.
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function cacheHas(cache, key) {
	  return cache.has(key);
	}
	
	module.exports = cacheHas;


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

	var assignValue = __webpack_require__(30),
	    baseAssignValue = __webpack_require__(20);
	
	/**
	 * Copies properties of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy properties from.
	 * @param {Array} props The property identifiers to copy.
	 * @param {Object} [object={}] The object to copy properties to.
	 * @param {Function} [customizer] The function to customize copied values.
	 * @returns {Object} Returns `object`.
	 */
	function copyObject(source, props, object, customizer) {
	  var isNew = !object;
	  object || (object = {});
	
	  var index = -1,
	      length = props.length;
	
	  while (++index < length) {
	    var key = props[index];
	
	    var newValue = customizer
	      ? customizer(object[key], source[key], key, object, source)
	      : undefined;
	
	    if (newValue === undefined) {
	      newValue = source[key];
	    }
	    if (isNew) {
	      baseAssignValue(object, key, newValue);
	    } else {
	      assignValue(object, key, newValue);
	    }
	  }
	  return object;
	}
	
	module.exports = copyObject;


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

	var root = __webpack_require__(2);
	
	/** Used to detect overreaching core-js shims. */
	var coreJsData = root['__core-js_shared__'];
	
	module.exports = coreJsData;


/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

	var baseRest = __webpack_require__(122),
	    isIterateeCall = __webpack_require__(46);
	
	/**
	 * Creates a function like `_.assign`.
	 *
	 * @private
	 * @param {Function} assigner The function to assign values.
	 * @returns {Function} Returns the new assigner function.
	 */
	function createAssigner(assigner) {
	  return baseRest(function(object, sources) {
	    var index = -1,
	        length = sources.length,
	        customizer = length > 1 ? sources[length - 1] : undefined,
	        guard = length > 2 ? sources[2] : undefined;
	
	    customizer = (assigner.length > 3 && typeof customizer == 'function')
	      ? (length--, customizer)
	      : undefined;
	
	    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
	      customizer = length < 3 ? undefined : customizer;
	      length = 1;
	    }
	    object = Object(object);
	    while (++index < length) {
	      var source = sources[index];
	      if (source) {
	        assigner(object, source, index, customizer);
	      }
	    }
	    return object;
	  });
	}
	
	module.exports = createAssigner;


/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

	var isArrayLike = __webpack_require__(8);
	
	/**
	 * Creates a `baseEach` or `baseEachRight` function.
	 *
	 * @private
	 * @param {Function} eachFunc The function to iterate over a collection.
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Function} Returns the new base function.
	 */
	function createBaseEach(eachFunc, fromRight) {
	  return function(collection, iteratee) {
	    if (collection == null) {
	      return collection;
	    }
	    if (!isArrayLike(collection)) {
	      return eachFunc(collection, iteratee);
	    }
	    var length = collection.length,
	        index = fromRight ? length : -1,
	        iterable = Object(collection);
	
	    while ((fromRight ? index-- : ++index < length)) {
	      if (iteratee(iterable[index], index, iterable) === false) {
	        break;
	      }
	    }
	    return collection;
	  };
	}
	
	module.exports = createBaseEach;


/***/ }),
/* 133 */
/***/ (function(module, exports) {

	/**
	 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
	 *
	 * @private
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Function} Returns the new base function.
	 */
	function createBaseFor(fromRight) {
	  return function(object, iteratee, keysFunc) {
	    var index = -1,
	        iterable = Object(object),
	        props = keysFunc(object),
	        length = props.length;
	
	    while (length--) {
	      var key = props[fromRight ? length : ++index];
	      if (iteratee(iterable[key], key, iterable) === false) {
	        break;
	      }
	    }
	    return object;
	  };
	}
	
	module.exports = createBaseFor;


/***/ }),
/* 134 */,
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(9),
	    Uint8Array = __webpack_require__(103),
	    eq = __webpack_require__(17),
	    equalArrays = __webpack_require__(44),
	    mapToArray = __webpack_require__(161),
	    setToArray = __webpack_require__(168);
	
	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1,
	    COMPARE_UNORDERED_FLAG = 2;
	
	/** `Object#toString` result references. */
	var boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    symbolTag = '[object Symbol]';
	
	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]';
	
	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : undefined,
	    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;
	
	/**
	 * A specialized version of `baseIsEqualDeep` for comparing objects of
	 * the same `toStringTag`.
	 *
	 * **Note:** This function only supports comparing values with tags of
	 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {string} tag The `toStringTag` of the objects to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} stack Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
	  switch (tag) {
	    case dataViewTag:
	      if ((object.byteLength != other.byteLength) ||
	          (object.byteOffset != other.byteOffset)) {
	        return false;
	      }
	      object = object.buffer;
	      other = other.buffer;
	
	    case arrayBufferTag:
	      if ((object.byteLength != other.byteLength) ||
	          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
	        return false;
	      }
	      return true;
	
	    case boolTag:
	    case dateTag:
	    case numberTag:
	      // Coerce booleans to `1` or `0` and dates to milliseconds.
	      // Invalid dates are coerced to `NaN`.
	      return eq(+object, +other);
	
	    case errorTag:
	      return object.name == other.name && object.message == other.message;
	
	    case regexpTag:
	    case stringTag:
	      // Coerce regexes to strings and treat strings, primitives and objects,
	      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
	      // for more details.
	      return object == (other + '');
	
	    case mapTag:
	      var convert = mapToArray;
	
	    case setTag:
	      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
	      convert || (convert = setToArray);
	
	      if (object.size != other.size && !isPartial) {
	        return false;
	      }
	      // Assume cyclic values are equal.
	      var stacked = stack.get(object);
	      if (stacked) {
	        return stacked == other;
	      }
	      bitmask |= COMPARE_UNORDERED_FLAG;
	
	      // Recursively compare objects (susceptible to call stack limits).
	      stack.set(object, other);
	      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
	      stack['delete'](object);
	      return result;
	
	    case symbolTag:
	      if (symbolValueOf) {
	        return symbolValueOf.call(object) == symbolValueOf.call(other);
	      }
	  }
	  return false;
	}
	
	module.exports = equalByTag;


/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

	var getAllKeys = __webpack_require__(137);
	
	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1;
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * A specialized version of `baseIsEqualDeep` for objects with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} stack Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
	  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
	      objProps = getAllKeys(object),
	      objLength = objProps.length,
	      othProps = getAllKeys(other),
	      othLength = othProps.length;
	
	  if (objLength != othLength && !isPartial) {
	    return false;
	  }
	  var index = objLength;
	  while (index--) {
	    var key = objProps[index];
	    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
	      return false;
	    }
	  }
	  // Assume cyclic values are equal.
	  var stacked = stack.get(object);
	  if (stacked && stack.get(other)) {
	    return stacked == other;
	  }
	  var result = true;
	  stack.set(object, other);
	  stack.set(other, object);
	
	  var skipCtor = isPartial;
	  while (++index < objLength) {
	    key = objProps[index];
	    var objValue = object[key],
	        othValue = other[key];
	
	    if (customizer) {
	      var compared = isPartial
	        ? customizer(othValue, objValue, key, other, object, stack)
	        : customizer(objValue, othValue, key, object, other, stack);
	    }
	    // Recursively compare objects (susceptible to call stack limits).
	    if (!(compared === undefined
	          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
	          : compared
	        )) {
	      result = false;
	      break;
	    }
	    skipCtor || (skipCtor = key == 'constructor');
	  }
	  if (result && !skipCtor) {
	    var objCtor = object.constructor,
	        othCtor = other.constructor;
	
	    // Non `Object` object instances with different constructors are not equal.
	    if (objCtor != othCtor &&
	        ('constructor' in object && 'constructor' in other) &&
	        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
	          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
	      result = false;
	    }
	  }
	  stack['delete'](object);
	  stack['delete'](other);
	  return result;
	}
	
	module.exports = equalObjects;


/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

	var baseGetAllKeys = __webpack_require__(109),
	    getSymbols = __webpack_require__(140),
	    keys = __webpack_require__(11);
	
	/**
	 * Creates an array of own enumerable property names and symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function getAllKeys(object) {
	  return baseGetAllKeys(object, keys, getSymbols);
	}
	
	module.exports = getAllKeys;


/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

	var isStrictComparable = __webpack_require__(48),
	    keys = __webpack_require__(11);
	
	/**
	 * Gets the property names, values, and compare flags of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the match data of `object`.
	 */
	function getMatchData(object) {
	  var result = keys(object),
	      length = result.length;
	
	  while (length--) {
	    var key = result[length],
	        value = object[key];
	
	    result[length] = [key, value, isStrictComparable(value)];
	  }
	  return result;
	}
	
	module.exports = getMatchData;


/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(9);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;
	
	/** Built-in value references. */
	var symToStringTag = Symbol ? Symbol.toStringTag : undefined;
	
	/**
	 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the raw `toStringTag`.
	 */
	function getRawTag(value) {
	  var isOwn = hasOwnProperty.call(value, symToStringTag),
	      tag = value[symToStringTag];
	
	  try {
	    value[symToStringTag] = undefined;
	    var unmasked = true;
	  } catch (e) {}
	
	  var result = nativeObjectToString.call(value);
	  if (unmasked) {
	    if (isOwn) {
	      value[symToStringTag] = tag;
	    } else {
	      delete value[symToStringTag];
	    }
	  }
	  return result;
	}
	
	module.exports = getRawTag;


/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

	var arrayFilter = __webpack_require__(104),
	    stubArray = __webpack_require__(181);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Built-in value references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeGetSymbols = Object.getOwnPropertySymbols;
	
	/**
	 * Creates an array of the own enumerable symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of symbols.
	 */
	var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
	  if (object == null) {
	    return [];
	  }
	  object = Object(object);
	  return arrayFilter(nativeGetSymbols(object), function(symbol) {
	    return propertyIsEnumerable.call(object, symbol);
	  });
	};
	
	module.exports = getSymbols;


/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

	var DataView = __webpack_require__(98),
	    Map = __webpack_require__(24),
	    Promise = __webpack_require__(100),
	    Set = __webpack_require__(101),
	    WeakMap = __webpack_require__(65),
	    baseGetTag = __webpack_require__(7),
	    toSource = __webpack_require__(50);
	
	/** `Object#toString` result references. */
	var mapTag = '[object Map]',
	    objectTag = '[object Object]',
	    promiseTag = '[object Promise]',
	    setTag = '[object Set]',
	    weakMapTag = '[object WeakMap]';
	
	var dataViewTag = '[object DataView]';
	
	/** Used to detect maps, sets, and weakmaps. */
	var dataViewCtorString = toSource(DataView),
	    mapCtorString = toSource(Map),
	    promiseCtorString = toSource(Promise),
	    setCtorString = toSource(Set),
	    weakMapCtorString = toSource(WeakMap);
	
	/**
	 * Gets the `toStringTag` of `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	var getTag = baseGetTag;
	
	// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
	if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
	    (Map && getTag(new Map) != mapTag) ||
	    (Promise && getTag(Promise.resolve()) != promiseTag) ||
	    (Set && getTag(new Set) != setTag) ||
	    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
	  getTag = function(value) {
	    var result = baseGetTag(value),
	        Ctor = result == objectTag ? value.constructor : undefined,
	        ctorString = Ctor ? toSource(Ctor) : '';
	
	    if (ctorString) {
	      switch (ctorString) {
	        case dataViewCtorString: return dataViewTag;
	        case mapCtorString: return mapTag;
	        case promiseCtorString: return promiseTag;
	        case setCtorString: return setTag;
	        case weakMapCtorString: return weakMapTag;
	      }
	    }
	    return result;
	  };
	}
	
	module.exports = getTag;


/***/ }),
/* 142 */
/***/ (function(module, exports) {

	/**
	 * Gets the value at `key` of `object`.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {string} key The key of the property to get.
	 * @returns {*} Returns the property value.
	 */
	function getValue(object, key) {
	  return object == null ? undefined : object[key];
	}
	
	module.exports = getValue;


/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

	var castPath = __webpack_require__(31),
	    isArguments = __webpack_require__(29),
	    isArray = __webpack_require__(1),
	    isIndex = __webpack_require__(19),
	    isLength = __webpack_require__(27),
	    toKey = __webpack_require__(10);
	
	/**
	 * Checks if `path` exists on `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path to check.
	 * @param {Function} hasFunc The function to check properties.
	 * @returns {boolean} Returns `true` if `path` exists, else `false`.
	 */
	function hasPath(object, path, hasFunc) {
	  path = castPath(path, object);
	
	  var index = -1,
	      length = path.length,
	      result = false;
	
	  while (++index < length) {
	    var key = toKey(path[index]);
	    if (!(result = object != null && hasFunc(object, key))) {
	      break;
	    }
	    object = object[key];
	  }
	  if (result || ++index != length) {
	    return result;
	  }
	  length = object == null ? 0 : object.length;
	  return !!length && isLength(length) && isIndex(key, length) &&
	    (isArray(object) || isArguments(object));
	}
	
	module.exports = hasPath;


/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(16);
	
	/**
	 * Removes all key-value entries from the hash.
	 *
	 * @private
	 * @name clear
	 * @memberOf Hash
	 */
	function hashClear() {
	  this.__data__ = nativeCreate ? nativeCreate(null) : {};
	  this.size = 0;
	}
	
	module.exports = hashClear;


/***/ }),
/* 145 */
/***/ (function(module, exports) {

	/**
	 * Removes `key` and its value from the hash.
	 *
	 * @private
	 * @name delete
	 * @memberOf Hash
	 * @param {Object} hash The hash to modify.
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function hashDelete(key) {
	  var result = this.has(key) && delete this.__data__[key];
	  this.size -= result ? 1 : 0;
	  return result;
	}
	
	module.exports = hashDelete;


/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(16);
	
	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Gets the hash value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Hash
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function hashGet(key) {
	  var data = this.__data__;
	  if (nativeCreate) {
	    var result = data[key];
	    return result === HASH_UNDEFINED ? undefined : result;
	  }
	  return hasOwnProperty.call(data, key) ? data[key] : undefined;
	}
	
	module.exports = hashGet;


/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(16);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Checks if a hash value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Hash
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function hashHas(key) {
	  var data = this.__data__;
	  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
	}
	
	module.exports = hashHas;


/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(16);
	
	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';
	
	/**
	 * Sets the hash `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Hash
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the hash instance.
	 */
	function hashSet(key, value) {
	  var data = this.__data__;
	  this.size += this.has(key) ? 0 : 1;
	  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
	  return this;
	}
	
	module.exports = hashSet;


/***/ }),
/* 149 */
/***/ (function(module, exports) {

	/**
	 * Checks if `value` is suitable for use as unique object key.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
	 */
	function isKeyable(value) {
	  var type = typeof value;
	  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
	    ? (value !== '__proto__')
	    : (value === null);
	}
	
	module.exports = isKeyable;


/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

	var coreJsData = __webpack_require__(130);
	
	/** Used to detect methods masquerading as native. */
	var maskSrcKey = (function() {
	  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
	  return uid ? ('Symbol(src)_1.' + uid) : '';
	}());
	
	/**
	 * Checks if `func` has its source masked.
	 *
	 * @private
	 * @param {Function} func The function to check.
	 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
	 */
	function isMasked(func) {
	  return !!maskSrcKey && (maskSrcKey in func);
	}
	
	module.exports = isMasked;


/***/ }),
/* 151 */
/***/ (function(module, exports) {

	/**
	 * Removes all key-value entries from the list cache.
	 *
	 * @private
	 * @name clear
	 * @memberOf ListCache
	 */
	function listCacheClear() {
	  this.__data__ = [];
	  this.size = 0;
	}
	
	module.exports = listCacheClear;


/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(14);
	
	/** Used for built-in method references. */
	var arrayProto = Array.prototype;
	
	/** Built-in value references. */
	var splice = arrayProto.splice;
	
	/**
	 * Removes `key` and its value from the list cache.
	 *
	 * @private
	 * @name delete
	 * @memberOf ListCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function listCacheDelete(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);
	
	  if (index < 0) {
	    return false;
	  }
	  var lastIndex = data.length - 1;
	  if (index == lastIndex) {
	    data.pop();
	  } else {
	    splice.call(data, index, 1);
	  }
	  --this.size;
	  return true;
	}
	
	module.exports = listCacheDelete;


/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(14);
	
	/**
	 * Gets the list cache value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf ListCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function listCacheGet(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);
	
	  return index < 0 ? undefined : data[index][1];
	}
	
	module.exports = listCacheGet;


/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(14);
	
	/**
	 * Checks if a list cache value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf ListCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function listCacheHas(key) {
	  return assocIndexOf(this.__data__, key) > -1;
	}
	
	module.exports = listCacheHas;


/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(14);
	
	/**
	 * Sets the list cache `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf ListCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the list cache instance.
	 */
	function listCacheSet(key, value) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);
	
	  if (index < 0) {
	    ++this.size;
	    data.push([key, value]);
	  } else {
	    data[index][1] = value;
	  }
	  return this;
	}
	
	module.exports = listCacheSet;


/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

	var Hash = __webpack_require__(99),
	    ListCache = __webpack_require__(13),
	    Map = __webpack_require__(24);
	
	/**
	 * Removes all key-value entries from the map.
	 *
	 * @private
	 * @name clear
	 * @memberOf MapCache
	 */
	function mapCacheClear() {
	  this.size = 0;
	  this.__data__ = {
	    'hash': new Hash,
	    'map': new (Map || ListCache),
	    'string': new Hash
	  };
	}
	
	module.exports = mapCacheClear;


/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(15);
	
	/**
	 * Removes `key` and its value from the map.
	 *
	 * @private
	 * @name delete
	 * @memberOf MapCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function mapCacheDelete(key) {
	  var result = getMapData(this, key)['delete'](key);
	  this.size -= result ? 1 : 0;
	  return result;
	}
	
	module.exports = mapCacheDelete;


/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(15);
	
	/**
	 * Gets the map value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf MapCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function mapCacheGet(key) {
	  return getMapData(this, key).get(key);
	}
	
	module.exports = mapCacheGet;


/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(15);
	
	/**
	 * Checks if a map value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf MapCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function mapCacheHas(key) {
	  return getMapData(this, key).has(key);
	}
	
	module.exports = mapCacheHas;


/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(15);
	
	/**
	 * Sets the map `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf MapCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the map cache instance.
	 */
	function mapCacheSet(key, value) {
	  var data = getMapData(this, key),
	      size = data.size;
	
	  data.set(key, value);
	  this.size += data.size == size ? 0 : 1;
	  return this;
	}
	
	module.exports = mapCacheSet;


/***/ }),
/* 161 */
/***/ (function(module, exports) {

	/**
	 * Converts `map` to its key-value pairs.
	 *
	 * @private
	 * @param {Object} map The map to convert.
	 * @returns {Array} Returns the key-value pairs.
	 */
	function mapToArray(map) {
	  var index = -1,
	      result = Array(map.size);
	
	  map.forEach(function(value, key) {
	    result[++index] = [key, value];
	  });
	  return result;
	}
	
	module.exports = mapToArray;


/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

	var memoize = __webpack_require__(179);
	
	/** Used as the maximum memoize cache size. */
	var MAX_MEMOIZE_SIZE = 500;
	
	/**
	 * A specialized version of `_.memoize` which clears the memoized function's
	 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
	 *
	 * @private
	 * @param {Function} func The function to have its output memoized.
	 * @returns {Function} Returns the new memoized function.
	 */
	function memoizeCapped(func) {
	  var result = memoize(func, function(key) {
	    if (cache.size === MAX_MEMOIZE_SIZE) {
	      cache.clear();
	    }
	    return key;
	  });
	
	  var cache = result.cache;
	  return result;
	}
	
	module.exports = memoizeCapped;


/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

	var overArg = __webpack_require__(72);
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeKeys = overArg(Object.keys, Object);
	
	module.exports = nativeKeys;


/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(45);
	
	/** Detect free variable `exports`. */
	var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;
	
	/** Detect free variable `module`. */
	var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;
	
	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;
	
	/** Detect free variable `process` from Node.js. */
	var freeProcess = moduleExports && freeGlobal.process;
	
	/** Used to access faster Node.js helpers. */
	var nodeUtil = (function() {
	  try {
	    // Use `util.types` for Node.js 10+.
	    var types = freeModule && freeModule.require && freeModule.require('util').types;
	
	    if (types) {
	      return types;
	    }
	
	    // Legacy `process.binding('util')` for Node.js < 10.
	    return freeProcess && freeProcess.binding && freeProcess.binding('util');
	  } catch (e) {}
	}());
	
	module.exports = nodeUtil;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(51)(module)))

/***/ }),
/* 165 */
/***/ (function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;
	
	/**
	 * Converts `value` to a string using `Object.prototype.toString`.
	 *
	 * @private
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 */
	function objectToString(value) {
	  return nativeObjectToString.call(value);
	}
	
	module.exports = objectToString;


/***/ }),
/* 166 */
/***/ (function(module, exports) {

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';
	
	/**
	 * Adds `value` to the array cache.
	 *
	 * @private
	 * @name add
	 * @memberOf SetCache
	 * @alias push
	 * @param {*} value The value to cache.
	 * @returns {Object} Returns the cache instance.
	 */
	function setCacheAdd(value) {
	  this.__data__.set(value, HASH_UNDEFINED);
	  return this;
	}
	
	module.exports = setCacheAdd;


/***/ }),
/* 167 */
/***/ (function(module, exports) {

	/**
	 * Checks if `value` is in the array cache.
	 *
	 * @private
	 * @name has
	 * @memberOf SetCache
	 * @param {*} value The value to search for.
	 * @returns {number} Returns `true` if `value` is found, else `false`.
	 */
	function setCacheHas(value) {
	  return this.__data__.has(value);
	}
	
	module.exports = setCacheHas;


/***/ }),
/* 168 */
/***/ (function(module, exports) {

	/**
	 * Converts `set` to an array of its values.
	 *
	 * @private
	 * @param {Object} set The set to convert.
	 * @returns {Array} Returns the values.
	 */
	function setToArray(set) {
	  var index = -1,
	      result = Array(set.size);
	
	  set.forEach(function(value) {
	    result[++index] = value;
	  });
	  return result;
	}
	
	module.exports = setToArray;


/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

	var ListCache = __webpack_require__(13);
	
	/**
	 * Removes all key-value entries from the stack.
	 *
	 * @private
	 * @name clear
	 * @memberOf Stack
	 */
	function stackClear() {
	  this.__data__ = new ListCache;
	  this.size = 0;
	}
	
	module.exports = stackClear;


/***/ }),
/* 170 */
/***/ (function(module, exports) {

	/**
	 * Removes `key` and its value from the stack.
	 *
	 * @private
	 * @name delete
	 * @memberOf Stack
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function stackDelete(key) {
	  var data = this.__data__,
	      result = data['delete'](key);
	
	  this.size = data.size;
	  return result;
	}
	
	module.exports = stackDelete;


/***/ }),
/* 171 */
/***/ (function(module, exports) {

	/**
	 * Gets the stack value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Stack
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function stackGet(key) {
	  return this.__data__.get(key);
	}
	
	module.exports = stackGet;


/***/ }),
/* 172 */
/***/ (function(module, exports) {

	/**
	 * Checks if a stack value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Stack
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function stackHas(key) {
	  return this.__data__.has(key);
	}
	
	module.exports = stackHas;


/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

	var ListCache = __webpack_require__(13),
	    Map = __webpack_require__(24),
	    MapCache = __webpack_require__(25);
	
	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;
	
	/**
	 * Sets the stack `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Stack
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the stack cache instance.
	 */
	function stackSet(key, value) {
	  var data = this.__data__;
	  if (data instanceof ListCache) {
	    var pairs = data.__data__;
	    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
	      pairs.push([key, value]);
	      this.size = ++data.size;
	      return this;
	    }
	    data = this.__data__ = new MapCache(pairs);
	  }
	  data.set(key, value);
	  this.size = data.size;
	  return this;
	}
	
	module.exports = stackSet;


/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

	var memoizeCapped = __webpack_require__(162);
	
	/** Used to match property names within property paths. */
	var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
	
	/** Used to match backslashes in property paths. */
	var reEscapeChar = /\\(\\)?/g;
	
	/**
	 * Converts `string` to a property path array.
	 *
	 * @private
	 * @param {string} string The string to convert.
	 * @returns {Array} Returns the property path array.
	 */
	var stringToPath = memoizeCapped(function(string) {
	  var result = [];
	  if (string.charCodeAt(0) === 46 /* . */) {
	    result.push('');
	  }
	  string.replace(rePropName, function(match, number, quote, subString) {
	    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
	  });
	  return result;
	});
	
	module.exports = stringToPath;


/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

	var assignValue = __webpack_require__(30),
	    copyObject = __webpack_require__(129),
	    createAssigner = __webpack_require__(131),
	    isArrayLike = __webpack_require__(8),
	    isPrototype = __webpack_require__(47),
	    keys = __webpack_require__(11);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Assigns own enumerable string keyed properties of source objects to the
	 * destination object. Source objects are applied from left to right.
	 * Subsequent sources overwrite property assignments of previous sources.
	 *
	 * **Note:** This method mutates `object` and is loosely based on
	 * [`Object.assign`](https://mdn.io/Object/assign).
	 *
	 * @static
	 * @memberOf _
	 * @since 0.10.0
	 * @category Object
	 * @param {Object} object The destination object.
	 * @param {...Object} [sources] The source objects.
	 * @returns {Object} Returns `object`.
	 * @see _.assignIn
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * function Bar() {
	 *   this.c = 3;
	 * }
	 *
	 * Foo.prototype.b = 2;
	 * Bar.prototype.d = 4;
	 *
	 * _.assign({ 'a': 0 }, new Foo, new Bar);
	 * // => { 'a': 1, 'c': 3 }
	 */
	var assign = createAssigner(function(object, source) {
	  if (isPrototype(source) || isArrayLike(source)) {
	    copyObject(source, keys(source), object);
	    return;
	  }
	  for (var key in source) {
	    if (hasOwnProperty.call(source, key)) {
	      assignValue(object, key, source[key]);
	    }
	  }
	});
	
	module.exports = assign;


/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

	var baseSlice = __webpack_require__(124),
	    isIterateeCall = __webpack_require__(46),
	    toInteger = __webpack_require__(69);
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeCeil = Math.ceil,
	    nativeMax = Math.max;
	
	/**
	 * Creates an array of elements split into groups the length of `size`.
	 * If `array` can't be split evenly, the final chunk will be the remaining
	 * elements.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Array
	 * @param {Array} array The array to process.
	 * @param {number} [size=1] The length of each chunk
	 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	 * @returns {Array} Returns the new array of chunks.
	 * @example
	 *
	 * _.chunk(['a', 'b', 'c', 'd'], 2);
	 * // => [['a', 'b'], ['c', 'd']]
	 *
	 * _.chunk(['a', 'b', 'c', 'd'], 3);
	 * // => [['a', 'b', 'c'], ['d']]
	 */
	function chunk(array, size, guard) {
	  if ((guard ? isIterateeCall(array, size, guard) : size === undefined)) {
	    size = 1;
	  } else {
	    size = nativeMax(toInteger(size), 0);
	  }
	  var length = array == null ? 0 : array.length;
	  if (!length || size < 1) {
	    return [];
	  }
	  var index = 0,
	      resIndex = 0,
	      result = Array(nativeCeil(length / size));
	
	  while (index < length) {
	    result[resIndex++] = baseSlice(array, index, (index += size));
	  }
	  return result;
	}
	
	module.exports = chunk;


/***/ }),
/* 177 */
/***/ (function(module, exports) {

	/**
	 * Creates a function that returns `value`.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Util
	 * @param {*} value The value to return from the new function.
	 * @returns {Function} Returns the new constant function.
	 * @example
	 *
	 * var objects = _.times(2, _.constant({ 'a': 1 }));
	 *
	 * console.log(objects);
	 * // => [{ 'a': 1 }, { 'a': 1 }]
	 *
	 * console.log(objects[0] === objects[1]);
	 * // => true
	 */
	function constant(value) {
	  return function() {
	    return value;
	  };
	}
	
	module.exports = constant;


/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

	var baseHasIn = __webpack_require__(110),
	    hasPath = __webpack_require__(143);
	
	/**
	 * Checks if `path` is a direct or inherited property of `object`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path to check.
	 * @returns {boolean} Returns `true` if `path` exists, else `false`.
	 * @example
	 *
	 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
	 *
	 * _.hasIn(object, 'a');
	 * // => true
	 *
	 * _.hasIn(object, 'a.b');
	 * // => true
	 *
	 * _.hasIn(object, ['a', 'b']);
	 * // => true
	 *
	 * _.hasIn(object, 'b');
	 * // => false
	 */
	function hasIn(object, path) {
	  return object != null && hasPath(object, path, baseHasIn);
	}
	
	module.exports = hasIn;


/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

	var MapCache = __webpack_require__(25);
	
	/** Error message constants. */
	var FUNC_ERROR_TEXT = 'Expected a function';
	
	/**
	 * Creates a function that memoizes the result of `func`. If `resolver` is
	 * provided, it determines the cache key for storing the result based on the
	 * arguments provided to the memoized function. By default, the first argument
	 * provided to the memoized function is used as the map cache key. The `func`
	 * is invoked with the `this` binding of the memoized function.
	 *
	 * **Note:** The cache is exposed as the `cache` property on the memoized
	 * function. Its creation may be customized by replacing the `_.memoize.Cache`
	 * constructor with one whose instances implement the
	 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
	 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to have its output memoized.
	 * @param {Function} [resolver] The function to resolve the cache key.
	 * @returns {Function} Returns the new memoized function.
	 * @example
	 *
	 * var object = { 'a': 1, 'b': 2 };
	 * var other = { 'c': 3, 'd': 4 };
	 *
	 * var values = _.memoize(_.values);
	 * values(object);
	 * // => [1, 2]
	 *
	 * values(other);
	 * // => [3, 4]
	 *
	 * object.a = 2;
	 * values(object);
	 * // => [1, 2]
	 *
	 * // Modify the result cache.
	 * values.cache.set(object, ['a', 'b']);
	 * values(object);
	 * // => ['a', 'b']
	 *
	 * // Replace `_.memoize.Cache`.
	 * _.memoize.Cache = WeakMap;
	 */
	function memoize(func, resolver) {
	  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  var memoized = function() {
	    var args = arguments,
	        key = resolver ? resolver.apply(this, args) : args[0],
	        cache = memoized.cache;
	
	    if (cache.has(key)) {
	      return cache.get(key);
	    }
	    var result = func.apply(this, args);
	    memoized.cache = cache.set(key, result) || cache;
	    return result;
	  };
	  memoized.cache = new (memoize.Cache || MapCache);
	  return memoized;
	}
	
	// Expose `MapCache`.
	memoize.Cache = MapCache;
	
	module.exports = memoize;


/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

	var baseProperty = __webpack_require__(120),
	    basePropertyDeep = __webpack_require__(121),
	    isKey = __webpack_require__(26),
	    toKey = __webpack_require__(10);
	
	/**
	 * Creates a function that returns the value at `path` of a given object.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Util
	 * @param {Array|string} path The path of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 * @example
	 *
	 * var objects = [
	 *   { 'a': { 'b': 2 } },
	 *   { 'a': { 'b': 1 } }
	 * ];
	 *
	 * _.map(objects, _.property('a.b'));
	 * // => [2, 1]
	 *
	 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
	 * // => [1, 2]
	 */
	function property(path) {
	  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
	}
	
	module.exports = property;


/***/ }),
/* 181 */
/***/ (function(module, exports) {

	/**
	 * This method returns a new empty array.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {Array} Returns the new empty array.
	 * @example
	 *
	 * var arrays = _.times(2, _.stubArray);
	 *
	 * console.log(arrays);
	 * // => [[], []]
	 *
	 * console.log(arrays[0] === arrays[1]);
	 * // => false
	 */
	function stubArray() {
	  return [];
	}
	
	module.exports = stubArray;


/***/ }),
/* 182 */
/***/ (function(module, exports) {

	/**
	 * This method returns `false`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {boolean} Returns `false`.
	 * @example
	 *
	 * _.times(2, _.stubFalse);
	 * // => [false, false]
	 */
	function stubFalse() {
	  return false;
	}
	
	module.exports = stubFalse;


/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

	var toNumber = __webpack_require__(184);
	
	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0,
	    MAX_INTEGER = 1.7976931348623157e+308;
	
	/**
	 * Converts `value` to a finite number.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.12.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {number} Returns the converted number.
	 * @example
	 *
	 * _.toFinite(3.2);
	 * // => 3.2
	 *
	 * _.toFinite(Number.MIN_VALUE);
	 * // => 5e-324
	 *
	 * _.toFinite(Infinity);
	 * // => 1.7976931348623157e+308
	 *
	 * _.toFinite('3.2');
	 * // => 3.2
	 */
	function toFinite(value) {
	  if (!value) {
	    return value === 0 ? value : 0;
	  }
	  value = toNumber(value);
	  if (value === INFINITY || value === -INFINITY) {
	    var sign = (value < 0 ? -1 : 1);
	    return sign * MAX_INTEGER;
	  }
	  return value === value ? value : 0;
	}
	
	module.exports = toFinite;


/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(5),
	    isSymbol = __webpack_require__(18);
	
	/** Used as references for various `Number` constants. */
	var NAN = 0 / 0;
	
	/** Used to match leading and trailing whitespace. */
	var reTrim = /^\s+|\s+$/g;
	
	/** Used to detect bad signed hexadecimal string values. */
	var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
	
	/** Used to detect binary string values. */
	var reIsBinary = /^0b[01]+$/i;
	
	/** Used to detect octal string values. */
	var reIsOctal = /^0o[0-7]+$/i;
	
	/** Built-in method references without a dependency on `root`. */
	var freeParseInt = parseInt;
	
	/**
	 * Converts `value` to a number.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to process.
	 * @returns {number} Returns the number.
	 * @example
	 *
	 * _.toNumber(3.2);
	 * // => 3.2
	 *
	 * _.toNumber(Number.MIN_VALUE);
	 * // => 5e-324
	 *
	 * _.toNumber(Infinity);
	 * // => Infinity
	 *
	 * _.toNumber('3.2');
	 * // => 3.2
	 */
	function toNumber(value) {
	  if (typeof value == 'number') {
	    return value;
	  }
	  if (isSymbol(value)) {
	    return NAN;
	  }
	  if (isObject(value)) {
	    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
	    value = isObject(other) ? (other + '') : other;
	  }
	  if (typeof value != 'string') {
	    return value === 0 ? value : +value;
	  }
	  value = value.replace(reTrim, '');
	  var isBinary = reIsBinary.test(value);
	  return (isBinary || reIsOctal.test(value))
	    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
	    : (reIsBadHex.test(value) ? NAN : +value);
	}
	
	module.exports = toNumber;


/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

	var baseToString = __webpack_require__(126);
	
	/**
	 * Converts `value` to a string. An empty string is returned for `null`
	 * and `undefined` values. The sign of `-0` is preserved.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 * @example
	 *
	 * _.toString(null);
	 * // => ''
	 *
	 * _.toString(-0);
	 * // => '-0'
	 *
	 * _.toString([1, 2, 3]);
	 * // => '1,2,3'
	 */
	function toString(value) {
	  return value == null ? '' : baseToString(value);
	}
	
	module.exports = toString;


/***/ }),
/* 186 */
/***/ (function(module, exports) {

	/**
	 * Microlib for translations with support for placeholders and multiple plural forms.
	 *
	 * v0.2.2
	 *
	 * Usage:
	 * var messages = {
	 *  translationKey: 'translationValue',
	 *  moduleA: {
	 *    translationKey: 'value123'
	 *  }
	 * }
	 *
	 * var options = {
	 *   // These are the defaults:
	 *   debug: false, //[Boolean]: Logs missing translations to console and add "@@" around output if `true`.
	 *   namespaceSplitter: '::', //[String|RegExp]: Customizes the translationKey namespace splitter.
	 *   pluralize: function(n,translKey){ return Math.abs(n); } //[Function(count,translationKey)]: Provides a custom pluralization mapping function.
	 * }
	 *
	 * var t = libTranslate.getTranslationFunction(messages, [options])
	 *
	 * t('translationKey')
	 * t('translationKey', count)
	 * t('translationKey', {replaceKey: 'replacevalue'})
	 * t('translationKey', count, {replaceKey: 'replacevalue'})
	 * t('translationKey', {replaceKey: 'replacevalue'}, count)
	 * t('moduleA::translationKey')
	 *
	 *
	 * @author Jonas Girnatis <dermusterknabe@gmail.com>
	 * @licence May be freely distributed under the MIT license.
	 */
	
	/* global console, module */
	(function(){
	  'use strict';
	
	  var isObject = function(obj) {
	    return obj  &&  typeof obj === 'object';
	  };
	
	  var translatejs = function(messageObject, options) {
	
	    var debug = options && options.debug;
	
	    function getTranslationValue(translationKey) {
	      var transValue = tFunc.keys[translationKey];
	      if( transValue == null ) {
	        var path = translationKey.split( (tFunc.opts && tFunc.opts.namespaceSplitter) || '::' );
	        var i = 0;
	        var len = path.length;
	        if ( len > 1 )
	        {
	          // Start walking
	          transValue = tFunc.keys;
	          while ( len > i ) {
	            transValue = transValue[ path[i] || '' ];
	            if ( transValue == null ) {
	              break;
	            }
	            i++;
	          }
	        }
	      }
	      return transValue;
	    }
	
	
	    function getPluralValue(translation, count) {
	      // Opinionated assumption: Pluralization rules are the same for negative and positive values.
	      // By normalizing all values to positive, pluralization functions become simpler, and less error-prone by accident.
	      var mappedCount = Math.abs(count);
	
	      if(translation[mappedCount] != null){
	        translation = translation[mappedCount];
	      } else {
	        var plFunc = (tFunc.opts||{}).pluralize;
	        mappedCount = plFunc ? plFunc( mappedCount, translation ) : mappedCount;
	        if(translation[mappedCount] != null){
	          translation = translation[mappedCount];
	        } else if(translation.n != null) {
	          translation = translation.n;
	        } else {
	          debug && console.warn('No plural forms found for "' + count + '" in', translation);
	        }
	      }
	      return translation;
	    }
	
	
	    var replCache = {};
	
	    var assemble = function (parts, replacements, count) {
	      var result = parts[0];
	      var isText = false;
	      var i = 1;
	      var len = parts.length;
	      while ( i < len ) {
	        var part = parts[i];
	        if ( isText ) {
	          result += part;
	        } else {
	          var val = replacements[part];
	          if ( val === undefined )
	          {
	            if ( part==='n'  &&  count != null ) {
	              val = count;
	            } else {
	              debug && console.warn('No "' + part + '" in placeholder object:', replacements);
	              val = '{'+part+'}';
	            }
	          }
	          result += val;
	        }
	        isText = !isText;
	        i++;
	      }
	      return result;
	    };
	
	    function replacePlaceholders(translation, replacements, count) {
	      var result = replCache[translation];
	      if ( result === undefined ) {
	        var parts = translation
	                        // turn both curly braces around tokens into the a unified
	                        // (and now unique/safe) token `{x}` signifying boundry between
	                        // replacement variables and static text.
	                        .replace(/\{(\w+)\}/g, '{x}$1{x}')
	                        // Adjacent placeholders will always have an empty string between them.
	                        // The array will also always start with a static string (at least a '').
	                        .split('{x}'); // stupid but works™
	        // NOTE: parts no consists of alternating [text,replacement,text,replacement,text]
	        // Cache a function that loops over the parts array - unless there's only text
	        // (i.e. parts.length === 1) - then we simply cache the string.
	        result = parts.length > 1 ? parts : parts[0];
	        replCache[translation] = result;
	      }
	      result = result.pop ? assemble(result, replacements, count) : result;
	      return result;
	    }
	
	    var tFunc = function (translationKey, count, replacements) {
	      var translation = getTranslationValue(translationKey);
	      var complex = count!==undefined || replacements!==undefined;
	
	      if ( complex )
	      {
	        if ( isObject(count) ) {
	          var tmp = replacements;
	          replacements = count;
	          count = tmp;
	        }
	        replacements = replacements || {};
	        count = typeof count === 'number' ? count : null;
	
	        if ( count != null && isObject(translation) ) {
	          //get appropriate plural translation string
	          translation = getPluralValue(translation, count);
	        }
	      }
	
	      if ( typeof translation !== 'string' ) {
	        translation = translationKey;
	        if (debug) {
	            translation = '@@' + translation + '@@';
	            console.warn('Translation for "' + translationKey + '" not found.');
	        }
	      } else if ( complex || debug ) {
	        translation = replacePlaceholders(translation, replacements, count);
	      }
	
	      return translation;
	    };
	
	    tFunc.keys = messageObject || {};
	    tFunc.opts = options || {};
	
	
	    return tFunc;
	  };
	
	
	  if ( typeof module !== 'undefined' && module.exports ) {
	    module.exports = translatejs;
	  } else {
	    window.translatejs = translatejs;
	  }
	
	})();


/***/ }),
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _ru = __webpack_require__(247);
	
	var _ru2 = _interopRequireDefault(_ru);
	
	var _Cattell = __webpack_require__(246);
	
	var _Cattell2 = _interopRequireDefault(_Cattell);
	
	var _main = __webpack_require__(71);
	
	var _main2 = _interopRequireDefault(_main);
	
	var _commonRu = __webpack_require__(70);
	
	var _commonRu2 = _interopRequireDefault(_commonRu);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	(0, _main2.default)({
	    lang: 'ru',
	    translations: [].concat(_toConsumableArray(_commonRu2.default), [_ru2.default]),
	    Survey: _Cattell2.default
	});

/***/ }),
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /* eslint arrow-body-style: 0 */
	
	var _multiTestCore = __webpack_require__(253);
	
	var _multiTestCore2 = _interopRequireDefault(_multiTestCore);
	
	__webpack_require__(250);
	
	var _builder = __webpack_require__(35);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var META = (0, _builder.buildMetaData)({
	    className: 'Cattell',
	    questionsCount: 187,
	    answers: [{ value: 'A', cls: 'b b0' }, { value: 'B', cls: 'b b1' }, { value: 'C', cls: 'b b2' }],
	    scaleIds: ['A', 'B', 'C', 'E', 'F', 'G', 'H', 'I', 'L', 'M', 'N', 'O', 'Q1', 'Q2', 'Q3', 'Q4', 'TA', 'TB', 'TC', 'TE', 'TF', 'TG', 'TH', 'TI', 'TL', 'TM', 'TN', 'TO', 'TQ1', 'TQ2', 'TQ3', 'TQ4']
	});
	
	var Cattell = function () {
	    function Cattell() {
	        _classCallCheck(this, Cattell);
	
	        this.answers = new Array(META.questionsCount);
	    }
	
	    _createClass(Cattell, [{
	        key: 'calculate',
	        value: function calculate(_ref) {
	            var age = _ref.age,
	                gender = _ref.gender;
	
	            var _gender = gender === 0 ? 'M' : 'F';
	            var scales = _multiTestCore2.default.cattell(this.answers.concat([_gender, +age]));
	
	            return Object.keys(scales).filter(function (x) {
	                return x !== 'raw';
	            }).map(function (id) {
	                return {
	                    id: id,
	                    result: {
	                        value: scales.raw[id],
	                        t: scales[id]
	                    }
	                };
	            });
	        }
	    }, {
	        key: 'metaData',
	        get: function get() {
	            return META;
	        }
	    }]);
	
	    return Cattell;
	}();
	
	exports.default = Cattell;

/***/ }),
/* 247 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _softbreak = __webpack_require__(23);
	
	exports.default = {
	    Cattell: {
	        name: 'Тест Кеттела',
	        description: (0, _softbreak.linebreak)('Bам будет задан ряд вопросов, на каждый из которых Вы должны выбрать один из трех предлагаемых ответов, - тот, который в наибольшей степени соответствует Вашим взглядам, Вашему мнению о себе. Обязательно отвечайте на все вопросы подряд, ничего не пропуская. Не нужно много времени тратить на обдумывание ответов. Давайте тот ответ, который первым приходит Вам в голову.\n\n' + 'Отвечать надо приблизительно на 5-6 вопросов за минуту. Заполнение всего опросника должно занять у Вас около 50 мин. Возможно, некоторые вопросы покажутся вам неясными или сформулированными не так подробно, как Вам хотелось бы. В таких случаях, отвечая, старайтесь представить "среднюю", наиболее обычную ситуацию, которая соответствует смыслу вопроса, и на основе этого выбирайте свой ответ. Старайтесь не прибегать слишком часто к промежуточным, неопределенным ответам, типа "не знаю", "нечто среднее" и т.п.\n\n' + 'Отвечайте честно и искренне. Не стремитесь произвести хорошее впечатление своими ответами. Здесь не может быть ответов "правильных" или "ошибочных". Люди различны, и каждый может высказать свое мнение. Ваши ответы должны соответствовать действительности - в этом случае Вы сможете лучше узнать себя.'),
	        questions: [{
	            text: 'Я хорошо понял инструкцию, которую только что прочитал:',
	            A: 'да',
	            B: 'не уверен',
	            C: 'нет'
	        }, {
	            text: 'Я готов отвечать на каждый вопрос так искренне, как только возможно:',
	            A: 'да',
	            B: 'не уверен',
	            C: 'нет'
	        }, {
	            text: 'Я бы предпочел временами жить в доме, который находится:',
	            A: 'в обжитом городе',
	            B: 'нечто среднее',
	            C: 'одиноко в глухих лесах'
	        }, {
	            text: 'Я чувствую в себе достаточно сил, чтобы справиться со своими трудностями:',
	            A: 'всегда',
	            B: 'обычно',
	            C: 'редко'
	        }, {
	            text: 'Я чувствую некоторое беспокойство при виде диких животных, даже если они находятся в прочных клетках:',
	            A: 'верно',
	            B: 'не уверен',
	            C: 'неверно'
	        }, {
	            text: 'Я воздерживаюсь от критики людей и их высказываний:',
	            A: 'да',
	            B: 'иногда',
	            C: 'нет'
	        }, {
	            text: 'Я делаю саркастические (язвительные) замечания по поводу людей, если они этого, по-моему, заслуживают:',
	            A: 'обычно',
	            B: 'иногда',
	            C: 'никогда'
	        }, {
	            text: 'Мне больше нравится классическая, чем эстрадная музыка:',
	            A: 'верно',
	            B: 'не уверен',
	            C: 'неверно'
	        }, {
	            text: 'Если бы я увидел дерущихся соседских детей, то я:',
	            A: 'дал бы им возможность договориться самим',
	            B: 'не уверен',
	            C: 'рассудил бы их'
	        }, {
	            text: 'При общении с людьми я:',
	            A: 'с готовностью вступаю в разговор',
	            B: 'нечто среднее',
	            C: 'предпочитаю спокойно оставаться в стороне'
	        }, {
	            text: 'По-моему интереснее быть:',
	            A: 'инженером-строителем',
	            B: 'не уверен',
	            C: 'драматургом'
	        }, {
	            text: 'Я остановился бы на улице скорее, чтобы посмотреть на работу художника, чем слушать, как сорятся люди:',
	            A: 'верно',
	            B: 'не уверен',
	            C: 'неверно'
	        }, {
	            text: 'Обычно я могу ладить с самодовольными людьми, несмотря на то, что они хвастаются или слишком много о себе воображают:',
	            A: 'да',
	            B: 'нечто среднее',
	            C: 'нет'
	        }, {
	            text: 'По лицу человека всегда легко можно заметить, что он нечестный:',
	            A: 'да',
	            B: 'не уверен',
	            C: 'нет'
	        }, {
	            text: 'Было бы хорошо, если бы отпуск (каникулы) был более продолжительным, и каждый был бы обязан его использовать:',
	            A: 'согласен',
	            B: 'не уверен',
	            C: 'не согласен'
	        }, {
	            text: 'Я предпочел бы работу с возможно большим, но непостоянным заработком, че работу со скромным, но постоянным окладом:',
	            A: 'да',
	            B: 'не уверен',
	            C: 'нет'
	        }, {
	            text: 'Я говорю о своих чувствах:',
	            A: 'только если это необходимо;',
	            B: 'нечто среднее',
	            C: 'охотно, когда представится возможность'
	        }, {
	            text: 'Время от времени у меня возникает чувство неопределенной опасности или внезапного страха по непонятным причинам:',
	            A: 'да',
	            B: 'нечто среднее',
	            C: 'нет'
	        }, {
	            text: 'Когда меня неправильно критикуют за что-то, в чем я не виноват, я:',
	            A: 'не испытываю чувства вины;',
	            B: 'нечто среднее',
	            C: 'все же чувствую себя виноватым'
	        }, {
	            text: 'За деньги можно купить почти все:',
	            A: 'да',
	            B: 'не уверен',
	            C: 'нет'
	        }, {
	            text: 'Моим решением руководит больше:',
	            A: 'сердце',
	            B: 'сердце и разум в равной степени',
	            C: 'разум'
	        }, {
	            text: 'Большинство людей были бы больше счастливы, если бы они были ближе друг к другу и поступали также, как все:',
	            A: 'да',
	            B: 'не уверен',
	            C: 'нет'
	        }, {
	            text: 'Иногда, когда я смотрю в зеркало, мне трудно разобраться, где у меня правая, а где левая сторона:',
	            A: 'верно',
	            B: 'не уверен',
	            C: 'неверно'
	        }, {
	            text: 'При разговоре я предпочитаю:',
	            A: 'высказывать свои мысли так, как они приходят мне в голову',
	            B: 'нечто среднее',
	            C: 'сначала сформулировать получше свои мысли'
	        }, {
	            text: 'После того, как меня что-то сильно рассердит, я довольно быстро успокаиваюсь:',
	            A: 'да',
	            B: 'нечто среднее',
	            C: 'нет'
	        }, {
	            text: 'При одинаковом рабочем времени и заработке было бы интереснее работать:',
	            A: 'плотником или поваром',
	            B: 'не уверен',
	            C: 'официантом в хорошем ресторане'
	        }, {
	            text: 'На общественные должности меня выбирали:',
	            A: 'очень редко',
	            B: 'иногда',
	            C: 'много раз'
	        }, {
	            text: '«Лопата» относится к «копать», как «нож» относится к:',
	            A: 'острый',
	            B: 'резать',
	            C: 'указывать'
	        }, {
	            text: 'Иногда я не могу заснуть, потому что какая-нибудь мысль не выходит из головы:',
	            A: 'верно',
	            B: 'не уверен',
	            C: 'неверно'
	        }, {
	            text: 'В своей жизни я почти всегда достигаю поставленных целей:',
	            A: 'верно',
	            B: 'не уверен',
	            C: 'неверно'
	        }, {
	            text: 'Устаревший закон следует изменить:',
	            A: 'только после глубокого основательного обсуждения',
	            B: 'не уверен',
	            C: 'как можно скорее'
	        }, {
	            text: 'Я чувствую себя «не в своей тарелке», когда мне приходится работать над чем-нибудь, что требует быстрых действий, результаты которых могут повлиять на других людей:',
	            A: 'верно',
	            B: 'нечто среднее',
	            C: 'неверно'
	        }, {
	            text: 'Большинство знакомых считают меня интересным рассказчиком:',
	            A: 'да',
	            B: 'не уверен',
	            C: 'нет'
	        }, {
	            text: 'Когда я вижу неряшливых, неприятных людей, я:',
	            A: 'принимаю их такими, как они есть',
	            B: 'нечто среднее',
	            C: 'испытываю отвращение и возмущение'
	        }, {
	            text: 'Я чувствую себя немного не по себе, если неожиданно оказываюсь в центре внимания группы людей:',
	            A: 'да',
	            B: 'нечто среднее',
	            C: 'нет'
	        }, {
	            text: 'Я всегда рад оказаться среди людей, например, в гостях, на танцах, на какой-либо коллективной встречи:',
	            A: 'да',
	            B: 'нечто среднее',
	            C: 'нет'
	        }, {
	            text: 'В школе я предпочитал (или предпочитаю):',
	            A: 'заниматься музыкой, пением',
	            B: 'нечто среднее',
	            C: 'выпиливать и мастерить что-либо'
	        }, {
	            text: 'Если меня назначают руководителем чего-либо, я настаиваю на том, чтобы мои указания выполнялись, иначе я отказываюсь от этой работы:',
	            A: 'да',
	            B: 'иногда',
	            C: 'нет'
	        }, {
	            text: 'Выжнее, чтобы родители:',
	            A: 'помогали детям развивать свои чувства',
	            B: 'нечто среднее',
	            C: 'обучали детей сдерживать свои чувства'
	        }, {
	            text: 'Учавствуя в групповой деятельности, я бы предпочел:',
	            A: 'постараться улучшить организацию работы',
	            B: 'нечто среднее',
	            C: 'следить за результатами и соблюдением правил'
	        }, {
	            text: 'Время от времени у меня появляется потребность в интенсивной физической деятельности:',
	            A: 'да',
	            B: 'нечто среднее',
	            C: 'нет'
	        }, {
	            text: 'Я предпочел бы скорее общаться с вежливыми людьми, чем с грубоватыми и любящими возражать:',
	            A: 'да',
	            B: 'нечто среднее',
	            C: 'нет'
	        }, {
	            text: 'Я чувствую себя очень униженным, когда меня критикуют в присутствии группы людей:',
	            A: 'верно',
	            B: 'нечто среднее',
	            C: 'неверно'
	        }, {
	            text: 'Если меня вызывает начальство, то я:',
	            A: 'пользуюсь случаем, чтобы попросить о чем-то нужном мне',
	            B: 'нечто среднее',
	            C: 'боюсь, что это связано с какой-нибудь оплошностью в моей работе'
	        }, {
	            text: 'В наше время требуется:',
	            A: 'больше спокойных, солидных людей',
	            B: 'не уверен',
	            C: 'больше идеалистов, планирующих будущее.'
	        }, {
	            text: 'При чтении я сразу замечаю, когда автор произведения хочет меня в чем-то убедить:',
	            A: 'да',
	            B: 'не уверен',
	            C: 'нет'
	        }, {
	            text: 'В юности я принимал участие в нескольких спортивных мероприятиях:',
	            A: 'иногда',
	            B: 'довольно часто',
	            C: 'многократно'
	        }, {
	            text: 'Я поддерживаю порядок в моей комнате, все вещи всегда лежат на своих местах:',
	            A: 'да',
	            B: 'нечто среднее',
	            C: 'нет'
	        }, {
	            text: 'Иногда у меня возникает чувство напряжения и беспокойства, когда я вспоминаю, что произошло в течение дня:',
	            A: 'да',
	            B: 'нечто среднее',
	            C: 'нет'
	        }, {
	            text: 'Иногда я сомневаюсь, действительно ли люди, с которыми я разговариваю, интересуются тем, что я говорю:',
	            A: 'да',
	            B: 'не уверен',
	            C: 'нет'
	        }, {
	            text: 'Если бы пришлось выбирать, то я предпочел бы быть:',
	            A: 'лесником',
	            B: 'не уверен',
	            C: 'учителем средней школы'
	        }, {
	            text: 'На праздники и дни рождения я:',
	            A: 'люблю делать подарки',
	            B: 'неопределенно',
	            C: 'считаю, что делать подарки – довольно неприятная вещь'
	        }, {
	            text: '«Усталый» относится к «работе», как «гордый» к:',
	            A: 'улыбка',
	            B: 'успех',
	            C: 'счастливый'
	        }, {
	            text: 'Какой из следующих предметов по существу отличается от двух других:',
	            A: 'свеча',
	            B: 'луна',
	            C: 'электрический свет'
	        }, {
	            text: 'Друзья меня подводили:',
	            A: 'очень редко',
	            B: 'иногда',
	            C: 'довольно часто'
	        }, {
	            text: 'У меня есть качества, по которым я определенно выше большинства людей:',
	            A: 'де',
	            B: 'не уверен',
	            C: 'нет'
	        }, {
	            text: 'Когда я расстроен, я стараюсь скрыть свои чувства от других:',
	            A: 'верно',
	            B: 'нечто среднее',
	            C: 'неверно'
	        }, {
	            text: 'Я склонен посещать зрелищные мероприятия и развлечения:',
	            A: 'чаще, чем раз в неделю',
	            B: 'примерно раз в неделю',
	            C: 'реже, чем раз в неделю'
	        }, {
	            text: 'Я считаю, что возможность вести себя непринужденно важнее, чем хорошие манеры и уважение к существующим правилам поведения:',
	            A: 'верно',
	            B: 'не уверен',
	            C: 'неверно'
	        }, {
	            text: 'Обычно я молчу в присутствии старших по возрасту, опыту и положению:',
	            A: 'да',
	            B: 'нечто среднее',
	            C: 'нет'
	        }, {
	            text: 'Мне трудно говорить или декламировать перед большой группой людей:',
	            A: 'да',
	            B: 'нечто среднее',
	            C: 'нет'
	        }, {
	            text: 'У меня хорошее чувство ориентировки в незнакомом месте (мне легко сказать, где север-восток-юг-запад):',
	            A: 'да',
	            B: 'нечто среднее',
	            C: 'нет'
	        }, {
	            text: 'Если кто-нибудь рассердится на меня, то я:',
	            A: 'постараюсь его успокоить',
	            B: 'нечто среднее',
	            C: 'раздражаюсь'
	        }, {
	            text: 'Встречаюсь с несправедливостью, я скорее склонен забыть об этом, чем реагировать:',
	            A: 'верно',
	            B: 'не уверен',
	            C: 'неверно'
	        }, {
	            text: 'Из моей памяти часто выпадают несущественные тревиальные вещи, например, названия улиц, магазинов:',
	            A: 'да',
	            B: 'нечто среднее',
	            C: 'нет'
	        }, {
	            text: 'Мне бы понравилась жизнь ветеринара, лечение и операции на животных:',
	            A: 'да',
	            B: 'не уверен',
	            C: 'нет'
	        }, {
	            text: 'Я ем со вкусом, не всегда так аккуратно и тщательно как другие люди:',
	            A: 'да',
	            B: 'не уверен',
	            C: 'неверно'
	        }, {
	            text: 'Бывают времена, когда у меня нет настроения видеть кого бы то ни было:',
	            A: 'очень редко',
	            B: 'нечто среднее',
	            C: 'довольно часто'
	        }, {
	            text: 'Иногда меня предупреждают о том, что в моем голосе и манерах слишком проявляется возбуждение:',
	            A: 'да',
	            B: 'нечто среднее',
	            C: 'нет'
	        }, {
	            text: 'В юности, если я расходился во мнении с родителями, то я:',
	            A: 'оставался при своем мнении;',
	            B: 'нечто среднее4',
	            C: 'соглашался с их авторитетом'
	        }, {
	            text: 'Я предпочел бы заниматься самостоятельной работой, а не совместной с другими:',
	            A: 'да',
	            B: 'не уверен',
	            C: 'нет'
	        }, {
	            text: 'Мне бы больше понравилась спокойная жизнь в моем духе, чем слава и шумный успех:',
	            A: 'верно',
	            B: 'не уверен',
	            C: 'неверно'
	        }, {
	            text: 'В большинстве случаев я чувствую себя зрелым человеком:',
	            A: 'верно',
	            B: 'не уверен',
	            C: 'неверно'
	        }, {
	            text: 'Замечания в мой адрес, которые позволяют себе некоторые люди, меня больше расстраивают, чем помогают:',
	            A: 'часто',
	            B: 'иногда',
	            C: 'никогда'
	        }, {
	            text: 'Я всегда способен управлять проявлением своих чувств:',
	            A: 'да',
	            B: 'нечто среднее',
	            C: 'нет'
	        }, {
	            text: 'Начиная работу над полезным изобретением я бы предпочел:',
	            A: 'разрабатывать его в лаборатории;',
	            B: 'нечто среднее',
	            C: 'заниматься его практической реализацией'
	        }, {
	            text: '«Удивление» относится к «странный», как «страх» относится к:',
	            A: 'смелый',
	            B: 'тревожный',
	            C: 'ужасный'
	        }, {
	            text: 'Какая из последующих дробей отличается от двух других:',
	            A: '3/7',
	            B: '3/9',
	            C: '3/11'
	        }, {
	            text: 'Кажется, некоторые люди игнорируют и избегают меня, хотя я не знаю почему:',
	            A: 'верно',
	            B: 'не уверен',
	            C: 'неверно'
	        }, {
	            text: 'Отношения ко мне людей не соответствуют моим добрым намерениям:',
	            A: 'часто',
	            B: 'иногда',
	            C: 'никогда'
	        }, {
	            text: 'Употребление нецензурных выражений вызывает у меня возмущение, даже если не присутствуют лица другого пола:',
	            A: 'да',
	            B: 'нечто среднее',
	            C: 'нет'
	        }, {
	            text: 'У меня определенно меньше друзей, чем у большинства людей:',
	            A: 'да',
	            B: 'нечто среднее',
	            C: 'нет'
	        }, {
	            text: 'Я бы очень не хотел находиться в таком месте, где нет людей, с которыми можно поговорить:',
	            A: 'верно',
	            B: 'нечто среднее',
	            C: 'нет'
	        }, {
	            text: 'Люди иногда считают меня небрежным, хотя и думают, что я приятный человек:',
	            A: 'да',
	            B: 'не уверен',
	            C: 'нет'
	        }, {
	            text: 'Волнение перед выступлением в присутствии многих людей я испытывал:',
	            A: 'довольно часто',
	            B: 'иногда',
	            C: 'почти никогда'
	        }, {
	            text: 'Когда я нахожусь в большой группе людей, то я предпочитаю молчать, и предоставляю слово другим:',
	            A: 'да',
	            B: 'нечто среднее',
	            C: 'нет'
	        }, {
	            text: 'Я предпочитаю читать:',
	            A: 'реалистические описания военных и политических сражений;',
	            B: 'нечто среднее',
	            C: 'роман, где много чувств и воображения'
	        }, {
	            text: 'Когда люди пытаются мною командовать, то я поступаю как раз наоборот:',
	            A: 'да',
	            B: 'нечто среднее',
	            C: 'нет'
	        }, {
	            text: 'Начальник или члены моей семьи критикуют меня только тогда, когда к этому действительно есть повод:',
	            A: 'верно',
	            B: 'нечто среднее',
	            C: 'неверно'
	        }, {
	            text: 'На улицах или в магазинах мне не нравится, когда некоторые люди пристально разглядывают других:',
	            A: 'да',
	            B: 'нечто среднее',
	            C: 'нет'
	        }, {
	            text: 'Во время длительной поездки я бы предпочел:',
	            A: 'читать что-нибудь серьезное, но интересное;',
	            B: 'неопределенно',
	            C: 'провести время беседуя с кем-нибудь из пассажиров'
	        }, {
	            text: 'В ситуациях, которые могут стать опасными, я громко разговариваю, хотя это выглядит невежливо и нарушает спокойствие:',
	            A: 'да',
	            B: 'не уверен',
	            C: 'нет'
	        }, {
	            text: 'Если знакомые плохо обращаются со мной и показывают свою неприязнь, то:',
	            A: 'меня это совершенно не трогает;',
	            B: 'нечто среднее',
	            C: 'я расстраиваюсь'
	        }, {
	            text: 'Я смущаюсь, когда меня хвалят или говорят мне комплементы:',
	            A: 'да',
	            B: 'нечто среднее',
	            C: 'нет'
	        }, {
	            text: 'Я бы предпочел иметь работу:',
	            A: 'с постоянным окладом',
	            B: 'нечто среднее',
	            C: 'с большим окладом, который бы зависел от моих способностей показать людям, чего я стою'
	        }, {
	            text: 'Чтобы быть информированным, я предпочитаю получать сведения:',
	            A: 'в общении с людьми;',
	            B: 'нечто среднее;',
	            C: 'из литературы'
	        }, {
	            text: 'Мне нравится принимать активное участие в общественной работе:',
	            A: 'да',
	            B: 'нечто среднее',
	            C: 'нет'
	        }, {
	            text: 'При выполнении задания я удовлетворюсь только тогда, когда должное внимание будет уделено всем мелочам:',
	            A: 'верно',
	            B: 'не уверен',
	            C: 'неверно'
	        }, {
	            text: 'Даже самые незначительные неудачи иногда меня слишком раздражают:',
	            A: 'верно',
	            B: 'нечто среднее',
	            C: 'нет'
	        }, {
	            text: 'Сон у меня всегда крепкий, я никогда не хожу и не разговариваю во сне:',
	            A: 'да',
	            B: 'не уверен',
	            C: 'нет'
	        }, {
	            text: 'Для меня интереснее работа, при которой;',
	            A: 'нужно разговаривать с людьми;',
	            B: 'нечто среднее;',
	            C: 'нужно заниматься счетами и записями'
	        }, {
	            text: '«Размер» так относится к «длине», как «нечестный» к:',
	            A: 'тюрьма',
	            B: 'нарушение',
	            C: 'кража'
	        }, {
	            text: '«АБ» так относится к «ГВ», как «СР» относится к:',
	            A: 'ПО',
	            B: 'ОП',
	            C: 'ТУ'
	        }, {
	            text: 'Когда люди ведут себя неразумно, то я:',
	            A: 'молчу',
	            B: 'не уверен',
	            C: 'высказываю свое презрение'
	        }, {
	            text: 'Если кто-нибудь громко разговаривает, когда я слушаю музыку:',
	            A: 'могу сосредоточиться на музыке, не отвлекаться',
	            B: 'нечто среднее',
	            C: 'чувствую, что это портит мне удовольствие и раздражает'
	        }, {
	            text: 'Меня лучше характеризовать как:',
	            A: 'вежливого и спокойного;',
	            B: 'нечто среднее',
	            C: 'энергичного'
	        }, {
	            text: 'В общественных мероприятиях я принимаю участие только тогда, когда это нужно, а в иных случаях избегаю их:',
	            A: 'да',
	            B: 'не уверен',
	            C: 'нет'
	        }, {
	            text: 'Быть осторожным и не ждать хорошего лучше, чем быть оптимистом и всегда ждать успеха:',
	            A: 'верно',
	            B: 'не уверен',
	            C: 'неверно'
	        }, {
	            text: 'Думая о трудностях в своей работе, я:',
	            A: 'стараюсь планировать заранее, прежде чем встретить трудность;',
	            B: 'нечто среднее',
	            C: 'считаю, что справлюсь с трудностями по мере того, как они возникнут'
	        }, {
	            text: 'Мне легко вступить в контакт с людьми во время различных общественных мероприятий:',
	            A: 'верно',
	            B: 'не уверен',
	            C: 'неверно'
	        }, {
	            text: 'Когда требуется немного дипломатии и умения убедить, чтобы побудить людей что-либо сделать, обычно об этом просят меня:',
	            A: 'верно',
	            B: 'не уверен',
	            C: 'неверно'
	        }, {
	            text: 'Интересно быть:',
	            A: 'консультантом, помогающим молодым людям выбирать профессию;',
	            B: 'нечто среднее',
	            C: 'руководителем технического проекта'
	        }, {
	            text: 'Если я уверен, что человек несправедлив или ведет себя эгоистично, я указываю на это, даже если это связанно с неприятностями:',
	            A: 'да',
	            B: 'нечто среднее',
	            C: 'нет'
	        }, {
	            text: 'Иногда я говорю глупости ради шутки, чтобы удивить людей и посмотреть, что они на это скажут:',
	            A: 'да',
	            B: 'не уверен',
	            C: 'нет'
	        }, {
	            text: 'Мне бы понравилось быть газетным критиком в разделе драмы, театра, концертов:',
	            A: 'да',
	            B: 'не уверен',
	            C: 'нет'
	        }, {
	            text: 'У меня никогда не бывает потребности что-нибудь рисовать или вертеть в руках, ерзать на месте, когда приходится долго сидеть   на собрании:',
	            A: 'верно',
	            B: 'не уверен',
	            C: 'неверно'
	        }, {
	            text: 'Если кто-нибудь говорит мне что-то неприятное, то я скорее подумаю:',
	            A: 'он – лжец',
	            B: 'не уверен',
	            C: 'по-видимому он плохо информирован'
	        }, {
	            text: 'Я чувствую, что мне угрожает какое-то наказание, даже когда я ничего плохого не сделал:',
	            A: 'часто',
	            B: 'иногда',
	            C: 'никогда'
	        }, {
	            text: 'Мнение о том, что болезнь также часто бывает от психических, как и от физических факторов, сильно преувеличена:',
	            A: 'да',
	            B: 'не уверен',
	            C: 'нет'
	        }, {
	            text: 'Торжественность и величие традиционных церемоний следует сохранить:',
	            A: 'да',
	            B: 'не уверен',
	            C: 'нет'
	        }, {
	            text: 'Мысль о том, что люди подумают, будто я веду себя необычно или странно, меня беспокоит:',
	            A: 'очень',
	            B: 'немного',
	            C: 'совсем не беспокоит'
	        }, {
	            text: 'Выполняя какое-либо дело, я бы предпочел работать:',
	            A: 'в составе коллектива',
	            B: 'не уверен',
	            C: 'самостоятельно'
	        }, {
	            text: 'У меня бывают периоды, когда мне трудно избавиться от чувства жалости к себе:',
	            A: 'часто',
	            B: 'иногда',
	            C: 'никогда'
	        }, {
	            text: 'Часто я слишком быстро начинаю сердиться на людей:',
	            A: 'да',
	            B: 'нечто среднее',
	            C: 'нет'
	        }, {
	            text: 'Я всегда могу без труда изменить свои старые привычки и не возвращаться к прежнему:',
	            A: 'да',
	            B: 'не уверен',
	            C: 'нет'
	        }, {
	            text: 'Если бы зарплаты была бы одинаковой, то я предпочел бы быть:',
	            A: 'адвокатом',
	            B: 'не уверен',
	            C: 'пилотом или капитаном судна'
	        }, {
	            text: '«Лучшее» так относится к «наихудшее», как «медленное» к:',
	            A: 'быстрое',
	            B: 'лучшее',
	            C: 'быстрейшее'
	        }, {
	            text: 'Каким из приведенных ниже сочетаний следует продолжить буквенный ряд: РООООРРОООРРР',
	            A: 'ОРРР',
	            B: 'ООРР',
	            C: 'РООО'
	        }, {
	            text: 'Когда приходит время осуществить то, что я планировал и на что надеялся, я обнаруживаю, что уже пропало желание делать это:',
	            A: 'верно',
	            B: 'нечто среднее',
	            C: 'неверно'
	        }, {
	            text: 'Большей частью я могу продолжать работать тщательно, не обращая внимания на шум, создаваемый другими:',
	            A: 'да',
	            B: 'нечто среднее',
	            C: 'нет'
	        }, {
	            text: 'Иногда я говорю посторонним вещи, кажущиеся мне важными, независимо от того, спрашивают ли они об этом:',
	            A: 'да',
	            B: 'нечто среднее',
	            C: 'нет'
	        }, {
	            text: 'Много свободного времени я провожу в разговорах с друзьями о прошлых развлечениях, от которых я получал удовольствие:',
	            A: 'да',
	            B: 'нечто среднее',
	            C: 'нет'
	        }, {
	            text: 'Мне нравится устраивать какие-нибудь смелые, рискованные выходки «смеха ради»:',
	            A: 'да',
	            B: 'не уверен',
	            C: 'нет'
	        }, {
	            text: 'Вид неубранной комнаты очень раздражает меня:',
	            A: 'да',
	            B: 'нечто среднее',
	            C: 'нет'
	        }, {
	            text: 'Я считаю себя общительным, открытым человеком:',
	            A: 'да',
	            B: 'нечто среднее',
	            C: 'нет'
	        }, {
	            text: 'В общении я:',
	            A: 'свободно проявляю свои чувства;',
	            B: 'нечто среднее;',
	            C: 'держу свои переживания при себе'
	        }, {
	            text: 'Я люблю музыку:',
	            A: 'легкую, живую',
	            B: 'нечто среднее',
	            C: 'чувствительную'
	        }, {
	            text: 'Красота поэмы восхищает меня больше, чем красота хорошо сделанного оружия:',
	            A: 'да',
	            B: 'не уверен',
	            C: 'нет'
	        }, {
	            text: 'Если мое удачное замечание остается незамеченным окружающими, я:',
	            A: 'смирюсь с этим;',
	            B: 'нечто среднее;',
	            C: 'даю людям возможность услышать его еще раз'
	        }, {
	            text: 'Мне бы понравилось работать фотокорреспондентом:',
	            A: 'да',
	            B: 'не уверен',
	            C: 'нет'
	        }, {
	            text: 'Нужно быть осторожным в общении с незнакомыми, так как можно, например, заразиться:',
	            A: 'да',
	            B: 'не уверен',
	            C: 'нет'
	        }, {
	            text: 'При поездке заграницу я бы предпочел быть под руководством экскурсовода, чем самому планировать маршрут:',
	            A: 'да',
	            B: 'не уверен',
	            C: 'нет'
	        }, {
	            text: 'Меня справедливо считают упорным и трудолюбивым, но не слишком преуспевающим человеком:',
	            A: 'да',
	            B: 'не уверен',
	            C: 'нет'
	        }, {
	            text: 'Если люди пользуются моим хорошим отношением в своих интересах, то я не возмущаюсь этим и вскоре об этом забываю:',
	            A: 'верно',
	            B: 'нечто среднее',
	            C: 'неверно'
	        }, {
	            text: 'Если при обсуждении какого-либо вопроса среди участников возникает ожесточенный спор, то я предпочитаю:',
	            A: 'увидеть, кто же «победил»',
	            B: 'нечто среднее',
	            C: 'чтобы спор разрешился мирно'
	        }, {
	            text: 'Я предпочитаю планировать что-либо самостоятельно, без вмешательства и предложений со стороны других:',
	            A: 'да',
	            B: 'нечто среднее',
	            C: 'нет'
	        }, {
	            text: 'Иногда чувство зависти влияет на мои действия:',
	            A: 'да',
	            B: 'не уверен',
	            C: 'нет'
	        }, {
	            text: 'Я твердо верю, что начальник может быть не всегда прав, но он всегда имеет право быть начальником:',
	            A: 'да',
	            B: 'не уверен',
	            C: 'нет'
	        }, {
	            text: 'Когда я думаю обо всем, что еще предстоит сделать у меня появляется чувство напряженности:',
	            A: 'да',
	            B: 'иногда',
	            C: 'нет'
	        }, {
	            text: 'Когда зрители мне что-либо кричат во время игры, меня это не трогает:',
	            A: 'верно',
	            B: 'нечто среднее',
	            C: 'неверно'
	        }, {
	            text: 'Интереснее быть:',
	            A: 'художником',
	            B: 'не уверен',
	            C: 'организатором культурных развлечений'
	        }, {
	            text: 'Которое из следующих слов не относится к двум другим:',
	            A: 'любые',
	            B: 'некоторые',
	            C: 'большинство'
	        }, {
	            text: '«Пламя» так относится к «жар», как «роза» относится к:',
	            A: 'шип',
	            B: 'красивые лепестки',
	            C: 'аромат'
	        }, {
	            text: 'У меня бывают яркие сновидения, мешающие мне спать:',
	            A: 'часто',
	            B: 'иногда',
	            C: 'практически всегда'
	        }, {
	            text: 'Если по пути к успеху стоят серьезные препятствия, я все-таки предпочитаю рискнуть:',
	            A: 'да',
	            B: 'нечто среднее',
	            C: 'нет'
	        }, {
	            text: 'Когда я нахожусь в группе людей, приступающих к какой-то работе, то само собой получается, что я оказываюсь во главе их:',
	            A: 'да',
	            B: 'нечто среднее',
	            C: 'нет'
	        }, {
	            text: 'Мне больше нравится в одежде спокойная корректность, чем бросающаяся в глаза индивидуальность:',
	            A: 'верно',
	            B: 'не уверен',
	            C: 'неверно'
	        }, {
	            text: 'Мне больше нравится провести вечер за спокойным любимым занятием, чем в оживленной компании:',
	            A: 'верно',
	            B: 'не уверен',
	            C: 'неверно'
	        }, {
	            text: 'Я не обращаю внимания на доброжелательные советы других, даже когда эти советы могли бы быть полезными:',
	            A: 'иногда',
	            B: 'почти никогда',
	            C: 'никогда'
	        }, {
	            text: 'В своих поступках я всегда стараюсь придерживаться общепринятых правил поведения:',
	            A: 'да',
	            B: 'нечто среднее',
	            C: 'нет'
	        }, {
	            text: 'Мне не очень нравится, когда смотрят, как я работаю:',
	            A: 'да',
	            B: 'нечто среднее',
	            C: 'нет'
	        }, {
	            text: 'Иногда приходится применять силу, потому что не всегда возможно добиться результата с помощью утверждения:',
	            A: 'верно',
	            B: 'нечто среднее',
	            C: 'неверно'
	        }, {
	            text: 'В школе я предпочитал:',
	            A: 'русский язык и литературу;',
	            B: 'не уверен;',
	            C: 'математику или арифметику'
	        }, {
	            text: 'Меня иногда огорчало, что обо мне за глаза отзывались неодобрительно без всяких к этому причин:',
	            A: 'да',
	            B: 'не уверен',
	            C: 'нет'
	        }, {
	            text: 'Разговор с простыми людьми, которые всегда придерживаются общепринятых правил и традиций:',
	            A: 'часто вполне интересен и содержателен',
	            B: 'нечто среднее',
	            C: 'раздражает меня, потому что ограничивается мелочами'
	        }, {
	            text: 'Некоторые вещи на столько раздражают меня, что предпочитаю вообще не говорить на эти темы:',
	            A: 'да',
	            B: 'нечто среднее',
	            C: 'нет'
	        }, {
	            text: 'В воспитании важнее:',
	            A: 'относиться к ребенку с достаточной любовью;',
	            B: 'нечто среднее',
	            C: 'выработать нужные привычки и отношение к жизни.'
	        }, {
	            text: 'Люди считают меня положительным, спокойным человеком, которого не трогают превратности судьбы:',
	            A: 'да',
	            B: 'нечто среднее',
	            C: 'нет'
	        }, {
	            text: 'Я считаю, что общество должно руководствоваться разумом и отбросить старые привычки или не нужные традиции:',
	            A: 'да',
	            B: 'не уверен',
	            C: 'нет'
	        }, {
	            text: 'Думаю, что в современном мире важнее разрешить:',
	            A: 'вопросы нравственности;',
	            B: 'не уверен;',
	            C: 'разногласия между странами мира'
	        }, {
	            text: 'Я лучше усваиваю материал:',
	            A: 'читая хорошо написанную книгу;',
	            B: 'нечто среднее;',
	            C: 'участвуя в обсуждении вопроса'
	        }, {
	            text: 'Я предпочитаю идти своим путем вместо того, чтобы действовать в соответствии с принятыми правилами:',
	            A: 'верно',
	            B: 'не уверен',
	            C: 'неверно'
	        }, {
	            text: 'Прежде чем выдвигать какой-либо аргумент, я предпочитаю подождать, пока не буду убежден, что я прав:',
	            A: 'всегда',
	            B: 'обычно',
	            C: 'только если это целесообразно'
	        }, {
	            text: 'Мелочи иногда независимо «действуют мне на нервы», хотя я и понимаю, что они не существенны:',
	            A: 'да',
	            B: 'нечто среднее',
	            C: 'нет'
	        }, {
	            text: 'Под влиянием момента я редко говорю вещи, о которых потом очень сожалею:',
	            A: 'верно',
	            B: 'не уверен',
	            C: 'неверно'
	        }, {
	            text: 'Если бы меня попросили участвовать в шефской деятельности, то я бы:',
	            A: 'согласился',
	            B: 'не уверен',
	            C: 'вежливо сказал, что занят'
	        }, {
	            text: 'Которое из следующих слов относится к двум другим:',
	            A: 'широкий',
	            B: 'зигзагообразный',
	            C: 'прямой'
	        }, {
	            text: '«Скоро» так относится к «никогда», как «близко» к:',
	            A: 'нигде',
	            B: 'далеко',
	            C: 'где-то'
	        }, {
	            text: 'Если я невольно нарушил правила поведения, находясь в обществе, то я вскоре забываю об этом:',
	            A: 'да',
	            B: 'нечто среднее',
	            C: 'нет'
	        }, {
	            text: 'Меня считают человеком,  которому обычно в голову приходят хорошие идеи, когда нужно разрешить какую-либо проблему:',
	            A: 'да',
	            B: 'не уверен',
	            C: 'нет'
	        }, {
	            text: 'Я способен лучше проявить себя:',
	            A: 'в трудных ситуациях, когда нужно сохранить самообладание;',
	            B: 'не уверен',
	            C: 'когда требуется умение ладить с людьми'
	        }, {
	            text: 'Меня считают человеком, полным энтузиазма:',
	            A: 'да',
	            B: 'нечто среднее',
	            C: 'нет'
	        }, {
	            text: 'Мне нравится работа, которая требует перемен, разнообразия, командировок, даже если она связана некоторой опасностью:',
	            A: 'да',
	            B: 'нечто среднее',
	            C: 'нет'
	        }, {
	            text: 'Я довольно требовательный человек и всегда настаиваю на том, чтобы все делалось по возможности правильно:',
	            A: 'верно',
	            B: 'нечто среднее',
	            C: 'неверно'
	        }, {
	            text: 'Мне нравится работа, требующая добросовестного отношения, точных навыков и умений:',
	            A: 'да',
	            B: 'нечто среднее',
	            C: 'нет'
	        }, {
	            text: 'Я отношусь к типу энергичных людей, которые всегда заняты:',
	            A: 'да',
	            B: 'не уверен',
	            C: 'нет'
	        }, {
	            text: 'Я уверен в том, что не пропустил ни одного вопроса и на все ответил как следует:',
	            A: 'да',
	            B: 'не уверен',
	            C: 'нет'
	        }].reduce(function (acc, _ref, index) {
	            var text = _ref.text,
	                A = _ref.A,
	                B = _ref.B,
	                C = _ref.C;
	
	            var id = '' + (index + 1);
	            acc[id] = (0, _softbreak.linebreak)(text);
	            acc[id + '.A'] = A;
	            acc[id + '.B'] = B;
	            acc[id + '.C'] = C;
	
	            return acc;
	        }, {}),
	        answers: {
	            A: 'A',
	            B: 'B',
	            C: 'C'
	        },
	        scales: {
	            A: 'A',
	            B: 'B',
	            C: 'C',
	            E: 'E',
	            F: 'F',
	            G: 'G',
	            H: 'H',
	            I: 'I',
	            L: 'L',
	            M: 'M',
	            N: 'N',
	            O: 'O',
	            Q1: 'Q1',
	            Q2: 'Q2',
	            Q3: 'Q3',
	            Q4: 'Q4',
	
	            TA: 'TA',
	            TB: 'TB',
	            TC: 'TC',
	            TE: 'TE',
	            TF: 'TF',
	            TG: 'TG',
	            TH: 'TH',
	            TI: 'TI',
	            TL: 'TL',
	            TM: 'TM',
	            TN: 'TN',
	            TO: 'TO',
	            TQ1: 'TQ1',
	            TQ2: 'TQ2',
	            TQ3: 'TQ3',
	            TQ4: 'TQ4'
	        }
	    }
	}; /* eslint max-len: 0 */

/***/ }),
/* 248 */,
/* 249 */,
/* 250 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 251 */,
/* 252 */,
/* 253 */
/***/ (function(module, exports) {

	'use strict';
	
	function buildAnswersValidator(countOfAnswers, validatorArg, invalidScales) {
	    const isValid = Array.isArray(validatorArg)
	        ? buildAnswerValidator(validatorArg)
	        : validatorArg;
	    return function anAnswersValidator(answers) {
	        if (!answers) {
	            return invalidScales;
	        }
	        if (answers.length !== countOfAnswers) {
	            return invalidScales;
	        }
	        for (let i = 0; i < countOfAnswers; i++) {
	            if (!isValid(answers[i], i, answers)) {
	                return invalidScales;
	            }
	        }
	    };
	}
	function buildAnswerValidator(validAnswers) {
	    const set = new Set(validAnswers);
	    return function setValidatorForAnswer(answer) {
	        return set.has(answer);
	    };
	}
	
	const createBlankScales = function (v) {
	    return {
	        A: v,
	    };
	};
	
	const positives = new Set([2, 3, 4, 7, 8, 10, 14, 16, 17, 18, 19, 20, 22, 23, 25, 26]);
	const negatives = new Set([1, 5, 6, 9, 11, 12, 13, 15, 21, 24]);
	const validate = buildAnswersValidator(26, [0, 1, 2, 3, 4], createBlankScales(NaN));
	function minus(answer, index) {
	    return negatives.has(index) ? 5 - answer : NaN;
	}
	function plus(answer, index) {
	    return positives.has(index) ? answer + 1 : minus(answer, index);
	}
	function reducer(scale, answer, index) {
	    return scale + plus(answer, index + 1);
	}
	function calculate(answers) {
	    return answers.reduce(reducer, 0);
	}
	function alexithymia(answers) {
	    return validate(answers) || createBlankScales(calculate(answers));
	}
	
	function combineReducers(reducers) {
	    return function rootReducer(scales, value, index) {
	        return reducers.reduce((acc, reducer) => {
	            return reducer(acc, value, index + 1);
	        }, scales);
	    };
	}
	
	const createBlankScales$1 = function (v) {
	    return {
	        A1: v,
	        A2: v,
	        A3: v,
	        C1: v,
	        C2: v,
	        C3: v,
	        LO1: v,
	        LO2: v,
	        LO3: v,
	        LI1: v,
	        LI2: v,
	        LI3: v,
	        N1: v,
	        N2: v,
	        N3: v,
	        S1: v,
	        S2: v,
	        S3: v,
	    };
	};
	
	const validate$1 = buildAnswersValidator(220, ["+", "-"], createBlankScales$1(NaN));
	const scaleReducers = [
	    { scaleId: "A1", indices: [1, 8, 26, 30, 51, 74, 112, 126, 157, 173, 184, 195, 210] },
	    { scaleId: "A2", indices: [2, 4, 6, 63, 92, 97, 104, 118, 132, 145, 168, 175, 180, 203] },
	    { scaleId: "A3", indices: [25, 28, 39, 61, 66, 72, 100, 102, 150, 153, 161, 215] },
	    { scaleId: "C1", indices: [11, 35, 50, 94, 127, 136, 143, 160, 171, 191, 213, 220] },
	    { scaleId: "C2", indices: [32, 47, 54, 59, 91, 109, 128, 163, 178, 179, 188] },
	    { scaleId: "C3", indices: [69, 75, 76, 108, 116, 131, 149, 155, 170, 177, 181, 196, 207, 219] },
	    { scaleId: "LO1", indices: [23, 36, 58, 89, 90, 95, 99, 137, 138, 140, 176] },
	    { scaleId: "LO2", indices: [3, 14, 37, 38, 46, 82, 88, 148, 154, 158, 209] },
	    { scaleId: "LO3", indices: [7, 17, 57, 71, 84, 86, 120, 123, 164, 166, 218] },
	    { scaleId: "LI1", indices: [5, 13, 21, 29, 42, 98, 107, 130, 147, 167, 192, 201] },
	    { scaleId: "LI2", indices: [10, 16, 55, 80, 117, 169, 185, 187, 193, 200, 202, 208] },
	    { scaleId: "LI3", indices: [12, 41, 45, 49, 52, 56, 77, 119, 122, 125, 172, 190, 211] },
	    { scaleId: "N1", indices: [18, 34, 44, 73, 85, 96, 106, 115, 141, 183, 189, 198] },
	    { scaleId: "N2", indices: [19, 31, 53, 68, 87, 113, 162, 174, 199, 204, 206, 214] },
	    { scaleId: "N3", indices: [9, 24, 27, 64, 79, 101, 103, 111, 124, 134, 146, 156, 216] },
	    { scaleId: "S1", indices: [15, 33, 40, 43, 48, 65, 78, 83, 105, 133, 139, 151, 217] },
	    { scaleId: "S2", indices: [20, 22, 62, 67, 70, 93, 110, 129, 142, 159, 186, 194, 197] },
	    { scaleId: "S3", indices: [60, 81, 114, 121, 135, 144, 152, 165, 182, 205, 212] },
	].map((scaleMeta) => {
	    let { indices, scaleId } = scaleMeta;
	    let set = new Set(indices);
	    return function scaleReducer(scales, value, index) {
	        if (value === "+" && set.has(index)) {
	            scales[scaleId] = (scales[scaleId] | 0) + 1;
	        }
	        return scales;
	    };
	});
	function calculate$1(answers) {
	    return answers.reduce(combineReducers(scaleReducers), createBlankScales$1(0));
	}
	function amon(answers) {
	    return validate$1(answers) || calculate$1(answers);
	}
	
	const createBlankScales$2 = function (v) {
	    return {
	        A: v,
	        B: v,
	        C: v,
	        E: v,
	        F: v,
	        G: v,
	        H: v,
	        I: v,
	        L: v,
	        M: v,
	        N: v,
	        O: v,
	        Q1: v,
	        Q2: v,
	        Q3: v,
	        Q4: v,
	    };
	};
	
	const cattelRawMetadata = [
	    /* 1   */ ['', 0, 0, 0],
	    /* 2   */ ['', 0, 0, 0],
	    /* 3   */ ['A', 2, 1, 0],
	    /* 4   */ ['C', 2, 1, 0],
	    /* 5   */ ['C', 0, 1, 2],
	    /* 6   */ ['E', 0, 1, 2],
	    /* 7   */ ['E', 2, 1, 0],
	    /* 8   */ ['F', 0, 1, 2],
	    /* 9   */ ['G', 0, 1, 2],
	    /* 10  */ ['H', 2, 1, 0],
	    /* 11  */ ['I', 0, 1, 2],
	    /* 12  */ ['I', 2, 1, 0],
	    /* 13  */ ['L', 0, 1, 2],
	    /* 14  */ ['M', 0, 1, 2],
	    /* 15  */ ['M', 0, 1, 2],
	    /* 16  */ ['N', 0, 1, 2],
	    /* 17  */ ['N', 2, 1, 0],
	    /* 18  */ ['O', 2, 1, 0],
	    /* 19  */ ['O', 0, 1, 2],
	    /* 20  */ ['Q1', 2, 1, 0],
	    /* 21  */ ['Q1', 0, 1, 2],
	    /* 22  */ ['Q2', 0, 1, 2],
	    /* 23  */ ['Q3', 0, 1, 2],
	    /* 24  */ ['Q3', 0, 1, 2],
	    /* 25  */ ['Q4', 0, 1, 2],
	    /* 26  */ ['A', 0, 1, 2],
	    /* 27  */ ['A', 0, 1, 2],
	    /* 28  */ ['B', 0, 1, 0],
	    /* 29  */ ['C', 0, 1, 2],
	    /* 30  */ ['C', 2, 1, 0],
	    /* 31  */ ['E', 0, 1, 2],
	    /* 32  */ ['E', 0, 1, 2],
	    /* 33  */ ['F', 2, 1, 0],
	    /* 34  */ ['G', 0, 1, 2],
	    /* 35  */ ['H', 0, 1, 2],
	    /* 36  */ ['H', 2, 1, 0],
	    /* 37  */ ['I', 2, 1, 0],
	    /* 38  */ ['L', 2, 1, 0],
	    /* 39  */ ['M', 2, 1, 0],
	    /* 40  */ ['M', 2, 1, 0],
	    /* 41  */ ['N', 0, 1, 2],
	    /* 42  */ ['N', 2, 1, 0],
	    /* 43  */ ['O', 2, 1, 0],
	    /* 44  */ ['O', 0, 1, 2],
	    /* 45  */ ['Q1', 0, 1, 2],
	    /* 46  */ ['Q1', 2, 1, 0],
	    /* 47  */ ['Q2', 2, 1, 0],
	    /* 48  */ ['Q3', 2, 1, 0],
	    /* 49  */ ['Q4', 2, 1, 0],
	    /* 50  */ ['Q4', 2, 1, 0],
	    /* 51  */ ['A', 0, 1, 2],
	    /* 52  */ ['A', 2, 1, 0],
	    /* 53  */ ['B', 0, 1, 0],
	    /* 54  */ ['B', 0, 1, 0],
	    /* 55  */ ['C', 2, 1, 0],
	    /* 56  */ ['E', 2, 1, 0],
	    /* 57  */ ['E', 0, 1, 2],
	    /* 58  */ ['F', 2, 1, 0],
	    /* 59  */ ['G', 0, 1, 2],
	    /* 60  */ ['H', 0, 1, 2],
	    /* 61  */ ['H', 0, 1, 2],
	    /* 62  */ ['I', 0, 1, 2],
	    /* 63  */ ['L', 0, 1, 2],
	    /* 64  */ ['L', 0, 1, 2],
	    /* 65  */ ['M', 2, 1, 0],
	    /* 66  */ ['N', 0, 1, 2],
	    /* 67  */ ['N', 0, 1, 2],
	    /* 68  */ ['O', 0, 1, 2],
	    /* 69  */ ['O', 2, 1, 0],
	    /* 70  */ ['Q1', 2, 1, 0],
	    /* 71  */ ['Q2', 2, 1, 0],
	    /* 72  */ ['Q2', 2, 1, 0],
	    /* 73  */ ['Q3', 2, 1, 0],
	    /* 74  */ ['Q4', 2, 1, 0],
	    /* 75  */ ['Q4', 0, 1, 2],
	    /* 76  */ ['A', 0, 1, 2],
	    /* 77  */ ['B', 0, 0, 1],
	    /* 78  */ ['B', 0, 1, 0],
	    /* 79  */ ['C', 0, 1, 2],
	    /* 80  */ ['C', 0, 1, 2],
	    /* 81  */ ['E', 0, 1, 2],
	    /* 82  */ ['F', 0, 1, 2],
	    /* 83  */ ['F', 2, 1, 0],
	    /* 84  */ ['G', 0, 1, 2],
	    /* 85  */ ['H', 0, 1, 2],
	    /* 86  */ ['H', 0, 1, 2],
	    /* 87  */ ['I', 0, 1, 2],
	    /* 88  */ ['L', 2, 1, 0],
	    /* 89  */ ['L', 0, 1, 2],
	    /* 90  */ ['M', 0, 1, 2],
	    /* 91  */ ['M', 2, 1, 0],
	    /* 92  */ ['N', 0, 1, 2],
	    /* 93  */ ['O', 0, 1, 2],
	    /* 94  */ ['O', 2, 1, 0],
	    /* 95  */ ['Q1', 0, 1, 2],
	    /* 96  */ ['Q2', 0, 1, 2],
	    /* 97  */ ['Q2', 0, 1, 2],
	    /* 98  */ ['Q3', 2, 1, 0],
	    /* 99  */ ['Q4', 2, 1, 0],
	    /* 100 */ ['Q4', 0, 1, 2],
	    /* 101 */ ['A', 2, 1, 0],
	    /* 102 */ ['B', 0, 0, 1],
	    /* 103 */ ['B', 0, 1, 0],
	    /* 104 */ ['C', 2, 1, 0],
	    /* 105 */ ['C', 2, 1, 0],
	    /* 106 */ ['E', 0, 1, 2],
	    /* 107 */ ['F', 0, 1, 2],
	    /* 108 */ ['F', 0, 1, 2],
	    /* 109 */ ['G', 2, 1, 0],
	    /* 110 */ ['H', 2, 1, 0],
	    /* 111 */ ['H', 2, 1, 0],
	    /* 112 */ ['I', 2, 1, 0],
	    /* 113 */ ['L', 2, 1, 0],
	    /* 114 */ ['L', 2, 1, 0],
	    /* 115 */ ['M', 2, 1, 0],
	    /* 116 */ ['M', 2, 1, 0],
	    /* 117 */ ['N', 2, 1, 0],
	    /* 118 */ ['O', 2, 1, 0],
	    /* 119 */ ['O', 2, 1, 0],
	    /* 120 */ ['Q1', 0, 1, 2],
	    /* 121 */ ['Q2', 0, 1, 2],
	    /* 122 */ ['Q2', 0, 1, 2],
	    /* 123 */ ['Q3', 0, 1, 2],
	    /* 124 */ ['Q4', 2, 1, 0],
	    /* 125 */ ['Q4', 0, 1, 2],
	    /* 126 */ ['A', 2, 1, 0],
	    /* 127 */ ['B', 0, 0, 1],
	    /* 128 */ ['B', 0, 1, 0],
	    /* 129 */ ['C', 0, 1, 2],
	    /* 130 */ ['C', 2, 1, 0],
	    /* 131 */ ['E', 2, 1, 0],
	    /* 132 */ ['F', 2, 1, 0],
	    /* 133 */ ['F', 2, 1, 0],
	    /* 134 */ ['G', 2, 1, 0],
	    /* 135 */ ['H', 2, 1, 0],
	    /* 136 */ ['H', 2, 1, 0],
	    /* 137 */ ['I', 0, 1, 2],
	    /* 138 */ ['I', 2, 1, 0],
	    /* 139 */ ['L', 0, 1, 2],
	    /* 140 */ ['M', 2, 1, 0],
	    /* 141 */ ['M', 0, 1, 2],
	    /* 142 */ ['N', 2, 1, 0],
	    /* 143 */ ['O', 2, 1, 0],
	    /* 144 */ ['O', 0, 1, 2],
	    /* 145 */ ['Q1', 2, 1, 0],
	    /* 146 */ ['Q2', 2, 1, 0],
	    /* 147 */ ['Q3', 0, 1, 2],
	    /* 148 */ ['Q3', 2, 1, 0],
	    /* 149 */ ['Q4', 2, 1, 0],
	    /* 150 */ ['Q4', 0, 1, 2],
	    /* 151 */ ['A', 0, 1, 2],
	    /* 152 */ ['B', 1, 0, 0],
	    /* 153 */ ['B', 0, 0, 1],
	    /* 154 */ ['C', 0, 1, 2],
	    /* 155 */ ['E', 2, 1, 0],
	    /* 156 */ ['E', 2, 1, 0],
	    /* 157 */ ['F', 0, 1, 2],
	    /* 158 */ ['F', 0, 1, 2],
	    /* 159 */ ['G', 0, 1, 2],
	    /* 160 */ ['G', 2, 1, 0],
	    /* 161 */ ['H', 0, 1, 2],
	    /* 162 */ ['I', 0, 1, 2],
	    /* 163 */ ['I', 2, 1, 0],
	    /* 164 */ ['L', 2, 1, 0],
	    /* 165 */ ['M', 0, 1, 2],
	    /* 166 */ ['M', 0, 1, 2],
	    /* 167 */ ['N', 2, 1, 0],
	    /* 168 */ ['O', 0, 1, 2],
	    /* 169 */ ['Q1', 2, 1, 0],
	    /* 170 */ ['Q1', 0, 1, 2],
	    /* 171 */ ['Q2', 2, 1, 0],
	    /* 172 */ ['Q3', 0, 1, 2],
	    /* 173 */ ['Q3', 2, 1, 0],
	    /* 174 */ ['Q4', 2, 1, 0],
	    /* 175 */ ['Q4', 0, 1, 2],
	    /* 176 */ ['A', 2, 1, 0],
	    /* 177 */ ['B', 1, 0, 0],
	    /* 178 */ ['B', 1, 0, 0],
	    /* 179 */ ['C', 2, 1, 0],
	    /* 180 */ ['E', 2, 1, 0],
	    /* 181 */ ['E', 2, 1, 0],
	    /* 182 */ ['F', 2, 1, 0],
	    /* 183 */ ['F', 2, 1, 0],
	    /* 184 */ ['G', 2, 1, 0],
	    /* 185 */ ['G', 2, 1, 0],
	    /* 186 */ ['H', 2, 1, 0],
	    /* 187 */ ['', 0, 0, 0],
	].map(([scale, A, B, C]) => ({
	    scale,
	    scores: { A, B, C },
	}));
	
	const F1618 = [
	    {
	        scale: "A",
	        scores: [
	            { "score": 0, "range": [0, 6] },
	            { "score": 1, "range": [7, 8] },
	            { "score": 2, "range": [7, 8] },
	            { "score": 3, "range": [9, 10] },
	            { "score": 4, "range": [11, 11] },
	            { "score": 5, "range": [12, 13] },
	            { "score": 6, "range": [14, 15] },
	            { "score": 7, "range": [16, 16] },
	            { "score": 8, "range": [17, 18] },
	            { "score": 9, "range": [19, 20] }
	        ],
	    }, {
	        scale: "B",
	        scores: [
	            { "score": 0, "range": [0, 1] },
	            { "score": 1, "range": [2, 2] },
	            { "score": 2, "range": [3, 3] },
	            { "score": 3, "range": [4, 4] },
	            { "score": 4, "range": [5, 5] },
	            { "score": 5, "range": [6, 6] },
	            { "score": 6, "range": [7, 7] },
	            { "score": 7, "range": [8, 9] },
	            { "score": 8, "range": [10, 10] },
	            { "score": 9, "range": [11, 12] }
	        ],
	    }, {
	        scale: "C",
	        scores: [
	            { "score": 0, "range": [0, 6] },
	            { "score": 1, "range": [7, 8] },
	            { "score": 2, "range": [9, 10] },
	            { "score": 3, "range": [11, 12] },
	            { "score": 4, "range": [13, 14] },
	            { "score": 5, "range": [15, 16] },
	            { "score": 6, "range": [17, 18] },
	            { "score": 7, "range": [19, 20] },
	            { "score": 8, "range": [21, 21] },
	            { "score": 9, "range": [22, 26] }
	        ],
	    }, {
	        scale: "E",
	        scores: [
	            { "score": 0, "range": [0, 3] },
	            { "score": 1, "range": [4, 4] },
	            { "score": 2, "range": [5, 6] },
	            { "score": 3, "range": [7, 8] },
	            { "score": 4, "range": [9, 10] },
	            { "score": 5, "range": [11, 12] },
	            { "score": 6, "range": [13, 15] },
	            { "score": 7, "range": [16, 17] },
	            { "score": 8, "range": [18, 19] },
	            { "score": 9, "range": [20, 26] }
	        ],
	    }, {
	        scale: "F",
	        scores: [
	            { "score": 0, "range": [0, 6] },
	            { "score": 1, "range": [7, 8] },
	            { "score": 2, "range": [9, 11] },
	            { "score": 3, "range": [12, 14] },
	            { "score": 4, "range": [15, 16] },
	            { "score": 5, "range": [17, 18] },
	            { "score": 6, "range": [19, 20] },
	            { "score": 7, "range": [21, 22] },
	            { "score": 8, "range": [23, 23] },
	            { "score": 9, "range": [24, 26] }
	        ],
	    }, {
	        scale: "G",
	        scores: [
	            { "score": 0, "range": [0, 5] },
	            { "score": 1, "range": [6, 7] },
	            { "score": 2, "range": [8, 9] },
	            { "score": 3, "range": [10, 11] },
	            { "score": 4, "range": [12, 13] },
	            { "score": 5, "range": [14, 14] },
	            { "score": 6, "range": [15, 16] },
	            { "score": 7, "range": [17, 17] },
	            { "score": 8, "range": [18, 18] },
	            { "score": 9, "range": [19, 20] }
	        ],
	    }, {
	        scale: "H",
	        scores: [
	            { "score": 0, "range": [0, 2] },
	            { "score": 1, "range": [3, 4] },
	            { "score": 2, "range": [5, 7] },
	            { "score": 3, "range": [8, 9] },
	            { "score": 4, "range": [10, 12] },
	            { "score": 5, "range": [13, 14] },
	            { "score": 6, "range": [15, 17] },
	            { "score": 7, "range": [18, 20] },
	            { "score": 8, "range": [21, 22] },
	            { "score": 9, "range": [23, 26] }
	        ],
	    }, {
	        scale: "I",
	        scores: [
	            { "score": 0, "range": [0, 5] },
	            { "score": 1, "range": [6, 7] },
	            { "score": 2, "range": [8, 8] },
	            { "score": 3, "range": [9, 10] },
	            { "score": 4, "range": [11, 11] },
	            { "score": 5, "range": [12, 13] },
	            { "score": 6, "range": [14, 14] },
	            { "score": 7, "range": [15, 15] },
	            { "score": 8, "range": [16, 17] },
	            { "score": 9, "range": [18, 20] }
	        ],
	    }, {
	        scale: "L",
	        scores: [
	            { "score": 0, "range": [0, 2] },
	            { "score": 1, "range": [3, 3] },
	            { "score": 2, "range": [4, 5] },
	            { "score": 3, "range": [6, 6] },
	            { "score": 4, "range": [7, 8] },
	            { "score": 5, "range": [9, 9] },
	            { "score": 6, "range": [10, 11] },
	            { "score": 7, "range": [12, 13] },
	            { "score": 8, "range": [14, 14] },
	            { "score": 9, "range": [15, 16] }
	        ],
	    }, {
	        scale: "M",
	        scores: [
	            { "score": 0, "range": [0, 6] },
	            { "score": 1, "range": [7, 7] },
	            { "score": 2, "range": [8, 9] },
	            { "score": 3, "range": [10, 10] },
	            { "score": 4, "range": [11, 12] },
	            { "score": 5, "range": [13, 14] },
	            { "score": 6, "range": [15, 16] },
	            { "score": 7, "range": [17, 17] },
	            { "score": 8, "range": [18, 19] },
	            { "score": 9, "range": [20, 28] }
	        ],
	    }, {
	        scale: "N",
	        scores: [
	            { "score": 0, "range": [0, 5] },
	            { "score": 1, "range": [6, 6] },
	            { "score": 2, "range": [7, 7] },
	            { "score": 3, "range": [8, 8] },
	            { "score": 4, "range": [9, 10] },
	            { "score": 5, "range": [11, 11] },
	            { "score": 6, "range": [12, 13] },
	            { "score": 7, "range": [14, 14] },
	            { "score": 8, "range": [15, 15] },
	            { "score": 9, "range": [16, 20] }
	        ],
	    }, {
	        scale: "O",
	        scores: [
	            { "score": 0, "range": [0, 4] },
	            { "score": 1, "range": [5, 5] },
	            { "score": 2, "range": [6, 7] },
	            { "score": 3, "range": [8, 9] },
	            { "score": 4, "range": [10, 11] },
	            { "score": 5, "range": [12, 13] },
	            { "score": 6, "range": [14, 15] },
	            { "score": 7, "range": [16, 17] },
	            { "score": 8, "range": [18, 19] },
	            { "score": 9, "range": [20, 26] }
	        ],
	    }, {
	        scale: "Q1",
	        scores: [
	            { "score": 0, "range": [0, 3] },
	            { "score": 1, "range": [4, 4] },
	            { "score": 2, "range": [5, 5] },
	            { "score": 3, "range": [6, 6] },
	            { "score": 4, "range": [7, 8] },
	            { "score": 5, "range": [9, 9] },
	            { "score": 6, "range": [10, 11] },
	            { "score": 7, "range": [12, 12] },
	            { "score": 8, "range": [13, 14] },
	            { "score": 9, "range": [15, 20] }
	        ],
	    }, {
	        scale: "Q2",
	        scores: [
	            { "score": 0, "range": [0, 3] },
	            { "score": 1, "range": [4, 4] },
	            { "score": 2, "range": [5, 6] },
	            { "score": 3, "range": [7, 7] },
	            { "score": 4, "range": [8, 9] },
	            { "score": 5, "range": [10, 11] },
	            { "score": 6, "range": [12, 13] },
	            { "score": 7, "range": [14, 15] },
	            { "score": 8, "range": [16, 17] },
	            { "score": 9, "range": [18, 20] }
	        ],
	    }, {
	        scale: "Q3",
	        scores: [
	            { "score": 0, "range": [0, 4] },
	            { "score": 1, "range": [5, 6] },
	            { "score": 2, "range": [7, 7] },
	            { "score": 3, "range": [8, 9] },
	            { "score": 4, "range": [10, 10] },
	            { "score": 5, "range": [11, 12] },
	            { "score": 6, "range": [13, 13] },
	            { "score": 7, "range": [14, 14] },
	            { "score": 8, "range": [15, 16] },
	            { "score": 9, "range": [17, 20] }
	        ],
	    }, {
	        scale: "Q4",
	        scores: [
	            { "score": 0, "range": [0, 3] },
	            { "score": 1, "range": [4, 5] },
	            { "score": 2, "range": [6, 8] },
	            { "score": 3, "range": [9, 11] },
	            { "score": 4, "range": [12, 13] },
	            { "score": 5, "range": [14, 16] },
	            { "score": 6, "range": [17, 19] },
	            { "score": 7, "range": [20, 21] },
	            { "score": 8, "range": [22, 23] },
	            { "score": 9, "range": [24, 26] }
	        ]
	    },
	];
	const M1618 = [
	    {
	        scale: "A",
	        scores: [
	            { "score": 0, "range": [0, 3] },
	            { "score": 1, "range": [4, 4] },
	            { "score": 2, "range": [5, 6] },
	            { "score": 3, "range": [7, 7] },
	            { "score": 4, "range": [8, 9] },
	            { "score": 5, "range": [10, 11] },
	            { "score": 6, "range": [12, 12] },
	            { "score": 7, "range": [13, 14] },
	            { "score": 8, "range": [15, 16] },
	            { "score": 9, "range": [17, 20] }
	        ],
	    }, {
	        scale: "B",
	        scores: [
	            { "score": 0, "range": [0, 1] },
	            { "score": 1, "range": [2, 2] },
	            { "score": 2, "range": [3, 3] },
	            { "score": 3, "range": [4, 4] },
	            { "score": 4, "range": [5, 5] },
	            { "score": 5, "range": [6, 6] },
	            { "score": 6, "range": [7, 7] },
	            { "score": 7, "range": [8, 9] },
	            { "score": 8, "range": [10, 10] },
	            { "score": 9, "range": [11, 12] }
	        ],
	    }, {
	        scale: "C",
	        scores: [
	            { "score": 0, "range": [0, 7] },
	            { "score": 1, "range": [8, 9] },
	            { "score": 2, "range": [10, 11] },
	            { "score": 3, "range": [12, 13] },
	            { "score": 4, "range": [14, 15] },
	            { "score": 5, "range": [16, 17] },
	            { "score": 6, "range": [18, 19] },
	            { "score": 7, "range": [20, 20] },
	            { "score": 8, "range": [21, 22] },
	            { "score": 9, "range": [23, 26] }
	        ],
	    }, {
	        scale: "E",
	        scores: [
	            { "score": 0, "range": [0, 6] },
	            { "score": 1, "range": [7, 8] },
	            { "score": 2, "range": [9, 9] },
	            { "score": 3, "range": [10, 11] },
	            { "score": 4, "range": [12, 13] },
	            { "score": 5, "range": [14, 15] },
	            { "score": 6, "range": [16, 17] },
	            { "score": 7, "range": [18, 19] },
	            { "score": 8, "range": [20, 21] },
	            { "score": 9, "range": [22, 26] }
	        ],
	    }, {
	        scale: "F",
	        scores: [
	            { "score": 0, "range": [0, 5] },
	            { "score": 1, "range": [6, 8] },
	            { "score": 2, "range": [9, 11] },
	            { "score": 3, "range": [12, 14] },
	            { "score": 4, "range": [15, 16] },
	            { "score": 5, "range": [17, 18] },
	            { "score": 6, "range": [19, 20] },
	            { "score": 7, "range": [21, 22] },
	            { "score": 8, "range": [23, 23] },
	            { "score": 9, "range": [24, 26] }
	        ],
	    }, {
	        scale: "G",
	        scores: [
	            { "score": 0, "range": [0, 4] },
	            { "score": 1, "range": [5, 6] },
	            { "score": 2, "range": [7, 8] },
	            { "score": 3, "range": [9, 10] },
	            { "score": 4, "range": [11, 12] },
	            { "score": 5, "range": [13, 14] },
	            { "score": 6, "range": [15, 16] },
	            { "score": 7, "range": [17, 17] },
	            { "score": 8, "range": [18, 18] },
	            { "score": 9, "range": [19, 20] }
	        ],
	    }, {
	        scale: "H",
	        scores: [
	            { "score": 0, "range": [0, 2] },
	            { "score": 1, "range": [3, 4] },
	            { "score": 2, "range": [5, 7] },
	            { "score": 3, "range": [8, 10] },
	            { "score": 4, "range": [11, 13] },
	            { "score": 5, "range": [14, 16] },
	            { "score": 6, "range": [17, 18] },
	            { "score": 7, "range": [19, 20] },
	            { "score": 8, "range": [21, 22] },
	            { "score": 9, "range": [23, 26] }
	        ],
	    }, {
	        scale: "I",
	        scores: [
	            { "score": 0, "range": [0, 2] },
	            { "score": 1, "range": [3, 3] },
	            { "score": 2, "range": [4, 4] },
	            { "score": 3, "range": [5, 6] },
	            { "score": 4, "range": [7, 8] },
	            { "score": 5, "range": [9, 9] },
	            { "score": 6, "range": [10, 11] },
	            { "score": 7, "range": [12, 13] },
	            { "score": 8, "range": [14, 15] },
	            { "score": 9, "range": [16, 20] }
	        ],
	    }, {
	        scale: "L",
	        scores: [
	            { "score": 0, "range": [0, 3] },
	            { "score": 1, "range": [4, 4] },
	            { "score": 2, "range": [5, 6] },
	            { "score": 3, "range": [7, 8] },
	            { "score": 4, "range": [9, 9] },
	            { "score": 5, "range": [10, 11] },
	            { "score": 6, "range": [12, 13] },
	            { "score": 7, "range": [14, 14] },
	            { "score": 8, "range": [15, 16] },
	            { "score": 9, "range": [17, 20] }
	        ],
	    }, {
	        scale: "M",
	        scores: [
	            { "score": 0, "range": [0, 4] },
	            { "score": 1, "range": [5, 6] },
	            { "score": 2, "range": [7, 7] },
	            { "score": 3, "range": [8, 9] },
	            { "score": 4, "range": [10, 11] },
	            { "score": 5, "range": [12, 13] },
	            { "score": 6, "range": [14, 14] },
	            { "score": 7, "range": [15, 16] },
	            { "score": 8, "range": [17, 18] },
	            { "score": 9, "range": [19, 26] }
	        ],
	    }, {
	        scale: "N",
	        scores: [
	            { "score": 0, "range": [0, 5] },
	            { "score": 1, "range": [6, 7] },
	            { "score": 2, "range": [8, 8] },
	            { "score": 3, "range": [9, 9] },
	            { "score": 4, "range": [10, 10] },
	            { "score": 5, "range": [11, 12] },
	            { "score": 6, "range": [13, 13] },
	            { "score": 7, "range": [14, 15] },
	            { "score": 8, "range": [16, 16] },
	            { "score": 9, "range": [17, 20] }
	        ],
	    }, {
	        scale: "O",
	        scores: [
	            { "score": 0, "range": [0, 3] },
	            { "score": 1, "range": [4, 4] },
	            { "score": 2, "range": [5, 6] },
	            { "score": 3, "range": [7, 8] },
	            { "score": 4, "range": [9, 10] },
	            { "score": 5, "range": [11, 11] },
	            { "score": 6, "range": [12, 13] },
	            { "score": 7, "range": [14, 15] },
	            { "score": 8, "range": [16, 17] },
	            { "score": 9, "range": [18, 26] }
	        ],
	    }, {
	        scale: "Q1",
	        scores: [
	            { "score": 0, "range": [0, 4] },
	            { "score": 1, "range": [5, 5] },
	            { "score": 2, "range": [6, 6] },
	            { "score": 3, "range": [7, 8] },
	            { "score": 4, "range": [9, 9] },
	            { "score": 5, "range": [10, 11] },
	            { "score": 6, "range": [12, 12] },
	            { "score": 7, "range": [13, 13] },
	            { "score": 8, "range": [14, 15] },
	            { "score": 9, "range": [16, 20] }
	        ],
	    }, {
	        scale: "Q2",
	        scores: [
	            { "score": 0, "range": [0, 3] },
	            { "score": 1, "range": [4, 4] },
	            { "score": 2, "range": [5, 6] },
	            { "score": 3, "range": [7, 8] },
	            { "score": 4, "range": [9, 9] },
	            { "score": 5, "range": [10, 11] },
	            { "score": 6, "range": [12, 13] },
	            { "score": 7, "range": [14, 15] },
	            { "score": 8, "range": [16, 17] },
	            { "score": 9, "range": [18, 20] }
	        ],
	    }, {
	        scale: "Q3",
	        scores: [
	            { "score": 0, "range": [0, 3] },
	            { "score": 1, "range": [4, 5] },
	            { "score": 2, "range": [6, 6] },
	            { "score": 3, "range": [7, 8] },
	            { "score": 4, "range": [9, 10] },
	            { "score": 5, "range": [11, 11] },
	            { "score": 6, "range": [12, 13] },
	            { "score": 7, "range": [14, 14] },
	            { "score": 8, "range": [15, 18] },
	            { "score": 9, "range": [17, 20] }
	        ],
	    }, {
	        scale: "Q4",
	        scores: [
	            { "score": 0, "range": [0, 2] },
	            { "score": 1, "range": [3, 4] },
	            { "score": 2, "range": [5, 6] },
	            { "score": 3, "range": [7, 8] },
	            { "score": 4, "range": [10, 12] },
	            { "score": 5, "range": [13, 15] },
	            { "score": 6, "range": [16, 17] },
	            { "score": 7, "range": [18, 19] },
	            { "score": 8, "range": [2, 21] },
	            { "score": 9, "range": [22, 26] }
	        ]
	    },
	];
	const F1928 = [
	    {
	        scale: "A",
	        scores: [
	            { "score": 0, "range": [0, 4] },
	            { "score": 1, "range": [5, 6] },
	            { "score": 2, "range": [7, 7] },
	            { "score": 3, "range": [8, 9] },
	            { "score": 4, "range": [10, 12] },
	            { "score": 5, "range": [13, 13] },
	            { "score": 6, "range": [14, 15] },
	            { "score": 7, "range": [16, 16] },
	            { "score": 8, "range": [17, 17] },
	            { "score": 9, "range": [18, 18] },
	            { "score": 10, "range": [19, 20] }
	        ],
	    }, {
	        scale: "B",
	        scores: [
	            { "score": 0, "range": [0, 4] },
	            { "score": 1, "range": [5, 5] },
	            { "score": 2, "range": [NaN, NaN] },
	            { "score": 3, "range": [6, 6] },
	            { "score": 4, "range": [7, 7] },
	            { "score": 5, "range": [8, 8] },
	            { "score": 6, "range": [9, 9] },
	            { "score": 7, "range": [10, 10] },
	            { "score": 8, "range": [11, 11] },
	            { "score": 9, "range": [12, 13] }
	        ],
	    }, {
	        scale: "C",
	        scores: [
	            { "score": 0, "range": [0, 6] },
	            { "score": 1, "range": [7, 8] },
	            { "score": 2, "range": [9, 10] },
	            { "score": 3, "range": [11, 12] },
	            { "score": 4, "range": [13, 14] },
	            { "score": 5, "range": [15, 16] },
	            { "score": 6, "range": [17, 18] },
	            { "score": 7, "range": [19, 20] },
	            { "score": 8, "range": [21, 22] },
	            { "score": 9, "range": [23, 26] }
	        ],
	    }, {
	        scale: "E",
	        scores: [
	            { "score": 0, "range": [0, 3] },
	            { "score": 1, "range": [4, 4] },
	            { "score": 2, "range": [5, 6] },
	            { "score": 3, "range": [7, 8] },
	            { "score": 4, "range": [9, 10] },
	            { "score": 5, "range": [11, 12] },
	            { "score": 6, "range": [13, 14] },
	            { "score": 7, "range": [15, 16] },
	            { "score": 8, "range": [17, 18] },
	            { "score": 9, "range": [19, 26] }
	        ],
	    }, {
	        scale: "F",
	        scores: [
	            { "score": 0, "range": [0, 5] },
	            { "score": 1, "range": [6, 7] },
	            { "score": 2, "range": [8, 10] },
	            { "score": 3, "range": [11, 12] },
	            { "score": 4, "range": [13, 15] },
	            { "score": 5, "range": [16, 17] },
	            { "score": 6, "range": [18, 19] },
	            { "score": 7, "range": [20, 21] },
	            { "score": 8, "range": [22, 22] },
	            { "score": 9, "range": [23, 26] }
	        ],
	    }, {
	        scale: "G",
	        scores: [
	            { "score": 0, "range": [0, 4] },
	            { "score": 1, "range": [5, 6] },
	            { "score": 2, "range": [7, 8] },
	            { "score": 3, "range": [9, 10] },
	            { "score": 4, "range": [11, 12] },
	            { "score": 5, "range": [13, 13] },
	            { "score": 6, "range": [14, 15] },
	            { "score": 7, "range": [16, 17] },
	            { "score": 8, "range": [18, 18] },
	            { "score": 9, "range": [19, 20] }
	        ],
	    }, {
	        scale: "H",
	        scores: [
	            { "score": 0, "range": [0, 2] },
	            { "score": 1, "range": [3, 4] },
	            { "score": 2, "range": [5, 7] },
	            { "score": 3, "range": [8, 9] },
	            { "score": 4, "range": [10, 12] },
	            { "score": 5, "range": [13, 15] },
	            { "score": 6, "range": [10, 17] },
	            { "score": 7, "range": [18, 20] },
	            { "score": 8, "range": [21, 22] },
	            { "score": 9, "range": [23, 26] }
	        ],
	    }, {
	        scale: "I",
	        scores: [
	            { "score": 0, "range": [0, 5] },
	            { "score": 1, "range": [6, 6] },
	            { "score": 2, "range": [7, 8] },
	            { "score": 3, "range": [9, 10] },
	            { "score": 4, "range": [11, 12] },
	            { "score": 5, "range": [13, 13] },
	            { "score": 6, "range": [14, 14] },
	            { "score": 7, "range": [15, 15] },
	            { "score": 8, "range": [16, 17] },
	            { "score": 9, "range": [18, 20] }
	        ],
	    }, {
	        scale: "L",
	        scores: [
	            { "score": 0, "range": [0, 1] },
	            { "score": 1, "range": [2, 3] },
	            { "score": 2, "range": [4, 4] },
	            { "score": 3, "range": [5, 5] },
	            { "score": 4, "range": [6, 7] },
	            { "score": 5, "range": [8, 9] },
	            { "score": 6, "range": [10, 10] },
	            { "score": 7, "range": [11, 12] },
	            { "score": 8, "range": [13, 14] },
	            { "score": 9, "range": [15, 20] }
	        ],
	    }, {
	        scale: "M",
	        scores: [
	            { "score": 0, "range": [0, 5] },
	            { "score": 1, "range": [6, 7] },
	            { "score": 2, "range": [8, 8] },
	            { "score": 3, "range": [9, 10] },
	            { "score": 4, "range": [11, 12] },
	            { "score": 5, "range": [13, 14] },
	            { "score": 6, "range": [15, 16] },
	            { "score": 7, "range": [17, 17] },
	            { "score": 8, "range": [18, 19] },
	            { "score": 9, "range": [20, 26] }
	        ],
	    }, {
	        scale: "N",
	        scores: [
	            { "score": 0, "range": [0, 5] },
	            { "score": 1, "range": [6, 6] },
	            { "score": 2, "range": [7, 7] },
	            { "score": 3, "range": [8, 8] },
	            { "score": 4, "range": [9, 10] },
	            { "score": 5, "range": [11, 11] },
	            { "score": 6, "range": [12, 13] },
	            { "score": 7, "range": [14, 14] },
	            { "score": 8, "range": [15, 16] },
	            { "score": 9, "range": [17, 20] }
	        ],
	    }, {
	        scale: "O",
	        scores: [
	            { "score": 0, "range": [0, 3] },
	            { "score": 1, "range": [4, 4] },
	            { "score": 2, "range": [5, 6] },
	            { "score": 3, "range": [7, 7] },
	            { "score": 4, "range": [8, 9] },
	            { "score": 5, "range": [10, 12] },
	            { "score": 6, "range": [13, 14] },
	            { "score": 7, "range": [15, 16] },
	            { "score": 8, "range": [17, 18] },
	            { "score": 9, "range": [19, 26] }
	        ],
	    }, {
	        scale: "Q1",
	        scores: [
	            { "score": 0, "range": [0, 3] },
	            { "score": 1, "range": [4, 4] },
	            { "score": 2, "range": [5, 5] },
	            { "score": 3, "range": [6, 7] },
	            { "score": 4, "range": [8, 8] },
	            { "score": 5, "range": [9, 9] },
	            { "score": 6, "range": [10, 11] },
	            { "score": 7, "range": [12, 13] },
	            { "score": 8, "range": [14, 14] },
	            { "score": 9, "range": [15, 20] }
	        ],
	    }, {
	        scale: "Q2",
	        scores: [
	            { "score": 0, "range": [0, 3] },
	            { "score": 1, "range": [4, 4] },
	            { "score": 2, "range": [5, 6] },
	            { "score": 3, "range": [7, 7] },
	            { "score": 4, "range": [8, 9] },
	            { "score": 5, "range": [10, 11] },
	            { "score": 6, "range": [12, 13] },
	            { "score": 7, "range": [14, 15] },
	            { "score": 8, "range": [16, 17] },
	            { "score": 9, "range": [18, 20] }
	        ],
	    }, {
	        scale: "Q3",
	        scores: [
	            { "score": 0, "range": [0, 4] },
	            { "score": 1, "range": [5, 5] },
	            { "score": 2, "range": [6, 7] },
	            { "score": 3, "range": [8, 9] },
	            { "score": 4, "range": [10, 10] },
	            { "score": 5, "range": [11, 12] },
	            { "score": 6, "range": [13, 13] },
	            { "score": 7, "range": [14, 14] },
	            { "score": 8, "range": [15, 16] },
	            { "score": 9, "range": [17, 20] }
	        ],
	    }, {
	        scale: "Q4",
	        scores: [
	            { "score": 0, "range": [0, 3] },
	            { "score": 1, "range": [4, 5] },
	            { "score": 2, "range": [6, 7] },
	            { "score": 3, "range": [8, 10] },
	            { "score": 4, "range": [11, 12] },
	            { "score": 5, "range": [13, 15] },
	            { "score": 6, "range": [16, 18] },
	            { "score": 7, "range": [19, 20] },
	            { "score": 8, "range": [21, 22] },
	            { "score": 9, "range": [23, 26] }
	        ]
	    },
	];
	const M1928 = [
	    {
	        scale: "A",
	        scores: [
	            { "score": 0, "range": [0, 3] },
	            { "score": 1, "range": [4, 4] },
	            { "score": 2, "range": [5, 5] },
	            { "score": 3, "range": [6, 6] },
	            { "score": 4, "range": [7, 7] },
	            { "score": 5, "range": [8, 9] },
	            { "score": 6, "range": [10, 11] },
	            { "score": 7, "range": [12, 13] },
	            { "score": 8, "range": [14, 14] },
	            { "score": 9, "range": [15, 16] },
	            { "score": 10, "range": [17, 20] }
	        ],
	    }, {
	        scale: "B",
	        scores: [
	            { "score": 0, "range": [0, 4] },
	            { "score": 1, "range": [5, 5] },
	            { "score": 2, "range": [NaN, NaN] },
	            { "score": 3, "range": [6, 6] },
	            { "score": 4, "range": [7, 7] },
	            { "score": 5, "range": [8, 8] },
	            { "score": 6, "range": [9, 9] },
	            { "score": 7, "range": [10, 10] },
	            { "score": 8, "range": [11, 11] },
	            { "score": 9, "range": [12, 13] }
	        ],
	    }, {
	        scale: "C",
	        scores: [
	            { "score": 0, "range": [0, 7] },
	            { "score": 1, "range": [8, 9] },
	            { "score": 2, "range": [10, 11] },
	            { "score": 3, "range": [12, 12] },
	            { "score": 4, "range": [13, 13] },
	            { "score": 5, "range": [14, 15] },
	            { "score": 6, "range": [16, 17] },
	            { "score": 7, "range": [18, 19] },
	            { "score": 8, "range": [20, 21] },
	            { "score": 9, "range": [22, 22] },
	            { "score": 10, "range": [23, 23] },
	            { "score": 11, "range": [26, 26] }
	        ],
	    }, {
	        scale: "E",
	        scores: [
	            { "score": 0, "range": [0, 6] },
	            { "score": 1, "range": [7, 8] },
	            { "score": 2, "range": [9, 9] },
	            { "score": 3, "range": [10, 11] },
	            { "score": 4, "range": [12, 13] },
	            { "score": 5, "range": [14, 16] },
	            { "score": 6, "range": [17, 18] },
	            { "score": 7, "range": [19, 19] },
	            { "score": 8, "range": [20, 21] },
	            { "score": 9, "range": [22, 26] }
	        ],
	    }, {
	        scale: "F",
	        scores: [
	            { "score": 0, "range": [0, 5] },
	            { "score": 1, "range": [6, 8] },
	            { "score": 2, "range": [9, 10] },
	            { "score": 3, "range": [11, 13] },
	            { "score": 4, "range": [14, 15] },
	            { "score": 5, "range": [16, 17] },
	            { "score": 6, "range": [18, 19] },
	            { "score": 7, "range": [20, 21] },
	            { "score": 8, "range": [22, 23] },
	            { "score": 9, "range": [24, 46] }
	        ],
	    }, {
	        scale: "G",
	        scores: [
	            { "score": 0, "range": [0, 4] },
	            { "score": 1, "range": [5, 8] },
	            { "score": 2, "range": [7, 9] },
	            { "score": 3, "range": [10, 11] },
	            { "score": 4, "range": [12, 12] },
	            { "score": 5, "range": [13, 14] },
	            { "score": 6, "range": [15, 16] },
	            { "score": 7, "range": [17, 17] },
	            { "score": 8, "range": [18, 19] },
	            { "score": 9, "range": [20, 20] }
	        ],
	    }, {
	        scale: "H",
	        scores: [
	            { "score": 0, "range": [0, 2] },
	            { "score": 1, "range": [3, 4] },
	            { "score": 2, "range": [5, 7] },
	            { "score": 3, "range": [8, 10] },
	            { "score": 4, "range": [11, 18] },
	            { "score": 5, "range": [14, 16] },
	            { "score": 6, "range": [17, 18] },
	            { "score": 7, "range": [19, 20] },
	            { "score": 8, "range": [21, 22] },
	            { "score": 9, "range": [23, 26] }
	        ],
	    }, {
	        scale: "I",
	        scores: [
	            { "score": 0, "range": [0, 2] },
	            { "score": 1, "range": [3, 3] },
	            { "score": 2, "range": [4, 5] },
	            { "score": 3, "range": [6, 6] },
	            { "score": 4, "range": [7, 8] },
	            { "score": 5, "range": [9, 10] },
	            { "score": 6, "range": [11, 12] },
	            { "score": 7, "range": [13, 14] },
	            { "score": 8, "range": [15, 15] },
	            { "score": 9, "range": [16, 20] }
	        ],
	    }, {
	        scale: "L",
	        scores: [
	            { "score": 0, "range": [0, 3] },
	            { "score": 1, "range": [4, 4] },
	            { "score": 2, "range": [5, 6] },
	            { "score": 3, "range": [7, 7] },
	            { "score": 4, "range": [8, 9] },
	            { "score": 5, "range": [10, 11] },
	            { "score": 6, "range": [12, 12] },
	            { "score": 7, "range": [13, 14] },
	            { "score": 8, "range": [15, 15] },
	            { "score": 9, "range": [16, 20] }
	        ],
	    }, {
	        scale: "M",
	        scores: [
	            { "score": 0, "range": [0, 5] },
	            { "score": 1, "range": [6, 6] },
	            { "score": 2, "range": [7, 8] },
	            { "score": 3, "range": [9, 9] },
	            { "score": 4, "range": [10, 11] },
	            { "score": 5, "range": [12, 13] },
	            { "score": 6, "range": [14, 15] },
	            { "score": 7, "range": [16, 17] },
	            { "score": 8, "range": [18, 18] },
	            { "score": 9, "range": [19, 20] }
	        ],
	    }, {
	        scale: "N",
	        scores: [
	            { "score": 0, "range": [0, 5] },
	            { "score": 1, "range": [6, 7] },
	            { "score": 2, "range": [8, 8] },
	            { "score": 3, "range": [9, 9] },
	            { "score": 4, "range": [10, 10] },
	            { "score": 5, "range": [11, 12] },
	            { "score": 6, "range": [13, 13] },
	            { "score": 7, "range": [14, 15] },
	            { "score": 8, "range": [16, 16] },
	            { "score": 9, "range": [17, 20] }
	        ],
	    }, {
	        scale: "O",
	        scores: [
	            { "score": 0, "range": [0, 3] },
	            { "score": 1, "range": [4, 4] },
	            { "score": 2, "range": [5, 6] },
	            { "score": 3, "range": [7, 8] },
	            { "score": 4, "range": [9, 9] },
	            { "score": 5, "range": [10, 11] },
	            { "score": 6, "range": [12, 13] },
	            { "score": 7, "range": [14, 15] },
	            { "score": 8, "range": [16, 17] },
	            { "score": 9, "range": [18, 26] }
	        ],
	    }, {
	        scale: "Q1",
	        scores: [
	            { "score": 0, "range": [0, 4] },
	            { "score": 1, "range": [5, 5] },
	            { "score": 2, "range": [6, 6] },
	            { "score": 3, "range": [7, 8] },
	            { "score": 4, "range": [9, 9] },
	            { "score": 5, "range": [10, 10] },
	            { "score": 6, "range": [11, 12] },
	            { "score": 7, "range": [13, 13] },
	            { "score": 8, "range": [14, 15] },
	            { "score": 9, "range": [16, 20] }
	        ],
	    }, {
	        scale: "Q2",
	        scores: [
	            { "score": 0, "range": [0, 3] },
	            { "score": 1, "range": [4, 4] },
	            { "score": 2, "range": [5, 6] },
	            { "score": 3, "range": [7, 7] },
	            { "score": 4, "range": [8, 9] },
	            { "score": 5, "range": [10, 11] },
	            { "score": 6, "range": [12, 13] },
	            { "score": 7, "range": [14, 15] },
	            { "score": 8, "range": [16, 17] },
	            { "score": 9, "range": [18, 20] }
	        ],
	    }, {
	        scale: "Q3",
	        scores: [
	            { "score": 0, "range": [0, 3] },
	            { "score": 1, "range": [4, 5] },
	            { "score": 2, "range": [6, 6] },
	            { "score": 3, "range": [7, 8] },
	            { "score": 4, "range": [9, 10] },
	            { "score": 5, "range": [11, 11] },
	            { "score": 6, "range": [12, 13] },
	            { "score": 7, "range": [14, 14] },
	            { "score": 8, "range": [15, 16] },
	            { "score": 9, "range": [17, 20] }
	        ],
	    }, {
	        scale: "Q4",
	        scores: [
	            { "score": 0, "range": [0, 3] },
	            { "score": 1, "range": [4, 4] },
	            { "score": 2, "range": [5, 7] },
	            { "score": 3, "range": [8, 9] },
	            { "score": 4, "range": [10, 12] },
	            { "score": 5, "range": [13, 14] },
	            { "score": 6, "range": [15, 17] },
	            { "score": 7, "range": [18, 19] },
	            { "score": 8, "range": [20, 21] },
	            { "score": 9, "range": [22, 26] }
	        ]
	    },
	];
	const F2970 = [
	    {
	        scale: "A",
	        scores: [
	            { "score": 0, "range": [0, 4] },
	            { "score": 1, "range": [5, 6] },
	            { "score": 2, "range": [7, 8] },
	            { "score": 3, "range": [9, 10] },
	            { "score": 4, "range": [11, 11] },
	            { "score": 5, "range": [12, 13] },
	            { "score": 6, "range": [14, 15] },
	            { "score": 7, "range": [16, 16] },
	            { "score": 8, "range": [17, 18] },
	            { "score": 9, "range": [19, 20] }
	        ],
	    }, {
	        scale: "B",
	        scores: [
	            { "score": 0, "range": [0, 1] },
	            { "score": 1, "range": [2, 2] },
	            { "score": 2, "range": [3, 3] },
	            { "score": 3, "range": [4, 4] },
	            { "score": 4, "range": [5, 5] },
	            { "score": 5, "range": [6, 6] },
	            { "score": 6, "range": [7, 7] },
	            { "score": 7, "range": [8, 9] },
	            { "score": 8, "range": [10, 10] },
	            { "score": 9, "range": [11, 13] }
	        ],
	    }, {
	        scale: "C",
	        scores: [
	            { "score": 0, "range": [0, 7] },
	            { "score": 1, "range": [8, 9] },
	            { "score": 2, "range": [10, 11] },
	            { "score": 3, "range": [12, 13] },
	            { "score": 4, "range": [14, 15] },
	            { "score": 5, "range": [18, 17] },
	            { "score": 6, "range": [18, 20] },
	            { "score": 7, "range": [21, 22] },
	            { "score": 8, "range": [23, 24] },
	            { "score": 9, "range": [25, 26] }
	        ],
	    }, {
	        scale: "E",
	        scores: [
	            { "score": 0, "range": [0, 2] },
	            { "score": 1, "range": [3, 3] },
	            { "score": 2, "range": [4, 5] },
	            { "score": 3, "range": [6, 7] },
	            { "score": 4, "range": [8, 9] },
	            { "score": 5, "range": [10, 11] },
	            { "score": 6, "range": [12, 14] },
	            { "score": 7, "range": [15, 18] },
	            { "score": 8, "range": [17, 18] },
	            { "score": 9, "range": [19, 26] }
	        ],
	    }, {
	        scale: "F",
	        scores: [
	            { "score": 0, "range": [0, 4] },
	            { "score": 1, "range": [5, 6] },
	            { "score": 2, "range": [7, 8] },
	            { "score": 3, "range": [9, 10] },
	            { "score": 4, "range": [11, 13] },
	            { "score": 5, "range": [14, 15] },
	            { "score": 6, "range": [16, 17] },
	            { "score": 7, "range": [18, 19] },
	            { "score": 8, "range": [20, 21] },
	            { "score": 9, "range": [22, 26] }
	        ],
	    }, {
	        scale: "G",
	        scores: [
	            { "score": 0, "range": [0, 6] },
	            { "score": 1, "range": [7, 7] },
	            { "score": 2, "range": [8, 9] },
	            { "score": 3, "range": [10, 10] },
	            { "score": 4, "range": [11, 11] },
	            { "score": 5, "range": [12, 13] },
	            { "score": 6, "range": [14, 15] },
	            { "score": 7, "range": [16, 16] },
	            { "score": 8, "range": [17, 17] },
	            { "score": 9, "range": [18, 19] },
	            { "score": 10, "range": [20, 20] }
	        ],
	    }, {
	        scale: "H",
	        scores: [
	            { "score": 0, "range": [0, 2] },
	            { "score": 1, "range": [3, 4] },
	            { "score": 2, "range": [5, 7] },
	            { "score": 3, "range": [8, 9] },
	            { "score": 4, "range": [10, 12] },
	            { "score": 5, "range": [13, 14] },
	            { "score": 6, "range": [15, 17] },
	            { "score": 7, "range": [18, 20] },
	            { "score": 8, "range": [21, 22] },
	            { "score": 9, "range": [23, 26] }
	        ],
	    }, {
	        scale: "I",
	        scores: [
	            { "score": 0, "range": [0, 5] },
	            { "score": 1, "range": [6, 7] },
	            { "score": 2, "range": [8, 8] },
	            { "score": 3, "range": [9, 10] },
	            { "score": 4, "range": [11, 11] },
	            { "score": 5, "range": [12, 13] },
	            { "score": 6, "range": [14, 14] },
	            { "score": 7, "range": [15, 18] },
	            { "score": 8, "range": [17, 17] },
	            { "score": 9, "range": [18, 20] }
	        ],
	    }, {
	        scale: "L",
	        scores: [
	            { "score": 0, "range": [0, 1] },
	            { "score": 1, "range": [2, 2] },
	            { "score": 2, "range": [3, 4] },
	            { "score": 3, "range": [5, 5] },
	            { "score": 4, "range": [6, 7] },
	            { "score": 5, "range": [8, 8] },
	            { "score": 6, "range": [9, 10] },
	            { "score": 7, "range": [11, 11] },
	            { "score": 8, "range": [12, 13] },
	            { "score": 9, "range": [14, 20] }
	        ],
	    }, {
	        scale: "M",
	        scores: [
	            { "score": 0, "range": [0, 6] },
	            { "score": 1, "range": [7, 7] },
	            { "score": 2, "range": [8, 9] },
	            { "score": 3, "range": [10, 11] },
	            { "score": 4, "range": [12, 12] },
	            { "score": 5, "range": [13, 14] },
	            { "score": 6, "range": [15, 16] },
	            { "score": 7, "range": [17, 17] },
	            { "score": 8, "range": [18, 19] },
	            { "score": 9, "range": [20, 26] }
	        ],
	    }, {
	        scale: "N",
	        scores: [
	            { "score": 0, "range": [0, 5] },
	            { "score": 1, "range": [6, 6] },
	            { "score": 2, "range": [7, 7] },
	            { "score": 3, "range": [8, 9] },
	            { "score": 4, "range": [10, 10] },
	            { "score": 5, "range": [11, 11] },
	            { "score": 6, "range": [12, 13] },
	            { "score": 7, "range": [14, 14] },
	            { "score": 8, "range": [15, 15] },
	            { "score": 9, "range": [16, 20] }
	        ],
	    }, {
	        scale: "O",
	        scores: [
	            { "score": 0, "range": [0, 3] },
	            { "score": 1, "range": [4, 4] },
	            { "score": 2, "range": [5, 6] },
	            { "score": 3, "range": [7, 8] },
	            { "score": 4, "range": [9, 10] },
	            { "score": 5, "range": [11, 12] },
	            { "score": 6, "range": [13, 14] },
	            { "score": 7, "range": [15, 18] },
	            { "score": 8, "range": [17, 18] },
	            { "score": 9, "range": [19, 26] }
	        ],
	    }, {
	        scale: "Q1",
	        scores: [
	            { "score": 0, "range": [0, 3] },
	            { "score": 1, "range": [4, 4] },
	            { "score": 2, "range": [5, 5] },
	            { "score": 3, "range": [6, 7] },
	            { "score": 4, "range": [8, 8] },
	            { "score": 5, "range": [9, 9] },
	            { "score": 6, "range": [10, 11] },
	            { "score": 7, "range": [12, 13] },
	            { "score": 8, "range": [14, 14] },
	            { "score": 9, "range": [15, 20] }
	        ],
	    }, {
	        scale: "Q2",
	        scores: [
	            { "score": 0, "range": [0, 3] },
	            { "score": 1, "range": [4, 4] },
	            { "score": 2, "range": [5, 6] },
	            { "score": 3, "range": [7, 8] },
	            { "score": 4, "range": [9, 9] },
	            { "score": 5, "range": [10, 11] },
	            { "score": 6, "range": [12, 13] },
	            { "score": 7, "range": [14, 15] },
	            { "score": 8, "range": [16, 17] },
	            { "score": 9, "range": [18, 20] }
	        ],
	    }, {
	        scale: "Q3",
	        scores: [
	            { "score": 0, "range": [0, 5] },
	            { "score": 1, "range": [6, 7] },
	            { "score": 2, "range": [8, 8] },
	            { "score": 3, "range": [9, 10] },
	            { "score": 4, "range": [11, 11] },
	            { "score": 5, "range": [12, 13] },
	            { "score": 6, "range": [14, 14] },
	            { "score": 7, "range": [15, 16] },
	            { "score": 8, "range": [17, 17] },
	            { "score": 9, "range": [18, 20] }
	        ],
	    }, {
	        scale: "Q4",
	        scores: [
	            { "score": 0, "range": [0, 2] },
	            { "score": 1, "range": [3, 4] },
	            { "score": 2, "range": [5, 7] },
	            { "score": 3, "range": [8, 10] },
	            { "score": 4, "range": [11, 12] },
	            { "score": 5, "range": [13, 15] },
	            { "score": 6, "range": [18, 17] },
	            { "score": 7, "range": [18, 20] },
	            { "score": 8, "range": [21, 22] },
	            { "score": 9, "range": [23, 26] }
	        ]
	    },
	];
	const M2970 = [
	    {
	        scale: "A",
	        scores: [
	            { "score": 0, "range": [0, 3] },
	            { "score": 1, "range": [4, 4] },
	            { "score": 2, "range": [5, 6] },
	            { "score": 3, "range": [7, 7] },
	            { "score": 4, "range": [8, 9] },
	            { "score": 5, "range": [10, 11] },
	            { "score": 6, "range": [12, 13] },
	            { "score": 7, "range": [14, 14] },
	            { "score": 8, "range": [15, 16] },
	            { "score": 9, "range": [17, 20] }
	        ],
	    }, {
	        scale: "B",
	        scores: [
	            { "score": 0, "range": [0, 1] },
	            { "score": 1, "range": [2, 2] },
	            { "score": 2, "range": [3, 3] },
	            { "score": 3, "range": [4, 4] },
	            { "score": 4, "range": [5, 5] },
	            { "score": 5, "range": [6, 6] },
	            { "score": 6, "range": [7, 7] },
	            { "score": 7, "range": [8, 9] },
	            { "score": 8, "range": [10, 10] },
	            { "score": 9, "range": [11, 13] }
	        ],
	    }, {
	        scale: "C",
	        scores: [
	            { "score": 0, "range": [0, 7] },
	            { "score": 1, "range": [8, 10] },
	            { "score": 2, "range": [11, 12] },
	            { "score": 3, "range": [13, 14] },
	            { "score": 4, "range": [15, 16] },
	            { "score": 5, "range": [17, 17] },
	            { "score": 6, "range": [18, 19] },
	            { "score": 7, "range": [20, 21] },
	            { "score": 8, "range": [22, 23] },
	            { "score": 9, "range": [24, 26] }
	        ],
	    }, {
	        scale: "E",
	        scores: [
	            { "score": 0, "range": [0, 5] },
	            { "score": 1, "range": [6, 7] },
	            { "score": 2, "range": [8, 9] },
	            { "score": 3, "range": [10, 11] },
	            { "score": 4, "range": [12, 13] },
	            { "score": 5, "range": [14, 15] },
	            { "score": 6, "range": [16, 17] },
	            { "score": 7, "range": [18, 19] },
	            { "score": 8, "range": [20, 21] },
	            { "score": 9, "range": [22, 26] }
	        ],
	    }, {
	        scale: "F",
	        scores: [
	            { "score": 0, "range": [0, 3] },
	            { "score": 1, "range": [4, 5] },
	            { "score": 2, "range": [6, 8] },
	            { "score": 3, "range": [9, 10] },
	            { "score": 4, "range": [11, 13] },
	            { "score": 5, "range": [14, 15] },
	            { "score": 6, "range": [16, 17] },
	            { "score": 7, "range": [18, 19] },
	            { "score": 8, "range": [20, 20] },
	            { "score": 9, "range": [21, 26] }
	        ],
	    }, {
	        scale: "G",
	        scores: [
	            { "score": 0, "range": [0, 4] },
	            { "score": 1, "range": [5, 7] },
	            { "score": 2, "range": [8, 10] },
	            { "score": 3, "range": [11, 12] },
	            { "score": 4, "range": [13, 13] },
	            { "score": 5, "range": [14, 15] },
	            { "score": 6, "range": [16, 17] },
	            { "score": 7, "range": [18, 18] },
	            { "score": 8, "range": [19, 19] },
	            { "score": 9, "range": [20, 20] }
	        ],
	    }, {
	        scale: "H",
	        scores: [
	            { "score": 0, "range": [0, 3] },
	            { "score": 1, "range": [4, 5] },
	            { "score": 2, "range": [6, 8] },
	            { "score": 3, "range": [9, 11] },
	            { "score": 4, "range": [12, 14] },
	            { "score": 5, "range": [15, 16] },
	            { "score": 6, "range": [17, 19] },
	            { "score": 7, "range": [20, 21] },
	            { "score": 8, "range": [22, 23] },
	            { "score": 9, "range": [24, 26] }
	        ],
	    }, {
	        scale: "I",
	        scores: [
	            { "score": 0, "range": [0, 2] },
	            { "score": 1, "range": [3, 3] },
	            { "score": 2, "range": [4, 4] },
	            { "score": 3, "range": [5, 6] },
	            { "score": 4, "range": [7, 8] },
	            { "score": 5, "range": [9, 10] },
	            { "score": 6, "range": [11, 12] },
	            { "score": 7, "range": [13, 14] },
	            { "score": 8, "range": [15, 15] },
	            { "score": 9, "range": [16, 20] }
	        ],
	    }, {
	        scale: "L",
	        scores: [
	            { "score": 0, "range": [0, 2] },
	            { "score": 1, "range": [3, 3] },
	            { "score": 2, "range": [4, 5] },
	            { "score": 3, "range": [6, 7] },
	            { "score": 4, "range": [8, 8] },
	            { "score": 5, "range": [9, 10] },
	            { "score": 6, "range": [11, 12] },
	            { "score": 7, "range": [13, 13] },
	            { "score": 8, "range": [14, 15] },
	            { "score": 9, "range": [16, 20] }
	        ],
	    }, {
	        scale: "M",
	        scores: [
	            { "score": 0, "range": [0, 5] },
	            { "score": 1, "range": [6, 7] },
	            { "score": 2, "range": [8, 8] },
	            { "score": 3, "range": [9, 10] },
	            { "score": 4, "range": [11, 11] },
	            { "score": 5, "range": [12, 13] },
	            { "score": 6, "range": [14, 15] },
	            { "score": 7, "range": [16, 17] },
	            { "score": 8, "range": [18, 19] },
	            { "score": 9, "range": [20, 26] }
	        ],
	    }, {
	        scale: "N",
	        scores: [
	            { "score": 0, "range": [0, 6] },
	            { "score": 1, "range": [7, 7] },
	            { "score": 2, "range": [8, 9] },
	            { "score": 3, "range": [10, 10] },
	            { "score": 4, "range": [11, 11] },
	            { "score": 5, "range": [12, 13] },
	            { "score": 6, "range": [14, 14] },
	            { "score": 7, "range": [15, 15] },
	            { "score": 8, "range": [16, 17] },
	            { "score": 9, "range": [18, 20] }
	        ],
	    }, {
	        scale: "O",
	        scores: [
	            { "score": 0, "range": [0, 2] },
	            { "score": 1, "range": [3, 3] },
	            { "score": 2, "range": [4, 5] },
	            { "score": 3, "range": [6, 7] },
	            { "score": 4, "range": [8, 9] },
	            { "score": 5, "range": [10, 11] },
	            { "score": 6, "range": [12, 12] },
	            { "score": 7, "range": [13, 15] },
	            { "score": 8, "range": [16, 17] },
	            { "score": 9, "range": [18, 26] }
	        ],
	    }, {
	        scale: "Q1",
	        scores: [
	            { "score": 0, "range": [0, 4] },
	            { "score": 1, "range": [5, 6] },
	            { "score": 2, "range": [7, 7] },
	            { "score": 3, "range": [8, 8] },
	            { "score": 4, "range": [9, 10] },
	            { "score": 5, "range": [11, 11] },
	            { "score": 6, "range": [12, 13] },
	            { "score": 7, "range": [14, 14] },
	            { "score": 8, "range": [15, 16] },
	            { "score": 9, "range": [17, 20] }
	        ],
	    }, {
	        scale: "Q2",
	        scores: [
	            { "score": 0, "range": [0, 3] },
	            { "score": 1, "range": [4, 4] },
	            { "score": 2, "range": [5, 6] },
	            { "score": 3, "range": [7, 8] },
	            { "score": 4, "range": [9, 10] },
	            { "score": 5, "range": [11, 11] },
	            { "score": 6, "range": [12, 13] },
	            { "score": 7, "range": [14, 15] },
	            { "score": 8, "range": [16, 17] },
	            { "score": 9, "range": [18, 20] }
	        ],
	    }, {
	        scale: "Q3",
	        scores: [
	            { "score": 0, "range": [0, 4] },
	            { "score": 1, "range": [5, 6] },
	            { "score": 2, "range": [7, 8] },
	            { "score": 3, "range": [9, 9] },
	            { "score": 4, "range": [10, 11] },
	            { "score": 5, "range": [12, 12] },
	            { "score": 6, "range": [13, 14] },
	            { "score": 7, "range": [15, 15] },
	            { "score": 8, "range": [16, 17] },
	            { "score": 9, "range": [18, 20] }
	        ],
	    }, {
	        scale: "Q4",
	        scores: [
	            { "score": 0, "range": [0, 0] },
	            { "score": 1, "range": [1, 2] },
	            { "score": 2, "range": [3, 5] },
	            { "score": 3, "range": [6, 7] },
	            { "score": 4, "range": [8, 10] },
	            { "score": 5, "range": [11, 12] },
	            { "score": 6, "range": [13, 15] },
	            { "score": 7, "range": [16, 17] },
	            { "score": 8, "range": [18, 19] },
	            { "score": 9, "range": [20, 26] }
	        ]
	    }
	];
	const stenMetadata = {
	    F1618,
	    M1618,
	    F1928,
	    M1928,
	    F2970,
	    M2970,
	};
	
	const GENDER_QUESTION_INDEX = 187;
	const AGE_QUESTION_INDEX = 188;
	const TOTAL_QUESTIONS = 189;
	const invalidScales = Object.freeze(createBlankScales$2(NaN));
	const isAnswerValid = (answer) => answer === 'A' || answer === 'B' || answer === 'C';
	const isGenderValid = (gender) => gender === 'M' || gender === 'F';
	const isAgeValid = (age) => (16 <= age) && (age <= 70);
	const validate$2 = buildAnswersValidator(TOTAL_QUESTIONS, function cattellAnswerValidator(answer, index) {
	    switch (index) {
	        case GENDER_QUESTION_INDEX:
	            return isGenderValid(answer);
	        case AGE_QUESTION_INDEX:
	            return isAgeValid(answer);
	        default:
	            return isAnswerValid(answer);
	    }
	}, invalidScales);
	function calculateRaw(answers) {
	    const scales = createBlankScales$2(0);
	    for (let index = 0; index < cattelRawMetadata.length; index++) {
	        const { scale, scores } = cattelRawMetadata[index];
	        if (scale === '') {
	            continue;
	        }
	        scales[scale] += scores[answers[index]];
	    }
	    return scales;
	}
	function calculateNormalized(answers, raw) {
	    const gender = answers[GENDER_QUESTION_INDEX];
	    const age = answers[AGE_QUESTION_INDEX];
	    const stenTableId = getSTenScoreTableId(gender, age);
	    const stenTable = stenMetadata[stenTableId];
	    const scales = createBlankScales$2(NaN);
	    stenTable.forEach(({ scale, scores }) => {
	        const value = raw[scale];
	        scales[scale] = scores.find(({ range: [min, max] }) => {
	            return (min <= value) && (value <= max);
	        }).score;
	    });
	    return scales;
	}
	function getSTenScoreTableId(gender, age) {
	    const suffix = (age <= 18) ? '1618' : (age <= 28) ? '1928' : '2970';
	    return gender + suffix;
	}
	function calculate$2(answers) {
	    const raw = calculateRaw(answers);
	    const normalized = calculateNormalized(answers, raw);
	    return Object.assign({}, normalized, { raw });
	}
	function cattell(answers) {
	    return validate$2(answers) || calculate$2(answers);
	}
	
	const createBlankScales$3 = function (v) {
	    return {
	        МП: v,
	        МУ: v,
	        ВП: v,
	        ВУ: v,
	        ВЭ: v,
	        МЭИ: v,
	        ВЭИ: v,
	        ПЭ: v,
	        УЭ: v,
	        ОУ: v,
	    };
	};
	
	const rootReducer = combineReducers([
	    { id: "МП", plus: [1, 3, 11, 13, 20, 27, 29, 32, 34], minus: [38, 42, 46] },
	    { id: "МУ", plus: [9, 15, 17, 24, 36], minus: [2, 5, 30, 40, 44] },
	    { id: "ВП", plus: [7, 14, 26], minus: [8, 18, 22, 31, 35, 41, 45] },
	    { id: "ВУ", plus: [4, 25, 28, 37], minus: [12, 33, 43] },
	    { id: "ВЭ", plus: [19, 21, 23], minus: [6, 10, 16, 39] },
	].map((scaleMeta) => {
	    let { id, plus, minus } = scaleMeta;
	    let setP = new Set(plus);
	    let setM = new Set(minus);
	    return function scaleReducer(scales, value, index) {
	        if (!scales.hasOwnProperty(id)) {
	            scales[id] = 0;
	        }
	        if (setP.has(index)) {
	            scales[id] += value;
	        }
	        if (setM.has(index)) {
	            scales[id] += 3 - value;
	        }
	        return scales;
	    };
	}));
	const computeScales = (function (computedScales) {
	    return function compute(scales) {
	        return computedScales.reduce(function (acc, scale) {
	            scales[scale.id] = scale.sum.reduce(function (sum, scaleId) {
	                return sum + scales[scaleId];
	            }, 0);
	            return scales;
	        }, scales);
	    };
	}([
	    { id: "МЭИ", sum: ["МП", "МУ"] },
	    { id: "ВЭИ", sum: ["ВП", "ВУ", "ВЭ"] },
	    { id: "ПЭ", sum: ["МП", "ВП"] },
	    { id: "УЭ", sum: ["МУ", "ВУ", "ВЭ"] },
	    { id: "ОУ", sum: ["МП", "МУ", "ВП", "ВУ", "ВЭ"] },
	]));
	const validate$3 = buildAnswersValidator(46, [0, 1, 2, 3], createBlankScales$3(NaN));
	function calculate$3(answers) {
	    return computeScales(answers.reduce(rootReducer, createBlankScales$3(0)));
	}
	function emin(answers) {
	    return validate$3(answers) || calculate$3(answers);
	}
	
	const createBlankScales$4 = function (v) {
	    return {
	        "I": v,
	        "I.1": v,
	        "I.2": v,
	        "I.3": v,
	        "I.4": v,
	        "I.5": v,
	        "II": v,
	        "II.1": v,
	        "II.2": v,
	        "II.3": v,
	        "II.4": v,
	        "II.5": v,
	        "III": v,
	        "III.1": v,
	        "III.2": v,
	        "III.3": v,
	        "III.4": v,
	        "III.5": v,
	        "IV": v,
	        "IV.1": v,
	        "IV.2": v,
	        "IV.3": v,
	        "IV.4": v,
	        "IV.5": v,
	        "V": v,
	        "V.1": v,
	        "V.2": v,
	        "V.3": v,
	        "V.4": v,
	        "V.5": v,
	    };
	};
	
	const SECONDARY_SCALES = ["I", "II", "III", "IV", "V"];
	function rootReducer$1(scales, answer, index) {
	    let III = SECONDARY_SCALES[index % 5];
	    let _3 = Math.floor(index / 15) + 1;
	    let III_3 = `${III}.${_3}`;
	    let incrementValue = 3 - answer;
	    scales[III] += incrementValue;
	    scales[III_3] += incrementValue;
	    return scales;
	}
	const validator = buildAnswersValidator(75, [-2, -1, 0, 1, 2], createBlankScales$4(NaN));
	function calculate$4(answers) {
	    return answers.reduce(rootReducer$1, createBlankScales$4(0));
	}
	function factor5(answers) {
	    return validator(answers) || calculate$4(answers);
	}
	
	const createBlankScales$5 = (v) => ({
	    "L": v,
	    "F": v,
	    "K": v,
	    "1": v,
	    "2": v,
	    "3": v,
	    "4": v,
	    "6": v,
	    "7": v,
	    "8": v,
	    "9": v,
	    "TL": v,
	    "TF": v,
	    "TK": v,
	    "T1": v,
	    "T2": v,
	    "T3": v,
	    "T4": v,
	    "T6": v,
	    "T7": v,
	    "T8": v,
	    "T9": v,
	});
	
	const rootReducer$2 = (function () {
	    let meta = [
	        {
	            scaleId: "тревоги",
	            questions: {
	                6: [-1.33, -0.44, 1.18, 1.31, 0.87],
	                12: [-1.08, -1.3, -0.6, 0.37, 1.44],
	                26: [-1.6, -1.34, -0.4, -0.6, 0.88],
	                28: [-1.11, 0, 0.54, 1.22, 0.47],
	                32: [-0.9, -1.32, -0.41, 0.41, 1.3],
	                33: [-1.19, -0.2, 1, 1.04, 0.4],
	                37: [-0.78, -1.48, -1.38, 0.11, 0.48],
	                41: [-1.26, -0.93, -0.4, 0.34, 1.24],
	                50: [-1.23, -0.74, 0, 0.37, 0.63],
	                61: [-0.92, -0.36, 0.28, 0.56, 0.1],
	            },
	        },
	        {
	            scaleId: "невротической депрессии",
	            questions: {
	                2: [-1.58, -1.45, -0.41, 0.7, 1.46],
	                7: [-1.51, -1.53, -0.34, 0.58, 1.4],
	                15: [-1.45, -1.26, -1, 0, 0.83],
	                17: [-1.38, -1.62, -0.22, 0.32, 0.75],
	                18: [-1.3, -1.5, -0.15, 0.8, 1.22],
	                35: [-1.34, -1.34, -0.5, 0.3, 0.73],
	                48: [-1.2, -1.23, 0.36, 0.56, 0.2],
	                49: [-1.08, -1.08, -1.18, 0, 0.46],
	                58: [-1.2, -1.26, -0.37, 0.21, 0.42],
	                68: [-1.08, -0.54, -0.1, 0.25, 0.32],
	            },
	        },
	        {
	            scaleId: "астении",
	            questions: {
	                3: [-1.51, -1.14, -0.4, 0.7, 1.4],
	                8: [-1.5, -0.33, 0.9, 1.32, 0.7],
	                9: [-1.3, -1.58, -0.6, 0.42, 1],
	                10: [-1.62, -1.18, 0, 0.79, 1.18],
	                14: [-1.56, -0.7, -0.12, 0.73, 1.35],
	                16: [-1.62, -0.6, 0.26, 0.81, 1.24],
	                24: [-0.93, -0.8, -0.1, 0.6, 1.17],
	                27: [-1.19, -0.44, 0.18, 1.2, 1.08],
	                45: [-1.58, -0.23, 0.34, 0.57, 0.78],
	                62: [-0.5, -0.56, 0.38, 0.56, 0],
	            },
	        },
	        {
	            scaleId: "истерического типа реагирования",
	            questions: {
	                5: [-1.41, -1.25, -0.5, 0.4, 1.53],
	                21: [-1.2, -1.48, -1.26, -0.18, 0.67],
	                31: [-1.15, -1.15, -0.87, -0.1, 0.74],
	                34: [-1.48, -1.04, -0.18, 1.11, 0.5],
	                35: [-1.34, -1.34, -0.52, 0.3, 0.73],
	                36: [-1.3, -1.38, -0.64, -0.12, 0.66],
	                45: [-1.58, -0.23, 0.34, 0.57, 0.78],
	                47: [-1.38, -1.08, -0.64, -0.1, 0.52],
	                49: [-1.08, -1.08, -1.18, -0.1, 0.46],
	                57: [-1.2, -1.34, -0.3, 0, 0.42],
	                64: [-0.6, -1.26, -1.08, -0.38, 0.23],
	            },
	        },
	        {
	            scaleId: "обсессивно-фобических нарушений",
	            questions: {
	                11: [-1.38, -1.32, -0.3, 0.3, 1.2],
	                13: [-1.53, -1.38, -0.74, 0.23, 0.9],
	                19: [-1.32, -0.63, 0, 0.99, 1.2],
	                38: [-0.9, -1.17, -0.43, 0.37, 0.69],
	                40: [-1.38, -0.67, -0.81, 0.18, 0.64],
	                46: [-1.34, -1.2, 0.1, 0.54, 0.43],
	                53: [-0.78, -1.5, -0.35, 0.27, 0.36],
	                56: [-0.3, -1.2, -1.3, -0.67, 0.33],
	                61: [-0.92, -0.36, 0.28, 0.56, 0.1],
	                66: [-1, -0.78, -1.15, -0.52, 0.18],
	            },
	        },
	        {
	            scaleId: "вегетативных нарушений",
	            questions: {
	                1: [-1.51, -1.6, -0.54, 0.5, 1.45],
	                4: [-1.56, -1.51, -0.34, 0.68, 1.23],
	                6: [-1.33, -0.44, 1.18, 1.31, 0.87],
	                20: [-1.3, -1.58, -0.1, 0.81, 0.77],
	                22: [-1.08, -1.5, -0.71, 0.19, 0.92],
	                23: [-1.8, -1.4, -0.1, 0.5, 1.22],
	                25: [-1.15, -1.48, -1, 0.43, 0.63],
	                29: [-1.6, -0.5, -0.3, 0.62, 9],
	                30: [-1.34, -0.7, -0.17, 0.42, 0.85],
	                32: [-0.9, -1.32, -0.41, 0.42, 1.19],
	                39: [-1.56, -0.43, -0.1, 0.48, 0.76],
	                42: [-1.3, -0.97, -0.4, -0.1, 0.7],
	                43: [-1.11, -0.044, 0, 0.78, 0.45],
	                44: [-1.51, -0.57, -0.26, 0.32, 0.63],
	                51: [-1.34, -0.78, 0.2, 0.31, 1.4],
	                52: [-0.97, -0.66, -0.14, 0.43, 0.77],
	                54: [-0.93, -0.3, 0.13, 0.93, 0.6],
	                57: [-1.2, -1.34, -0.3, 0, 0.42],
	                59: [-1.08, -0.83, -0.26, 0.24, 0.55],
	                63: [-0.9, -1.15, -1, -0.1, 0.25],
	                65: [-1, -1.26, -0.22, -0.43, 0.27],
	                67: [-0.7, -0.42, -0.55, 0.18, 0.4],
	            },
	        },
	    ];
	    return (scales, answer, index) => {
	        meta.forEach(({ scaleId, questions }) => {
	            let scores = questions[index + 1];
	            scales[scaleId] += scores ? scores[answer - 1] : 0;
	        });
	        return scales;
	    };
	}());
	const calculate$5 = (answers) => answers.reduce(rootReducer$2, createBlankScales$5(0));
	const validate$4 = buildAnswersValidator(71, [1, 2, 3, 4, 5], createBlankScales$5(NaN));
	function mendel(answers) {
	    return validate$4(answers) || calculate$5(answers);
	}
	
	const rootReducer$3 = combineReducers([
	    { scaleId: "1", answer: "-", indices: [1, 2, 6, 37, 45] },
	    { scaleId: "1", answer: "+", indices: [9, 18, 26, 32, 44, 46, 55, 62, 63] },
	    { scaleId: "2", answer: "-", indices: [1, 3, 6, 11, 28, 37, 40, 42, 60, 61, 65] },
	    { scaleId: "2", answer: "+", indices: [4, 9, 17, 18, 22, 25, 36, 44] },
	    { scaleId: "3", answer: "-", indices: [11, 23, 28, 29, 37, 40, 41, 43, 45, 50, 56] },
	    { scaleId: "3", answer: "+", indices: [1, 2, 3, 9, 18, 26, 31, 33, 35, 44, 46, 55, 57, 62] },
	    { scaleId: "4", answer: "-", indices: [3, 28, 34, 35, 41, 43, 50, 65] },
	    { scaleId: "4", answer: "+", indices: [7, 10, 13, 14, 15, 16, 22, 27, 52, 58, 71] },
	    { scaleId: "6", answer: "-", indices: [28, 29, 31, 67] },
	    { scaleId: "6", answer: "+", indices: [5, 8, 10, 15, 30, 39, 63, 64, 66, 68] },
	    { scaleId: "7", answer: "-", indices: [2, 3, 42] },
	    { scaleId: "7", answer: "+", indices: [5, 8, 13, 17, 22, 25, 27, 36, 44, 51, 57, 66, 68] },
	    { scaleId: "8", answer: "-", indices: [3, 42] },
	    { scaleId: "8", answer: "+", indices: [5, 7, 8, 10, 13, 14, 15, 16, 17, 26, 38, 39, 46, 57, 63, 64, 66] },
	    { scaleId: "9", answer: "-", indices: [43] },
	    { scaleId: "9", answer: "+", indices: [4, 7, 8, 21, 29, 34, 38, 39, 54, 57, 60] },
	    { scaleId: "F", answer: "-", indices: [22, 24, 61] },
	    { scaleId: "F", answer: "+", indices: [9, 12, 15, 19, 30, 48, 49, 58, 59] },
	    { scaleId: "K", answer: "-", indices: [11, 23, 31, 33, 34, 40, 41, 43, 56, 61, 65, 67, 69, 70] },
	    { scaleId: "K", answer: "+", indices: [] },
	    { scaleId: "L", answer: "-", indices: [5, 11, 24, 47, 53] },
	    { scaleId: "L", answer: "+", indices: [] },
	].filter(({ indices }) => indices.length > 0)
	    .map(({ scaleId, answer, indices }) => (scales, userAnswer, index) => {
	    if (~indices.indexOf(index)) {
	        scales[scaleId] += Number(answer === userAnswer);
	    }
	    return scales;
	}));
	const normalize = (function () {
	    const k0_16 = (k) => Math.max(0, Math.min(k, 16));
	    const getCorrectionMatrix = (k) => (k === 0) ? [0, 0, 0, 0, 0] :
	        (k === 1) ? [1, 1, 0, 1, 1] :
	            (k === 2) ? [1, 1, 0, 2, 2] :
	                (k === 3) ? [2, 2, 1, 3, 3] :
	                    (k === 4) ? [2, 2, 1, 4, 4] :
	                        (k === 5) ? [2, 2, 1, 5, 5] :
	                            (k === 6) ? [3, 2, 1, 6, 6] :
	                                (k === 7) ? [4, 3, 2, 7, 7] :
	                                    (k === 8) ? [4, 3, 2, 8, 8] :
	                                        (k === 9) ? [5, 4, 2, 9, 9] :
	                                            (k === 10) ? [5, 4, 2, 10, 10] :
	                                                (k === 11) ? [6, 4, 2, 11, 11] :
	                                                    (k === 12) ? [6, 5, 2, 12, 12] :
	                                                        (k === 13) ? [7, 6, 3, 13, 13] :
	                                                            (k === 14) ? [7, 6, 3, 14, 14] :
	                                                                (k === 15) ? [8, 6, 3, 15, 15] :
	                                                                    (k === 16) ? [8, 6, 3, 16, 16] :
	                                                                        [NaN, NaN, NaN, NaN, NaN];
	    const addCorrections = (scales, corrections) => {
	        scales[1] += corrections[0];
	        scales[4] += corrections[1];
	        scales[9] += corrections[2];
	        scales[7] += corrections[3];
	        scales[8] += corrections[4];
	        return scales;
	    };
	    const T = {
	        1: [26, 30, 34, 35, 38, 42, 45, 48, 52, 55, 58, 62, 65, 68, 72, 75, 78, 82, 86, 88, 94, 96, 98, 104, 106],
	        2: [26, 28, 34, 36, 38, 42, 45, 48, 52, 55, 58, 62, 68, 72, 78, 82, 86, 88, 94, 96, 98],
	        3: [0, 0, 22, 25, 28, 34, 36, 38, 42, 45, 52, 55, 58, 62, 65, 72, 75, 78, 82, 86, 88, 94, 96, 98, 104, 106, 110],
	        4: [0, 0, 0, 0, 22, 25, 30, 36, 38, 45, 48, 55, 58, 65, 72, 75, 78, 74, 76, 94, 98, 104, 108, 110],
	        6: [28, 34, 38, 45, 48, 55, 62, 65, 72, 78, 86, 94, 96, 104, 108],
	        7: [0, 0, 0, 0, 0, 0, 22, 25, 28, 34, 36, 38, 42, 45, 48, 55, 58, 62, 65, 72, 75, 82, 86, 94, 95, 98, 104, 108],
	        8: [0, 0, 0, 0, 0, 22, 25, 28, 34, 36, 38, 42, 45, 48, 52, 55, 58, 62, 68, 72, 75, 78, 82, 86, 88, 94, 96, 98, 104, 108, 110],
	        9: [0, 22, 25, 28, 36, 42, 45, 52, 58, 66, 68, 75, 82, 86, 88, 96, 98, 110],
	        L: [35, 45, 55, 65, 72, 78],
	        F: [34, 38, 45, 48, 55, 58, 65, 72, 75, 78, 86, 88, 96],
	        K: [24, 26, 30, 34, 35, 38, 42, 45, 48, 52, 55, 58, 62, 65, 68, 72],
	    };
	    const calcT = (scales) => {
	        scales.T1 = T[1][scales[1]] || NaN;
	        scales.T2 = T[2][scales[2]] || NaN;
	        scales.T3 = T[3][scales[3]] || NaN;
	        scales.T4 = T[4][scales[4]] || NaN;
	        scales.T6 = T[6][scales[6]] || NaN;
	        scales.T7 = T[7][scales[7]] || NaN;
	        scales.T8 = T[8][scales[8]] || NaN;
	        scales.T9 = T[9][scales[9]] || NaN;
	        scales.TL = T.L[scales.L] || NaN;
	        scales.TF = T.F[scales.F] || NaN;
	        scales.TK = T.K[scales.K] || NaN;
	        return scales;
	    };
	    return (scales) => calcT(addCorrections(scales, getCorrectionMatrix(k0_16(scales.K))));
	}());
	const calculate$6 = (answers) => normalize(answers.reduce(rootReducer$3, createBlankScales$5(0)));
	const validate$5 = buildAnswersValidator(71, ["+", "-"], createBlankScales$5(NaN));
	function mmpi(answers) {
	    return validate$5(answers) || calculate$6(answers);
	}
	
	const createBlankScales$6 = function (v) {
	    return {
	        "1a": v,
	        "1b": v,
	        "2a": v,
	        "2b": v,
	        "3a": v,
	        "3b": v,
	        "4a": v,
	        "4b": v,
	        "5a": v,
	        "5b": v,
	        "6a": v,
	        "6b": v,
	        "7a": v,
	        "7b": v,
	        "8": v,
	        "A": v,
	        "S": v,
	        "L": v,
	        "E": v,
	        "I": v,
	        "D": v,
	    };
	};
	
	const rootReducer$4 = combineReducers([
	    // Адаптивность
	    [[1, "a"], [4, 5, 9, 12, 15, 19, 22, 23, 26, 27, 29, 33, 35, 37, 41, 44, 47, 51, 53, 55, 61, 63, 67, 72, 74, 75, 78, 80, 88, 91, 94, 96, 97, 98]],
	    // Дезадаптивность
	    [[1, "b"], [2, 6, 7, 13, 16, 18, 25, 28, 32, 36, 38, 40, 42, 43, 49, 50, 54, 56, 59, 60, 62, 64, 69, 71, 73, 76, 77, 83, 84, 86, 90, 95, 99, 100]],
	    // Лживость -
	    [[2, "a"], [34, 45, 48, 81, 89]],
	    // Лживость +
	    [[2, "b"], [8, 82, 92, 101]],
	    // Приятие себя
	    [[3, "a"], [33, 35, 55, 67, 72, 74, 75, 80, 88, 94, 96]],
	    // Неприятие себя
	    [[3, "b"], [7, 59, 62, 65, 90, 95, 99]],
	    // Приятие других
	    [[4, "a"], [9, 14, 22, 26, 53, 97]],
	    // Неприятие других
	    [[4, "b"], [2, 10, 21, 28, 40, 60, 76]],
	    // Эмоциональный комфорт
	    [[5, "a"], [23, 29, 30, 41, 44, 47, 78]],
	    // Эмоциональный дискомфорт
	    [[5, "b"], [6, 42, 43, 49, 50, 83, 85]],
	    // Внутренний контроль
	    [[6, "a"], [4, 5, 11, 12, 19, 27, 37, 51, 63, 68, 79, 91, 98, 13]],
	    // Внешний контроль
	    [[6, "b"], [25, 36, 52, 57, 70, 71, 73, 77]],
	    // Доминирование
	    [[7, "a"], [58, 61, 66]],
	    // Ведомость
	    [[7, "b"], [16, 32, 38, 69, 84, 87]],
	    // Эскапизм
	    [[8, ""], [17, 18, 54, 64, 86]],
	].map(([[a, b], questionsArray]) => {
	    const questions = new Set(questionsArray);
	    return function scaleReducer(scales, answer, index) {
	        scales[a] = scales[a] || {};
	        scales[a][b] = (scales[a][b] || 0) + (questions.has(index) ? answer : 0);
	        return scales;
	    };
	}));
	const percent = (r) => Math.round(r * 100);
	const sum = (x, y, z, { a, b }) => percent((x * a) / (y * a + z * b));
	const pick2 = (key, obj) => obj[key[0]][key[1] || ""];
	function scaleMapper(obj) {
	    return {
	        "1a": pick2("1a", obj),
	        "1b": pick2("1b", obj),
	        "2a": pick2("2a", obj),
	        "2b": pick2("2b", obj),
	        "3a": pick2("3a", obj),
	        "3b": pick2("3b", obj),
	        "4a": pick2("4a", obj),
	        "4b": pick2("4b", obj),
	        "5a": pick2("5a", obj),
	        "5b": pick2("5b", obj),
	        "6a": pick2("6a", obj),
	        "6b": pick2("6b", obj),
	        "7a": pick2("7a", obj),
	        "7b": pick2("7b", obj),
	        "8": pick2("8", obj),
	        "A": sum(1.0, 1.0, 1.0, obj[1]),
	        "S": sum(1.0, 1.0, 1.0, obj[3]),
	        "L": sum(1.2, 1.2, 1.0, obj[4]),
	        "E": sum(1.0, 1.0, 1.0, obj[5]),
	        "I": sum(1.0, 1.0, 1.4, obj[6]),
	        "D": sum(2.0, 2.0, 1.0, obj[7]),
	    };
	}
	const validate$6 = buildAnswersValidator(101, [0, 2, 3, 4, 5, 6], createBlankScales$6(NaN));
	function calculate$7(answers) {
	    return scaleMapper(answers.reduce(rootReducer$4, {}));
	}
	function spa(answers) {
	    return validate$6(answers) || calculate$7(answers);
	}
	
	const createBlankScales$7 = function (v) {
	    return {
	        "Ио": v,
	        "Ид": v,
	        "Ин": v,
	        "Ис": v,
	        "Ип": v,
	        "Им": v,
	        "Из": v,
	    };
	};
	
	const rootReducer$5 = combineReducers([
	    { scaleId: "Ио", sign: 1, indices: [2, 4, 11, 12, 13, 15, 16, 17, 19, 20, 22, 25, 27, 29, 31, 32, 34, 36, 37, 39, 42, 44] },
	    { scaleId: "Ио", sign: -1, indices: [1, 3, 5, 6, 7, 8, 9, 10, 14, 18, 21, 23, 24, 26, 28, 30, 33, 35, 38, 40, 41, 43] },
	    { scaleId: "Ид", sign: 1, indices: [12, 15, 27, 32, 36, 37] },
	    { scaleId: "Ид", sign: -1, indices: [1, 5, 6, 14, 26, 43] },
	    { scaleId: "Ин", sign: 1, indices: [2, 4, 20, 31, 42, 44] },
	    { scaleId: "Ин", sign: -1, indices: [7, 24, 33, 38, 40, 41] },
	    { scaleId: "Ис", sign: 1, indices: [2, 16, 20, 32, 37] },
	    { scaleId: "Ис", sign: -1, indices: [7, 14, 26, 28, 41] },
	    { scaleId: "Ип", sign: 1, indices: [19, 22, 25, 42, 36, 37] },
	    { scaleId: "Ип", sign: -1, indices: [1, 9, 10, 30, 26, 43] },
	    { scaleId: "Им", sign: 1, indices: [4, 27] },
	    { scaleId: "Им", sign: -1, indices: [6, 38] },
	    { scaleId: "Из", sign: 1, indices: [13, 34] },
	    { scaleId: "Из", sign: -1, indices: [3, 23] },
	].map(({ scaleId, sign, indices }) => (scales, answer, index) => {
	    if (~indices.indexOf(index)) {
	        scales[scaleId] += sign * answer;
	    }
	    return scales;
	}));
	const normalize$1 = (function () {
	    const findIndexOfGreater = (arr) => (val) => {
	        return arr.reduce((i, v) => i + (val >= v), 0);
	    };
	    const meta = [
	        { scaleId: "Ио", normalize: findIndexOfGreater([-132, -13, -2, 10, 22, 33, 45, 57, 69, 80, 133]) },
	        { scaleId: "Ид", normalize: findIndexOfGreater([-36, -10, -6, -2, 2, 6, 10, 15, 19, 23, 37]) },
	        { scaleId: "Ин", normalize: findIndexOfGreater([-36, -7, -3, 1, 5, 8, 12, 16, 20, 24, 37]) },
	        { scaleId: "Ис", normalize: findIndexOfGreater([-30, -11, -7, -4, 0, 4, 7, 11, 14, 18, 31]) },
	        { scaleId: "Ип", normalize: findIndexOfGreater([-30, -4, 0, 4, 8, 12, 16, 20, 24, 28, 31]) },
	        { scaleId: "Им", normalize: findIndexOfGreater([-12, -6, -4, -2, 0, 2, 5, 7, 9, 11, 13]) },
	        { scaleId: "Из", normalize: findIndexOfGreater([-12, -3, -1, 1, 3, 4, 5, 7, 9, 11, 13]) },
	    ];
	    return function (scales) {
	        return meta.reduce((normalizedScales, { scaleId, normalize }) => {
	            normalizedScales[scaleId] = normalize(scales[scaleId]);
	            return normalizedScales;
	        }, createBlankScales$7(0));
	    };
	}());
	const calculate$8 = (answers) => answers.reduce(rootReducer$5, createBlankScales$7(0));
	const validate$7 = buildAnswersValidator(44, [-3, -2, -1, 1, 2, 3], createBlankScales$7(NaN));
	function usk(answers) {
	    return validate$7(answers) || normalize$1(calculate$8(answers));
	}
	
	var index = {
	    alexithymia,
	    amon,
	    cattell,
	    emin,
	    factor5,
	    mendel,
	    mmpi,
	    spa,
	    usk,
	};
	
	module.exports = index;


/***/ })
/******/ ]);