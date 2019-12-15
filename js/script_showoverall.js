// var electrician;
// console.log(window.location.search);
var urlParams = new URLSearchParams(window.location.search);
// console.log(urlParams.get('id'));
var id = urlParams.get('id')
// console.log(id);

function link1(){
  window.location.href = "https://som501103.github.io/tech-step1.html?id="+id
}

function link2(){
  window.location.href = "https://som501103.github.io/tech-step2.html?id="+id
}

function link3(){
  window.location.href = "https://som501103.github.io/tech-step3.html?id="+id
}

function link4(){
  window.location.href = "https://som501103.github.io/tech-step4.html?id="+id
}
