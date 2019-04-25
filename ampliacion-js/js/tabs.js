    
(function(d){
  let tabs = Array.prototype.slice.apply(d.querySelectorAll('.tab'));
  let panels = Array.prototype.slice.apply(d.querySelectorAll('.panel'));

  function manageTabs (e) {
    if(e.target.classList.contains('tab')){
      let i = tabs.indexOf(e.target);
      tabs.map( tab => tab.classList.remove('active'));
      tabs[i].classList.add('active');
      RM.change(i).tab();
    }
  }

  M.subscribe('changeTab', manageTabs);
  M.subscribe('changeTab', RM.changeComponents(true).components);

  d.getElementById('tabs').addEventListener('click', M.publish('changeTab').topic);
  panels[0].classList.add('active');
})(document);