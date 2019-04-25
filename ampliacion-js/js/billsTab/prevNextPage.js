(function () {
    const previousPage = document.getElementById('previousPage');
    const nextPage = document.getElementById('nextPage');

    function page() {
        return {
            previous() {
                s.currentPage--;
                if(s.currentPage < 1) s.currentPage = s.pagesAmount;
            },
            next() {
                s.currentPage++;
                if(s.currentPage > s.pagesAmount) s.currentPage = 1;
            }
        }
    }

    M.subscribe('previous', page().previous);
    M.subscribe('next', page().next);

    previousPage.addEventListener('click', M.publish('previous').topic);
    nextPage.addEventListener('click', M.publish('next').topic);
}());