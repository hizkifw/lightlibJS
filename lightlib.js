/*
lightlibJS v0.0.1
(c) 2016 YayHay
*/

/** @namespace lightlib */
window.lightlib = (function() {
	/**
	 * @constructor
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
	 * Returns an array containing the elements of the LightLib object after
	 * being passed to the callback function
	 * @param {requestCallback} callback - The function accepting the DOM elements.
	 */
	LightLib.prototype.map = function(callback) {
		var results = [];
		
		for(var i = 0; i < this.length; i++) {
			results.push(callback.call(this, this[i], i));
		}
		
		return results;
	}
	
	/**
	 * Same as {@link LightLib.map}, but returns the LightLib object instead.
	 * @param {requestCallback} callback - The function accepting the DOM elements.
	 */
	LightLib.prototype.forEach = function(callback) {
		this.map(callback);
		return this;
	}
	
	/**
	 * Gets or sets the innerHTML of the selected DOM element.
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
	LightLib.prototype.attr = function(key, val) {
		
	}
	
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
