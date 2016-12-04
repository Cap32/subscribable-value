
const SubLite = require('subscribable-lite');
const assign = require('object-assign');

const _val = '_subscribable_value';
const _sub = '_subscribable_lite';

const SubValue = function SubValue(initialValue) {
	this[_sub] = new SubLite();
	this[_val] = initialValue;
};

assign(SubValue.prototype, {
	get() {
		return this[_val];
	},
	set(nextValue) {
		const prevValue = this[_val];
		this[_val] = nextValue;
		this[_sub].publish(nextValue, prevValue);
	},
	subscribe(fn) {
		return this[_sub].subscribe(fn);
	},
	unsubscribe(fn) {
		return this[_sub].unsubscribe(fn);
	}
});

module.exports = SubValue;
