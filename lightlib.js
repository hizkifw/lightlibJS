/*
lightlibJS v0.0.1
(c) 2016 YayHay
*/

/** @namespace */
window.lightlib = (function() {
	/**
	 * The {@link LightLib} object. Please use the {@link lightlib} global function.
	 * @constructor LightLib
	 * @global
	 */
	function LightLib(elements) {
		for(var i = 0; i < elements.length; i++) {
			this[i] = elements[i];
		}
		this.length = elements.length;
		return this;
	}
	
	//DOM Utilities
	/**
	 * Returns an array containing the elements of the {@link LightLib} object after
	 * being passed to the callback function
	 * @function LightLib.map
	 * @param {requestCallback} callback - The function accepting the DOM elements.
	 * @returns {LightLib} The LightLib object
	 */
	LightLib.prototype.map = function(callback) {
		var results = [];
		
		for(var i = 0; i < this.length; i++) {
			results.push(callback.call(this, this[i], i));
		}
		
		return results;
	}
	
	/**
	 * Same as {@link LightLib.map}, but returns the {@link LightLib} object instead.
	 * @function LightLib.forEach
	 * @param {requestCallback} callback - The function accepting the DOM elements.
	 */
	LightLib.prototype.forEach = function(callback) {
		this.map(callback);
		return this;
	}
	
	/**
	 * Gets or sets the innerHTML of the selected DOM element.
	 * @function LightLib.html
	 * @param {string} contents - The HTML string to be set.
	 */
	LightLib.prototype.html = function(contents) {
		if(typeof contents === "undefined") {
			return this.map(function(el) {
				return el.innerHTML;
			})[0];
		} else {
			this.map(function(el) {
				el.innerHTML = contents;
			});
			return this;
		}
	}
	
	/**
	 * Gets or sets value of an input
	 * @function LightLib.val
	 * @param {string} contents - The string value to be set.
	 */
	LightLib.prototype.val = function(contents) {
		if(typeof contents === "undefined") {
			return this.map(function(el) {
				return el.value;
			})[0];
		} else {
			this.map(function(el) {
				el.value = contents;
			});
			return this;
		}
	}
	
	/**
	 * Gets or sets the attribute of a DOM object.
	 * @function LightLib.html
	 * @param {string} key - The name of the attribute
	 * @param {string} val - The value to be set.
	 */
	LightLib.prototype.attr = function(key, val) {
		if(typeof val === "undefined") {
			return this.map(function(el) {
				return el.getAttribute(key);
			})[0];
		} else {
			return this.forEach(function(el) {
				el.setAttribute(key, val);
			});
		}
	}
	
	/**
	 * {@link LightLib} initializer
	 * @function lightlib
	 * @param {string|requestCallback} selector - If string is provided,
	 * returns a new {@link LightLib} object. If a function is provided, adds
	 * it to the window.onload callback.
	 */
	var lightlib = function(selector) {
		if(typeof selector === "function") {
			window.addEventListener("load", selector, false);
			return this;
		} else {
			var elements;
			if(typeof selector === "string") {
				elements = document.querySelectorAll(selector);
			} else if(selector.length) {
				elements = selector;
			} else {
				elements = [selector];
			}
			return new LightLib(elements);
		}
	}
	
	//Other Utilities
	lightlib.ajax = function(options) {
		var req = new XMLHttpRequest();
		
		req.addEventListener("load", function() {
			options.success(this.responseText);
		});
		req.open(options.method, options.url);
		return req.send(options.data);
	}
	lightlib.get = function(url, data, callback) {
		var hasData = typeof data === "string";
		
		return lightlib.ajax({
			method: "get",
			url: url,
			data: hasData ? data : null,
			success: hasData ? callback : data
		});
	}
	lightlib.post = function(url, data, callback) {
		var hasData = typeof data === "string";
		
		return lightlib.ajax({
			method: "post",
			url: url,
			data: hasData ? data : null,
			success: hasData ? callback : data
		});
	}
	
	window.ll = lightlib;
	
	return lightlib;
}());
