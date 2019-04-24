    
(function(d){
  let tabs = Array.prototype.slice.apply(d.querySelectorAll('.tab'));
  let panels = Array.prototype.slice.apply(d.querySelectorAll('.panel'));
  d.getElementById('tabs').addEventListener('click', e =>{
    if(e.target.classList.contains('tab')){
      let i = tabs.indexOf(e.target);
      tabs.map( tab => tab.classList.remove('active'));
      tabs[i].classList.add('active');
      RM.changeTab(i);
    }
  });
  panels[0].classList.add('active');
})(document);