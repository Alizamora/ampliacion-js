(function () {
	const tableList = document.getElementById('tableList');
	const MR = new class manageRows {
		compose(array) {
			return {
				table() {
					tableList.innerHTML = '';
					let ul = document.createElement('ul');
					array.forEach((obj) => {
						let li = document.createElement('li');
						let name = document.createElement('p');
						let date = document.createElement('p');
						let total = document.createElement('p');

						if(obj.hide) li.setAttribute('hide', '');
						else li.removeAttribute('hide');

						name.innerText = obj.name;
						date.innerText = obj.date;
						total.innerText = obj.total;

						li.appendChild(name);
						li.appendChild(date);
						li.appendChild(total);
						ul.appendChild(li);
					});
					tableList.appendChild(ul);
				}
			}
		}
	}
	MR.compose(s.bills).table();
	M.subscribe('save', MR.compose(s.bills).table);
	M.subscribe('search', MR.compose(s.bills).table);
	M.subscribe('saveEdit', MR.compose(s.bills).table);
}());