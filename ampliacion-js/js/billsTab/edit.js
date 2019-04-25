(function() {
    const editBtn = document.getElementById('editDelete').children[1];
	const name = document.getElementById('name');
	const date = document.getElementById('date');
	const email = document.getElementById('email');
    const total = document.getElementById('total');
    const saveEdit = document.getElementById('saveEdit');
    const rows = document.getElementById('rows-form');
    
    function updateInputValues() {
        const parent = s.selectedRow.parentElement;
        const lis = parent.children;
        let index = [... lis].indexOf(s.selectedRow);
        name.value = s.bills[index].name;
        date.value = s.bills[index].date;
        email.value = s.bills[index].email;
        total.innerText = s.bills[index].total;
    }

    function updateRowsValues() {
        const parent = s.selectedRow.parentElement;
        const lis = parent.children;
        let index = [... lis].indexOf(s.selectedRow);
        let rowsArray = s.bills[index].rows;
        let rowDiv;
        let inputs;

        rows.innerHTML = '';
        rowsArray.forEach((row, i) => {
            RM.setRows(rows).add();

            rowDiv = rows.children[i];
            inputs = rowDiv.querySelectorAll('input');
            
            inputs[0].value = row.description;
            inputs[1].value = row.quantity;
            inputs[2].value = row.price;
        });
    }

    function editObject() {
        const parent = s.selectedRow.parentElement;
        const lis = parent.children;
        let index = [... lis].indexOf(s.selectedRow);

        s.bills[index].name = name.value;
        s.bills[index].date = date.value;
        s.bills[index].email = email.value;
        s.bills[index].total = total.innerText;
        
        s.bills[index].rows;
    }

    M.subscribe('edit', RM.change(1).tab);
    M.subscribe('edit', updateInputValues);
    M.subscribe('edit', updateRowsValues);
    M.subscribe('edit', RM.changeComponents(false).components);
    M.subscribe('saveEdit', editObject);
    M.subscribe('saveEdit', RM.change(0).tab);
    M.subscribe('saveEdit', RM.updateLocalStorage);
    M.subscribe('saveEdit', RM.changeComponents(true).components);

    editBtn.addEventListener('click', M.publish('edit').topic);
    saveEdit.addEventListener('click', M.publish('saveEdit').topic);
}());