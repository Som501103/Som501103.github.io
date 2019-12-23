console.log(window.location.search);
var urlParams = new URLSearchParams(window.location.search);
console.log(urlParams.get('id'));
var id = urlParams.get('id')
console.log(id);


jQuery.ajax({
  url: "https://rc2backend.herokuapp.com/api/getdatae1/",
  // url: "https://hookb.in/3OynwLEapdhKeKj2MjmJ",
  // url: "https://e89704f8.ngrok.io/api/getdatae1/",
  type: "POST",
  headers: {
    "Content-Type": "application/json",
    "Authorization":"token 5a5410bf249b5ad186c80a015a8b93abaef18349",
  },
  dataType: 'json',
  data: JSON.stringify({
    "id" : id

  })

})
.done(function(data, textStatus, jqXHR) {
    console.log("HTTP Request Succeeded: " + jqXHR.status);
    console.log(data); //Return Data
    if (jqXHR.status == 200) {
      var id = data['id'];
      document.getElementById("id_record").value = id
      var datehappen = data['datehappen'];
      document.getElementById("datehappen").value = datehappen;
      var timehappen = data['timehappen'];
      document.getElementById("timehappen").value = timehappen;
      var daterestore = data['daterestore'];
      document.getElementById("daterestore").value = daterestore;
      var timerestore = data['timerestore'];
      document.getElementById("timerestore").value = timerestore;
      var electrician = data['electrician'];
      document.getElementById("electrician").value = electrician;
      var staffid = data['staffid'];
      document.getElementById("staffid").value = staffid;

      document.getElementById("image1").src = data['image1'];
      document.getElementById("image2").src = data['image2'];
      document.getElementById("image3").src = data['image3'];
      // var trip = data['trip'];
      // document.getElementById("trip").value = trip;
      console.log(staffid);
      console.log(electrician);
      // console.log(btoa(data['image1']));



    };
  })

function validateForm(){
  jQuery.ajax({
    // url: "https://e89704f8.ngrok.io/api/getupdate/",
    // url: "http://127.0.0.1:8000/api/getupdate/",
    url: "https://rc2backend.herokuapp.com/api/getupdate/",
    type: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization":"token 5a5410bf249b5ad186c80a015a8b93abaef18349",
    },
    dataType: 'json',
    data: JSON.stringify({
      "datehappen" : document.forms["form_e1"]["datehappen"].value,
      "timehappen" : document.forms["form_e1"]["timehappen"].value,
      "daterestore" : document.forms["form_e1"]["daterestore"].value,
      "timerestore" : document.forms["form_e1"]["timerestore"].value,
      "id" : id,
      "page": "e1",
      "image1": "image1:"+base64updte,
      "image2": "image2:"+base64updte2,
      "image3": "image3:"+base64updte3,
      "lat": lat,
      "lon": lng

    })

  })
  .done(function(data, textStatus, jqXHR) {
      console.log("HTTP Request Succeeded: " + jqXHR.status);
      console.log(data); //Return Data
      if (jqXHR.status == 200) {


       window.location.replace("https://som501103.github.io/tech-step2.html?id="+id)

      };
    })


    return false;

}
