
const SubLite = require('subscribable-lite');

const _val = '_subscribable_value';
const _sub = '_subscribable_lite';

const SubValue = function SubValue(initialValue) {
	this[_sub] = new SubLite();
	this[_val] = initialValue;
};

Object.assign(SubValue.prototype, {
	get() {
		return this[_val];
	},
	set(newValue) {
		this[_val] = newValue;
		this[_sub].publish(newValue);
	},
	subscribe(fn) {
		return this[_sub].subscribe(fn);
	},
	unsubscribe(fn) {
		return this[_sub].unsubscribe(fn);
	}
});

module.exports = SubValue;
