var electrician;
console.log(window.location.search);
var urlParams = new URLSearchParams(window.location.search);
console.log(urlParams.get('id'));
var id = urlParams.get('id')
console.log(id);
document.getElementById("electrician").innerHTML = localStorage.getItem("electrician");
document.getElementById("dept").innerHTML = localStorage.getItem("dept");



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
    // console.log(data); //Return Data
    if (jqXHR.status == 200) {
      var id = data['id'];
      document.getElementById("id_record").value = id

      var phase_A = data['Phase_A'];
      document.getElementById("load_A").value = phase_A;

      var phase_B = data['Phase_B'];
      document.getElementById("load_B").value = phase_B;

      var phase_C = data['Phase_C'];
      document.getElementById("load_C").value = phase_C;

      var phase_G = data['Phase_G'];
      document.getElementById("load_G").value = phase_G;

      var zone = data['zone'];
      document.getElementById("Zone").value = zone;

      var distance = data['distance'];
      document.getElementById("distance").value = distance;

      var load = data['load'];
      document.getElementById("load").value = load;

      var staffname = data['obj']['FirstName'];
      var stafflastname = data['obj']['LastName'];
      var staffdept = data['obj']['DepartmentShort'];
      var stafftel = data['obj']['DepartmentShort'];

      // var pea = data['pea']['label'];
      var electrician1 = staffname + "  " + stafflastname;
      document.getElementById("electrician").innerHTML = electrician1;
      document.getElementById("dept").innerHTML = staffdept;
      // console.log(staffname);
      localStorage.setItem("electrician", electrician1);
      localStorage.setItem("dept", staffdept);

    };
  })

function getDate(electrician){
  console.log(electrician);
  console.log(typeof(electrician));
  setTimeout(function(){
    var electrician = document.getElementById("electrician").innerHTML;
    console.log(electrician);
    var staffid = {"staffid" : electrician};
    jQuery.ajax({
      url: "https://rc2backend.herokuapp.com/api/getpeaid/",
      // url: "https://hookb.in/3OynwLEapdhKeKj2MjmJ",
      type: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization":"token 5a5410bf249b5ad186c80a015a8b93abaef18349",
      },
      dataType: 'json',
      data: JSON.stringify(staffid)
    })
    .done(function(data, textStatus, jqXHR) {
        console.log("HTTP Request Succeeded: " + jqXHR.status);
        console.log(data); //Return Data
        if (jqXHR.status == 200) {
          var staffname = data['obj']['FirstName'];
          var stafflastname = data['obj']['LastName'];
          var staffdept = data['obj']['DepartmentShort'];
          var stafftel = data['obj']['DepartmentShort'];
          var subregion = data['obj']['SubRegionCode'];
          var region = data['region']['label'];
          var pea = data['pea']['label'];

        };
      })

  },2000)


}


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
      "id" : id,
      "load_A" : document.forms["form_e3"]["load_A"].value,
      "load_B" : document.forms["form_e3"]["load_B"].value,
      "load_C" : document.forms["form_e3"]["load_C"].value,
      "load_G" : document.forms["form_e3"]["load_G"].value,
      "Zone": document.forms["form_e3"]["Zone"].value,
      "distance": document.forms["form_e3"]["distance"].value,
      "load": document.forms["form_e3"]["load"].value,
      "page": "e3"

    })

  })
  .done(function(data, textStatus, jqXHR) {
      console.log("HTTP Request Succeeded: " + jqXHR.status);
      console.log(data); //Return Data
      if (jqXHR.status == 200) {

       window.location.replace("https://som501103.github.io/tech-step4.html?id="+id)

      };
    })


    return false;

}
