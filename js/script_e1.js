console.log(window.location.search);
var urlParams = new URLSearchParams(window.location.search);
console.log(urlParams.get('id'));
var id = urlParams.get('id')
console.log(id);


jQuery.ajax({
  url: "https://rc2backend.herokuapp.com/api/getdatae1/",
  // url: "https://hookb.in/3OynwLEapdhKeKj2MjmJ",
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

    };
  })

function validateForm(){
  jQuery.ajax({
    url: "https://rc2backend.herokuapp.com/api/getupdate/",
    // url: "https://hookb.in/3OynwLEapdhKeKj2MjmJ",
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
      "page": document.getElementById("page").value
      // "lat": ,
      // "lon": ,

    })

  })
  .done(function(data, textStatus, jqXHR) {
      console.log("HTTP Request Succeeded: " + jqXHR.status);
      console.log(data); //Return Data
      if (jqXHR.status == 200) {

      //   // TODO: Check condition Comp_type
      //   // if Comp_type == 1 || Comp_type == 2
      //   //window.location = "p11searchp.html"
      //   // else if (Comp_type == 3) {
      //   //window.location = "p11searchp.html"
      //   // }

      //   //window.location = "p11searchp.html"

       window.location.replace("https://som501103.github.io/tech-step2.html?id="+id)

      };
    })


    return false;

}
