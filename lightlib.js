/*
lightlibJS v0.0.1
(c) 2016 YayHay
*/

window.lightlib = (function() {
	function LightLib(elements) {
		for(var i = 0; i < elements.length; i++) {
			this[i] = elements[i];
		}
		this.length = elements.length;
	}
	
	//Utilities
	LightLib.prototype.map = function(callback) {
		var results = [];
		for(var i = 0; i < this.length; i++) {
			results.push(callback.call(this, this[i], i));
		}
		return results;
	}
	LightLib.prototype.forEach = function(callback) {
		this.map(callback);
		return this;
	}
	
	var lightlib = function(selector) {
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
	
	window.ll = lightlib;
	
	return lightlib;
}());
