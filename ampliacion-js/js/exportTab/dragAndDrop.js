(function() {
	const panels = document.getElementsByClassName('dragAndDrop');
	const exports = document.getElementsByClassName('export');
	let billsArray;
	let exportArray;

  function createDrop(identifier) {
		let dragged;
		function switchObject(index, flag) {
			let targetObj;
			billsArray.forEach((obj) => {
				if (obj.index == index) targetObj = obj;
			});
			if(flag) {
				let objIndex = exportArray.indexOf(targetObj);
				billsArray.push(exportArray.splice(objIndex, 1)[0]);
			} else {
				let objIndex = billsArray.indexOf(targetObj);
				exportArray.push(billsArray.splice(objIndex, 1)[0]);
			}
			if(exportArray.length) {
				s.export = exportArray;
				exports[0].removeAttribute('disabled');
				exports[1].removeAttribute('disabled');
			} else {
				exports[0].setAttribute('disabled', '');
				exports[1].setAttribute('disabled', '');
			}
			console.clear();
			console.table(billsArray);
			console.table(exportArray);
		}
    function dragstart(e) {
      dragged = e.target;
    }
    function dragover(e) {
      e.preventDefault();
    }
    function drop(e) {
			let element = e.target;
			let parent = e.target.parentElement;
			function watch(target) {
				if (target.className === identifier) {
					target.appendChild(dragged);
					if(target == panels[0]) {
						switchObject(dragged.getAttribute('data-index'), true);
					} else if(target == panels[1]) {
						switchObject(dragged.getAttribute('data-index'), false);
					}
				}
			}

			watch(element);
			watch(parent);
    }

    document.addEventListener('dragstart', dragstart, false);
    document.addEventListener('dragover', dragover, false);
    document.addEventListener('drop', drop, false);
	}

	function updatePanels() {
		billsArray = [].concat(s.bills);
		exportArray = [];
		let billsPanel = panels[0];
		billsPanel.innerHTML = '';
		panels[1].innerHTML = '';
		s.bills.forEach((obj, i) => {
			let p = document.createElement('p');

			p.innerText = obj.name;
			p.setAttribute('data-index', obj.index);
			p.setAttribute('draggable', 'true');
			p.setAttribute('ondragstart', 'event.dataTransfer.setData("text/plain",null)');

			billsPanel.appendChild(p);
		});
	}

	updatePanels();

	M.subscribe('save', updatePanels);
	M.subscribe('delete', updatePanels);
	M.subscribe('saveEdit', updatePanels);

  createDrop(panels[0].className);
})();
