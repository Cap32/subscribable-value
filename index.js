
const SubLite = require('subscribable-lite');

const _val = '_subscribable_value';
const _sub = '_subscribable_lite';

const SubValue = function SubValue(initialValue) {
	this[_sub] = new SubLite();
	this[_val] = initialValue;
};

SubValue.prototype.get = function get() {
	return this[_val];
};

SubValue.prototype.set = function set(nextValue) {
	const prevValue = this[_val];
	this[_val] = nextValue;
	this[_sub].publish(nextValue, prevValue);
	return nextValue;
};

SubValue.prototype.subscribe = function subscribe(fn) {
	return this[_sub].subscribe(fn);
};

SubValue.prototype.unsubscribe = function unsubscribe(fn) {
	return this[_sub].unsubscribe(fn);
};

module.exports = SubValue;
