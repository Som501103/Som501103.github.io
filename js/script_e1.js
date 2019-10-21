let url = location.href;
let searchParams = new URLSearchParams(url.search);
console.log(searchParams.get('id'));
