const RM = (function () {
    return {
        changeTab(i) {
            const panels = document.getElementsByClassName('panel');
            [... panels].forEach((panel) => {
                panel.classList.remove('active');              
            });
            panels[i].classList.add('active');
        },
    };
}());
