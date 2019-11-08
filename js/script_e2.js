var electrician;
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

      var fedderwork = data['fedderwork'];
      document.getElementById("fedderwork").value = fedderwork;

      var equipcode = data['equipcode'];
      document.getElementById("equipcode").value = equipcode;

      var equipstrat = data['equipstrat'];
      document.getElementById("equipstrat").value = equipstrat;

      var equipend = data['equipend'];
      document.getElementById("equipend").value = equipend;

      var relay = data['relay'];
      document.getElementById("relay").value = relay;

      var fedder = data['fedder_all']['label'];
       document.getElementById("fedder").value = fedder;

      var equipcode = data['comID2_all']['label'];
      document.getElementById("equipcode").value = equipcode;

      var equipend = data['comID2_all']['label'];
      document.getElementById("equipend").value = equipend;

      var staffname = data['obj']['FirstName'];
      var stafflastname = data['obj']['LastName'];
      var staffdept = data['obj']['DepartmentShort'];
      var stafftel = data['obj']['DepartmentShort'];
      var subregion = data['obj']['SubRegionCode'];
      var region = data['region']['label'];
      var maincause = data['maincause'];
      var course = data['course'];
      var weather = data['weather'];
      var temp = data['temp'];
      var sitearea = data['sitearea'];
      var detail = data['detail'];
      // var pea = data['pea']['label'];
      var electrician1 = staffname + "  " + stafflastname;
      document.getElementById("electrician").innerHTML = electrician1;
      localStorage.setItem("electrician", electrician1);
      document.getElementById("dept").innerHTML = staffdept;
      localStorage.setItem("dept", staffdept);
      localStorage.setItem("maincause",maincause);
      localStorage.setItem("course",course);
      localStorage.setItem("weather",weather);
      localStorage.setItem("temp",temp);
      localStorage.setItem("sitearea",sitearea);
      localStorage.setItem("detail",detail);
      /////////////////////////////////////////
      var i, x,j,y = "";
      for (i in region) {
                    x += "<option value=\""+region[i][0]+"\">"+region[i][1]+"</option>";
                  }
      $('#peacode').append(x);
      var peacode = data['peacode'];
      document.getElementById("peacode").value = peacode;
      ////////////////////////////////////////
      $("#fedder").empty();
      var i,y = "";
      for (i in fedder){
        y += "<option value=\""+fedder[i]+"\">"+fedder[i]+"</option>";
      }
      $('#fedder').append(y);
      ////////////////////////////
      $("#equipstrat").empty();
      $("#equipcode").empty();
      var i,y = "";
      for (i in equipcode){
        y += "<option value=\""+equipcode[i]+"\">"+equipcode[i]+"</option>";
      }
      $('#equipstrat').append(y);
      $('#equipcode').append(y);
      var equipcode = data['equipcode'];
      document.getElementById("equipcode").value = equipcode;
      var equipstrat = data['equipstrat'];
      document.getElementById("equipstrat").value = equipstrat;

      $("#equipend").empty();
      var i,y = "";
      for (i in equipend){
        y += "<option value=\""+equipend[i]+"\">"+equipend[i]+"</option>";
      } y += "<option value=\"end\">End</option>";
      $("#equipend").append(y);
      var equipend = data['equipend'];
      document.getElementById("equipend").value = equipend;
      ///////////////////////////
      console.log(staffname);
      localStorage.setItem("electrician", electrician1);
      localStorage.setItem("dept", staffdept);


      ///////////////////////////////////////
      var trip = data['trip'];
      document.getElementById("trip").value = trip;
      // if(trip=="EGAT"){
      //   document.forms['form_e2'].elements['trip'][0].checked;
      // }else{
      //   document.forms['form_e2'].elements['trip'][1].checked;
      // }


      // var triptype = document.getElementById("trip");
      // var trip = "";
      // var i;
      // for (i = 0; i < triptype.length; i++) {
      //   if (triptype[i].checked) {
      //     trip = trip + triptype[i].value;
      //     console.log(trip);
      //   }
      // }
      // document.getElementById("trip").value = trip;
      // var i, x = "";
      // for (i in region) {
      //               x += "<option value=\""+region[i][0]+"\">"+region[i][1]+"</option>";
      //               console.log(x);
      //             }
      // // $('#peacode').empty();
      // $('#peacode').append(x);

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

