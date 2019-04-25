(function () {
    const tableList = document.getElementById('tableList');
    const editDelete = document.getElementById('editDelete');

    function showEditDelete() {
        editDelete.removeAttribute('hide');
    }

    function highlight() {
        let parentChildren = s.selectedRow.parentElement.children;
        [... parentChildren].forEach((li) => {
            li.removeAttribute('highlight');
        });
        s.selectedRow.setAttribute('highlight', '');
    }

    function selectRow(e) {
        if (e.target.tagName === 'P'){
            s.selectedRow = e.target.parentElement;
        }
    }

    M.subscribe('select', selectRow);
    M.subscribe('select', highlight);
    M.subscribe('select', showEditDelete);

    tableList.addEventListener('click', M.publish('select').topic);
}());