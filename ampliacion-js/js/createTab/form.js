(function () {
	const name = document.getElementById('name');
	const date = document.getElementById('date');
	const email = document.getElementById('email');
	const total = document.getElementById('total');
	const reset = document.getElementById('reset');
	const save = document.getElementById('save');
	const form = document.getElementById('bills-form');
	const rows = document.getElementById('rows-form');

	function resetInputs() {
		let inputs = form.parentElement.querySelectorAll('input[type="text"], input[type="number"]');
		inputs.forEach((input) => {
			input.value = '';
		})
	}

	function saveForm() {
		let newBill = {
			name: name.value,
			date: date.value,
			email: email.value,
			total: total.innerText,
			rows: []
		};
		console.log(newBill);

		let children = rows.querySelectorAll('div');
		children.forEach((child, i) => {
			let obj = {
				description: child.querySelectorAll('input')[0].value,
				quantity: child.querySelectorAll('input')[1].value,
				price: child.querySelectorAll('input')[2].value
			};
			newBill.rows.push(obj);
		});
		s.bills.push(newBill);
		localStorage.setItem('bills', JSON.stringify(s.bills));
	}

	M.subscribe('reset', resetInputs);
	M.subscribe('save', saveForm);

	reset.addEventListener('click', M.publish('reset').topic);
	save.addEventListener('click', M.publish('save').topic);

}());