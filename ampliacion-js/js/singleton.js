const s = new (function() {
	const localBills = localStorage.getItem('bills');
  let instance = null;
  return class Singleton{
    constructor(){
			this.bills = localBills ? JSON.parse(localBills) : [];
      return instance? instance : instance = this;
    }
  }
}());
