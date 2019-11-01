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
      var electrician = data['electrician'];
      document.getElementById("electrician").value = electrician;
      var staffid = data['staffid'];
      document.getElementById("staffid").value = staffid;
      // var trip = data['trip'];
      // document.getElementById("trip").value = trip;
      console.log(staffid);
      console.log(electrician);

    };
  })

  // jQuery.ajax({
  //   url: "https://rc2backend.herokuapp.com/api/getpeaid/",
  //   // url: "https://hookb.in/3OynwLEapdhKeKj2MjmJ",
  //   type: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //     "Authorization":"token 5a5410bf249b5ad186c80a015a8b93abaef18349",
  //   },
  //   dataType: 'json',
  //   data: JSON.stringify({
  //     "electrician" : document.getElementById("electrician").value,
  //     "check": 'electrician'
  //     })
  //   })
  //   .done(function(data, textStatus, jqXHR) {
  //       console.log("HTTP Request Succeeded: " + jqXHR.status);
  //       console.log(data); //Return Data
  //       if (jqXHR.status == 200) {
  //           var staffname = data['obj']['FirstName'];
  //           var stafflastname = data['obj']['LastName'];
  //           var staffdept = data['obj']['DepartmentShort'];
  //           var stafftel = data['obj']['DepartmentShort'];
  //           var subregion = data['obj']['SubRegionCode'];
  //           var electrician1 = staffname + "  " + stafflastname;
  //
  //           console.log(staffname);
  //           localStorage.setItem("electrician", electrician1);
  //           localStorage.setItem("dept", staffdept);
  //
  //         }
  //       })

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


       window.location.replace("https://som501103.github.io/tech-step2.html?id="+id)

      };
    })


    return false;

}
