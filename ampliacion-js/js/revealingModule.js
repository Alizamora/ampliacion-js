const RM = (function() {
  function setHidePages() {
    let search = document.getElementById('search');
    let lis = document.querySelector('#tableList ul').children;
    let currentPage = document.querySelector('.pageNumber').children[0];
    currentPage.innerText = s.currentPage;
    s.bills.forEach((obj, i) => {
      if (obj.group == s.currentPage) {
        if (!obj.hide && search.value) lis[i].removeAttribute('hide');
        else lis[i].removeAttribute('hide');
      } else {
        lis[i].setAttribute('hide', '');
      }
    });
  }
  return {
    setHidePages: setHidePages,
    searchArray() {
      let search = document.getElementById('search');
      let value = new RegExp(search.value, 'gi');
      s.bills.forEach(obj => {
        obj.hide = obj.name.match(value) ? !(obj.group == s.currentPage) : true;
      });
    },
    change(i) {
      return {
        tab() {
          const panels = document.getElementsByClassName('panel');
          [...panels].forEach(panel => {
            panel.classList.remove('active');
          });
          panels[i].classList.add('active');
        }
      };
    },
    updateLocalStorage() {
      localStorage.setItem('bills', JSON.stringify(s.bills));
    },
    setRows(rows) {
      return {
        add() {
          let div = document.createElement('div');
          const names = ['Description', 'Quantity', 'Price'];
          names.forEach((name, i) => {
            let label = document.createElement('label');
            let input = document.createElement('input');
            label.setAttribute('for', name + i);
            label.innerText = name;
            label.appendChild(input);
            input.id = name + i;
            if (i > 0) {
              input.setAttribute('type', 'number');
              input.setAttribute('required', '');
            } else {
              input.setAttribute('type', 'text');
            }
            div.appendChild(label);
          });
          let remove = document.createElement('button');
          remove.innerText = 'Remove';
          div.appendChild(remove);
          rows.appendChild(div);
        }
      };
    },
    changeComponents(flag) {
      return {
        components() {
          const save = document.getElementById('save');
          const saveEdit = document.getElementById('saveEdit');
          const changeTitle = document.getElementById('change-title');
          if (flag) {
            save.removeAttribute('hide');
            saveEdit.setAttribute('hide', '');
            changeTitle.innerText = 'Create Bill';
          } else {
            save.setAttribute('hide', '');
            saveEdit.removeAttribute('hide');
            changeTitle.innerText = 'Edit Bill';
          }
        }
      };
    },
    showFound() {
      let noFound = document.getElementById('noFound');
      let hideNumbers = 0;
      noFound.setAttribute('hide', '');
      s.bills.forEach(obj => {
        if (obj.hide) {
          hideNumbers++;
        }
      });

      if (hideNumbers === s.bills.length) noFound.removeAttribute('hide');
    },
    setModal(modal) {
      return {
        hide() {
          modal.setAttribute('hide', '');
        },
        show() {
          modal.removeAttribute('hide');
        }
      };
    },
    toCSV(arrayWithObjects) {
      let firstLine = arrayWithObjects[0];
      let lines;
      firstLine = Object.keys(firstLine);
      lines = firstLine;
      arrayWithObjects.forEach(obj => {
        lines += `\r\n${Object.keys(obj).map(key => obj[key])}`;
      });
      return lines;
    }
  };
})();