function getFedder(){
  jQuery.ajax({
    url: "https://rc2backend.herokuapp.com/api/scada/",
    // url: "https://hookb.in/3OynwLEapdhKeKj2MjmJ",
    type: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization":"token 5a5410bf249b5ad186c80a015a8b93abaef18349",
    },
    dataType: 'json',
    data: JSON.stringify({
      "peacode" : document.getElementById("peacode").value

    })

  })
  .done(function(data, textStatus, jqXHR) {
      console.log("HTTP Request Succeeded: " + jqXHR.status);
      console.log(data); //Return Data
      if (jqXHR.status == 200) {

        console.log(peacode);
         var fedder = data['fedder']['label'];
         document.getElementById("fedder").value = fedder;
         console.log(fedder);
         $("#fedder").empty();
         var i,y = "";
         for (i in fedder){
           y += "<option value=\""+fedder[i]+"\">"+fedder[i]+"</option>";
         }

         $('#fedder').append(y);
         // var fedder_all = data['fedder_all']['label'];
         // for (j in fedder_all) {
         //               y += "<option value=\""+fedder_all[j]+"\">"+fedder_all[j]+"</option>";
         //             }
         // $('#fedder').append(y);
         // var fedder = data['fedder'];

      };
    })


  ///////////////////////////////////////

}

function ComIDfilter(){
  jQuery.ajax({
    url: "https://rc2backend.herokuapp.com/api/equipeodefilter/",
    // url: "https://hookb.in/3OynwLEapdhKeKj2MjmJ",
    type: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization":"token 5a5410bf249b5ad186c80a015a8b93abaef18349",
    },
    dataType: 'json',
    data: JSON.stringify({
      "fedder" : document.getElementById("fedder").value

    })

  })
  .done(function(data, textStatus, jqXHR) {
      console.log("HTTP Request Succeeded fedderfilter: " + jqXHR.status);
      console.log(data); //Return Data
      console.log(page_e2);
      if (jqXHR.status == 200) {
         console.log(fedder);
          var equipcode = data['equipcode']['label'];
          console.log(equipcode);
          $("#equipcode").empty();
          $("#equipstrat").empty();
          var i,y = "";
          for (i in equipcode){
            y += "<option value=\""+equipcode[i][1]+"\">"+equipcode[i][1]+"</option>";
          }
          $('#equipcode').append(y);
          $('#equipstrat').append(y);

          $("#equipend").empty();
          var i,x = "";
          for (i in equipcode){
            x += "<option value=\""+equipcode[i][1]+"\">"+equipcode[i][1]+"</option>";
          } x += "<option value=\"end\">End</option>";
          $("#equipend").append(x);


      };
    })

    return false;

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
      "peacode" : document.getElementById("peacode").value,
      "fedder" : document.forms["form_e2"]["fedder"].value,
      "equipcode" : document.forms["form_e2"]["equipcode"].value,
      "fedderwork" : document.forms["form_e2"]["fedderwork"].value,
      "equipstrat": document.forms["form_e2"]["equipstrat"].value,
      "equipend": document.forms["form_e2"]["equipend"].value,
      "relay": document.forms["form_e2"]["relay"].value,
      "page": "e2",
      "trip": document.getElementById("trip").value

      // "lat": ,
      // "lon": ,

    })

  })
  .done(function(data, textStatus, jqXHR) {
      console.log("HTTP Request Succeeded: " + jqXHR.status);
      console.log(data); //Return Data
      if (jqXHR.status == 200) {

       window.location.replace("https://som501103.github.io/tech-step3.html?id="+id)

      };
    })


    return false;

}
