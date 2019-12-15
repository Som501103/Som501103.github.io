// var electrician;
// console.log(window.location.search);
var urlParams = new URLSearchParams(window.location.search);
// console.log(urlParams.get('id'));
var id = urlParams.get('id')
// console.log(id);
document.getElementById("id").value = id;
