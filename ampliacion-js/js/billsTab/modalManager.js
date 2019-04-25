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

    const setModal = new (function() {
        return class Modal {
            hide () {
                modal.setAttribute('hide', '');
            }
            show () {
                modal.removeAttribute('hide', '');
            }
        }
    } ());

    setModal.hide();

    M.subscribe('select', updateModal);
    M.subscribe('cancel', setModal.hide);
    M.subscribe('delete', setModal.hide);
    M.subscribe('edit', setModal.hide);
    M.subscribe('showModal', setModal.show);

    deleteBtn.addEventListener('click', M.publish('showModal').topic);
    modalCancel.addEventListener('click', M.publish('cancel').topic);
}());