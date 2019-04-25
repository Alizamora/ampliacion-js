const s = new (function () {
	const localBills = localStorage.getItem('bills');
  let instance = null;
  return class Singleton{
    constructor(){
      this.currentPage = 1;
      this.pagesAmount = null;
      this.bills = localBills ? JSON.parse(localBills) : [];
      this.selectedRow = null;
      this.export = [];
      return instance? instance : instance = this;
    }
  }
}());
