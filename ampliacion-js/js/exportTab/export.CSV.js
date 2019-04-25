(function (){
    const exportCSV = document.getElementById('exportCSV');

    M.subscribe('exportCSV', RM.export('csv').toText);

    exportCSV.addEventListener('click', M.publish('exportCSV').topic);
}());