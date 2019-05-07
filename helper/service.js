import http from 'http';  
   class Helper {
    constructor(){

    }
    sum(a,b){
       return a+b;
    }
    fetchData(cb){
      let url='http://restructure-devsecure.loginradius.org/assets/js/vendor/lr/lrConstantMessages.js?V=hm166';
      http.get(url,function(responce){
        var body = '';
        responce.on('data', function(d) {
            body += d;
        });
        responce.on('end', function() {
          var lrConstantsMessages;
            body=body.replace('var','')
            eval(body.toString());
            cb(lrConstantsMessages);
        });
      })
    }
    fetchDataPromise(){
      let url='http://restructure-devsecure.loginradius.org/assets/js/vendor/lr/lrConstantMessages.js?V=hm166';
      return new Promise(function(resolve, reject){
        http.get(url,function(responce){
          var body = '';
          responce.on('data', function(d) {
              body += d;
          });
          responce.on('end', function() {
            var lrConstantsMessages;
              body=body.replace('var','')
              eval(body.toString());
              resolve(lrConstantsMessages);
          });
          responce.on('error',function(err){
          reject(err);
          })
        })
      })
       
    }
     async fetchDataAsync(){
       //this.fetchDataPromise();
         let url='http://restructure-devsecure.loginradius.org/assets/js/vendor/lr/lrConstantMessages.js?V=hm166';
         let result = await http.get(url);
        return result;
     }
  }
  export default Helper;