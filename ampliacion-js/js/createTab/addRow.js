(function () {
	const rows = document.getElementById('rows-form');	
	const total = document.getElementById('total');
	const addRow = document.getElementById('add-row');

	function updateTotal() {
		let rowsTotal = 0;
		const divs = rows.querySelectorAll('div');
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

	M.subscribe('rows', RM.setRows(rows).add);
	M.subscribe('save', updateTotal);
	M.subscribe('update', updateTotal);
	M.subscribe('remove', removeRow);

	window.addEventListener('keyup', M.publish('update').topic);
	rows.addEventListener('click', M.publish('remove').topic);
	addRow.addEventListener('click', M.publish('rows').topic);
}());
