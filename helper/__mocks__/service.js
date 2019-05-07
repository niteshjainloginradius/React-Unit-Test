const sleep = require('util').promisify(setTimeout);
export default class HelperMock {
  constructor() {
      this.fackData={
        accountLinkingSuccess: 'Account has been linked.'
      };
  }
  sum(a,b){
    return 2+1;
  }
  fetchData(cb){
      cb(this.fackData);
  }
  fetchDataPromise(){
      return new Promise(function(resolve, reject){
        if(1)  
        resolve(this.fackData);
        else
        reject('error');
      })
  }
   async fetchDataAsync(){
     console.log("fire");
     sleep(10000);
     return this.fackData;
   }
}
