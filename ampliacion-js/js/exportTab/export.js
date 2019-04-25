(function (){
    const exportCSV = document.getElementById('exportCSV');
    const exportJSON = document.getElementById('exportJSON');
    const exportModal = document.getElementById('exportModal');
    const exportTitle = document.getElementById('exportTitle');
    const exportInfo = document.getElementById('exportInfo');
    const close = document.getElementById('close');
	
	function exportFormat (format) {
        const obj = {
                csv() {
                    exportTitle.innerText = 'CSV Export';
                    exportInfo.innerText = RM.toCSV(s.export);
                },
                json() {
                    exportTitle.innerText = 'JSON Export';
                    exportInfo.innerText = JSON.stringify(s.export, null, 2);
                }
        };
        return {
                toText: obj[format]
        }
    }

    M.subscribe('exportJSON', exportFormat('json').toText);
    M.subscribe('exportCSV', exportFormat('csv').toText);
    M.subscribe('exportJSON', RM.setModal(exportModal).show);
    M.subscribe('exportCSV', RM.setModal(exportModal).show);
    M.subscribe('closeExportModal', RM.setModal(exportModal).hide);

    exportJSON.addEventListener('click', M.publish('exportJSON').topic);
    exportCSV.addEventListener('click', M.publish('exportCSV').topic);
    close.addEventListener('click', M.publish('closeExportModal').topic);
}());