'use strict';

var SubLite = require('subscribable-lite');

var _val = '_subscribable_value';
var _sub = '_subscribable_lite';

var SubValue = function SubValue(initialValue) {
	this[_sub] = new SubLite();
	this[_val] = initialValue;
};

Object.assign(SubValue.prototype, {
	get: function get() {
		return this[_val];
	},
	set: function set(newValue) {
		this[_val] = newValue;
		this[_sub].publish(newValue);
	},
	subscribe: function subscribe(fn) {
		return this[_sub].subscribe(fn);
	},
	unsubscribe: function unsubscribe(fn) {
		return this[_sub].unsubscribe(fn);
	}
});

module.exports = SubValue;
