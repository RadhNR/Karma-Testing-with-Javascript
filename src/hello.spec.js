

describe('When i call  sayHell()', function(){
	it('Should return "Hello"', function() {
		expect(sayHello()).toBe('Hello');
	})
});

describe('When i call  add()', function(){
	it('Should return "4"', function() {
		expect(add(2,2)).toBe(4);
	})
});