console.log(window.location.search);
var urlParams = new URLSearchParams(window.location.search);
console.log(urlParams.get('id'));
var id = urlParams.get('id')
console.log(id);
// var idd=3
// var settings = {
//   "url": "https://safe-springs-29853.herokuapp.com/api/lineevent/3",
//   "method": "GET",
//   "timeout": 0,
//   "headers": {
//     "Content-Type": "application/json",
//     "Authorization": "token bc115d0ce7fa5b651a098d91a6cc00fc314d90ed"
//   },
// };
// $.ajax(settings).done(function (response) {
//   console.log(response);
// });

jQuery.ajax({
  // url: "https://safe-springs-29853.herokuapp.com/api/lineevent/"+id,
  // url: "https://rc2backend.herokuapp.com/api/getdatae1/",
  // url: "https://hookb.in/3OynwLEapdhKeKj2MjmJ",
  // url: "https://e89704f8.ngrok.io/api/getdatae1/",
  url:"http://127.0.0.1:8006/api/lineevent/28",
  type: "GET",
  headers: {
    "Content-Type": "application/json",
    "Authorization":"token ce50e82a4d3293dbb7d24970232877603282e197",
    // "Authorization":"token 017968a39bf66a337b37313883190956b8c6db26"
  },
  // dataType: 'json',
  // data: JSON.stringify({
  //   "id" : id

  })

// })

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



function validateForm1(){
  var form = new FormData();
  var file1 = $("#file-input1")[0].files[0];
  var fileName1 = file1.name;
  var fileSize1 = file1.size;
  alert("Uploading: "+fileName1+" @ "+fileSize1+"bytes");
  var file2 = $("#file-input2")[0].files[0];
  var fileName2 = file2.name;
  var fileSize2 = file2.size;
  alert("Uploading: "+fileName2+" @ "+fileSize2+"bytes");
  var file3 = $("#file-input3")[0].files[0];
  var fileName3 = file3.name;
  var fileSize3 = file3.size;
  alert("Uploading: "+fileName3+" @ "+fileSize3+"bytes");

form.append("image1", $("#file-input1")[0].files[0], fileName1);
form.append("image2", $("#file-input2")[0].files[0], fileName2);
form.append("image3", $("#file-input3")[0].files[0], fileName3);
form.append("created_by", "486808");
form.append("timerestore", "12:00:00");
form.append("course", "PEA");
form.append("equipcode", "LBB05B-10");
form.append("peacode", "LBB");
form.append("fedder", "LBB05");
form.append("fedderwork", "TL");
form.append("relay", "50");
form.append("equipstrat", "LBB05B-01");
form.append("equipend", "end");

var settings = {
  "url": "http://127.0.0.1:8006/api/lineevent/28",
  "method": "PUT",
  "timeout": 0,
  "headers": {
    "Content-Type": "application/json",
    "Authorization": "token ce50e82a4d3293dbb7d24970232877603282e197"
  },
  "processData": false,
  "mimeType": "multipart/form-data",
  "contentType": false,
  "data": form
};

$.ajax(settings).done(function (response) {
  console.log(response);
});

  // let myForm = document.getElementById('form_e1');
  // let formData = new FormData(myForm);
  // $('form')
  // .submit(function(e) {
  //       var formData = new FormData();
  //       // console.log(formData.get())
  //       var file = $("#file-input1")[0].files[0];
  //       var fileName = file.name;
  //       var fileSize = file.size;
  //       alert("Uploading: "+fileName+" @ "+fileSize+"bytes");
  //       formData.append('image1',$("#file-input1")[0].files[0],$("#file-input1")[0].files[0].name);
  //       formData.append('image2',$("#file-input2")[0].files[0],$("#file-input2")[0].files[0].name);
  //       formData.append('image3',$("#file-input3")[0].files[0],$("#file-input3")[0].files[0].name);
  //       formData.append("course", "PEA");
  //       formData.append("created_by", "486808");
  //       formData.append("equipcode", "LBB05-01");
  //       formData.append("peacode", "LBB");
  //       formData.append("fedder", "LBB05");
  //       formData.append("fedderwork", "TL");
  //       formData.append("relay", "50");
  //       formData.append("equipstrat", "LBB05B-01");
  //       formData.append("equipend", "end");
  //       console.log(formData.values)
  //       $.ajax({
  //         url: "http://127.0.0.1:8006/api/lineevent/28",
  //         type: "PUT",
  //         data: formData,
  //         headers: {
  //           "Content-Type": "application/json",
  //           "Authorization":"token ce50e82a4d3293dbb7d24970232877603282e197",
  //         },
  //         cache: false,
  //         mimeType: "multipart/form-data",
  //         contentType: false,
  //         processData: false,
  //         success: function() { alert('it works') },
  //     });
  //     e.preventDefault();
  //   });

  //   $.ajax({
  //     url: "http://127.0.0.1:8006/api/lineevent/28",
  //     type: "PUT",
  //     data: formData,
  //     headers: {
  //       "Content-Type": "application/json",
  //       "Authorization":"token ce50e82a4d3293dbb7d24970232877603282e197",
  //     },
  //     cache: false,
  //     mimeType: "multipart/form-data",
  //     contentType: false,
  //     processData: false,
  //     success: function() { alert('it works') },
  // });

}





function validateForm(){
  jQuery.ajax({
    // url: "https://e89704f8.ngrok.io/api/getupdate/",
    // url: "http://127.0.0.1:8000/api/getupdate/",
    // url: "https://rc2backend.herokuapp.com/api/getupdate/",
    // url: "https://safe-springs-29853.herokuapp.com/api/lineevent/"+id,
    url: "http://127.0.0.1:8006/api/lineevent/28",
    // type: "POST",
    type:"PUT",
    headers: {
      "Content-Type": "application/json",
      "Authorization":"token ce50e82a4d3293dbb7d24970232877603282e197",
    },
    dataType: 'json',
    data: JSON.stringify({
      "datehappen" : document.forms["form_e1"]["datehappen"].value,
      "timehappen" : document.forms["form_e1"]["timehappen"].value,
      "daterestore" : document.forms["form_e1"]["daterestore"].value,
      "timerestore" : document.forms["form_e1"]["timerestore"].value,
      // "id" : id,
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

       alert("บันทึกข้อมูลแล้ว") 
       window.location.replace("https://som501103.github.io/tech-step2.html?id="+id)

      };
    })


    return false;

}
