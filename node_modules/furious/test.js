var furious = require('./index.js');
var assert = require('assert');

describe('furious', function () {
	it('require should return an object' ,function(){
		assert.notEqual(furious , undefined );
		assert.notEqual(furious , null );
		assert.equal( typeof furious , 'object' );
	});
	describe('.command()', function () {
		it('should return undefined on 1 args', function () {
			var command = furious.command('test1');
			assert.equal(command, undefined);
		});
		it('should return undefined on 2 args', function () {
			var command = furious.command('test2');
			assert.equal(command, undefined);
		});
		it('should return an object on 3 args', function () {
			var command = furious.command('test3', 'description', function () { });
			assert.notEqual(command, null);
			assert.notEqual(command, undefined);
		});
	});

	describe('.option()', function () {
		var option;
		before(function () {
			//try to set up a sample option
			option = furious.command('test4', 'description', function () { }).option('option1', '', function () { });
			console.log(option);
		});
		it('setupOption ', function () {

		});
	});
});