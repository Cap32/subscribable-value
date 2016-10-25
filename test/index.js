
const SubValue = require('../');
const assert = require('assert');

describe('SubValue', function () {
	it('initial value', function () {
		const initialValue = 0;
		const val = new SubValue(initialValue);
		assert(val.get() === initialValue);
	});

	it('set', function (done) {
		const val = new SubValue(0);
		val.subscribe((newValue) => {
			assert(newValue === 2333);
			done();
		});
		val.set(2333);
	});

	it('get', function () {
		const val = new SubValue(0);
		val.set(2333);
		assert(val.get() === 2333);
	});

	it('unsubscribe', function (done) {
		const val = new SubValue();
		const unsubscribe = val.subscribe(() => assert(false));
		unsubscribe();
		val.set(1);
		setTimeout(done, 1000);
	});

	it('unsubscribe all', function (done) {
		const val = new SubValue();
		val.subscribe(() => assert(false));
		val.subscribe(() => assert(false));
		val.unsubscribe();
		val.set();
		setTimeout(done, 1000);
	});
});
