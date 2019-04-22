(function() {
    const rows = document.getElementById('rows-form');
    const addRow = document.getElementById('add-row');

    function addRows(){
        let div = document.createElement('div');
        let description = document.createElement('input');
        let quantity = document.createElement('input');
        let price = document.createElement('input');

        div.appendChild(description);
        div.appendChild(quantity);
        div.appendChild(price);
        rows.appendChild(div);

    }

    addRow.addEventListener('click', addRows);
}());