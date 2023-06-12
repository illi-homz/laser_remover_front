// export const onPhoneInput = function (value, key, selectionStart) {
// 	if (!value) return '';

// 	let input = value;
// 	let inputNumbersValue = getInputNumbersValue(input);
// 	let formattedInputValue = '';

// 	if (!inputNumbersValue) return '';

// 	if (
// 		input.length - 1 !== selectionStart ||
// 		(selectionStart === 1 && input.length - 2 === 0)
// 	) {
// 		const workKeys = ['Backspace'];
// 		if (workKeys.includes(key)) {
// 			return input;
// 		}
// 		if (key && /\D/g.test(key)) {
// 			return inputNumbersValue;
// 		}
// 	}

// 	if (['7', '8', '9'].indexOf(inputNumbersValue[0]) > -1) {
// 		if (inputNumbersValue[0] === '9')
// 			inputNumbersValue = '7' + inputNumbersValue;

// 		// let firstSymbols = inputNumbersValue[0] === '8' ? '8' : '+7';
// 		let firstSymbols = inputNumbersValue[0] === '8' ? '+7' : '+7';

// 		formattedInputValue = input = firstSymbols + ' ';

// 		if (inputNumbersValue.length > 0)
// 			formattedInputValue += '(' + inputNumbersValue.substring(1, 4);

// 		if (inputNumbersValue.length >= 4)
// 			formattedInputValue += ') ' + inputNumbersValue.substring(4, 7);

// 		if (inputNumbersValue.length >= 7)
// 			formattedInputValue += '-' + inputNumbersValue.substring(7, 9);

// 		if (inputNumbersValue.length >= 9)
// 			formattedInputValue += '-' + inputNumbersValue.substring(9, 11);
// 	} else formattedInputValue = '+' + inputNumbersValue;

// 	return formattedInputValue;
// };

export const onPhonePaste = function (e) {
	const input = e.target
	const inputNumbersValue = getInputNumbersValue(input);
	var pasted = e.clipboardData || window.clipboardData;

	if (pasted) {
		var pastedText = pasted.getData('Text');
		if (/\D/g.test(pastedText)) {
			// Attempt to paste non-numeric symbol — remove all non-numeric symbols,
			// formatting will be in onPhoneInput handler
			input.value = inputNumbersValue;
			return;
		}
	}
}

export const onPhoneInput = function (e) {
	const input = e.target
	const inputNumbersValue = getInputNumbersValue(input)
	const selectionStart = input.selectionStart
	let formattedInputValue = "";

	if (!inputNumbersValue) {
		return "";
	}

	if (input.value.length != selectionStart) {
		// Editing in the middle of input, not last symbol
		if (e.data && /\D/g.test(e.data)) {
			// Attempt to input non-numeric symbol
			return inputNumbersValue;
		}
		return inputNumbersValue;
	}

	if (["7", "8", "9"].indexOf(inputNumbersValue[0]) > -1) {
		if (inputNumbersValue[0] == "9") inputNumbersValue = "7" + inputNumbersValue;
		var firstSymbols = (inputNumbersValue[0] == "8") ? "8" : "+7";
		formattedInputValue = input.value = firstSymbols + " ";
		if (inputNumbersValue.length > 1) {
			formattedInputValue += '(' + inputNumbersValue.substring(1, 4);
		}
		if (inputNumbersValue.length >= 5) {
			formattedInputValue += ') ' + inputNumbersValue.substring(4, 7);
		}
		if (inputNumbersValue.length >= 8) {
			formattedInputValue += '-' + inputNumbersValue.substring(7, 9);
		}
		if (inputNumbersValue.length >= 10) {
			formattedInputValue += '-' + inputNumbersValue.substring(9, 11);
		}
	} else {
		formattedInputValue = '+' + inputNumbersValue.substring(0, 16);
	}
	
	return formattedInputValue;
}

export const onPhoneKeyDown = function (e) {
	const input = e.target
	// Clear input after remove last symbol
	var inputValue = input.value?.replace(/\D/g, '');
	if (e.keyCode == 8 && inputValue.length == 1) {
		return "";
	}

	return e.target.value
}

// функция очищаяет строку от всего кроме чисел
const getInputNumbersValue = input => input.value?.replace(/\D/g, '');

// функция проверяет и возращает максимальную длину поля ввода
export const checkLength = function (input) {
	if (input.indexOf('+7') !== -1) return 18;
	else return 17;
};

export const phonePattern = "+7 (***) ***-**-**";
