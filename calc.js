/*
 * Implement all your JavaScript in this file!
 */

//  function displayNums(){
// 	let nums = $('button');
// 	let input = $('#display');
// 	let operand = [];
// 	let equation = [];
// 	let repeatEqual = [];
// 	let previous;
// 	let count = 0;

// 	$(document).on('click', 'button', function(e){
// 		e.preventDefault();
// 		let val = $(this).attr('value');
// 		let currentInput = input.val();
// 		let eqLength = equation.length;
// 		let opLength = operand.length;
// 		let numbers;
// 		var groups = {};
		
// 		if( $(this).attr('id') !== 'clearButton' ) {
// 			count++;

// 			if(previous === 'operator' && $(this).attr('value')){
// 				currentInput = '';
// 				input.val('');
// 			} 

// 			//Check if the button clicked is a number
// 			if($(this).attr('value')) {
// 				if(input.attr('disabled')) {
// 					input.attr('disabled', false);
// 					input.val(currentInput + val);
// 				} else {
// 					input.val(currentInput + val);
// 				}
// 				operand = [];
// 				previous = 'number';
// 				groups['group' + count] = val;
// 				equation.push(groups['group' + count]);

// 			} else {
// 				numbers = input.val();
// 				let operator;

// 				if( $(this).attr('id') !== 'equalsButton'){
// 					if(previous === 'operator') {
// 						equation.pop();
// 					} 

// 					if($(this).attr('id') === 'divideButton') {
// 						operator = '/';
// 					} else {
// 						operator = $(this).html();
// 					}
					
// 					groups['group' + count] = operator;
// 					operand.push(operator);
// 					equation.push(groups['group' + count]);
// 				}

// 				if( $(this).attr('id') == 'equalsButton' && previous !== 'operator') {
// 					if(previous !== 'equals') {
// 						var repeatOp = equation[eqLength-1],
// 							repeatNum = equation[eqLength - 2],
// 							result = equation.toString().replace( /,/g, "" ),
// 							result = eval(result);

// 						repeatEqual.push(repeatNum)
// 						repeatEqual.push(repeatOp);

// 						input.val(result);
// 						equation = [];
// 						equation.push(result);
// 					} else {
// 						var	currentDisplay = input.val(),
// 							newResult = repeatEqual,
// 							newResult = newResult.toString().replace( /,/g, "" ),
// 							newDisplay = eval(currentDisplay + newResult);
							
// 						input.val(newDisplay);
// 						equation = [];
// 						equation.push(result);
// 					}
// 					previous = 'equals';

// 				} else if(previous === 'operator') {
// 					previous = 'operator';
// 					input.val(currentInput);
// 				} else {
// 					previous = 'operator';
// 				}
// 			}
// 		} else {
// 			input.val('');
// 			equation = [];
// 			repeatEqual = [];
// 		}
// 	})
// }

// displayNums();




/*
 * Implement all your JavaScript in this file!
 */

 function displayNums1(){
	let nums = $('button');
	let input = $('#display');
	let equation = [];
	let repeatEqual = [];
	let previous;
	let count = 0;

	$(document).on('click', 'button', function(e){
		e.preventDefault();
		let val = $(this).attr('value');
		let currentInput = input.val();
		let eqLength = equation.length;
		let numbers;
		var groups = {};

		function buttonNum(){
			if(input.attr('disabled')) {
				input.attr('disabled', false);
				input.val(currentInput + val);
			} else {
				input.val(currentInput + val);
			}
			previous = 'number';
			groups['group' + count] = val;
			equation.push(groups['group' + count]);
		}

		function multipleEqual(){
			var	currentDisplay = input.val(),
				newResult = repeatEqual,
				newResult = newResult.toString().replace( /,/g, "" ),
				newDisplay = eval(currentDisplay + newResult).toFixed(1);

			input.val(newDisplay);
			equation = [];
		}

		function initialEqual(){
			var repeatOp = equation[eqLength-1],
				repeatNum = equation[eqLength - 2],
				result = equation.toString().replace( /,/g, "" ),
				result = eval(result).toFixed(1);

			repeatEqual.push(repeatNum)
			repeatEqual.push(repeatOp);

			showResult(result);
			equation.push(result);
		}

		function showResult(result){
			input.val(result);
			equation = [];
		}
		
		if( $(this).attr('id') !== 'clearButton' ) {
			count++;

			if( (previous === 'operator' || previous === 'equals') && $(this).attr('value')){ //Display current number is previous button was an operator and current button click is a number
				currentInput = '';
				input.val('');

				if(previous === 'equals') {
					equation = [];
				}
			} 
			
			if($(this).attr('value')) { //Check if the button clicked is a number
				buttonNum();

			} else { //If button clicked is an operator or equal sign
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
					equation.push(groups['group' + count]);
					currentOperation = equation.toString().replace( /,/g, "" );
					input.val(eval(currentOperation.slice(0,-1)));
				}

				if( $(this).attr('id') == 'equalsButton' && previous !== 'operator') {
					if(previous !== 'equals') {
						initialEqual();
					} else {
						multipleEqual();
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

displayNums1();



