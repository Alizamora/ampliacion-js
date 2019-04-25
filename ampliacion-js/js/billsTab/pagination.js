(function () {
    let pagesAmount = document.querySelector('.pageNumber').children[1];
    let itemsPerPage = document.getElementById('itemsPerPage');

    function setPaginationGroups() {
        let paginationIndex = 0;
        let paginationBreak = parseInt(itemsPerPage.value);
        s.bills.forEach((obj, i) => {
            if(i % paginationBreak == 0) {
                paginationIndex++;
            }
            obj.group = paginationIndex;
            obj.hide = obj.group == s.currentPage;
        });
        pagesAmount.innerText = paginationIndex;
        s.pagesAmount = paginationIndex;
    }
    setPaginationGroups();
    RM.setHidePages();
    // M.subscribe('search', setPaginationGroups); 
    M.subscribe('save', setPaginationGroups);
    M.subscribe('save', RM.searchArray);
    M.subscribe('save', RM.setHidePages);
    M.subscribe('previous', RM.searchArray);
    M.subscribe('previous', RM.setHidePages);
    M.subscribe('next', RM.searchArray);
    M.subscribe('next', RM.setHidePages);
    M.subscribe('changeItemsPerPage', setPaginationGroups);
    M.subscribe('changeItemsPerPage', RM.searchArray);
    M.subscribe('changeItemsPerPage', RM.setHidePages);

    itemsPerPage.addEventListener('change', M.publish('changeItemsPerPage').topic);
}());
