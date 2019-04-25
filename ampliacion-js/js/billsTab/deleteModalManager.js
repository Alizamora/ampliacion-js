(function () {
    const modal = document.querySelector('.modal');
    const modalCancel = document.getElementById('cancel');
    const modalName = document.getElementById('modalName');
    const modalTotal = document.getElementById('modalTotal');
    const deleteBtn = document.getElementById('editDelete').children[0];

    function updateModal(){
        let name = s.selectedRow.children[0].innerText;
        let total = s.selectedRow.children[2].innerText;

        modalName.innerText = name;
        modalTotal.innerText = total;
    }

    RM.setModal(modal).hide();

    M.subscribe('select', updateModal);
    M.subscribe('cancel', RM.setModal(modal).hide);
    M.subscribe('delete', RM.setModal(modal).hide);
    M.subscribe('edit', RM.setModal(modal).hide);
    M.subscribe('showModal', RM.setModal(modal).show);

    deleteBtn.addEventListener('click', M.publish('showModal').topic);
    modalCancel.addEventListener('click', M.publish('cancel').topic);
}());