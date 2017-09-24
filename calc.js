/*
 * Implement all your JavaScript in this file!
 */

//TO do:
// Case 6 - the second paragraph
// Case 6 - third paragraph

 function displayNums(){
	let nums = $('button');
	let input = $('#display');
	let operand = [];
	let equation = [];
	let repeatEqual = [];
	let previous;
	let count = 0;

	function buttonNum(){

	}

	$(document).on('click', 'button', function(e){
		e.preventDefault();
		let val = $(this).attr('value');
		let currentInput = input.val();
		let eqLength = equation.length;
		let opLength = operand.length;
		let numbers;
		var groups = {};
		
		if( $(this).attr('id') !== 'clearButton' ) {
			count++;

			if(previous === 'operator' && $(this).attr('value')){
				currentInput = '';
				input.val('');
			} 

			//Check if the button clicked is a number
			if($(this).attr('value')) {
				if(input.attr('disabled')) {
					input.attr('disabled', false);
					input.val(currentInput + val);
				} else {
					input.val(currentInput + val);
				}
				operand = [];
				previous = 'number';
				groups['group' + count] = val;
				equation.push(groups['group' + count]);

			} else {
				numbers = input.val();
				let operator;

				if( $(this).attr('id') !== 'equalsButton'){
					if(previous === 'operator') {
						equation.pop();
					} 

					if($(this).attr('id') === 'divideButton') {
						operator = '/';
					} else {
						operator = $(this).html();
					}
					
					groups['group' + count] = operator;
					operand.push(operator);
					equation.push(groups['group' + count]);
				}

				if( $(this).attr('id') == 'equalsButton' && previous !== 'operator') {
					if(previous !== 'equals') {
						var repeatOp = equation[eqLength-1],
							repeatNum = equation[eqLength - 2],
							result = equation.toString().replace( /,/g, "" ),
							result = eval(result);

						repeatEqual.push(repeatNum)
						repeatEqual.push(repeatOp);

						input.val(result);
						equation = [];
						equation.push(result);
					} else {
						var	currentDisplay = input.val(),
							newResult = repeatEqual,
							newResult = newResult.toString().replace( /,/g, "" ),
							newDisplay = eval(currentDisplay + newResult);
							
						input.val(newDisplay);
						equation = [];
						equation.push(result);
					}
					previous = 'equals';

				} else if(previous === 'operator') {
					previous = 'operator';
					input.val(currentInput);
				} else {
					previous = 'operator';
				}
			}
		} else {
			input.val('');
			equation = [];
			repeatEqual = [];
		}
	})
}

displayNums();




/*
 * Implement all your JavaScript in this file!
 */

//TO do:
// Case 6 - the second paragraph
// Case 6 - third paragraph

 function displayNums(){
	let nums = $('button');
	let input = $('#display');
	let operand = [];
	let equation = [];
	let repeatEqual = [];
	let previous;
	let count = 0;

	function buttonNum(){
		
	}

	$(document).on('click', 'button', function(e){
		e.preventDefault();
		let val = $(this).attr('value');
		let currentInput = input.val();
		let eqLength = equation.length;
		let opLength = operand.length;
		let numbers;
		var groups = {};
		
		if( $(this).attr('id') !== 'clearButton' ) {
			count++;

			if(previous === 'operator' && $(this).attr('value')){
				currentInput = '';
				input.val('');
			} 

			//Check if the button clicked is a number
			if($(this).attr('value')) {
				if(input.attr('disabled')) {
					input.attr('disabled', false);
					input.val(currentInput + val);
				} else {
					input.val(currentInput + val);
				}
				operand = [];
				previous = 'number';
				groups['group' + count] = val;
				equation.push(groups['group' + count]);

			} else {
				numbers = input.val();
				let operator;

				if( $(this).attr('id') !== 'equalsButton'){
					if(previous === 'operator') {
						equation.pop();
					} 

					if($(this).attr('id') === 'divideButton') {
						operator = '/';
					} else {
						operator = $(this).html();
					}
					
					groups['group' + count] = operator;
					operand.push(operator);
					equation.push(groups['group' + count]);
				}

				if( $(this).attr('id') == 'equalsButton' && previous !== 'operator') {
					if(previous !== 'equals') {
						var repeatOp = equation[eqLength-1],
							repeatNum = equation[eqLength - 2],
							result = equation.toString().replace( /,/g, "" ),
							result = eval(result);

						repeatEqual.push(repeatNum)
						repeatEqual.push(repeatOp);

						input.val(result);
						equation = [];
						equation.push(result);
					} else {
						var	currentDisplay = input.val(),
							newResult = repeatEqual,
							newResult = newResult.toString().replace( /,/g, "" ),
							newDisplay = eval(currentDisplay + newResult);
							
						input.val(newDisplay);
						equation = [];
						equation.push(result);
					}
					previous = 'equals';

				} else if(previous === 'operator') {
					previous = 'operator';
					input.val(currentInput);
				} else {
					previous = 'operator';
				}
			}
		} else {
			input.val('');
			equation = [];
			repeatEqual = [];
		}
	})
}

displayNums();



