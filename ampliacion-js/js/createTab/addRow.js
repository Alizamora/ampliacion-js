(function () {
	const rows = document.getElementById('rows-form');	
	const total = document.getElementById('total');
	const addRow = document.getElementById('add-row');

	function addRows() {
		let div = document.createElement('div');
		const names = ['Description', 'Quantity', 'Price'];
		names.forEach((name, i) => {
			let label = document.createElement('label');
			let input = document.createElement('input');
			label.setAttribute('for', name + i);
			label.innerText = name;
			label.appendChild(input);
			input.id = name + i;
			if(i > 0) {
				input.setAttribute('type', 'number');
				input.setAttribute('required', '');
			} else {
				input.setAttribute('type', 'text');
			}
			div.appendChild(label);
		});
		let remove = document.createElement('button');
		remove.innerText = 'Remove';
		div.appendChild(remove);
		rows.appendChild(div);
	}

	function updateTotal() {
		let rowsTotal = 0;
		const divs = rows.querySelectorAll('div');
		console.log(divs)
		divs.forEach((row) => {
			const inputs = row.querySelectorAll('input[type="number"]');
			rowsTotal += inputs[0].value * inputs[1].value;
		});
		total.innerText = rowsTotal;
	}

	function removeRow(e) {
		if(e.target.tagName === 'BUTTON') {
			let parent = e.target.parentElement;
			let grandParent = parent.parentElement;
			grandParent.removeChild(parent);
		}
	}

	M.subscribe('rows', addRows);
	M.subscribe('save', updateTotal);
	M.subscribe('remove', removeRow);

	rows.addEventListener('click', M.publish('remove').topic);
	addRow.addEventListener('click', M.publish('rows').topic);
}());
