import Helper from '../helper/service'; 
const jest =  require('jest-mock');
//const sum = require('../helper/sum');
// Ref https://jestjs.io/docs/en/getting-started
var helper = new Helper();

// test('adds 1 + 2 to equal 3', () => {
//   expect(helper.sum(2, 1)).toBe(3);
// });

// test('adds 2 + 2 to equal 4', () => {
//     expect(helper.sum(2, 2)).toBe(4);
// });
// Object Assignment
test('object assignment', () => {
  const data = {one: 1};
  data['two'] = 2;
  expect(data).toEqual({one: 1, two: 2});
});
// Null Opertions
test('null', () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});
// Math Opertions
test('two plus two', () => {
  const value = 2 + 2;
  expect(value).toBeGreaterThan(3);
  expect(value).toBeGreaterThanOrEqual(3.5);
  expect(value).toBeLessThan(5);
  expect(value).toBeLessThanOrEqual(4.5);

  // toBe and toEqual are equivalent for numbers
  expect(value).toBe(4);
  expect(value).toEqual(4);
});
// String Match
test('there is no I in team', () => {
  expect('team').not.toMatch(/I/);
});
test('but there is a "stop" in Christoph', () => {
  expect('Christoph').toMatch(/stop/);
});



 test('the data is peanut butter', () => {
   function callback(data) {
     expect(data.accountLinkingSuccess).toBe('Account has been linked.');
   }
   helper.fetchData(callback);
 });
// // Issue Resolve-: 
  test('the data is peanut butter', done => {
   function callback(data) {
     expect(data.accountLinkingSuccess).toBe('Account has been linked.');
     done();
   }
   helper.fetchData(callback);
  });
 //Promise
  test('the data is peanut butter', () => {
     helper.fetchDataPromise().then(data => {
     expect(data.accountLinkingSuccess).toBe('Account has been linked.');
    });
 });
//Mock Function
//jest.mock('../helper/__mock__/HelperMock') // declare location of file which function need to create mock
// done-: due to ayncs call we need to tell test done so we use it as done()=> callback
//test('featching data async call mocking',()=>{
      
//})


// Async Call manual mock
jest.mock('./../helper/service',()=> require.requireActual("./../helper/__mocks__/service"));
test('sum', ()=>{
  expect(helper.sum(4, 2)).toBe(3);
});
test('fetchDataAsync',()=>{
      return helper.fetchDataAsync().then(data=>{
        expect(data.accountLinkingSuccess).toBe('Account has been linked.')
      });
})

//inbuild mock
test('xyz mock',function(){
  let mymock= jest.fn();
  mymock.mockReturnValueOnce(23);
  expect(mymock()).toBe(23);
})
