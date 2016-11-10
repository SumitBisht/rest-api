module.exports = function(options) {
	var seneca = this;

	seneca.add({role:'process', cmd:'sum'}, sum);

	function sum(args, done){
		var numbers = args.numbers;

		var result = numbers.reduce( function(sum,no){ return sum+no; }, 0);

		done(null, {result: result});
	}
}
