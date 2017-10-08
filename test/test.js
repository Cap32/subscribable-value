
const SubValue = require('../');

describe('SubValue', function () {
	it('initial value', function () {
		const initialValue = 0;
		const val = new SubValue(initialValue);
		expect(val.get()).toBe(initialValue);
	});

	it('set', function (done) {
		const val = new SubValue(0);
		val.subscribe((newValue) => {
			expect(newValue).toBe(2333);
			done();
		});
		val.set(2333);
	});

	it('get', function () {
		const val = new SubValue(0);
		val.set(2333);
		expect(val.get()).toBe(2333);
	});

	it('unsubscribe', function () {
		const val = new SubValue();
		const handler = jest.fn();
		const unsubscribe = val.subscribe(handler);
		unsubscribe();
		val.set(1);
		expect(handler.mock.calls.length).toBe(0);
	});

	it('unsubscribe all', function () {
		const val = new SubValue();
		const handler = jest.fn();
		val.subscribe(handler);
		val.subscribe(handler);
		val.unsubscribe();
		val.set();
		expect(handler.mock.calls.length).toBe(0);
	});
});
