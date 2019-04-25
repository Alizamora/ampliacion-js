const s = new (function () {
	const localBills = localStorage.getItem('bills');
  let instance = null;
  return class Singleton{
    constructor(){
      this.currentPage = 1;
      this.pagesAmount = null;
      this.bills = localBills ? JSON.parse(localBills) : [];
      this.export = [];
      this.selectedRow = null;
      return instance? instance : instance = this;
    }
  }
}());
