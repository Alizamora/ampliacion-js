(function() {
    const modalDelete = document.getElementById('delete');

    function deleteItem() {
        let parent = s.selectedRow.parentElement;
        let lis = parent.children;
        let index = [... lis].indexOf(s.selectedRow);
        parent.removeChild(s.selectedRow);
        s.bills.splice(index, 1);
    }

    M.subscribe('delete', deleteItem);
    M.subscribe('delete', RM.updateLocalStorage);
    
    modalDelete.addEventListener('click', M.publish('delete').topic);
}());