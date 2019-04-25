(function(){
    M.subscribe('search', RM.searchArray);

    search.addEventListener('input', M.publish('search').topic);
}());