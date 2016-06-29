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
	
	//DOM Utilities
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
	
	//Other Utilities
	lightlib.ajax = function(options) {
		var req = new XMLHttpRequest();
		
		req.addEventListener("load", function() {
			options.success(this.responseText);
		});
		req.open(options.method, options.url);
		req.send(options.data);
	}
	lightlib.get = function(url, data, callback) {
		var hasData = typeof data === "string";
		
		lightlib.ajax({
			method: "get",
			url: url,
			data: hasData ? data : null,
			success: hasData ? callback : data
		});
	}
	lightlib.post = function(url, data, callback) {
		var hasData = typeof data === "string";
		
		lightlib.ajax({
			method: "post",
			url: url,
			data: hasData ? data : null,
			success: hasData ? callback : data
		});
	}
	
	window.ll = lightlib;
	
	return lightlib;
}());
