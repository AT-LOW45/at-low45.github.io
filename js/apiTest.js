let api = 'https://sweetfloralhome-admin.herokuapp.com/api/v1/products/1';
// let obj = JSON.parse(api)

const jsonDiv = document.getElementById('testJson')

jsonDiv.textContent = api

fetch('https://sweetfloralhome-admin.herokuapp.com/api/v1/products/1')
  .then(function(response) {
    return response.json();
}).then(function(json) {
    console.log('parsed json', json);
}).catch(function(ex) {
    console.log('parsing failed', ex);
})
